---
layout: page
title: NF-IVA
description: 'A. A. Nugraha, K. Sekiguchi, M. Fontaine, Y. Bando, and K. Yoshii, "Flow-Based Independent Vector Analysis for Blind Source Separation," IEEE Signal Process. Lett., vol. 27, pp. 2173-2177, 2020.'
img: assets/img/demo/featured_nfiva.png
importance: -4
category: work
---

### Abstract

This paper describes a time-varying extension of independent vector analysis (IVA) based on the normalizing flow (NF), called NF-IVA, for determined blind source separation of multichannel audio signals. As in IVA, NF-IVA estimates demixing matrices that transform mixture spectra to source spectra in the complex-valued spatial domain such that the likelihood of those matrices for the mixture spectra is maximized under some non-Gaussian source model. While IVA performs a time-invariant bijective linear transformation, NF-IVA performs a series of time-varying bijective linear transformations (flow blocks) adaptively predicted by neural networks. To regularize such transformations, we introduce a soft volume-preserving (VP) constraint. Given mixture spectra, the parameters of NF-IVA are optimized by gradient descent with backpropagation in an unsupervised manner. Experimental results show that NF-IVA successfully performs speech separation in reverberant environments with different numbers of speakers and microphones and that NF-IVA with the VP constraint outperforms NF-IVA without it, standard IVA with iterative projection, and improved IVA with gradient descent.

![](./abstract.png){:width="100%"}

---

### Reference

