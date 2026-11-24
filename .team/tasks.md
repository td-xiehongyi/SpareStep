# FTM 共享任务索引

仅主对话维护。2026-11-24 从五个角色首页汇总直接授权任务；保留原任务 ID、负责人、授权来源与证据。执行状态以 work 记录为准。

```json
{
  "tasks": [
    {
      "id": "PRODUCT-WIREFRAME-V2",
      "owner": "product",
      "goal": "交付文档式八张静态原型及九点菜单、选中块高亮修订，保留 V2/V3/V4 证据。",
      "dependencies": [],
      "plan_state": "ready",
      "acceptance": [
        "交付八张 V2 图和 V3/V4 菜单状态图、交互说明及来源哈希。",
        "保留九点点击菜单与拖动、正文长按完成、左滑二次删除及记录恢复的边界说明。",
        "用户视觉评审及真机手势验证分别记录；静态图不证明实际手势通过。"
      ],
      "must_read": [
        "AGENTS.md",
        ".team/work/PRODUCT-WIREFRAME-V2.md",
        ".team/changes/product-20261124-document-wireframes-v2.md",
        ".team/changes/product-20261124-block-menu-v3.md",
        ".team/changes/product-20261124-menu-focus-v4.md"
      ],
      "evidence": [
        "docs/prototypes/2026-11-24-document-v2/README.md",
        "docs/prototypes/2026-11-24-document-v2/manifest.json",
        "docs/prototypes/2026-11-24-block-menu-v3/README.md",
        "docs/prototypes/2026-11-24-block-menu-v3/manifest.json",
        "docs/prototypes/2026-11-24-selected-menu-v4/README.md",
        "docs/prototypes/2026-11-24-selected-menu-v4/manifest.json"
      ],
      "record": ".team/work/PRODUCT-WIREFRAME-V2.md",
      "decision_sources": [
        "product-20261124-document-wireframes-v2",
        "product-20261124-block-menu-v3",
        "product-20261124-menu-focus-v4"
      ],
      "authorization_source": "01a20c87-5e73-73d1-84db-d9748811c410"
    },
    {
      "id": "PRODUCT-HTML-PROTOTYPE",
      "owner": "product",
      "goal": "交付沿用 V2/V4 黑白风格、手机外形与可操作流程的独立 HTML 演示，保持本机预览。",
      "dependencies": [
        "PRODUCT-WIREFRAME-V2"
      ],
      "plan_state": "ready",
      "acceptance": [
        "浏览器可操作新增、原位编辑、分类、事项移动、长按完成、左滑删除及记录恢复。",
        "保留手机画布和黑白视觉，证据明确对应源码或构建版本。",
        "明确内存演示刷新重置；用户评审、实体手机、长文边界与正式持久化未验收项保持可见。"
      ],
      "must_read": [
        "AGENTS.md",
        ".team/work/PRODUCT-HTML-PROTOTYPE.md",
        ".team/changes/product-20261124-html-prototype.md"
      ],
      "evidence": [
        "prototypes/ftm-mobile/design-qa-report.md"
      ],
      "record": ".team/work/PRODUCT-HTML-PROTOTYPE.md",
      "decision_sources": [
        "product-20261124-html-prototype"
      ],
      "authorization_source": "01a20c87-5e73-73d1-84db-d9748811c410"
    }
  ]
}
```

两个任务在角色记录中均为 done，尚未标为产品验收 accepted。plan_state=ready 仅表示既有任务依赖已就绪，不表示重新开工；HTML 原型以已交付静态原型为输入，正式产品验收另行完成。

迁移基线：升级前 tasks=[]；五个入口不变。角色首页、旧任务或决定正文里的“待主对话登记”是汇总前历史状态，本索引已完成登记，不据此重复执行。

已汇总决定：V2 替代独立新增/编辑/分类页；V3 增加九点点击菜单并保留拖动；V4 突出选中块及菜单关联；HTML 决定授权独立前端演示。各决定的确认范围、默认值和限制以源文件为准；未启动研发、质量、发布的新任务。
