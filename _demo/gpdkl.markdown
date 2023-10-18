---
layout: page
title: Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning
description: 'A. A. Nugraha, D. Di Carlo, Y. Bando, M. Fontaine, and K. Yoshii, "Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning," in Proc. IEEE Workshop Appl. Signal Process. Audio Acoust., New Paltz, NY, USA, 2023.'
img: assets/img/demo/featured_gpdkl.png
importance: -7
category: work
---

### Abstract

This paper revisits single-channel audio source separation based on a probabilistic generative model of a mixture signal defined in the continuous time domain. We assume that each source signal follows a non-stationary Gaussian process (GP), i.e., any finite set of sampled points follows a zero-mean multivariate Gaussian distribution whose covariance matrix is governed by a kernel function over time-varying latent variables. The mixture signal composed of such source signals thus follows a GP whose covariance matrix is given by the sum of the source covariance matrices. To estimate the latent variables from the mixture signal, we use a deep neural network with an encoder-separator-decoder architecture (e.g., Conv-TasNet) that separates the latent variables in a pseudo-time-frequency space. The key feature of our method is to feed the latent variables into the kernel function for estimating the source covariance matrices, instead of using the decoder for directly estimating the time-domain source signals. This enables the decomposition of a mixture signal into the source signals with a classical yet powerful Wiener filter that considers the full covariance structure over all samples. The kernel function and the network are trained jointly in the maximum likelihood framework. Comparative experiments using two-speech mixtures under clean, noisy, and noisy-reverberant conditions from the WSJ0-2mix, WHAM!, and WHAMR! benchmark datasets demonstrated that the proposed method performed well and outperformed the baseline method under noisy and noisy-reverberant conditions.

![](./abstract.png){:width="100%"}

---

### Reference

A. A. Nugraha, D. Di Carlo, Y. Bando, M. Fontaine, and K. Yoshii, "Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning," in _Proc. IEEE Workshop Appl. Signal Process. Audio Acoust._, New Paltz, NY, USA, 2023, pp. 1-5, doi: [10.1109/WASPAA58266.2023.10248168](https://doi.org/10.1109/WASPAA58266.2023.10248168).

---

### Audio Samples

**Tasks**: single-channel separations of two speech signals on popular benchmark datasets
- *clean* condition with WSJ0-2mix dataset (Hershey+ 2016),
- *noisy* condition with WHAM! dataset (Wichern+ 2019), and
- *noisy-reverberant* condition with WHAMR! dataset (Maciejewski+ 2020).

"OLA" denotes the overlap-add operation required for separation with overlapping segments.

<!-- 
- For the listening purpose, all audio files are stereo obtained by taking the first two channels from the estimated multichannel source images.
- The order of the separated sources may not be the same as that of the reference sources because we do not apply a source permutation solver.
-->

---

<h4 id="wsj0-2mix">Clean condition: WSJ0-2mix</h4>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_134</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_985</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_2255</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_clean_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_clean_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">:heavy_minus_sign:</td>
    </tr>
</tbody>
</table>

<!--  -->

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#wsj0-2mix)

---

<h4 id="wham">Noisy condition: WHAM!</h4>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_134</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s3.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_985</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s3.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_2255</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s3.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_noisy_noise_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_noisy_noise_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<!--  -->

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#wham)

---

<h4 id="whamr">Noisy-reverberant condition: WHAMR!</h4>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_134</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s3.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_134/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_985</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s3.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_985/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<!--  -->

<h5><code class="language-plaintext highlighter-rouge">ex_2255</code></h5>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th colspan="3">**Mixture**</th>
        <th>**Source 1**</th>
        <th>**Source 2**</th>
        <th>**Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="3" markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/mixture.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s1.wav" style="width: 95%" controls> </audio> 
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s2.wav" style="width: 95%" controls> </audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s3.wav" style="width: 95%" controls> </audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:16px;font-size:16px;">&nbsp;</div>

<table style="width: 100%; border-collapse: separate; border-spacing: 8px;">
<colgroup>
    <col width="20%" />
    <col width="10%" />
    <col width="10%" />
    <col width="20%" />
    <col width="20%" />
    <col width="20%" />
</colgroup>
<thead>
    <tr class="header">
        <th>**Methods**</th>
        <th>**Losses**</th>
        <th>**OLA**</th>
        <th>**Separated Source 1**</th>
        <th>**Separated Source 2**</th>
        <th>**Separated Residual**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**Conv-TasNet**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/evalWav_epoch=299-step=320100/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_multiplication_x:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**Conv-TasNet+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/ConvTasNetKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_msk512relu_blk8rep3_dz1_NegSISDR_g1bs16ag1gc5lr1eM3_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_msk512relu_blk8rep3_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop1600/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_minus_sign:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/eval_epoch=299-step=1280400/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{NLL} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_GauNLLSrcDisxRegCovEps_g8bs2ag1gc5lr2eM5_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**SepFormer+GP**</td>
        <td markdown="span">
            $$ \mathcal{L}^\text{SI-SDR} $$
        </td>
        <td markdown="span">
            :heavy_check_mark:
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s1_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s2_estimate.wav" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/SepFormerKernel/exp.wInit/sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep300Sch5p05_seg32k_dz1_NegSISDR_g1bs4ag1gc5lr1eM4_vanilla_orig/epc200_frz150/train_convtasnet_sep_reverb_noisy_residual_8kmin_conf_Ks16St8Ep150Sch5p05_seg32k_dz8_gramKYLinRBFxZVarFixM0xZMu_NegSISDRxRegCovEps_g8bs2ag1gc5lr5eM6_vae_vrOSqPtAllo16Dds_FP6_wInit/evalOB_epoch=99-step=106700/seg1600_hop800/examples/ex_2255/s3_estimate.wav" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<!--  -->

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#whamr)