A. A. Nugraha, K. Sekiguchi, M. Fontaine, Y. Bando, and K. Yoshii, "Flow-Based Independent Vector Analysis for Blind Source Separation," _IEEE Signal Processing Letters_, vol. 27, pp. 2173-2177, 2020, doi: [10.1109/LSP.2020.3039944](https://doi.org/10.1109/LSP.2020.3039944).

---

### Audio Samples

- All methods considered below are for determined blind source separation (BSS), in which source images are estimated given observations (captured by  microphones) irrespective of the actual number of sources. Therefore, as post-processing for the overdetermined cases, we pick estimated source images that have the highest average power.
- For the listening purpose, all audio files are stereo obtained by taking the first two channels from the estimated multichannel source images.
- For simplicity, the number of parameter updates for AuxIVA is 64 and that for the others is 2048, although they might be sub-optimal.

---

<h4 id="2spk_head">2-speaker separation</h4>

- Sample set 1: [`wsj0-2mix -- 2speakers_reverb -- tt -- 22go010c_2.1682_051o0212_-2.1682`](#2spk_ex1)
- Sample set 2: [`wsj0-2mix -- 2speakers_reverb -- tt -- 446o030r_1.7325_420c020z_-1.7325`](#2spk_ex2)

<div style="height:16px;font-size:16px;">&nbsp;</div>

<h5 id="2spk_ex1"><code class="language-plaintext highlighter-rouge">wsj0-2mix -- 2speakers_reverb -- tt -- 22go010c_2.1682_051o0212_-2.1682</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="50%" />
    <col width="50%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Mixture**</th>
    <th>**Sources**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/s1/22go010c_2.1682_051o0212_-2.1682_stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/s2/22go010c_2.1682_051o0212_-2.1682_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Methods**</th>
    <th>**2 microphones**</th>
    <th>**4 microphones**</th>
    <th>**6 microphones**</th>
    <th>**8 microphones**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>**AuxIVA** <br> _- 64 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp2mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp2mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**IVA-BP** <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/22go010c_2.1682_051o0212_-2.1682.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#2spk_head)

<div style="height:16px;font-size:16px;">&nbsp;</div>

<h5 id="2spk_ex2"><code class="language-plaintext highlighter-rouge">wsj0-2mix -- 2speakers_reverb -- tt -- 446o030r_1.7325_420c020z_-1.7325</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="50%" />
    <col width="50%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Mixture**</th>
    <th>**Sources**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/s1/446o030r_1.7325_420c020z_-1.7325_stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/s2/446o030r_1.7325_420c020z_-1.7325_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Methods**</th>
    <th>**2 microphones**</th>
    <th>**4 microphones**</th>
    <th>**6 microphones**</th>
    <th>**8 microphones**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>**AuxIVA** <br> _- 64 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp2mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp2mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n2sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n2sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325_s1_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**IVA-BP** <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp2mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w2sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/2speakers_reverb/wav16k/min_sel1H/tt/mix/446o030r_1.7325_420c020z_-1.7325.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#2spk_head)

<div style="height:16px;font-size:16px;">&nbsp;</div>

---

<h4 id="3spk_head">3-speaker separation</h4>

- Sample set 1: [`wsj0-3mix -- 3speakers_reverb -- tt -- 22go010n_0.046171_444c020e_-0.046171_442o030y_0`](#3spk_ex1)
- Sample set 2: [`wsj0-3mix -- 3speakers_reverb -- tt -- 446o030o_2.0593_445c020s_-2.0593_423c020w_0`](#3spk_ex2)

<div style="height:16px;font-size:16px;">&nbsp;</div>

<h5 id="3spk_ex1"><code class="language-plaintext highlighter-rouge">wsj0-3mix -- 3speakers_reverb -- tt -- 22go010n_0.046171_444c020e_-0.046171_442o030y_0</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="50%" />
    <col width="50%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Mixture**</th>
    <th>**Sources**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/s1/22go010n_0.046171_444c020e_-0.046171_442o030y_0_stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/s2/22go010n_0.046171_444c020e_-0.046171_442o030y_0_stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/s3/22go010n_0.046171_444c020e_-0.046171_442o030y_0_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Methods**</th>
    <th>**3 microphones**</th>
    <th>**4 microphones**</th>
    <th>**6 microphones**</th>
    <th>**8 microphones**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>**AuxIVA** <br> _- 64 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp3mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp3mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp3mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**IVA-BP** <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/22go010n_0.046171_444c020e_-0.046171_442o030y_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#3spk_head)

<div style="height:16px;font-size:16px;">&nbsp;</div>

<h5 id="3spk_ex2"><code class="language-plaintext highlighter-rouge">wsj0-3mix -- 3speakers_reverb -- tt -- 22go010n_0.046171_444c020e_-0.046171_442o030y_0</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="50%" />
    <col width="50%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Mixture**</th>
    <th>**Sources**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/s1/446o030o_2.0593_445c020s_-2.0593_423c020w_0_stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/s2/446o030o_2.0593_445c020s_-2.0593_423c020w_0_stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/corpus/speech_separation/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/s3/446o030o_2.0593_445c020s_-2.0593_423c020w_0_stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
    <th>**Methods**</th>
    <th>**3 microphones**</th>
    <th>**4 microphones**</th>
    <th>**6 microphones**</th>
    <th>**8 microphones**</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>**AuxIVA** <br> _- 64 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp3mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp3mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp3mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp4mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp6mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/n3sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s0_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s1_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/n3sp8mc_auxiva_gauss_check/win2048_hop0512_itr00064/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0_s2_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**IVA-BP** <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_iva_v0_B01_bp_gaussML_uCdW/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (NVP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 1 flow block_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B01ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 2 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B02ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
    <tr>
    <td>**NF-IVA (VP)** <br> _- 4 flow blocks_ <br> _- 2048 param. updates_</td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp3mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp4mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp6mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s0.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s1.itr02048_stereo.ogg" style="width: 95%" controls></audio>
        <audio class="media" src="./audio/tb_logs_w3sp8mc_nfiva_v0_B04ZE2H1_bp_gaussML_uCdWSdS_ctxL00s00M00s00_xW_dxNN_vpWS2/win2048_hop0512_adam_lr5e-01_itr02048/spatialize_wsj0-mix/data/3speakers_reverb/wav16k/min_sel1H/tt/mix/446o030o_2.0593_445c020s_-2.0593_423c020w_0.s2.itr02048_stereo.ogg" style="width: 95%" controls></audio>
    </td>
    </tr>
</tbody>
</table>

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#3spk_head)
