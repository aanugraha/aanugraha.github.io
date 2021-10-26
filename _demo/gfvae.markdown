---
layout: page
title: GF-VAE
description: 'A. A. Nugraha, K. Sekiguchi, and K. Yoshii, "A flow-based deep latent variable model for speech spectrogram modeling and enhancement," IEEE/ACM Trans. Audio, Speech, Language Process., vol. 28, pp. 1104--1117, 2020.'
img: /demo/gfvae/featured.png
importance: -3
category: work
redirect_from:
  - /demo/taslp20
---

### Abstract

This paper describes a deep latent variable model of speech power spectrograms and its application to semi-supervised speech enhancement with a deep speech prior. Integrating two major deep generative models, a variational autoencoder (VAE) and a normalizing flow (NF), in a mutually-beneficial manner, we can formulate a flexible latent variable model called the NF-VAE that can extract low-dimensional latent representations from high-dimensional observations, akin to the VAE, and does not need to explicitly represent the distribution of the observations, akin to the NF. In this paper, we consider a variant of NF called the generative flow (GF a.k.a. Glow) and formulate a latent variable model called the GF-VAE. We experimentally show that the proposed GF-VAE is better than the standard VAE at capturing fine-structured harmonics of speech spectrograms, especially in a higher frequency range. A similar finding is also obtained when the GF-VAE and the VAE are used to generate speech spectrograms from latent variables randomly sampled from the standard Gaussian distribution. Lastly, when these models are used as speech priors for statistical multichannel speech enhancement, the GF-VAE outperforms the VAE and the GF.

![](./abstract.png){:width="100%"}

---

### Reference

A. A. Nugraha, K. Sekiguchi, and K. Yoshii, "A flow-based deep latent variable model for speech spectrogram modeling and enhancement," _IEEE/ACM Transactions on Audio, Speech, and Language Processing_, vol. 28, pp. 1104--1117, 2020, doi: [10.1109/TASLP.2020.2979603](https://doi.org/10.1109/TASLP.2020.2979603).

---

<h3 id="audio-samples">Audio Samples</h3>

- [Clean Speech Reconstruction](#clean-speech-reconstruction)
- [Random Speech Generation](#random-speech-generation)
- [Multichannel Speech Enhancement](#multichannel-speech-enhancement)

---

<h4 id="clean-speech-reconstruction">Clean Speech Reconstruction</h4>

The following time-domain speech signals are obtained given the power spectrograms reconstructed using the different models and the original clean speech phase spectrograms.

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="12%" />
    <col width="8%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Model**</th>
    <th>**z_dim**</th>
    <th>**M05_445C020A_BUS**</th>
    <th>**M06_443C020K_CAF**</th>
    <th>**F05_442C020T_PED**</th>
    <th>**F06_445C0202_STR**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">*Clean*</td>
        <td markdown="span">--</td>
        <td markdown="span"><audio class="media" src="./audio/rec/clean_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/clean_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/clean_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/clean_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3A440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3A440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3A440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3A440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3K440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3K440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3K440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G3K440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G3B440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G3B440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G3B440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G3B440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G3C440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G3C440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G3C440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G3C440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4A440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4A440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4A440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4A440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4K440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4K440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4K440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G4K440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G4B440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G4B440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G4B440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G4B440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G4C440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G4C440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G4C440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G4C440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5A440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5A440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5A440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5A440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5K440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5K440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5K440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VAE_G5K440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G5B440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G5B440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G5B440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB1_VGL_G5B440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G5C440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G5C440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G5C440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/rec/vUB2_VGL_G5C440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
</tbody>
</table>

<div style="height:8px;font-size:8px;">&nbsp;</div>
[(back to the top of this section)](#audio-samples)

<div style="height:8px;font-size:8px;">&nbsp;</div>

---

<h4 id="random-speech-generation">Random Speech Generation</h4>

The following time-domain speech signals are obtained given the power spectrograms randomly generated using the different models and random phase values sampled from a uniform distribution, which then are improved by the Griffin-Lim method (20 iterations).

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="12%" />
    <col width="7%" />
    <col width="27%" />
    <col width="27%" />
    <col width="27%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Model**</th>
    <th>**z_dim**</th>
    <th>**random seed = 123**</th>
    <th>**random seed = 456**</th>
    <th>**random seed = 789**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G3A440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G3A440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G3A440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G3K440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G3K440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G3K440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G3B440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G3B440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G3B440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G3C440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G3C440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G3C440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G4A440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G4A440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G4A440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G4K440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G4K440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G4K440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G4B440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G4B440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G4B440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G4C440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G4C440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G4C440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G5A440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G5A440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G5A440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G5K440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G5K440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VAE_G5K440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G5B440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G5B440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_VGL_G5B440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G5C440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G5C440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB2_VGL_G5C440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF</td>
        <td markdown="span">--</td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_GLW_G3A440E8_123.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_GLW_G3A440E8_456.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sam/vUB1_GLW_G3A440E8_789.ogg" style="width: 95%" controls> </audio></td>
    </tr>
</tbody>
</table>

<div style="height:8px;font-size:8px;">&nbsp;</div>
[(back to the top of this section)](#audio-samples)

<div style="height:8px;font-size:8px;">&nbsp;</div>

---

<h4 id="multichannel-speech-enhancement">Multichannel Speech Enhancement</h4>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="12%" />
    <col width="8%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Model**</th>
    <th>**z_dim**</th>
    <th>**M05_445C020A_BUS**</th>
    <th>**M06_443C020K_CAF**</th>
    <th>**F05_442C020T_PED**</th>
    <th>**F06_445C0202_STR**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">*Noisy*</td>
        <td markdown="span">--</td>
        <td markdown="span"><audio class="media" src="./audio/sep/noisy_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/noisy_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/noisy_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/noisy_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">*Clean*</td>
        <td markdown="span">--</td>
        <td markdown="span"><audio class="media" src="./audio/sep/clean_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/clean_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/clean_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/clean_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3A440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3A440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3A440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3A440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3K440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3K440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3K440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G3K440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G3B440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G3B440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G3B440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G3B440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">8</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G3C440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G3C440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G3C440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G3C440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4A440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4A440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4A440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4A440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4K440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4K440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4K440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G4K440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G4B440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G4B440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G4B440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G4B440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">16</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G4C440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G4C440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G4C440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G4C440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-2L</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5A440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5A440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5A440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5A440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">VAE-3L</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5K440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5K440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5K440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VAE_G5K440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-1</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G5B440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G5B440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G5B440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_VGL_G5B440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF-VAE-2</td>
        <td markdown="span">32</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G5C440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G5C440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G5C440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB2_VGL_G5C440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
    <tr>
        <td markdown="span">GF</td>
        <td markdown="span">--</td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_GLW_G3A440E8_M05_445C020A_BUS.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_GLW_G3A440E8_M06_443C020K_CAF.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_GLW_G3A440E8_F05_442C020T_PED.ogg" style="width: 95%" controls> </audio></td>
        <td markdown="span"><audio class="media" src="./audio/sep/vUB1_GLW_G3A440E8_F06_445C0202_STR.ogg" style="width: 95%" controls> </audio></td>
    </tr>
</tbody>
</table>

<div style="height:8px;font-size:8px;">&nbsp;</div>
[(back to the top of this section)](#audio-samples)
