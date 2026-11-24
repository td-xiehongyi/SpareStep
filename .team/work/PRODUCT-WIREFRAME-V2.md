# FTM 文档式原型 V2

```json
{
  "id": "PRODUCT-WIREFRAME-V2",
  "role": "product",
  "state": "done",
  "authorization": {
    "source_thread": "01a20c87-5e73-73d1-84db-d9748811c410",
    "instruction": "PLEASE IMPLEMENT THIS PLAN: FTM 文档式低保真原型修订",
    "scope": "八张静态原型、交互说明、产品角色记录；不含业务代码开发、提交、推送、发布或其他角色开工",
    "revision_instruction": "每一个块后面的九个点，增加点击后出现一些选项（完成/删除/等等）。",
    "menu_focus_instruction": "按照这个方案调整，重新生成一张菜单弹出的原型图，突出当前选中的语句块。"
  },
  "stop_at": "交付选中块高亮与气泡菜单静态图及说明",
  "decisions": [
    "product-20261124-document-wireframes-v2",
    "product-20261124-block-menu-v3",
    "product-20261124-menu-focus-v4"
  ],
  "files": [
    "docs/prototypes/2026-11-24-document-v2/01-home.png",
    "docs/prototypes/2026-11-24-document-v2/02-inline-edit.png",
    "docs/prototypes/2026-11-24-document-v2/03-category-syntax.png",
    "docs/prototypes/2026-11-24-document-v2/04-drag.png",
    "docs/prototypes/2026-11-24-document-v2/05-hold-complete.png",
    "docs/prototypes/2026-11-24-document-v2/06-swipe-delete.png",
    "docs/prototypes/2026-11-24-document-v2/07-settings.png",
    "docs/prototypes/2026-11-24-document-v2/08-records.png",
    "docs/prototypes/2026-11-24-document-v2/README.md",
    "docs/prototypes/2026-11-24-document-v2/prompts.json",
    "docs/prototypes/2026-11-24-document-v2/manifest.json",
    "docs/prototypes/2026-11-24-block-menu-v3/01-block-menu.png",
    "docs/prototypes/2026-11-24-block-menu-v3/README.md",
    "docs/prototypes/2026-11-24-block-menu-v3/prompt.txt",
    "docs/prototypes/2026-11-24-block-menu-v3/manifest.json",
    "docs/prototypes/2026-11-24-selected-menu-v4/01-selected-block-menu.png",
    "docs/prototypes/2026-11-24-selected-menu-v4/README.md",
    "docs/prototypes/2026-11-24-selected-menu-v4/prompt.txt",
    "docs/prototypes/2026-11-24-selected-menu-v4/manifest.json"
  ],
  "evidence": [
    "docs/prototypes/2026-11-24-document-v2/README.md",
    "docs/prototypes/2026-11-24-document-v2/manifest.json",
    "docs/prototypes/2026-11-24-block-menu-v3/README.md",
    "docs/prototypes/2026-11-24-block-menu-v3/manifest.json",
    "docs/prototypes/2026-11-24-selected-menu-v4/README.md",
    "docs/prototypes/2026-11-24-selected-menu-v4/manifest.json"
  ],
  "version": "manifest SHA256 41F0E2D30853A2E01C167F79BC43CD08EADCBB25C61CAC7C97EB09A9E59277FD; block-menu PNG SHA256 36B35FD6835DA8134AEBC1939A55E0147A23E84218AA5BE7CC6D2399A71A41A6; focused-menu PNG SHA256 E7A4AFA4A45A253A1FA19904BD326F78BF5A2535FEDC95AE14342C96E5E2627A",
  "unverified": [
    "用户视觉评审",
    "交互式原型及 iPhone 真机手势",
    "数据保存与备份策略"
  ],
  "next": [
    "等待用户对选中块高亮和菜单位置的评审",
    "主对话后续汇总已确认决定并登记索引",
    "业务开发未获授权"
  ]
}
```

# FTM 文档式低保真原型修订

用户在产品与体验对话明确要求执行本方案，仅交付八张静态低保真原型和交互说明。

- 首页＋记录管理页＋设置面板；移除独立新增、编辑、分类管理页面。
- 分类旁＋在该类末尾插入空白块；正文原位编辑，回车块内换行，完整显示文字并撑高。
- 新空白块输入「# 分类名」后回车创建标题；已有正文中的 # 不自动转换；标题原位改名。
- 事项及分类由独立拖动柄排序，事项支持跨分类。
- 浏览状态长按整块 0.8 秒，进度满后完成并归档；提前松手取消；编辑状态长按操作文字。
- 左滑仅露出删除，点击后才进入回收站。
- 设置中进入归档与回收站；归档恢复为待办，回收站恢复至原分类。
- 八图：首页、块内编辑、创建分类、拖动、长按完成、左滑删除、设置、记录管理。
- 不增加永久删除或自动清空。数据保存、备份、保留期限及真机手势验证仍待确认。

## 交付与核对

八张独立 PNG 已逐张查看并保存，均为 852×1846；每份复制文件与生成源的 SHA-256 一致。交互说明、完整生成提示词、文件来源及哈希在上方证据文件中。未开发应用、未运行真实手势测试；动效仅为静态关键帧。图中虚线说明框不是最终产品控件。

在途操作：无；八次图像生成均已返回，文件复制已完成。未提交、推送或发布。

共享任务索引仍为空，由主对话独写；本记录保存用户在当前产品角色对话的直接授权，待主对话汇总 .team/changes/product-20261124-document-wireframes-v2.md 后登记。角色记录完成不代表用户产品验收通过。

## 九点菜单补充交付
已补充菜单状态图和说明；点击九点显示完成／删除，移动到分类作为既有能力的默认菜单入口。图像源与交付文件哈希一致；静态图已查看，真实点击与拖动冲突未测。在途操作：无。旧八图保留。详见新增 evidence 及 product-20261124-block-menu-v3 决定。

## 菜单选中态 V4
已重绘并核对一张静态图：当前块高亮，背景弱化，菜单下方对齐且尖角指向该块；完成／移动／删除不变。PNG 复制哈希一致。上下空间自适应和真实手势仍未验证。详见 V4 证据与 product-20261124-menu-focus-v4 变更。在途操作：无。
