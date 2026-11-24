import { useEffect, useRef, useState, type PointerEvent as PE } from "react";
import { createPortal } from "react-dom";
import { DotsNine, Plus, GearSix, Check, Trash, CaretDown, CaretRight, ArrowLeft, ArrowUUpLeft, Archive, X, FolderSimple } from "@phosphor-icons/react";
import { MobileScroll, KeyboardTextarea, KeyboardInput, BottomSheet, useKeyboard, useKeyboardInsets, useMobileDevice, useScreenPortal } from "./mobile";

type Category = { id: string; name: string };
type Item = { id: string; category: string; text: string; status: "active" | "archived" | "trash"; fresh?: boolean };
type Anchor = { id: string; top: number; left: number; width: number; height: number; menuTop: number; above: boolean };
type Drag = { id: string; kind: "item" | "category"; target: string; category: string; after: boolean; y: number };
const initialCategories: Category[] = [{ id:"short",name:"短期" },{ id:"long",name:"长期" },{ id:"notes",name:"随手记" }];
const initialItems: Item[] = [
  {id:"t1",category:"short",status:"active",text:"补充实验截图，完成报告\n把运行结果截图补齐，再检查报告格式。"},
  {id:"t2",category:"short",status:"active",text:"准备软件交互项目考核\n先想三个方向，再整理需要的资料。\n下一步：写清楚每个方向要解决的问题。"},
  {id:"t3",category:"long",status:"active",text:"复习概率论与算法\n每天有空时推进一点。"},
  {id:"t4",category:"notes",status:"active",text:"关于多 Agent 协作流程的想法\n先确认需求，再画原型，最后验证实际体验。"}
];
const uid = () => crypto.randomUUID();
function TextBody({text}:{text:string}) { const [first,...rest]=text.split("\n"); return <><strong>{first || "写下想做的事…"}</strong>{rest.length>0 && <span>{"\n"+rest.join("\n")}</span>}</>; }
function grow(el: HTMLTextAreaElement) { el.style.height="0px";el.style.height=Math.max(54,el.scrollHeight)+"px"; }

