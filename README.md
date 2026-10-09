# TrustLab 实验室网站

基于 Next.js、React 和 TypeScript 的英文实验室主页。保留蓝白配色，以简洁标题、细边框内容区和紧凑的学术列表展示研究、成员与成果。

## 页面结构

主导航依次为 Homepage → Supervisor → Members → Research → Publications → News；Contact 为独立的页头入口。

| 页面 | 路径 | 内容 |
|---|---|---|
| Homepage | / | Welcome、News |
| Supervisor | /advisor/ | 导师资料、Biography、Research Interests、Selected Publications |
| Members | /members/ | 博士、硕士、本科成员的照片、年级与研究方向卡片 |
| Research | /research/ | 三列展示大模型安全、可信智能体系统、区块链与智能合约安全 |
| Publications | /publications/ | Conference Papers、Journal Papers、Preprints |
| News | /news/ | 具体的学术动态 |
| Contact | /contact/ | 地址、邮箱、办公室、GitHub |

Contact 的邮箱与办公室已补齐，与 Supervisor 一致：messi.qp711@gmail.com；Room 402-1, Teaching Building 3, Jiaogong Road Campus, Zhejiang Gongshang University。

原有 /people/、/community/、/join/、/projects/ 路径分别展示 Members、News、Contact、Publications，保留旧链接可用。已有 /projects/<slug>/ 研究详情页及 /resources/ 资源页继续可访问，不再作为主导航栏目。

## 修改内容

- app/data.ts：研究方向、论文资料、新闻、导师、成员和联系信息。
- app/site.tsx：页面结构与展示内容。
- app/globals.css：蓝白配色、内容边框、网格和移动端布局。
- public/：照片、网站图标及默认头像。

成员按 Ph.D. Students、Graduate Students、Undergraduate Students 分组；当前为 1 位博士、4 位硕士、5 位本科生，空分组不显示。每位成员填写 name、photo、research、year，可选填 homepage、email；卡片展示照片、姓名、入学年级（例如 2025 Cohort）和研究方向，未知年级显示 XXX。将真实照片放在 public/ 中，例如 public/members/name.jpg，并在 photo 中填写 /members/name.jpg。渲染时自动补充部署路径；每张照片按自身原始比例完整显示，桌面端最大高度 140px，手机端 120px，宽度随原图自适应，不加统一比例的底框或补边；缺失或无法加载的照片使用中性的默认头像。

首页仅展示 Welcome 和 News。Research 在独立页面中以三列并排展示，手机端改为单列。每个方向使用 overview 中的一段介绍，使用 **关键词** 标记加粗内容。研究方向下不显示项目跳转链接。

首页和 News 页的每条新闻左侧均预留图片位置。将图片放在 public/news/ 中，在 news 对应条目填写 image（例如 /news/paper-overview.png）和 imageAlt；图片按完整比例显示，适合论文方法概览图。尚未提供或加载失败时保留空白图片框。

已同步确认的中文姓名和照片：Supervisor 为钱鹏；Ph.D. Students 为林石（2025 级）；Graduate Students 为李昊泽（2025 级）、陈行栋（2026 级）、范明锐（2026 级）；Undergraduate Students 为吴承宇（2024 级）。照片位于 public/members/，保持上传原图。导师已填写 Associate Research Fellow、邮箱、办公室、英文简介和研究兴趣；Biography 按提供的两段英文展示团队、博士导师、NUS 访学和学术荣誉，末尾提供 Google Scholar 链接。supervisorPublications 独立维护 8 篇代表论文，作者中的 Peng Qian 加粗，通讯作者在刊物信息中标注，不影响实验室 Publications 的分类。TKDE 论文使用正式卷期年份 2023（2021 年在线发表）。其余 1 位硕士、4 位本科成员及未提供的可选资料保留字面值 XXX。未知链接不会成为可点击的 URL；导师的教育、经历、荣誉、服务和教学独立栏目在填入确认资料后显示。页面正文保持英文，个人姓名以及 Biography 中提供的中文姓名和期刊名按原文保留。

论文通过 kind 分类：conference、journal、preprint、manuscript。Publications 顶部并排展示 Conference Papers、Journal Papers、Preprints 标签，默认显示会议论文，点击标签切换对应列表。分类链接（例如 /publications/#preprints）会自动选中对应标签；支持左右方向键、Home 和 End 切换。未公开稿件保留在研究详情中，公开预印本与正式接收论文分别标注；没有论文的类别显示 No entries yet.。

## 本地开发

需要 Node.js 22.13 或更高版本。

~~~bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
~~~

打开 http://localhost:3000。

## 构建与验证

~~~bash
pnpm check
pnpm build
pnpm verify
pnpm preview
~~~

静态网站导出至 out/；验证脚本检查页面、内部链接、资源、锚点、路径前缀和未知信息链接。请使用 HTTP 预览，不要直接双击 HTML。

部署在子目录时，构建前设置 NEXT_PUBLIC_BASE_PATH。例如：

~~~bash
NEXT_PUBLIC_BASE_PATH=/TrustLab pnpm build
pnpm verify
pnpm preview
~~~

此时预览地址为 http://localhost:3000/TrustLab/。

## GitHub Pages

.github/workflows/deploy-pages.yml 在 main 分支更新后自动安装依赖、构建、验证和部署。Pages 的发布源应选择 GitHub Actions。

工作流根据仓库名称自动设置部署路径；当前公开主页地址为 https://trustlab-zjsu.github.io/TrustLab/。仓库改名或转移后重新运行工作流即可。

网站使用静态导出，不需要服务器、数据库或第三方 API。保留 trailingSlash、.nojekyll、404.html 和旧路由，使 GitHub Pages 的子页面能直接访问和刷新。构建产物 out/ 不提交。
