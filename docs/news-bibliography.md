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

News dates support a year, year-month, full date, or ISO timestamp with an explicit timezone. Labels distinguish `Published`, `Accepted` and `Posted`. Times display in `Asia/Shanghai` (UTC+8); no clock time is invented for a date-only record.

The dissertation-selection announcement uses `Posted · Oct 20, 2026 · 18:17 UTC+8`, taken from the [commit that first added this announcement](https://github.com/trustlab-zjsu/TrustLab/commit/5a4ef03238a4b24560869f9276e0a60cd12b77f7). This is its website posting time, **not an asserted selection or acceptance time**.

Publisher-deposited Crossref `published` / final issue dates provide the following publication-date precision. They are not used as acceptance dates. Existing acceptance-only ReDPJ news remains `Accepted · 2026` until an exact acceptance date is supplied. IR-Fuzz and reentrancy news retain their known years.

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

`New` is shown only for an entry with a confirmed full date or timestamp that is at least zero and less than 168 hours old. Date-only entries start at midnight in Hangzhou. Year/month-only and future entries never receive the badge. The client clock refreshes once a minute and on visibility changes, so stale badges disappear without rebuilding the static website. The initial static render omits badges to avoid hydration mismatches.

Run the date-boundary checks with `node --experimental-strip-types --test scripts/news-dates.test.mjs`.
