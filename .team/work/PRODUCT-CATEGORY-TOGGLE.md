# FTM 空分类与展开收起

```json
{
  "id": "PRODUCT-CATEGORY-TOGGLE",
  "role": "product",
  "state": "done",
  "authorization": {
    "instruction": "当前的html原型 我希望如果分类下没有东西的化 就什么都不显示 不需要这些提示；分类左侧的小三角也要做到可以收起和放开",
    "source_thread": "01a20dcd-06fb-7473-9eb3-1976835fab27",
    "scope": "修改现有 HTML 原型空分类显示及分类展开/收起，验证相关交互并维护产品记录"
  },
  "stop_at": "完成两项原型调整与相关验证后交付；不扩展正式业务、提交、发布或其他角色任务",
  "decisions": [
    "product-20261124-category-toggle"
  ],
  "files": [
    "prototypes/ftm-mobile/src/Prototype.tsx",
    "prototypes/ftm-mobile/src/prototype.css",
    "prototypes/ftm-mobile/AGENTS.md"
  ],
  "evidence": [
    ".team/work/PRODUCT-CATEGORY-TOGGLE.md"
  ],
  "version": "Prototype.tsx SHA256 FEF6D9908561CABEDDC7055F31E12517D49A5C6D567D847E57F272525B24C565; prototype.css SHA256 7419AC8E74F4B67C68ECE74CC5389B99AF919B8F922C9172775D41FD9B8E40C6; build index-Dw3xFITh.js / index-BHbf92Q8.css",
  "unverified": [
    "实体 iPhone/Android 触控；分类拖动与全部既有业务回归本轮未重跑",
    "用户产品验收；正式持久化/备份不在本轮范围"
  ],
  "next": [
    "等待用户体验反馈；新修改按用户指令启动",
    "主对话下次汇总 PRODUCT-CATEGORY-TOGGLE 及对应决定；本角色不改共享索引"
  ]
}
```

依赖：PRODUCT-HTML-PROTOTYPE；基线源码哈希见其任务记录。默认全部展开，点击加号时展开目标分类并编辑新事项。保留现有预览服务，使用独立测试页面验证，不操作用户现有演示数据。

## 实现与验证 — 2026-11-24

- 移除空分类提示按钮及对应 CSS。空分类只保留标题、加号、九点柄与可点击小三角；不改归档/回收站的空态。
- 通过以分类 ID 为键的状态独立折叠；aria-expanded/aria-controls 与图标随状态更新。隐藏事项保留数据；加号自动展开并聚焦新事项。关闭编辑和键盘后再收起，清理当前菜单/左滑状态。
- 子目录 AGENTS.md 追加本轮用户决定与实现默认；只改应用源码和 CSS，未触碰受保护运行时、依赖或锁文件。构建产物随构建更新。

### 构建检查

npm run check:runtime 通过，28 个受保护文件一致。首次构建发现本轮文本替换造成声明拼接错误 TS1128，已修正；最终 npm run build 退出 0，TypeScript、Vite 与 Sites 产物准备完成。最终产物见 version；未发布。UI 核验前后两份源码 SHA256 一致。没有新增镜像实现的自动测试；本轮直接验证用户可见行为。

### 浏览器检查

使用独立 Codex 内置浏览器页面（tab 2）与新加载的内存演示状态：
1. 点击短期小三角，按钮变为“展开短期分类”，该类两条事项从可访问树隐藏；长期/随手记不受影响。
2. 再次点击展开，原两条内容完整恢复。
3. 依次将短期两条事项归档：最后一条移走后该类只剩标题栏，无“还没有事项”或虚线提示框。
4. 收起空短期后点击其加号：自动展开，事项正文获得焦点与模拟键盘；填入“折叠后新增验证”，完成编辑。
5. 用 Enter 收起，再用 Space 展开，新增正文仍在，键盘操作有效。
6. 将测试新增事项归档，收起长期，查看截图：短期为空且无提示，长期箭头朝右且正文隐藏，随手记仍展开显示正文。
7. 本测试页 console error/warn 返回空列表。
截图已在工具结果中查看，未保存为项目文件。页面标为交付保留；测试只改变该页面的临时演示数据，未操作用户原浏览器页面。真机触控与全量回归未执行。

### 在途预览与交接

本轮验证时发现旧 4175 端口已无监听，HTTP 连接拒绝；没有主动关闭旧进程，无法确定旧进程停止原因。按本轮原型实现授权和子目录预览要求恢复同地址服务：npm run dev -- --host 127.0.0.1 --port 4175 --strictPort；新 exec session 73683，实测 PID 13156。预览保持运行：http://127.0.0.1:4175/。旧 session 67032/PID 6324 为历史信息。

共享 tasks.md/threads.md 未修改；新增任务已结构化链接产品首页，待主对话汇总，不影响本轮直接授权的有效性。