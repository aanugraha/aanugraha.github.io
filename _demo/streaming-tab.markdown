---
layout: page
title: Runtime latency control for streaming guitar tablature transcription through constant-Q buffer truncation
description: 'A. A. Nugraha, N. Iino, K. Yoshii, and M. Hamanaka, "Runtime latency control for streaming guitar tablature transcription through constant-Q buffer truncation," APSIPA Transactions on Signal and Information Processing, under review.'
img: assets/img/demo/featured_streaming-tab.png
importance: -10
category: work
---

### Overview

Our system transcribes live guitar audio into tablature, the string and fret of each note, as the guitarist plays.
Its latency comes mostly from the constant-Q analysis buffer that the lowest notes need.
We truncate this buffer at runtime, so one trained model runs with buffers from 216 ms down to 16 ms without retraining.

---

### Reference

A. A. Nugraha, N. Iino, K. Yoshii, and M. Hamanaka, "Runtime latency control for streaming guitar tablature transcription through constant-Q buffer truncation," APSIPA Transactions on Signal and Information Processing, under review.

---

### Supplementary Video

<div style="position: relative; width: 100%; padding-top: 56.25%;">
  <iframe src="https://www.youtube-nocookie.com/embed/jc69jW4O-rA"
          title="Runtime latency control for streaming guitar tablature transcription (supplementary video)"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>

<div style="height:16px;font-size:16px;">&nbsp;</div>

The video plays the same performances through the live system twice:
- with the full 216 ms buffer (top band);
- with the 16 ms buffer (bottom band).

Both bands use the same model file, trained with the 16,384-sample window, on the same laptop GPU. Only the buffer setting differs. It was chosen at start-up, without retraining.

**How to read it.**
- Time runs from right to left, and the green line on the right is now.
- An outlined ring is a reference note, drawn when it sounds.
- A filled marker is the model's prediction, drawn when the model outputs it.
- The line between them is that note's delay.
- Colors mark the result:
  - green, right string and fret;
  - amber, right pitch on another string;
  - red, wrong or missed.

| Time | Part |
|---|---|
| 0:15 | GuitarSet test clip `04_BN3-119-G_comp` (bossa nova comping), 1x, then 0.25x from 0:41 |
| 0:53 | GuitarSet test clip `05_Funk3-112-C#_solo` (funk solo), 1x, then 0.25x from 1:13 |
| 1:25 | Romanza on an unseen Yamaha SILENT Guitar, recorded with GoPro microphones (no reference notes; the delay also includes the laptop's playback and capture) |
| 1:56 | Estimated pluck-to-display latency budgets |

The two GuitarSet clips come from the held-out MT3 test split.
The excerpts were chosen for a clear picture.
The paper reports accuracy on all 120 test clips at every buffer.
