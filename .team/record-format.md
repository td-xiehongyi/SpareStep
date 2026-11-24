# 项目记录格式

初始化仅建立任务索引、五个对话入口和五份简短角色首页；任务启动时创建任务记录。JSON 块用于只读校验，详细说明放在块外。字段中的示例值需替换为实际值。路径相对项目根目录，证据保存为本地文件。每份记录只有一个 JSON 块。

## .team/tasks.md

主对话维护。每个任务对应一个负责人，跨角色工作拆成关联任务。初始化无任务时使用空 tasks 数组。

```json
{"tasks":[{"id":"T001","owner":"dev","goal":"实现用户确认的功能","dependencies":[],"plan_state":"ready","acceptance":["可执行的验收条件"],"must_read":["AGENTS.md"],"evidence":[]}]}
```

plan_state 取 planned、ready、accepted、cancelled。ready 表示依赖就绪；accepted 要有证据。角色完成和项目验收分别记录。

## .team/threads.md

主对话维护。roles 必须包含 main、product、dev、qa、release。下面仅展示一个角色对象，初始化须补齐五个角色。创建未完成时 current 为空、phase 为 creating。

```json
{"roles":[{"role":"dev","current":"正式对话ID","host":"实际hostId","phase":"active","candidate":null,"previous":null,"release_evidence":null,"recovery_evidence":null}]}
```

phase 取 creating、active、preparing。接续准备时保留 current，candidate 记录新对话。确认安全移交及恢复检查通过后，将旧 current 放入 previous，candidate 转为 current 并清空，phase 改为 active。两份确认记录路径填入 release_evidence、recovery_evidence。确认须写出旧新对话 ID、检查人和实际观察，脚本只能检查记录存在。

## .team/handoff/<角色>.md

角色首页只保存任务链接和跨任务在途操作。初始 tasks 为空。任务完成后保留链接供验收和接续核对。

```json
{"role":"dev","tasks":[{"id":"T001","record":".team/work/T001.md"}],"in_flight":[]}
```

## .team/work/<任务ID>.md

负责人独写，合并授权、进展、交接与交付报告。状态取 waiting、running、done、concerns、needs_context、blocked。运行前填写用户原指令及来源、授权范围、停止点。done、concerns 附证据及对应版本。concerns 不自动成为验收通过。

```json
{"id":"T001","role":"dev","state":"waiting","authorization":null,"stop_at":null,"decisions":[],"files":[],"evidence":[],"version":null,"unverified":[],"next":[]}
```

用户改变方向、完成一批可验证工作、遇到阻塞或接续前更新。保留仍有效的决定及来源。没有进展时无需重写。正文可直接记录命令、环境和结果，并将该文件作为证据；已有日志、截图和产物直接引用。跨角色决定仍单独写入 changes/，任务记录引用决定 ID。

主对话任务索引负责范围、依赖和验收；任务记录负责执行状态、授权和结果；角色首页只链接任务记录。每次只读取当前任务及必要依赖。

## 兼容旧记录

旧版 handoff 内嵌任务及 reports 文件仍可校验。按需将当前任务内容合入 work/<任务ID>.md，再把角色首页对象替换为链接，后续只更新任务记录。旧报告保留为历史证据，已有任务逐个迁移。迁移前后核对授权、有效决定和证据。
用户直接授权的新任务先写 work 记录并链接到本角色首页，再开工。主对话随后汇总到 tasks.md。所有 work 记录保留结构化首页链接，正文链接不能替代登记。
