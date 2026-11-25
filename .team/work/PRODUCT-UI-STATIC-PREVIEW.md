# SpareStep 静态 UI 样稿

```json
{
  "id": "PRODUCT-UI-STATIC-PREVIEW",
  "role": "product",
  "state": "done",
  "authorization": {
    "instruction": "先不需要色彩鲜艳先采取各个给的候选 先做一般html界面（不需要显示动效 静态页面即可）",
    "source_thread": "01a20dcd-06fb-7473-9eb3-1976835fab27",
    "scope": "把前轮六个候选的视觉元素或状态用于 SpareStep 静态 HTML 样稿，以温和色彩区分事项块"
  },
  "stop_at": "交付可直接打开的静态 HTML 并核对浏览器显示",
  "decisions": [
    "product-20261125-static-style"
  ],
  "files": [
    "prototypes/ftm-mobile/public/sparestep-style.html"
  ],
  "evidence": [
    ".team/work/PRODUCT-UI-STATIC-PREVIEW.md",
    "prototypes/ftm-mobile/public/sparestep-style.html"
  ],
  "version": "sparestep-style.html SHA256 10CB029D569768EB715E5FFB960E90E71C39A113260CB2961E92A1D73F820EDF",
  "unverified": [
    "用户视觉评审与真机显示"
  ],
  "next": [
    "等待静态样稿评审",
    "主对话后续汇总此任务和范围决定"
  ]
}
```

依赖 PRODUCT-UI-STYLE-REVIEW、PRODUCT-HTML-PROTOTYPE。

## 交付和验证

- 静态样稿在 http://127.0.0.1:4175/sparestep-style.html。内嵌 HTML/CSS，可直接打开本地文件。四条事项分别使用浅灰绿、米沙、雾蓝、浅灰紫。
- 六个候选的呈现方式。Radix Colors 的颜色层次，Looseleaf 的纸色和细线，Spectrum Accordion 的展开及收起，Arc UI 的长按完成进度，Spectrum Swipe to Delete 的露出删除，Notch Toast 的悬浮归档确认。候选以 HTML/CSS 呈现静态外观，组件库未安装。
- 内置浏览器实测桌面双栏、393×852 视口下单列。扣除滚动条后的 378 像素内容视口无横向溢出，DOM 有四条事项及零脚本。样稿与首页均 HTTP 200，样稿响应不含动画或过渡样式。npm run build 通过且 28 个受保护运行时文件完整，构建样稿与源文件 SHA256 一致。
- 核验时发现旧 4175 不再监听，恢复本地 Vite 后新 session 50803、PID 20984。样稿标签已打开供评审。正式产品验收和真机验证另记。
