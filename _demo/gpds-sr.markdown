---
layout: page
title: Sampling-Rate-Agnostic Speech Super-Resolution Based on Gaussian Process Dynamical Systems With Deep Kernel Learning
description: 'A. A. Nugraha, D. Di Carlo, Y. Bando, M. Fontaine, and K. Yoshii, "Sampling-Rate-Agnostic Speech Super-Resolution Based on Gaussian Process Dynamical Systems With Deep Kernel Learning," in Proc. IEEE Int. Conf. Acoust., Speech, Signal Process., Barcelona, Spain, 2026, pp. 15442-15446.'
img: assets/img/demo/featured_gpds-sr.png
importance: -9
category: work
---

### Abstract

This paper describes genuine audio super-resolution (SR) that aims to estimate a continuous signal from a discrete signal in a sampling-rate-agnostic manner based on deep kernel learning (DKL). We assume that the discrete signal is obtained by observing the continuous signal at arbitrary, possibly irregular time points. From a statistical point of view, audio SR can thus be tackled as curve fitting, an inverse problem based on a probabilistic model that represents the generation of a discrete signal from a continuous signal (curve). To deal with speech signals with complicated temporal dynamics, we propose a continuous-time-domain speech SR method that uses a nonlinear state-space model called a Gaussian process dynamical system (GPDS) as a prior on the speech signal. Specifically, we assume the speech signal to follow a GP conditioned by a latent signal following another GP. Given discrete observations, we approximate the latent posterior via variational inference with neural-based DKL and then sample the speech signal on an arbitrarily finer time grid. We empirically confirmed that the proposed method, GPDS-SR, remains robust to missing and irregular input samples and supports prediction on even nonstandard output rates while estimating plausible high-frequency content consistent with the observed context.

![](./abstract.png){:width="100%"}

---

### Reference

A. A. Nugraha, D. Di Carlo, Y. Bando, M. Fontaine, and K. Yoshii, "Sampling-Rate-Agnostic Speech Super-Resolution Based on Gaussian Process Dynamical Systems With Deep Kernel Learning," in Proc. IEEE Int. Conf. Acoust., Speech, Signal Process., Barcelona, Spain, 2026, pp. 15442-15446.

---

### Audio Samples

Utterance: "These take the shape of a long round arch, with its path high above, and its two ends apparently beyond the horizon."

---

<h5>Utterance identifier: <code class="language-plaintext highlighter-rouge">p361_008_mic1</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Target (16 kHz)</strong></th>
        <th><strong>Input (2 kHz)</strong></th>
        <th><strong>Input (4 kHz)</strong></th>
        <th><strong>Input (8 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p361_008_mic1_target.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p361_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p361_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p361_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td></td>
        <td markdown="span">
            <div style="font-size: 0.85em; color: #666; margin-top: 4px;">
                2 kHz WAV playback may fail in some browsers.
                <a href="./audio/2000_16000/2000_16000_s5_008_mic1_input.wav" download>Download raw 2 kHz WAV</a>.
            </div>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Methods</strong></th>
        <th><strong>Estimate (2->16 kHz)</strong></th>
        <th><strong>Estimate (4->16 kHz)</strong></th>
        <th><strong>Estimate (8->16 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><strong>Cubic spline interpolation</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p361_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p361_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p361_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>Polyphase resampling</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p361_008_mic1_polyphase.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p361_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p361_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>NU-Wave2</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p361_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p361_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p361_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>UDM+</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p361_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p361_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p361_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>GPDS-SR</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p361_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p361_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p361_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

---

<h5>Utterance identifier: <code class="language-plaintext highlighter-rouge">p374_008_mic1</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Target (16 kHz)</strong></th>
        <th><strong>Input (2 kHz)</strong></th>
        <th><strong>Input (4 kHz)</strong></th>
        <th><strong>Input (8 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p374_008_mic1_target.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p374_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p374_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p374_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td></td>
        <td markdown="span">
            <div style="font-size: 0.85em; color: #666; margin-top: 4px;">
                2 kHz WAV playback may fail in some browsers.
                <a href="./audio/2000_16000/2000_16000_s5_008_mic1_input.wav" download>Download raw 2 kHz WAV</a>.
            </div>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Methods</strong></th>
        <th><strong>Estimate (2->16 kHz)</strong></th>
        <th><strong>Estimate (4->16 kHz)</strong></th>
        <th><strong>Estimate (8->16 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><strong>Cubic spline interpolation</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p374_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p374_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p374_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>Polyphase resampling</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p374_008_mic1_polyphase.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p374_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p374_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>NU-Wave2</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p374_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p374_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p374_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>UDM+</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p374_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p374_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p374_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>GPDS-SR</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p374_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p374_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p374_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

---

<h5>Utterance identifier: <code class="language-plaintext highlighter-rouge">p376_008_mic1</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Target (16 kHz)</strong></th>
        <th><strong>Input (2 kHz)</strong></th>
        <th><strong>Input (4 kHz)</strong></th>
        <th><strong>Input (8 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p376_008_mic1_target.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p376_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p376_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p376_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td></td>
        <td markdown="span">
            <div style="font-size: 0.85em; color: #666; margin-top: 4px;">
                2 kHz WAV playback may fail in some browsers.
                <a href="./audio/2000_16000/2000_16000_s5_008_mic1_input.wav" download>Download raw 2 kHz WAV</a>.
            </div>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Methods</strong></th>
        <th><strong>Estimate (2->16 kHz)</strong></th>
        <th><strong>Estimate (4->16 kHz)</strong></th>
        <th><strong>Estimate (8->16 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><strong>Cubic spline interpolation</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p376_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p376_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p376_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>Polyphase resampling</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p376_008_mic1_polyphase.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p376_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p376_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>NU-Wave2</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p376_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p376_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p376_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>UDM+</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p376_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p376_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p376_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>GPDS-SR</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_p376_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_p376_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_p376_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

---

<h5>Utterance identifier: <code class="language-plaintext highlighter-rouge">s5_008_mic1</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Target (16 kHz)</strong></th>
        <th><strong>Input (2 kHz)</strong></th>
        <th><strong>Input (4 kHz)</strong></th>
        <th><strong>Input (8 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_s5_008_mic1_target.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_s5_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_s5_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_s5_008_mic1_input.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td></td>
        <td markdown="span">
            <div style="font-size: 0.85em; color: #666; margin-top: 4px;">
                2 kHz WAV playback may fail in some browsers.
                <a href="./audio/2000_16000/2000_16000_s5_008_mic1_input.wav" download>Download raw 2 kHz WAV</a>.
            </div>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
</colgroup>
<thead>
    <tr class="header">
        <th><strong>Methods</strong></th>
        <th><strong>Estimate (2->16 kHz)</strong></th>
        <th><strong>Estimate (4->16 kHz)</strong></th>
        <th><strong>Estimate (8->16 kHz)</strong></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><strong>Cubic spline interpolation</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_s5_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_s5_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_s5_008_mic1_cubicspline.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>Polyphase resampling</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_s5_008_mic1_polyphase.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_s5_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_s5_008_mic1_polyphase.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>NU-Wave2</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_s5_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_s5_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_s5_008_mic1_nuwave2.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>UDM+</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_s5_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_s5_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_s5_008_mic1_udm_stft_mp.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
    <tr>
        <td><strong>GPDS-SR</strong></td>
        <td markdown="span">
            <audio class="media" src="./audio/2000_16000/2000_16000_s5_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/4000_16000/4000_16000_s5_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/8000_16000/8000_16000_s5_008_mic1_gpds-sr.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

---
