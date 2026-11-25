# SpareStep 首批 UI 组件候选

```json
{
  "id": "PRODUCT-UI-STYLE-REVIEW",
  "role": "product",
  "state": "done",
  "authorization": {
    "instruction": "当前原型草图接受 接下来开始UI界面风格设计 请你参考（gork bot和muse的相关动效）然后参考https://docs.starxops.com/articles/702c2907-62ef-4f68-84f4-024c4c6bc49c 里面提供的一些组件库 把一些列出来给我 供我审核",
    "scope": "参考动效与指定文章，整理 UI 风格候选及适用场景，提交用户审核",
    "source_thread": "01a20dcd-06fb-7473-9eb3-1976835fab27"
  },
  "stop_at": "交付候选清单等审核",
  "decisions": [
    "product-20261124-prototype-review"
  ],
  "files": [],
  "evidence": [
    ".team/work/PRODUCT-UI-STYLE-REVIEW.md"
  ],
  "version": "2026-11-24 候选调研，参考已交付的 SpareStep HTML 草图",
  "unverified": [
    "Muse 暂按 Meta Muse 理解，具体参考片段待用户指认",
    "组件候选与视觉方向待审核，未接入原型"
  ],
  "next": [
    "待用户审核候选与动效强度"
  ]
}
```

依赖：PRODUCT-HTML-PROTOTYPE 与 PRODUCT-SPARESTEP-NAME。

来源：指定的 [Starwork 组件文章](https://docs.starxops.com/articles/702c2907-62ef-4f68-84f4-024c4c6bc49c) 已在内置浏览器打开，候选依据该文和下列公开资料。动效借鉴来自 [Grok Bot 官方设计说明](https://x.ai/news/designing-grok-bot) 和暂按 [Meta Muse 活动演示](https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/) 理解的参考。当前只评估适配性。

- [Radix Colors](https://www.radix-ui.com/colors/custom)：纸感灰阶和单一强调色。
- [Spectrum Accordion](https://ui.spectrumhq.in/docs/accordion)：有内容分类的折叠过渡。
- [Arc UI Hold to Confirm](https://uiarc.dev/components/hold-to-confirm)：长按完成的进度与提前松手回退。
- [Spectrum Swipe to Delete](https://ui.spectrumhq.in/docs/swipe-to-delete)：参考滑动露出操作。SpareStep 仍需点击删除再进入回收站。
- [Notch Toast](https://github.com/Devsethi3/notch-toast)：归档、移动或恢复后的短提示，优先参考悬浮形态。
- [Looseleaf](https://github.com/kevintngo/looseleaf)：纸面和墨线风格备选。

建议先审核配色、折叠、长按和提示的组合。保留草图已确认的空分类、九点菜单、拖动排序与删除流程。
