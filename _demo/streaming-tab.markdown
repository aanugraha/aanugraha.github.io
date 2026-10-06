---
layout: page
title: Runtime latency control for streaming guitar tablature transcription through constant-Q buffer truncation
description: 'A. A. Nugraha, N. Iino, K. Yoshii, and M. Hamanaka, "Runtime latency control for streaming guitar tablature transcription through constant-Q buffer truncation," APSIPA Transactions on Signal and Information Processing, under review.'
img: assets/img/demo/featured_streaming-tab.png
importance: -10
category: work
---

### What the system does

The system listens to a guitar and writes tablature, the string and fret of each note, while the guitarist plays.
Most of its delay comes from the analysis buffer of its constant-Q front end, which must hold the long filter of the lowest note.
We shorten this buffer at start-up by truncating the filters, so one trained model runs with a 216 ms buffer or a 16 ms buffer without retraining.
A shorter buffer answers sooner but loses some accuracy on the lowest notes.
The paper also studies two other ways to lower the delay, training the model with a shorter analysis window and raising the lowest analysed frequency, and measures the delay from pluck to display on a laptop.

---

### Supplementary videos

Both videos play the same three performances through the live system four times at once, with the four tablature displays stacked on one time axis.
The performances are two clips from the GuitarSet test split (jazz comping and a funk solo, each at normal speed and then at quarter speed) and a performance of Romanza on a Yamaha SILENT Guitar that the model had never heard.
The system runs on a laptop's integrated GPU (Intel Core Ultra 7 265H with Arc 140T, Windows 11, plugged in, power mode “Best performance”).

**How to read a band.** Time runs from right to left, and the green line at the right edge is now.
An outlined ring is a reference note, drawn when it sounds.
A filled marker is the model's prediction, drawn when the model outputs it, so the line between a ring and its marker is that note's delay.
Green means the right string and fret, amber the right pitch on another string, and red a wrong or missed note.
The Romanza performance has no reference notes, so it shows predictions only, and there the marker colours indicate strings, not correctness.

#### Video 1: one model, four latency settings

<div style="position: relative; width: 100%; padding-top: 56.25%;">
  <iframe src="https://www.youtube-nocookie.com/embed/qTBAzXKa6Ac"
          title="Runtime latency control for streaming guitar tablature transcription (supplementary video 1)"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>

<div style="height:16px;font-size:16px;">&nbsp;</div>

The top band is the model of the paper's main experiments. Each band below it changes one setting.

| Band   | Training window | Buffer | Audio chunk | Estimated pluck-to-display delay |
| ------ | --------------- | ------ | ----------- | -------------------------------- |
| top    | 16,384 samples  | 216 ms | 50 ms       | 311 ms                           |
| second | 11,584 samples  | 216 ms | 50 ms       | 261 ms                           |
| third  | 11,584 samples  | 16 ms  | 50 ms       | 161 ms                           |
| bottom | 11,584 samples  | 16 ms  | 25 ms       | 147 ms                           |

<div style="height:16px;font-size:16px;">&nbsp;</div>

The training window is fixed when the model is trained. The buffer and the audio chunk are chosen at start-up.
With the shorter training window, the model's note-level tablature F-measure on the test split was lower by at most 0.018.

#### Video 2: four models at the 16 ms buffer

<div style="position: relative; width: 100%; padding-top: 56.25%;">
  <iframe src="https://www.youtube-nocookie.com/embed/Sd6qya5grs8"
          title="Runtime latency control for streaming guitar tablature transcription (supplementary video 2)"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>

<div style="height:16px;font-size:16px;">&nbsp;</div>

All four bands use the 16 ms buffer and 25 ms audio chunks. Raising the lowest analysed frequency shortens the training window and the delay, but the model then no longer sees the lowest notes directly.

| Band   | Lowest analysed frequency | Training window | Estimated pluck-to-display delay |
| ------ | ------------------------- | --------------- | -------------------------------- |
| top    | 82.4 Hz (low E)           | 16,384 samples  | 197 ms                           |
| second | 82.4 Hz (low E)           | 11,584 samples  | 147 ms                           |
| third  | 110 Hz (A)                | 9,184 samples   | 122 ms                           |
| bottom | 146.8 Hz (D)              | 6,784 samples   | 97 ms                            |

<div style="height:16px;font-size:16px;">&nbsp;</div>

At this buffer, the four models' note-level tablature F-measures on the test split differed by at most 0.02 in each test condition.

#### Notes

- Each estimated delay adds the audio delay calculated from the buffer, the frame alignment and the audio chunk, the median inference time measured on the laptop GPU with the viewer open and disconnected, and a display time estimated in an earlier session. It leaves out the host's audio path, scheduling delays and queueing, so the delays seen in the videos can be somewhat longer.
- The two GuitarSet clips were chosen for a clear picture. The paper reports accuracy on all 120 test clips at every buffer.
- Both videos run 2:06. Chapters: 0:16 jazz comping, 0:40 at quarter speed, 0:52 funk solo, 1:14 at quarter speed, 1:26 Romanza, 1:55 summary.

---

### Reference

A. A. Nugraha, N. Iino, K. Yoshii, and M. Hamanaka, "Runtime latency control for streaming guitar tablature transcription through constant-Q buffer truncation," APSIPA Transactions on Signal and Information Processing, under review.
