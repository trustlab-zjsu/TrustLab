# Published-paper news verification

Checked on 2026-10-14. Google Scholar could not be read directly (HTTP 429), so published status was cross-checked with the author ORCID record (0000-0003-4934-5811), publisher DOI metadata, author pages and conference programs. The archive is not represented as an exhaustive Scholar export.

Historical entries use publication years rather than invented acceptance dates. Duplicate preprint / published records are represented once.

| Paper | Verification source |
| --- | --- |
| LMAE4Eth | https://doi.org/10.1109/TIFS.2025.3612149 |
| Mecon | https://doi.org/10.1016/j.eswa.2025.126486 |
| DeFi review | https://doi.org/10.1016/j.eswa.2025.128431 |
| Insider threat | https://doi.org/10.3390/electronics13244885 |
| SwFuzz | https://users.cs.northwestern.edu/~ychen/publication-byYear.html |
| WebAudio / Proteus | https://conf.researchr.org/details/apsec-2024/apsec-2024-technical-track/38/Exploring-the-Depths-of-WebAudio-Advancing-Greybox-Fuzzing-for-Enhanced-Vulnerabilit |
| iQuery | https://eprints.ncl.ac.uk/288735 |
| Smart contract survey | https://www.jos.org.cn/jos/news/view/20251223135225001 |
| IJCAI 2020 | https://www.ijcai.org/proceedings/2020/454 |
| Sequential reentrancy detection | https://doi.org/10.1109/ACCESS.2020.2969429 |
| Digital resource rights | https://doi.org/10.1109/CCIS48116.2019.9073733 |

## Date precision and recent-news marker (2026-10-27)

News dates support a year, year-month, full date, or ISO timestamp with an explicit timezone. `Published`, `Accepted` and `Posted` are retained only as source metadata. The interface displays **date only**, without these prefixes or a clock time/timezone. Timestamp-to-date conversion uses Asia/Shanghai.

The dissertation-selection announcement displays `Oct 20, 2026`. Its source timestamp is taken from the [commit that first added this announcement](https://github.com/trustlab-zjsu/TrustLab/commit/5a4ef03238a4b24560869f9276e0a60cd12b77f7). This is its website posting time, **not an asserted selection or acceptance time**.

Publisher-deposited Crossref `published` / final issue dates provide the following publication-date precision. They are not used as acceptance dates. Existing acceptance-only ReDPJ news displays `2026` until an exact acceptance date is supplied. IR-Fuzz and reentrancy news retain their known years.

| News ID | Display date value | Source / interpretation |
| --- | --- | --- |
| echofuzz | 2026-04-12 | https://doi.org/10.1145/3744916.3773166 — proceedings publication date. The separate online date is not substituted for this date. |
| lmae4eth | 2025-09-19 | [IEEE publication record](https://ieeexplore.ieee.org/document/11173945/) — Date of Publication: 19 September 2025. |
| defi-review | 2025-10 | https://doi.org/10.1016/j.eswa.2025.128431 — final issue month. |
| freewavm | 2025-06-22 | https://doi.org/10.1145/3728877 |
| mecon | 2025-04 | https://doi.org/10.1016/j.eswa.2025.126486 — final issue month. |
| insider-threat | 2024-12-11 | https://doi.org/10.3390/electronics13244885 |
| swfuzz | 2024-12-03 | https://doi.org/10.1109/APSEC65559.2024.00045 |
| webaudio | 2024-12-03 | https://doi.org/10.1109/APSEC65559.2024.00029 |
| tacoma | 2024-09-11 | https://doi.org/10.1145/3650212.3680351 |
| mufuzz | 2024-05-13 | https://doi.org/10.1109/ICDE60146.2024.00158 |
| iquery | 2023-11 | https://doi.org/10.1109/TDSC.2022.3228908 — final issue month. |
| random-number | 2023-07 | https://doi.org/10.1109/TSE.2023.3271417 — final issue month. |
| cross-modality | 2023-04-30 | https://doi.org/10.1145/3543507.3583367 |
| bitcoin-address | 2023-04 | https://doi.org/10.1109/ICDE55515.2023.00137 — proceedings month. |
| graph-expert | 2023-02 | IEEE TKDE 35(2), 1296–1310; final issue February 2023, matching the Publications catalogue. The earlier online-publication year is not substituted. |
| contract-survey | 2022-08 | https://www.jos.org.cn/1000-9825/6375.htm — Journal of Software 33(8), final issue month. |
| ijcai-vulnerability | 2021-08 | https://doi.org/10.24963/ijcai.2021/379 — proceedings month. |
| ijcai-2020 | 2020-07 | https://doi.org/10.24963/ijcai.2020/454 — proceedings month. |
| digital-rights | 2019-12 | https://doi.org/10.1109/CCIS48116.2019.9073733 — proceedings month. |

`New` is shown only for an entry with a confirmed full date or timestamp that is at least zero and less than 720 hours (30 days) old. Date-only entries start at midnight in Hangzhou. Year/month-only and future entries never receive the badge. The client clock refreshes once a minute and on visibility changes, so stale badges disappear without rebuilding the static website. The initial static render omits badges to avoid hydration mismatches.

Run the date-boundary checks with `node --experimental-strip-types --test scripts/news-dates.test.mjs`.

## Peng Qian announcements (2026-11-03)

- `qian-zast-young-talent-2027-2029`: [ScienceNet announcement](https://news.sciencenet.cn/htmlnews/2026/11/574055.shtm), sourced from the Zhejiang Association for Science and Technology, published November 2, 2026. The [public notice image](https://rmtzx.sciencenet.cn/kxwsprint/B334BF3F67E1657B736194BD012BE754.png) is dated November 2 and identifies 钱鹏 / 浙江工商大学 at row 170. The 2027–2029 program is at the proposed-selection publicity stage, with comments invited November 3–9, 2026. The website date is `2026-11-02`; this is not a confirmed final award. The news thumbnail is an original 3:1 SVG summary graphic, explicitly labelled “Proposed selection”; the source notice remains linked from the article.
- `qian-zju-open-project-2026`: [Zhejiang University laboratory announcement](https://bcds.zju.edu.cn/2026/1103/c85572a3222237/page.htm), published November 3, 2026, lists A2606, 多智能体驱动的复杂链上合约交互模拟与风险预测研究, principal investigator 钱鹏, Zhejiang Gongshang University. The English project title on the website is a translation. The user-provided notification image, dated November 3, 2026 and visually inspected at 2048 × 823 pixels, confirms approval, the September 1, 2026–August 31, 2028 project term, and **proposed** funding of RMB 50,000. The public page does not state a funding amount. The website date is `2026-11-03`. The news thumbnail is an original 3:1 SVG conceptual illustration of multi-agent collaboration, contract interactions and risk prediction; it is not an asserted technical architecture or experimental result. The private email screenshot and its contact/administrative details are not published.
