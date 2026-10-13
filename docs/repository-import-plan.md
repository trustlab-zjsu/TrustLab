# Independent research repositories

The following public code repositories have been downloaded and checked against their current default-branch heads. Import them as independent repositories, not GitHub forks. Keep original authorship, README citations, copyright notices and all existing licenses. Do not introduce a replacement license.

| Source | Proposed destination | Downloaded revision |
| --- | --- | --- |
| theshi-1128/ReDPJ | trustlab-zjsu/ReDPJ | 3c3f93658bac8e99595c45fffc7fa8df5c3ed2ac |
| fuzzersc/LARA | trustlab-zjsu/LARA-Research | ebb7d727ef7c1b236f48f89777f0404db6ff57da |
| Messi-Q/FreeWavm | trustlab-zjsu/FreeWavm | 9ca71df9e3504868021648eab7a7b02c10b76359 |
| Messi-Q/MuFuzz | trustlab-zjsu/MuFuzz | 4451e539318e0dfc71a5d298793a275517f84b73 |
| Messi-Q/IR-Fuzz | trustlab-zjsu/IR-Fuzz | caf8126d05bb354dfdba8495679642b8f53bea65 |
| Messi-Q/RNVulDet | trustlab-zjsu/RNVulDet | e4815c8885a5a1a078717be28e86de4d901df6b8 |
| Messi-Q/Cross-Modality-Bug-Detection | trustlab-zjsu/Cross-Modality-Bug-Detection | 0dd6a7f331834befa3e5c7816aff95517c3630ae |
| Messi-Q/GPSCVulDetector | trustlab-zjsu/GPSCVulDetector | 2404d2eafddb4727f368ca04e01f7a1d4b424af2 |
| Messi-Q/AMEVulDetector | trustlab-zjsu/AMEVulDetector | f68cd4e0fd98b7fbacb775373fc0ca77e7df5fa9 |

An existing `trustlab-zjsu/LARA` repository is a fork. The proposed `LARA-Research` name avoids overwriting or deleting it.

MuFuzz and IR-Fuzz contain a `fuzz` executable stored through Git LFS. The downloaded copies include the resolved executable. A repository import must preserve the LFS pointer and also upload the corresponding LFS object; merely copying the pointer does not transfer the executable.

The selected-publication code mappings are verified from author repositories. No matching repository for Tacoma, EchoFuzz or Bitcoin Address Behavior Analysis was found in Messi-Q's account, so they are not included in this import list.

Until independent imports are complete and verified with `fork: false`, the website links to the existing source repositories. Replace links with organization URLs only after confirming the imported code and LFS assets are available.