export default function Prototype() {
 const [categories,setCategories]=useState(initialCategories);
 const [items,setItems]=useState(initialItems);
 const [collapsed,setCollapsed]=useState<Record<string,boolean>>({});
 const [editing,setEditing]=useState<string|null>(null);
 const [rename,setRename]=useState<string|null>(null);
 const [page,setPage]=useState<"home"|"records">("home");
 const [tab,setTab]=useState<"archived"|"trash">("archived");
 const [settings,setSettings]=useState(false);
 const [moving,setMoving]=useState<string|null>(null);
 const [menu,setMenu]=useState<Anchor|null>(null);
 const [swiped,setSwiped]=useState<string|null>(null);
 const [holding,setHolding]=useState<string|null>(null);
 const [drag,setDrag]=useState<Drag|null>(null);
 const [toast,setToast]=useState("");
 const {screenRef}=useScreenPortal();
 useEffect(()=>{const screen=screenRef.current;if(!screen)return;const keepFrame=()=>{if(screen.scrollTop)screen.scrollTop=0;if(screen.scrollLeft)screen.scrollLeft=0;};screen.addEventListener("scroll",keepFrame);keepFrame();return()=>screen.removeEventListener("scroll",keepFrame);},[screenRef]);
 const root=useRef<HTMLDivElement>(null);
 const keyboard=useKeyboard();
 const {bottomInset}=useKeyboardInsets();
 const {device}=useMobileDevice();
 const gesture=useRef<{id:string;x:number;y:number;timer:number;started:number;mode:"pending"|"swipe"|"scroll"|"done"}|null>(null);
 const dragStart=useRef<{id:string;kind:"item"|"category";x:number;y:number;active:boolean}|null>(null);
 const dragValue=useRef<Drag|null>(null);
 const suppress=useRef(false);
 useEffect(()=>{if(!toast)return;const t=window.setTimeout(()=>setToast(""),2200);return()=>clearTimeout(t);},[toast]);
 useEffect(()=>()=>{if(gesture.current)clearTimeout(gesture.current.timer);},[]);
 useEffect(()=>{if(!menu)return;const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setMenu(null);};window.addEventListener("keydown",close);return()=>window.removeEventListener("keydown",close);},[menu]);
 const finishEdit=()=>{keyboard.hide();setEditing(null);setRename(null);};
 const changeStatus=(id:string,status:Item["status"])=>{finishEdit();setMenu(null);setSwiped(null);setItems(v=>v.map(i=>i.id===id?{...i,status,fresh:false}:i));setToast(status==="archived"?"已完成，移入归档":status==="trash"?"已移入回收站":"已恢复到原分类");};
 const toggleCategory=(category:string)=>{finishEdit();cancelHold();setMenu(null);setSwiped(null);setCollapsed(v=>({...v,[category]:!v[category]}));};
 const add=(category:string)=>{setCollapsed(v=>({...v,[category]:false}));const id=uid();setItems(v=>[...v,{id,category,text:"",status:"active",fresh:true}]);setEditing(id);setSwiped(null);};
 const cancelHold=()=>{if(gesture.current)clearTimeout(gesture.current.timer);setHolding(null);};
 function bodyDown(e:PE<HTMLDivElement>,id:string) {
  if(e.button!==0 || editing || menu)return;
  suppress.current=false;
  const g={id,x:e.clientX,y:e.clientY,timer:0,started:performance.now(),mode:"pending" as "pending"|"swipe"|"scroll"|"done"};
  g.timer=window.setTimeout(()=>{g.mode="done";suppress.current=true;setHolding(null);changeStatus(id,"archived");},800);
  gesture.current=g;setHolding(id);
 }
 function bodyMove(e:PE<HTMLDivElement>) {
  const g=gesture.current;if(!g)return;
  const dx=e.clientX-g.x,dy=e.clientY-g.y;
  if(g.mode==="pending" && Math.hypot(dx,dy)>8) {cancelHold();g.mode=Math.abs(dx)>Math.abs(dy)*1.25?"swipe":"scroll";suppress.current=true;}
  if(g.mode==="swipe"){e.stopPropagation();e.currentTarget.setPointerCapture(e.pointerId);if(dx<-30)setSwiped(g.id);else if(dx>30)setSwiped(null);}
 }
 function bodyUp(){if(gesture.current && performance.now()-gesture.current.started>200)suppress.current=true;cancelHold();gesture.current=null;}
 function openMenu(id:string) {
  finishEdit();setSwiped(null);
  requestAnimationFrame(()=>{
   const card=root.current?.querySelector<HTMLElement>('[data-item="'+id+'"]');
   if(!card||!root.current)return;
   const r=card.getBoundingClientRect(),base=root.current.getBoundingClientRect(),scale=device.geometry.screen.width/base.width;
   const top=(r.top-base.top)*scale,left=(r.left-base.left)*scale,height=r.height*scale,width=r.width*scale;
   const available=device.geometry.screen.height-42,above=top+height+178>available;
   setMenu({id,top,left,height,width,above,menuTop:above?Math.max(64,top-174):top+height+10});
  });
 }
 function startDrag(e:PE<HTMLButtonElement>,id:string,kind:"item"|"category") {
  if(e.button!==0)return;e.stopPropagation();finishEdit();cancelHold();setMenu(null);
  dragStart.current={id,kind,x:e.clientX,y:e.clientY,active:false};suppress.current=false;e.currentTarget.setPointerCapture(e.pointerId);
 }
 function moveDrag(e:PE<HTMLButtonElement>) {
  const s=dragStart.current;if(!s)return;
  if(!s.active&&Math.hypot(e.clientX-s.x,e.clientY-s.y)<8)return;
  s.active=true;suppress.current=true;e.preventDefault();e.stopPropagation();
  const target=document.elementFromPoint(e.clientX,e.clientY);
  const category=target?.closest<HTMLElement>("[data-category]");
  const item=target?.closest<HTMLElement>("[data-item]");
  const r=item?.getBoundingClientRect();
  const d:Drag={id:s.id,kind:s.kind,target:s.kind==="category"?(category?.dataset.category||""):(item?.dataset.item||""),category:category?.dataset.category||"",after:r?e.clientY>r.top+r.height/2:false,y:e.clientY};
  dragValue.current=d;setDrag(d);
  const scroller=root.current?.querySelector<HTMLElement>(".mobile-scroll");
  if(scroller){const b=scroller.getBoundingClientRect();if(e.clientY>b.bottom-55)scroller.scrollTop+=12;else if(e.clientY<b.top+55)scroller.scrollTop-=12;}
 }
 function endDrag(e:PE<HTMLButtonElement>,cancel=false) {
  const s=dragStart.current,d=dragValue.current;
  if(s?.active&&!cancel&&d?.category){
   if(s.kind==="category"){setCategories(v=>{const a=[...v],from=a.findIndex(c=>c.id===s.id),to=a.findIndex(c=>c.id===d.target);if(from<0||to<0)return v;const [c]=a.splice(from,1);a.splice(to,0,c);return a;});}
   else {setItems(v=>{const moved=v.find(i=>i.id===s.id);if(!moved||d.target===s.id)return v;const a=v.filter(i=>i.id!==s.id);const to=a.findIndex(i=>i.id===d.target);a.splice(to<0?a.length:to+(d.after?1:0),0,{...moved,category:d.category});return a;});}
   setToast("顺序已调整");
  }
  if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);
  dragStart.current=null;dragValue.current=null;setDrag(null);
 }
 const grip=(id:string,kind:"item"|"category",label:string)=><button className="icon grip" data-scroll-drag="ignore" aria-label={label} onPointerDown={e=>startDrag(e,id,kind)} onPointerMove={moveDrag} onPointerUp={e=>endDrag(e)} onPointerCancel={e=>endDrag(e,true)} onClick={()=>{if(suppress.current){suppress.current=false;return;}if(kind==="item")openMenu(id);}}><DotsNine size={23}/></button>;
 const selected=items.find(i=>i.id===menu?.id);
 const moveItem=(category:string)=>{setItems(v=>{const i=v.find(i=>i.id===moving);return i?[...v.filter(x=>x.id!==moving),{...i,category}]:v;});setMoving(null);setToast("已移动到分类");};
 return <div ref={root} className="ftm-root" style={{"--ftm-safe-top":device.geometry.safeArea.top+"px"} as React.CSSProperties}>
  <header className="ftm-header">
   {page==="home"?<><div className="heading-row"><h1>SpareStep</h1><button className="icon" aria-label="设置" onClick={()=>{finishEdit();setSettings(true);}}><GearSix size={25}/></button></div><p>想起来就记下，有空时再看看。</p></>:<><div className="heading-row"><button className="icon" aria-label="返回首页" onClick={()=>{finishEdit();setPage("home");}}><ArrowLeft size={24}/></button><h1 className="records-heading">归档与回收站</h1><span className="header-space"/></div><div className="record-tabs" role="tablist">{(["archived","trash"] as const).map(t=><button key={t} role="tab" aria-selected={tab===t} onClick={()=>setTab(t)}>{t==="archived"?"归档":"回收站"} <span>{items.filter(i=>i.status===t).length}</span></button>)}</div></>}
  </header>
  <div className={"ftm-scroll-area "+(page==="records"?"records-area":"")}>
   <MobileScroll><main className="document">
    {page==="home"?categories.map(cat=><section key={cat.id} data-category={cat.id} className={"category "+(drag?.kind==="category"&&drag.target===cat.id?"category-target":"")}>
     <div className="category-heading">
      <button className="icon category-toggle" aria-label={(collapsed[cat.id]?"展开":"收起")+cat.name+"分类"} aria-expanded={!collapsed[cat.id]} aria-controls={"category-items-"+cat.id} onClick={()=>toggleCategory(cat.id)}>{collapsed[cat.id]?<CaretRight size={15} weight="bold"/>:<CaretDown size={15} weight="bold"/>}</button>
      {rename===cat.id?<KeyboardInput autoFocus aria-label="分类名称" value={cat.name} onChange={e=>setCategories(v=>v.map(c=>c.id===cat.id?{...c,name:e.target.value}:c))} onBlur={()=>{setCategories(v=>v.map(c=>c.id===cat.id&&!c.name.trim()?{...c,name:"未命名分类"}:c));setRename(null);keyboard.hide();}} onKeyDown={e=>{if(e.key==="Enter")e.currentTarget.blur();}}/>:<button className="category-title" aria-label={"重命名"+cat.name} onClick={()=>setRename(cat.id)}>{cat.name}</button>}
      <button className="icon add" aria-label={"在"+cat.name+"新增事项"} onClick={()=>add(cat.id)}><Plus size={21}/></button>
      {grip(cat.id,"category","拖动"+cat.name+"分类")}
     </div>
     <div id={"category-items-"+cat.id} className="category-items" hidden={!!collapsed[cat.id]}>
      {items.filter(i=>i.category===cat.id&&i.status==="active").map(item=><div key={item.id} data-item={item.id} className={"item-shell "+(drag?.id===item.id?"drag-source ":"")+(drag?.target===item.id&&drag.id!==item.id?"drop-"+(drag.after?"after":"before"):"")}>
       {swiped===item.id&&<button className="swipe-delete" aria-label="确认删除事项" onClick={()=>changeStatus(item.id,"trash")}><Trash size={21}/><span>删除</span></button>}
       <article className={"task-card "+(editing===item.id?"editing ":"")+(holding===item.id?"holding":"")} style={{transform:swiped===item.id?"translateX(-76px)":undefined}}>
        {holding===item.id&&<div className="hold-fill"/>}
        {editing===item.id?<KeyboardTextarea autoFocus aria-label="事项正文" value={item.text} placeholder="写下想做的事，或输入 # 分类名" data-scroll-drag="ignore"
         onFocus={e=>{grow(e.currentTarget);const el=e.currentTarget;requestAnimationFrame(()=>{const sc=el.closest<HTMLElement>(".mobile-scroll");if(sc){const er=el.getBoundingClientRect(),sr=sc.getBoundingClientRect();if(er.bottom>sr.bottom-50)sc.scrollTop+=(er.bottom-sr.bottom+50);}});}}
         onChange={e=>{setItems(v=>v.map(i=>i.id===item.id?{...i,text:e.target.value}:i));grow(e.currentTarget);}}
         onBlur={()=>{setItems(v=>v.map(i=>i.id===item.id&&i.text.trim()?{...i,fresh:false}:i));setEditing(null);keyboard.hide();}}
         onKeyDown={e=>{if(e.key==="Escape")finishEdit();if(e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing&&item.fresh&&/^#\s+[^\n]+$/.test(item.text)){e.preventDefault();const id=uid();const name=item.text.replace(/^#\s+/,"").trim();if(!name)return;setCategories(v=>{const a=[...v];a.splice(a.findIndex(c=>c.id===cat.id)+1,0,{id,name});return a;});setItems(v=>v.filter(i=>i.id!==item.id));finishEdit();setToast("已创建分类「"+name+"」");}}}
        />:<div className="task-text" role="button" tabIndex={0} aria-label={"编辑事项："+item.text.split("\n")[0]}
         onPointerDown={e=>bodyDown(e,item.id)} onPointerMove={bodyMove} onPointerUp={bodyUp} onPointerCancel={bodyUp} onPointerLeave={cancelHold}
         onContextMenu={e=>e.preventDefault()} onClick={()=>{if(suppress.current){suppress.current=false;return;}if(swiped){setSwiped(null);return;}setEditing(item.id);}}
         onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setEditing(item.id);}}}><TextBody text={item.text}/></div>}
        {grip(item.id,"item","事项菜单："+(item.text.split("\n")[0]||"空白事项"))}
       </article>
      </div>)}

      {drag?.kind==="item"&&drag.category===cat.id&&!drag.target&&<div className="drop-space">松开，移到这里</div>}
     </div>
    </section>):<div className="record-list">
     <p className="record-caption">{tab==="archived"?"完成过的事，都在这里。":"删除的事项可以恢复到原分类。"}</p>
     {items.filter(i=>i.status===tab).map(i=><article key={i.id} className="record-card"><div className="record-category">{categories.find(c=>c.id===i.category)?.name}</div><div className="record-text"><TextBody text={i.text}/></div><button className="restore-button" onClick={()=>changeStatus(i.id,"active")}><ArrowUUpLeft size={18}/>恢复为待办</button></article>)}
     {!items.some(i=>i.status===tab)&&<div className="empty-records">{tab==="archived"?<Archive size={38}/>:<Trash size={38}/>}<h2>{tab==="archived"?"还没有归档事项":"回收站是空的"}</h2><p>{tab==="archived"?"完成一件事后，它会出现在这里。":"删除的事项会保留在这里。"}</p></div>}
    </div>}
   </main></MobileScroll>
  </div>
  {keyboard.visible&&<div className="edit-bar" style={{bottom:bottomInset}}><span>回车换行 · # 分类名创建分类</span><button onPointerDown={e=>e.preventDefault()} onClick={finishEdit}>完成编辑</button></div>}
  {holding&&<div className="hold-hint" style={{bottom:bottomInset+12}}>继续按住以完成 · 松手取消</div>}
  {toast&&!menu&&!holding&&<div className="toast" role="status" style={{bottom:bottomInset+12}}><Check size={17}/>{toast}</div>}
  {drag&&<div className="drag-hint">拖到目标位置后松开</div>}
  {menu&&selected&&<div className="menu-layer">
   <button className="menu-backdrop" aria-label="关闭事项菜单" onClick={()=>setMenu(null)}/>
   <article className="task-card selected-copy" style={{top:menu.top,left:menu.left,width:menu.width,minHeight:menu.height}}><div className="task-text"><TextBody text={selected.text}/></div><button className="icon grip" aria-label="收起事项菜单" onClick={()=>setMenu(null)}><DotsNine size={23}/></button></article>
   <div className={"block-menu "+(menu.above?"above":"below")} role="menu" aria-label="当前事项操作" style={{top:menu.menuTop,right:20}}>
    <button role="menuitem" onClick={()=>changeStatus(selected.id,"archived")}><Check size={20}/>完成并归档</button>
    <button role="menuitem" onClick={()=>{finishEdit();setMoving(selected.id);setMenu(null);}}><FolderSimple size={20}/>移动到分类</button>
    <button role="menuitem" onClick={()=>changeStatus(selected.id,"trash")}><Trash size={20}/>删除</button>
   </div>
  </div>}
  <BottomSheet open={settings} onOpenChange={setSettings} title="设置" description="整理完成和暂时移开的事项" snap={0.4}>
   <button className="sheet-row" onClick={()=>{finishEdit();setSettings(false);setPage("records");}}><Archive size={23}/><span>归档与回收站</span><CaretRight size={20}/></button>
   <button className="sheet-close" onClick={()=>setSettings(false)}>关闭</button>
  </BottomSheet>
  <BottomSheet open={!!moving} onOpenChange={v=>{if(!v)setMoving(null);}} title="移动到分类" description="选择这条事项的新位置" snap={0.6}>
   <div className="move-categories">{categories.map(c=><button key={c.id} className="sheet-row" onClick={()=>moveItem(c.id)}><FolderSimple size={21}/><span>{c.name}</span>{items.find(i=>i.id===moving)?.category===c.id&&<Check size={20}/>}</button>)}</div>
   <button className="sheet-close" onClick={()=>setMoving(null)}>取消</button>
  </BottomSheet>
  {createPortal(<aside className="prototype-notes"><span className="eyebrow">SpareStep · 交互原型</span><h2>留给下一段<br/>空闲时间。</h2><p>黑白文档式清单<br/>iPhone 画布 · 393 × 852</p><ol><li>点分类旁的 ＋，直接开始写</li><li>点正文编辑，回车换行</li><li>点九点菜单，拖九点调整顺序</li><li>按住正文 0.8 秒完成，左滑删除</li></ol><p className="demo-note">演示数据仅保留在当前页面，刷新重置。<br/>电脑使用实体键盘输入；手机手感待真机验证。</p></aside>,document.body)}
 </div>;
}
