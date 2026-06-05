SPKS_UTTS=("p361 008" "p374 008" "p376 008" "s5 008");
INRATES=("2000" "4000" "8000");
OUTRATES=("16000");

BASEDIR="/mnt/ssd22/projects/gpbwe/maum-ai/nuwave2/";
INFIX="VCTK-Corpus-0.92/wav48_silence_trimmed_wav";
GPDSSR_BASEDIR="/home/arie/mount.hss_gsound/exp/arie/projects/gpbwe/maum-ai/nuwave2";

for SPK_UTT in "${SPKS_UTTS[@]}"; do
IFS=' ' read -r SPK UTT <<< "$SPK_UTT"
for INRATE in "${INRATES[@]}"; do
for OUTRATE in "${OUTRATES[@]}"; do

    INFILES=(
        "${BASEDIR}/test_interpolate/cubic_spline/${INRATE}_${OUTRATE}/${INFIX}/${SPK}/${SPK}_${UTT}_mic1_target.wav"
        "${BASEDIR}/test_interpolate/cubic_spline/${INRATE}_${OUTRATE}/${INFIX}/${SPK}/${SPK}_${UTT}_mic1_input.wav"
        "${BASEDIR}/test_interpolate/cubic_spline/${INRATE}_${OUTRATE}/${INFIX}/${SPK}/${SPK}_${UTT}_mic1_baseline.wav"
        "${BASEDIR}/test_interpolate/cubic_spline/${INRATE}_${OUTRATE}/${INFIX}/${SPK}/${SPK}_${UTT}_mic1_estimate.wav"
        "${BASEDIR}/test_nuwave2/hparam_pretrained_16k_08_16_08_(3.2k-16k_to_16k)_epoch=584/${INRATE}_${OUTRATE}/${INFIX}/${SPK}/${SPK}_${UTT}_mic1_seed0_estimate.wav"
        "${BASEDIR}/test_udm_stft_mp/vctk_16k_udm_500000/${INRATE}_${OUTRATE}/${INFIX}/${SPK}/${SPK}_${UTT}_mic1_seed0_estimate.wav"
        "${GPDSSR_BASEDIR}/test_gpds_noSc/SMLPJ2Gs1m1MGCw5Gc2x5h128i32x2b8d0tggw_org_lo_phi_klzc5s1e1_l1s6b5_NT_pz1_ps1_8K_16000_t400x2s_v400x2s_TS_SM8a1hf8kb3SM5e7f_ZHs5GSMFPS8w5hf8kFe7f_d7e7f_mm_r110f0j7_adw1m3d2s10g5gc10_g8b1a1_v31eSrf5m2of8to16sl02sh16i_09_18_19_epoch=24/${INRATE}_${OUTRATE}/400x2sq_trs000_drop00/${INFIX}/${SPK}/${SPK}_${UTT}_mic1_seed0_estimate.wav"
    )

    OUTFILES=(
        "${INRATE}_${OUTRATE}/${INRATE}_${OUTRATE}_${SPK}_${UTT}_mic1_target.wav"
        "${INRATE}_${OUTRATE}/${INRATE}_${OUTRATE}_${SPK}_${UTT}_mic1_input.wav"
        "${INRATE}_${OUTRATE}/${INRATE}_${OUTRATE}_${SPK}_${UTT}_mic1_polyphase.wav"
        "${INRATE}_${OUTRATE}/${INRATE}_${OUTRATE}_${SPK}_${UTT}_mic1_cubicspline.wav"
        "${INRATE}_${OUTRATE}/${INRATE}_${OUTRATE}_${SPK}_${UTT}_mic1_nuwave2.wav"
        "${INRATE}_${OUTRATE}/${INRATE}_${OUTRATE}_${SPK}_${UTT}_mic1_udm_stft_mp.wav"
        "${INRATE}_${OUTRATE}/${INRATE}_${OUTRATE}_${SPK}_${UTT}_mic1_gpds-sr.wav"
    )

    mkdir -p "${INRATE}_${OUTRATE}"
    for i in "${!INFILES[@]}"; do
        cp -v "${INFILES[$i]}" "./${OUTFILES[$i]}"
    done

done
done
done
