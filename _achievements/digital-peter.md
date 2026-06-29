---
title: "Digital Peter — 1st place"
image: "/assets/images/projects/digital-peter.png"
order: 1
year: 2020
links:
  - label: Competition repo
    url: "https://github.com/ai-forever/digital_peter_aij2020"
  - label: AI Journey 2020 track
    url: "https://ods.ai/tracks/aij2020"
  - label: Team solution (OCRV)
    url: "https://github.com/lolpa1n/digital-peter-ocrv"
  - label: HIP@ICDAR 2021 paper
    url: "https://doi.org/10.1145/3476887.3476892"
---

**#1 on the public leaderboard** at [AI Journey 2020](https://ods.ai/tracks/aij2020) (Digital Peter) with team **OCRV**.

## The competition

**Digital Peter** was a track of the international [AIJ Contest 2020](https://ods.ai/tracks/aij2020), organized by Sber as part of the AI Journey conference. The task was prepared jointly with the Saint Petersburg Institute of History (Russian Academy of Sciences), the Federal Archival Agency, and the Russian State Archive of Ancient Acts.

Participants had to build a **line-level handwritten text recognition** system for manuscripts written by **Peter the Great** (mostly 1709–1713). The data combined computer vision and NLP: cropped line images paired with expert transcriptions in outdated Russian orthography, noisy scans, and a strict **CER / WER / string accuracy** trade-off under a 10-minute runtime limit on a Tesla V100.

## Leaderboard

Out of **62 teams**, OCRV finished **first on the public leaderboard**:

![Public leaderboard — team OCRV ranked #1](/assets/images/achievements/digital-peter-leaderboard.png)

| Metric | OCRV (public LB) |
| --- | --- |
| CER | **2.386%** |
| WER | 13.853% |
| String accuracy | 63.215% |
| Inference time | 201 s |

The baseline in the official repo scored ~10.5% CER on the public set — our solution cut character error rate by more than **4×**.

<div class="achievement-prize">
  <p><strong>₽1,000,000 first-place prize.</strong> Digital Peter had a total track prize pool of <strong>₽3.2M</strong> — the largest among the three AI Journey 2020 tracks.</p>
</div>

## Our approach

The main quality gain came from data augmentation, not just the recognizer architecture. Our follow-up work on **StackMix** and **Blot augmentation** was developed around this problem: StackMix mixes fragments of handwritten text lines, while Blot augmentation imitates ink blots, stains, corrections, and other manuscript noise that frequently appears in historical scans.

The submitted [OCRV solution](https://github.com/lolpa1n/digital-peter-ocrv) used these ideas around a compact **ResNet34 + BiLSTM** OCR pipeline:

- **Orientation stage** — a ResNet34 classifier detects vertical/horizontal flips on rotated line crops and corrects them before OCR.
- **StackMix / Blot augmentation** — synthetic line composition and blot-like artifacts made the model robust to the strongest failure modes of Peter-era manuscripts: damaged strokes, corrections, stains, and irregular handwriting.
- **Recognition** — ResNet34 feature extractor → adaptive pooling → 3-layer **BiLSTM** → per-timestep classifier (GELU + linear head), trained on a historical-character vocabulary.
- **Decoding & post-processing** — CTC-style greedy decode plus rule-based cleanup tuned for Peter-era orthography (Latin/Cyrillic confusions, archaic spellings like *piter*, domain-specific replacements).

This pipeline reached **2.531% CER** on the public leaderboard in **32 seconds**. The competition later grew into the **Digital Peter** benchmark dataset and a workshop paper at [HIP@ICDAR 2021](https://doi.org/10.1145/3476887.3476892), and the augmentation ideas were later described in the StackMix / Blot augmentation work.
