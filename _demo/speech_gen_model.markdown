---
layout: page
title: Complex-Valued Speech Generative Model
description: 'A. A. Nugraha, K. Sekiguchi, and K. Yoshii, "A deep generative model of speech complex spectrograms," in Proc. IEEE Int. Conf. Acoust., Speech, Signal Process., Brighton, UK, 2019, pp. 905--909.'
img: /demo/speech_gen_model/featured.png
importance: -1
category: work
redirect_from:
  - /demo/icassp19
---

### Abstract

This paper proposes an approach to the joint modeling of the short-time Fourier transform magnitude and phase spectrograms with a deep generative model. We assume that the magnitude follows a Gaussian distribution and the phase follows a von Mises distribution. To improve the consistency of the phase values in the time-frequency domain, we also apply the von Mises distribution to the phase derivatives, i.e., the group delay and the instantaneous frequency. Based on these assumptions, we explore and compare several combinations of loss functions for training our models.  Built upon the variational autoencoder framework, our model consists of three convolutional neural networks acting as an encoder, a magnitude decoder, and a phase decoder. In addition to the latent variables, we propose to also condition the phase estimation on the estimated magnitude. Evaluated for a time-domain speech reconstruction task, our models could generate speech with a high perceptual quality and a high intelligibility.

![](./abstract.png){:width="100%"}

---

### Reference

A. A. Nugraha, K. Sekiguchi, and K. Yoshii, "A deep generative model of speech complex spectrograms," in _Proc. IEEE Int. Conf. Acoust., Speech, Signal Process._, Brighton, UK, 2019, pp. 905--909, doi: [10.1109/ICASSP.2019.8682797](https://doi.org/10.1109/ICASSP.2019.8682797).

---

<h3 id="audio-samples">Audio Samples</h3>

<div style="height:8px;font-size:8px;">&nbsp;</div>

#### Notes

<div style="height:8px;font-size:8px;">&nbsp;</div>

* All magnitude values are estimated by the different models.
* For the model <span style="color:red">(M)</span>, the phase values are randomly sampled from a uniform distribution.
* For the model <span style="color:blue">(J\*)</span>, the phase values are estimated by the model.
* The Griffin-Lim algorithm (GLA) is done for 100 iterations.

<div style="height:8px;font-size:8px;">&nbsp;</div>

#### Utterance ID: F05_440C020I_PED

<div style="height:8px;font-size:8px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="10%" />
    <col width="45%" />
    <col width="45%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Model**</th>
    <th>**Without GLA**</th>
    <th>**With GLA**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span" style="color:red">(M)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expM_F05_440C020I_PED_estMag_rdmPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expM_F05_440C020I_PED_estMag_rdmPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J1)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ1_F05_440C020I_PED_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ1_F05_440C020I_PED_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J2)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ2_F05_440C020I_PED_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ2_F05_440C020I_PED_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J3)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ3_F05_440C020I_PED_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ3_F05_440C020I_PED_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J4)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ4_F05_440C020I_PED_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ4_F05_440C020I_PED_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J5)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ5_F05_440C020I_PED_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ5_F05_440C020I_PED_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J6)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ6_F05_440C020I_PED_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ6_F05_440C020I_PED_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J7)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ7_F05_440C020I_PED_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ7_F05_440C020I_PED_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:green">True</td>
        <td markdown="span" colspan="2" style="text-align:center"><audio class="media" src="./audio/F05_440C020I_PED.S.CH5.ogg" style="width: 95%" controls> </audio></td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

#### Utterance ID: M05_443C020S_BUS

<div style="height:8px;font-size:8px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="10%" />
    <col width="45%" />
    <col width="45%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Model**</th>
    <th>**Without GLA**</th>
    <th>**With GLA**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span" style="color:red">(M)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expM_M05_443C020S_BUS_estMag_rdmPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expM_M05_443C020S_BUS_estMag_rdmPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J1)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ1_M05_443C020S_BUS_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ1_M05_443C020S_BUS_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J2)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ2_M05_443C020S_BUS_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ2_M05_443C020S_BUS_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J3)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ3_M05_443C020S_BUS_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ3_M05_443C020S_BUS_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J4)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ4_M05_443C020S_BUS_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ4_M05_443C020S_BUS_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J5)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ5_M05_443C020S_BUS_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ5_M05_443C020S_BUS_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J6)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ6_M05_443C020S_BUS_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ6_M05_443C020S_BUS_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:blue">(J7)</td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ7_M05_443C020S_BUS_estMag_estPha.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/5HQ2_expJ7_M05_443C020S_BUS_estMag_estPha_GLA1H.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span" style="color:green">True</td>
        <td markdown="span" colspan="2" style="text-align:center"><audio class="media" src="./audio/M05_443C020S_BUS.S.CH5.ogg" style="width: 95%" controls> </audio></td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>
