# SpareStep 原图布局手机样稿

```json
{
  "id": "PRODUCT-LOOSELEAF-PHONE",
  "role": "product",
  "state": "done",
  "authorization": {
    "instruction": "目前太违和了 请你多找一找相关的案例 调整一下",
    "source_thread": "01a20dcd-06fb-7473-9eb3-1976835fab27",
    "scope": "参考多个相关界面案例，改善现有手机静态 HTML 的视觉统一性，保留既定原型布局和手机方框"
  },
  "stop_at": "展示本机视觉修订版和案例依据",
  "decisions": [
    "product-20261125-looseleaf-phone",
    "product-20261125-looseleaf-whole-surface",
    "product-20261125-looseleaf-visual-refinement"
  ],
  "files": [
    "prototypes/ftm-mobile/public/sparestep-looseleaf-phone.html",
    "prototypes/ftm-mobile/design-qa.md"
  ],
  "evidence": [
    "prototypes/ftm-mobile/design-qa.md"
  ],
  "version": "sha256:db7ad52df197716a9a2e9fc2203133d4cd4876bcc086cc3807ad95f4fb873ff3",
  "unverified": [
    "用户对本轮视觉修订的评审"
  ],
  "next": [
    "等待用户视觉评审"
  ]
}
```

依赖 PRODUCT-WIREFRAME-V2、PRODUCT-LOOSELEAF-SCREENS 和 PRODUCT-CATEGORY-TOGGLE。

已在本地 4175 预览核对 V2 八图及 V4 菜单，十个展示状态与两处页面内跳转均已点检。构建通过，记录以最终 HTML 哈希为准。

布局版授权原话：目前版本不通过 请你严格参考当时的原型图 然后生成HTML的细化后的（加入UI风格的版本）；要求有一个方框框住（表示手机） ，手机页面的布局已经确定过了（请你不要随意发挥）

全界面版沿用布局版标记，仅更新纸面样式。已打开新版首页，核对十个框外状态、两个框内入口、窄屏和构建。

全界面版授权原话：请你将整个画面都采用那个风格 而不是只有语句块  然后展示

案例依据与复查结果见 design-qa.md。预览在原有本地服务打开，使用 ?style=quiet URL。
