# SpareStep 详细静态原型 v1

```json
{
  "id": "PRODUCT-DETAILED-STATIC-V1",
  "role": "product",
  "state": "done",
  "authorization": {
    "instruction": "请你帮我设计一下详细的原型图（目前可以只是静态的 动态效果后续添加）先用当前的风格生成一个版本（要求配色不违和）",
    "source_thread": "c3242f77-8ef2-4281-b0c7-912a0ba27238（Antigravity 对话，非 threads.md 登记入口）",
    "scope": "以当前安静纸感（Looseleaf quiet）风格，新建独立静态 HTML 详细原型，覆盖 V2 八图、V4 菜单及已确认的分类、记录状态；统一低饱和配色"
  },
  "stop_at": "交付静态 HTML 并完成渲染自检；不改现有 Prototype.tsx、已有样稿、受保护运行时，不提交、推送或部署",
  "decisions": [
    "product-20261125-detailed-static-v1"
  ],
  "files": [
    "prototypes/ftm-mobile/public/sparestep-detailed.html"
  ],
  "evidence": [
    ".team/work/PRODUCT-DETAILED-STATIC-V1.md"
  ],
  "version": "sparestep-detailed.html SHA256 FF6293CA65163F034BD9669C54B998C716D094A58F1BC7C3637E3AA766BF80C5（50401 bytes）",
  "unverified": [
    "用户视觉评审",
    "动效与真机触控（后续阶段）"
  ],
  "next": [
    "完成后等待用户视觉评审"
  ]
}
```

依赖 PRODUCT-WIREFRAME-V2、PRODUCT-LOOSELEAF-PHONE、PRODUCT-CATEGORY-TOGGLE。新文件独立于产品对话维护的现有样稿，不覆盖其文件；后续合并维护权由用户决定。

## 交付与自检（2026-11-25）

- 交付单文件 prototypes/ftm-mobile/public/sparestep-detailed.html：内嵌 CSS 与 SVG 图标，0 个脚本、无外部资源，可直接用浏览器打开。共 14 个 393×852 手机画面：首页、块内编辑、创建分类、收起与空分类、拖动排序、长按完成、完成提示、左滑删除、九点菜单（V4）、移动到分类、设置、归档、回收站、空回收站；每张附说明及对应 V2/V4 来源。
- 配色：暖白纸底 + 极低对比纸纹，墨色正文；分类色（鼠尾草/雾蓝/暖沙/灰粉）只用于卡片底、标题色条和标签；确认色为低饱和绿 #5E7A5A，删除为赭红 #B9644E。页面顶部附色板。
- 自检：Chrome headless 在 1420 与 1860 宽度下截图逐屏查看，修正创建分类提示遮挡输入块的问题后复看通过。截图存于 Antigravity 对话 scratch 目录，不放入项目。
- 未改 Prototype.tsx、已有样稿或受保护运行时；未构建、提交、推送或部署。本地 4175 预览检查时无监听（HTTP 连接失败），本轮未重启。
- 状态栏时间为静态样稿固定的 9:41，仅用于本静态评审稿，不适用于交互运行时。
