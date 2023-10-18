---
layout: page
title: NF-FastMNMF
description: 'A. A. Nugraha, K. Sekiguchi, M. Fontaine, Y. Bando, and K. Yoshii, "Flow-Based Fast Multichannel Nonnegative Matrix Factorization for Blind Source Separation," in Proc. IEEE Int. Conf. Acoust., Speech, Signal Process., Singapore, Singapore, 2022, pp. 501-505.'
img: assets/img/demo/featured_nffastmnmf.png
importance: -6
category: work
---

### Abstract

This paper describes a blind source separation method for multichannel audio signals, called NF-FastMNMF, based on the integration of the normalizing flow (NF) into the multichannel nonnegative matrix factorization with jointly-diagonalizable spatial covariance matrices, a.k.a. FastMNMF. Whereas the NF of flow-based independent vector analysis, called NF-IVA, acts as the demixing matrices to transform an $M$-channel mixture into $M$ independent sources, the NF of NF-FastMNMF acts as the diagonalization matrices to transform an $M$-channel mixture into a spatially-independent $M$-channel mixture represented as a weighted sum of $N$ source images. This diagonalization enables the NF, which has been used only for determined separation because of its bijective nature, to be applicable to non-determined separation. NF-FastMNMF has time-varying diagonalization matrices that are potentially better at handling dynamical data variation than the time-invariant ones in FastMNMF. To have an NF with richer expression capability, the dimension-wise scalings using diagonal matrices originally used in NF-IVA are replaced with linear transformations using upper triangular matrices; in both cases, the diagonal and upper triangular matrices are estimated by neural networks. The evaluation shows that NF-FastMNMF performs well for both determined and non-determined separations of multiple speech utterances by stationary or non-stationary speakers from a noisy reverberant mixture.

![](./abstract.jpg){:width="100%"}

---

### Reference

A. A. Nugraha, K. Sekiguchi, M. Fontaine, Y. Bando, and K. Yoshii, "Flow-Based Fast Multichannel Nonnegative Matrix Factorization for Blind Source Separation," in _Proc. IEEE Int. Conf. Acoust., Speech, Signal Process._, Singapore, Singapore, 2022, pp. 501-505, doi: [10.1109/ICASSP43922.2022.9747718](https://doi.org/10.1109/ICASSP43922.2022.9747718).

---

### Audio Samples

- For the listening purpose, all audio files are stereo obtained by taking the first two channels from the estimated multichannel source images.
- The order of the separated sources may not be the same as that of the reference sources because we do not apply a source permutation solver.

---

<h4 id="stationary">Stationary Data</h4>

<h5><code class="language-plaintext highlighter-rouge">PCAFETER_12dB -- 447o030b_446o0315_444o030t</code></h5>

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
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_0mov_PCAFETER_12dB/mix_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_0mov_PCAFETER_12dB/s1_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_0mov_PCAFETER_12dB/s2_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_0mov_PCAFETER_12dB/s3_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_0mov_PCAFETER_12dB/s4_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
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
        <th>**Methods**</th>
        <th>**3 microphones**</th>
        <th>**4 microphones**</th>
        <th>**7 microphones**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**IVA-BP**</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**FastMNMF-BP**</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_0mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#stationary)

---

<h4 id="nonstationary">Non-stationary Data</h4>

<h5><code class="language-plaintext highlighter-rouge">PCAFETER_12dB -- 447o030b_446o0315_444o030t</code></h5>

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
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_2mov_PCAFETER_12dB/mix_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
    </td>
    <td markdown="span">
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_2mov_PCAFETER_12dB/s1_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_2mov_PCAFETER_12dB/s2_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_2mov_PCAFETER_12dB/s3_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
        <audio class="media" src="./audio/dataset_demand_convo_center_6x6x3_sway/3spk_2mov_PCAFETER_12dB/s4_447o030b_446o0315_444o030t.stereo.ogg" style="width: 95%" controls> </audio>
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
        <th>**Methods**</th>
        <th>**3 microphones**</th>
        <th>**4 microphones**</th>
        <th>**7 microphones**</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>**IVA-BP**</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1OrdBA_B00ZE2_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_xv1YI1OrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B01ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-IVA** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            n/a
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nfiva_zv1YI1UPNOrdBA_B02ZE2_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**FastMNMF-BP**</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1OrdBA_B00ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: diagonal_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUxv1YI1OrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 1_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B01ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
    <tr>
        <td>**NF-FastMNMF** <br> _- $\mathbf{W}\_{k^{\prime\prime},ft}$: upper triangular_ <br> _- flow block number: 2_</td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp3mc_nffastmnmf2_FMUxv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp4mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
        <td markdown="span">
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s1.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s2.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s3.itr02048.stereo.ogg" style="width: 95%" controls></audio>
            <audio class="media" src="./audio/w3sp7mc_nffastmnmf2_FMUzv1YI1UPNOrdBA_B02ZE2_I0512C08V01U01_uCdWdS_ctxL00s00M00s00_vpWS2_Q/3spk_2mov_PCAFETER_12dB/447o030b_446o0315_444o030t.s4.itr02048.stereo.ogg" style="width: 95%" controls></audio>
        </td>
    </tr>
</tbody>
</table>

<div style="height:12px;font-size:12px;">&nbsp;</div>
[(back to the top of this section)](#nonstationary)
