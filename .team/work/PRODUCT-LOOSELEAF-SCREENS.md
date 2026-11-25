# SpareStep Looseleaf 全界面样稿

```json
{
  "id": "PRODUCT-LOOSELEAF-SCREENS",
  "role": "product",
  "state": "done",
  "authorization": {
    "instruction": "目前的语句块是这个风格 能不能把所有界面都做成这个风格",
    "scope": "把当前原型的可见页面和状态统一到已展示的 Looseleaf 卡片纸面风格，交付可切换的静态 HTML",
    "source_thread": "01a20dcd-06fb-7473-9eb3-1976835fab27"
  },
  "stop_at": "展示并核对原型已有界面的静态样稿",
  "decisions": [
    "product-20261125-looseleaf-screens"
  ],
  "files": [
    "prototypes/ftm-mobile/public/sparestep-looseleaf.html"
  ],
  "evidence": [
    ".team/work/PRODUCT-LOOSELEAF-SCREENS.md",
    "prototypes/ftm-mobile/public/sparestep-looseleaf.html"
  ],
  "version": "sparestep-looseleaf.html SHA256 7D063C36975F16898F7201280EF28CD7DE4762897EB01EAFA0443750B66828DF",
  "unverified": [
    "用户的视觉评审与真机显示"
  ],
  "next": [
    "等待对各静态界面的视觉反馈"
  ]
}
```

依赖 PRODUCT-LOOSELEAF-PREVIEW 和 PRODUCT-HTML-PROTOTYPE。

## 交付和验证

- 现有 Looseleaf 预览地址 http://127.0.0.1:4175/sparestep-looseleaf.html 已更新。上方链接切换首页、编辑、事项菜单、移动分类、设置、归档、回收站。编辑区有分类改名样例，记录页同时列出空态样例。首页展示收起、长按完成、左滑露出删除、归档确认、拖动落点的静态情况。
- 继续直接复用 Looseleaf Card 和 Paper，以及之前经验证的低饱和色和响应式手绘边缘。导出有 9 个 Card、16 张纸面和 32 个纸面 SVG 层。交付为单文件，7 个页面片段均有可达链接，无运行时脚本或外部样式路径。
- 内置浏览器逐个点击并核对 7 个页面各自单独显示，在 393×852 视口逐屏核到无横向溢出。查看事项菜单截图，完成后将标签留在首页。npm run build 通过，28 个受保护文件完整，构建副本与原 HTML 哈希相同。
- 此为样式评审稿。样例数据固定，菜单和导航链接按题示切换样稿。用户视觉评审待反馈。
