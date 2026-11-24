# FTM 当前角色入口

项目：D:\MyProject\FTM；projectId：be9e7cce-ea4e-4f82-8bca-ea536d4f4783；host：local；环境：local。
```json
{
  "roles": [
    {
      "role": "main",
      "current": "01a20c85-b771-7051-938d-24126b84d890",
      "host": "local",
      "phase": "active",
      "candidate": null,
      "previous": null,
      "release_evidence": null,
      "recovery_evidence": null
    },
    {
      "role": "product",
      "current": "01a20dcd-06fb-7473-9eb3-1976835fab27",
      "host": "local",
      "phase": "active",
      "candidate": null,
      "previous": "01a20c87-5e73-73d1-84db-d9748811c410",
      "release_evidence": ".team/recovery/product-20261124-release.md",
      "recovery_evidence": ".team/recovery/product-20261124-recovery.md"
    },
    {
      "role": "dev",
      "current": "01a20c87-6a06-7ee1-bc52-5c9db76f0bae",
      "host": "local",
      "phase": "active",
      "candidate": null,
      "previous": null,
      "release_evidence": null,
      "recovery_evidence": null
    },
    {
      "role": "qa",
      "current": "01a20c87-7925-7d30-bfcf-811df6b37018",
      "host": "local",
      "phase": "active",
      "candidate": null,
      "previous": null,
      "release_evidence": null,
      "recovery_evidence": null
    },
    {
      "role": "release",
      "current": "01a20c87-86b5-7d10-b765-dda7bd153b85",
      "host": "local",
      "phase": "active",
      "candidate": null,
      "previous": null,
      "release_evidence": null,
      "recovery_evidence": null
    }
  ]
}
```

| 角色 | 当前对话 |
| --- | --- |
| 主对话 | [FTM｜更新协作规则与任务登记](codex://threads/01a20c85-b771-7051-938d-24126b84d890) |
| 产品与体验 | [FTM｜产品与体验](codex://threads/01a20dcd-06fb-7473-9eb3-1976835fab27) |
| 架构与研发 | [FTM｜架构与研发](codex://threads/01a20c87-6a06-7ee1-bc52-5c9db76f0bae) |
| 质量验证 | [FTM｜质量验证](codex://threads/01a20c87-7925-7d30-bfcf-811df6b37018) |
| 集成与发布 | [FTM｜集成与发布](codex://threads/01a20c87-86b5-7d10-b765-dda7bd153b85) |

## 初始化历史核验

2026-11-24：四次 create_thread 均返回正式 threadId 与 hostId；list_threads 已核对以上五个入口均属于本项目及绝对路径。phase=active 表示当前有效入口，不表示业务开工。四个角色启动提示只授权只读核对职责并待命；业务任务索引为空。

2026-11-24 最终核验：wait_threads 分别确认 product、dev、qa、release 的初始化轮次均 completed，状态 idle，均回复只读核对后待命、无业务任务及在途操作。check_team.py --require-ready 返回 ok=true、records_valid=true、ready=true，pending_roles=[]。本轮未初始化 Git、安装依赖或创建业务代码。


## 协作配置升级核验（2026-11-24）

沿用以上五个正式 ID 和 local 项目，未创建或切换入口。list_projects / list_threads 核实 projectId 与 cwd；product 当前 idle，dev/qa/release 为 notLoaded（未加载不等于入口缺失）；主对话执行本次更新。

两个产品任务授权已核对来源对话原指令，四份决定已汇总到 tasks.md。保留所有角色首页、任务和决定原文，不用登记撤销或扩大已有授权。预览升级前 HTTP 200，端口 4175 监听 PID 6324，exec session 67032 仍按产品首页保留。

最终检查：check_team.py --require-ready 返回 records_valid=true、entries_ready=true、task_coverage_complete=true、ready=true；pending_index_tasks=[]，unreferenced_work=[]。对升级前后 97 个项目文件做 SHA-256 对比（排除 node_modules 与 .git），仅 AGENTS.md、.team/record-format.md、.team/tasks.md、.team/threads.md 变化，其余 93 个文件一致，无新增或缺失。角色记录、决定、源码、原型图片与已有构建/证据均保留。预览复核 HTTP 200、main 模块存在，4175 仍由同一 PID 6324 监听；未运行构建或业务测试，未操作浏览器页面。



## 产品角色接续（2026-11-24）
用户在旧 product 对话明确要求保存交接、创建同项目新对话、确认接手后更新入口并归档旧对话。本次由旧角色按此窄范围授权只切换 product 入口，其他角色和共享任务索引不变。create_thread/list_threads 已核实新入口 01a20dcd-06fb-7473-9eb3-1976835fab27 属于同 projectId、cwd 与 local；wait_threads 确认恢复轮次 completed、idle，明确回复恢复核对完成、可以接手、待命。旧角色已交出业务写入权，预览 PID 6324 保留并移交。详见 release_evidence 与 recovery_evidence。旧入口不再承接新任务；新角色等待用户指令。
