# SpareStep 原型更名

```json
{
  "id": "PRODUCT-SPARESTEP-NAME",
  "role": "product",
  "state": "done",
  "authorization": {
    "scope": "先回答现有拖动排序能力，然后将 HTML 原型可见名称改为 SpareStep",
    "source_thread": "01a20dcd-06fb-7473-9eb3-1976835fab27",
    "instruction": "就用这个 然后修改界面 以及先回答我拖动排序的功能是否能再原型呈现"
  },
  "stop_at": "完成界面名称替换并验证本地预览",
  "decisions": [
    "product-20261124-sparestep-name"
  ],
  "files": [
    "prototypes/ftm-mobile/src/Prototype.tsx",
    "prototypes/ftm-mobile/index.html",
    "prototypes/ftm-mobile/AGENTS.md"
  ],
  "evidence": [
    ".team/work/PRODUCT-SPARESTEP-NAME.md"
  ],
  "version": "Prototype.tsx SHA256 7EBAB9F9F6DBB4547136439D129971CFA146F3120DAF96F4312016D3B81D26A7, index.html SHA256 9FF8017A4A10846CE7CBE040A7D21AE70FC4AD8E9F14770983FBB057C4B373B7, build index-1rhs8jm0.js",
  "unverified": [
    "本轮未重跑拖动排序或真机回归"
  ],
  "next": [
    "待主对话汇总产品命名决定"
  ]
}
```

依赖：PRODUCT-HTML-PROTOTYPE。先答复拖动排序的实现能力，再修改可见名称。

## 验证

- npm run build 通过，包括 28 个受保护运行时文件的完整性检查。
- 本地预览 4175 返回 HTTP 200，HTML 的标签标题已更新。Codex 内置浏览器实测标题 SpareStep · 黑白交互原型，手机首页标题 SpareStep。桌面说明的名称在源文件中核对。
- 答疑依据为原型现有九点拖动实现及既有 design-qa-report.md 的事项跨分类实测记录。本轮仅更新名称，没有重新执行拖动排序。
