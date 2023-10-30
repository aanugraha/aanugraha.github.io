---
layout: page
title: Adaptive Online Neural Speech Enhancement with Augmented Reality Smart Glasses
description: 'K. Sekiguchi, A. A. Nugraha, Y. Du, Y. Bando, M. Fontaine, and K. Yoshii, "Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning," in Proc. IEEE/RSJ Int. Conf. Intell. Robots Syst., Kyoto, Japan, 2022, pp. 9266-9273.'
img: assets/img/demo/featured_iros22.png
importance: -7
category: work
---

### Abstract

This paper describes the practical response- and performance-aware development of online speech enhancement for an augmented reality (AR) headset that helps a user understand conversations made in real noisy echoic environments (e.g., cocktail party). One may use a state-of-the-art blind source separation method called fast multichannel nonnegative matrix factorization (FastMNMF) that works well in various environments thanks to its unsupervised nature. Its heavy computational cost, however, prevents its application to real-time processing. In contrast, a supervised beamforming method that uses a deep neural network (DNN) for estimating spatial information of speech and noise readily fits real-time processing, but suffers from drastic performance degradation in mismatched conditions. Given such complementary characteristics, we propose a dual-process robust online speech enhancement method based on DNN-based beamforming with FastMNMF-guided adaptation. FastMNMF (back end) is performed in a mini-batch style and the noisy and enhanced speech pairs are used together with the original parallel training data for updating the direction-aware DNN (front end) with backpropagation at a computationally-allowable interval. This method is used with a blind dereverberation method called weighted prediction error (WPE) for transcribing the noisy reverberant speech of a speaker, which can be detected from video or selected by a user's hand gesture or eye gaze, in a streaming manner and spatially showing the transcriptions with an AR technique. Our experiment showed that the word error rate was improved by more than 10 points with the run-time adaptation using only twelve minutes observation.

---

### Reference

K. Sekiguchi, A. A. Nugraha, Y. Du, Y. Bando, M. Fontaine, and K. Yoshii, "Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning," in _Proc. IEEE/RSJ Int. Conf. Intell. Robots Syst._, Kyoto, Japan, 2022, pp. 9266-9273, doi: [10.1109/IROS47612.2022.9981659](https://doi.org/10.1109/IROS47612.2022.9981659).

---

### Demo Video

<div class="embed-responsive embed-responsive-16by9 mt-3">
  <iframe class="embed-responsive-item img-fluid rounded z-depth-1" src="https://www.youtube.com/embed/V3-xeyXmBMs?autoplay=0&origin=https://aanugraha.github.io/"></iframe>
</div>
