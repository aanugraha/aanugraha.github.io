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

### Supplementary Videos

Both videos play the same performances through the live system four times, shown as four stacked bands on one time axis: two held-out GuitarSet test clips (`05_Jazz3-137-Eb_comp` and `01_Funk3-112-C#_solo`, each at 1x and then at 0.25x) and Romanza on an unseen Yamaha SILENT Guitar (no reference notes). The laptop GPU is an Intel Core Ultra 7 265H with Arc 140T under Windows 11, plugged in, in the "Best performance" power mode.

#### Video 1: training window, buffer setting and chunk size

<div style="position: relative; width: 100%; padding-top: 56.25%;">
  <iframe src="https://www.youtube-nocookie.com/embed/qTBAzXKa6Ac"
          title="Runtime latency control for streaming guitar tablature transcription (supplementary video 1)"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>

<div style="height:16px;font-size:16px;">&nbsp;</div>

The four bands, top to bottom: the 82.4 Hz model trained with the 16,384-sample window at the 216 ms buffer with 50 ms audio chunks; the model trained with the 11,584-sample window at the 216 ms buffer; the same model at the 16 ms buffer; and the same model at the 16 ms buffer with 25 ms chunks. Buffer setting and chunk size are chosen at start-up, without retraining. Estimated pluck-to-display latency budgets: 311, 261, 161 and 147 ms.

#### Video 2: four models at the 16 ms buffer

<div style="position: relative; width: 100%; padding-top: 56.25%;">
  <iframe src="https://www.youtube-nocookie.com/embed/Sd6qya5grs8"
          title="Runtime latency control for streaming guitar tablature transcription (supplementary video 2)"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>

<div style="height:16px;font-size:16px;">&nbsp;</div>

The four bands, all at the 16 ms buffer with 25 ms chunks: the 82.4 Hz floor with the 16,384-sample training window; the 82.4 Hz floor with the 11,584-sample window; the 110 Hz floor with the 9,184-sample window; and the 146.8 Hz floor with the 6,784-sample window. Estimated budgets: 197, 147, 122 and 97 ms.

Each budget is the calculated audio delay plus the measured median inference time (timed on the laptop GPU with the viewer open) plus an estimated display time. The budgets exclude host audio delays, scheduling delays and queueing.

**How to read the bands.**

- Time runs from right to left, and the green line on the right is now.
- An outlined ring is a reference note, drawn when it sounds.
- A filled marker is the model's prediction, drawn when the model outputs it.
- The line between them is that note's delay.
- Colors mark the result:
  - green, right string and fret;
  - amber, right pitch on another string;
  - red, wrong or missed.

| Time | Part                                                                                |
| ---- | ----------------------------------------------------------------------------------- |
| 0:00 | Introduction                                                                        |
| 0:16 | GuitarSet test clip `05_Jazz3-137-Eb_comp` (jazz comping), 1x, then 0.25x from 0:40 |
| 0:52 | GuitarSet test clip `01_Funk3-112-C#_solo` (funk solo), 1x, then 0.25x from 1:14    |
| 1:26 | Romanza on an unseen Yamaha SILENT Guitar (no reference notes)                      |
| 1:55 | Summary and estimated pluck-to-display latency budgets                              |

The two GuitarSet clips come from the held-out MT3 test split.
The excerpts were chosen for a clear picture.
The paper reports accuracy on all 120 test clips at every buffer.
