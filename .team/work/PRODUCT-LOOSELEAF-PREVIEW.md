# SpareStep Looseleaf 预览

```json
{
  "id": "PRODUCT-LOOSELEAF-PREVIEW",
  "role": "product",
  "state": "done",
  "authorization": {
    "source_thread": "01a20dcd-06fb-7473-9eb3-1976835fab27",
    "scope": "直接复用官方 Looseleaf 组件，展示 SpareStep 独立静态样稿，并实证 HTML 能否离线打开",
    "instruction": "直接复用然后展示以下 如果HTML不可以 请告诉我"
  },
  "stop_at": "交付预览并说明实际复用范围与 HTML 运行条件",
  "decisions": [
    "product-20261125-looseleaf-preview"
  ],
  "files": [
    "prototypes/ftm-mobile/public/sparestep-looseleaf.html"
  ],
  "evidence": [
    ".team/work/PRODUCT-LOOSELEAF-PREVIEW.md",
    "prototypes/ftm-mobile/public/sparestep-looseleaf.html"
  ],
  "version": "静态预览 SHA256 ABF821A611708B5BA4421E1BC6914A831A44BD22016993494FEBC6CB744F23ED，源码采自 Looseleaf 官方组件注册表",
  "unverified": [
    "用户视觉评审"
  ],
  "next": [
    "待用户对照两份静态样稿"
  ]
}
```

依赖 PRODUCT-UI-STATIC-PREVIEW。

## 源码访问与静态 HTML 判断

- [Looseleaf 官方说明](https://github.com/kevintngo/looseleaf#how-it-works) 说明组件源码使用 React 和 Tailwind v4，核心手绘图形是确定性的 TypeScript 计算，可在服务器与浏览器得到相同线条。可将 React 静态渲染结果和编译后的 CSS 打包为普通 HTML，不需要改变成动态预览。
- git ls-remote 获得 4bdb647940e2fefb3cebb394f3bad25c766a27d2，部分元数据请求成功。clone 的 pack 未收到，已结束该次下载。GitHub 源码归档、组件注册表及 GitHub Pages 官方演示多次在 TLS 或连接阶段中断，GitHub 连接器也出现传输错误。没有完整的组件、绘图和主题依赖供渲染。
- 原静态样稿曾 HTTP 200，无直接复用版产物。未改页面、安装依赖或启动新预览。

## 重试与交付

用户追加要求“请你重试一下下载”。整个仓库归档仍连接中断，改从官方组件注册表下载取得 Card、Paper、Tape、Ink、纸面纹理和主题的完整渲染依赖。固定 Git 提交 URL 下载了 utils 和 MIT 许可。第三方源码、一次性编译入口及 npm 构建包位于临时目录 sparestep-looseleaf-retry-6a296c9a。主原型的依赖清单未变。

实际渲染了四个 Looseleaf Card 和独立状态样例 Paper，使用官方手绘路径、纸面纹理和主题样式。应用级适配保留低饱和配色、中文字体和单列/双列布局，转换原版纸面裁切路径为相对尺寸并修正文字对比度。HTML 内包括上游 MIT 许可，交付路径 /sparestep-looseleaf.html。

本机浏览器打开成品并看过桌面截图。393×852 浏览器视口下使用单列，383 像素有效宽度无横向溢出，标题在纸面内，状态区在列表下方。DOM 有 4 张原版 Card、10 个纸面 SVG 和 5 个响应式裁切定义。HTML 实测无脚本、外部样式和资源路径，只含内嵌数据或片段引用。npm run build 和 28 个受保护文件的完整性检查通过，dist 输出与最终源文件哈希一致。

记录以下注册表条目的下载时 SHA256，以区分可变注册表内容。
- card 69A6DD46C49715A68C16CF12775847B887C91CE105D882F0198EDDC5DF24FDD3
- paper E97D8FB8FD75AA485572566258FFE677280ED46CED4A2475CA13F7933750AE8A
- ink FCE0F13AFCFB9DADF77E804BE17A914E06A275664F6346BDF4B7DF4B531D70CD
- ink-paper E02B0E62180B458AAF34537E2E478AD4FADD3BBC0FA219E19A962E816F07CA4C
- ink-grain-textures 1962C75EB605D1440A8CF6FE8160BCBC41EF985BDDBC26FDF90B2C8C920908E4
- ink-paper-textures DFCDC0BDA778998254F958371363D23EF04F82F1C35562B9291B8912908030DE
- tape FAF27E64266901AC4FC4A24B8FE7E3828B4F63BCBBBAA2DD7C6485055896966D
- looseleaf-theme 534FEE1103ADB9BA3AFE9A3A0BB001EF2C66AA5A2471027D643B81DDD9B13B2C
