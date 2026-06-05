#!/bin/bash

# sshfs -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3 arie@raiden-l1:/home/arie ~/mount.raiden

echo "Copying the WAV files ..."
for UTTID in "F05_440C020I_PED" "M05_443C020S_BUS"; do
	scp arie@raiden-l1:/data/gsound/corpus/speech_recognition/CHiME3/data/audio/16kHz/isolated/et05_*_simu_ref/${UTTID}.S.CH5.wav .

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_A2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_mag_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_rdmPha.wav 5HQ2_expM_${UTTID}_estMag_rdmPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_A2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_mag_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_rdmPha_GLA1H.wav 5HQ2_expM_${UTTID}_estMag_rdmPha_GLA1H.wav

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_A2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha.wav 5HQ2_expJ1_${UTTID}_estMag_estPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_A2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha_GLA1H.wav 5HQ2_expJ1_${UTTID}_estMag_estPha_GLA1H.wav

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_B2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha.wav 5HQ2_expJ2_${UTTID}_estMag_estPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_B2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha_GLA1H.wav 5HQ2_expJ2_${UTTID}_estMag_estPha_GLA1H.wav

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_D2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha.wav 5HQ2_expJ3_${UTTID}_estMag_estPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_D2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha_GLA1H.wav 5HQ2_expJ3_${UTTID}_estMag_estPha_GLA1H.wav

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_M2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha.wav 5HQ2_expJ4_${UTTID}_estMag_estPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_M2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha_GLA1H.wav 5HQ2_expJ4_${UTTID}_estMag_estPha_GLA1H.wav

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_O2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha.wav 5HQ2_expJ5_${UTTID}_estMag_estPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_O2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha_GLA1H.wav 5HQ2_expJ5_${UTTID}_estMag_estPha_GLA1H.wav

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_S2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha.wav 5HQ2_expJ6_${UTTID}_estMag_estPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_S2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha_GLA1H.wav 5HQ2_expJ6_${UTTID}_estMag_estPha_GLA1H.wav

	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_Q2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha.wav 5HQ2_expJ7_${UTTID}_estMag_estPha.wav
	cp -v /home/arie/mount.raiden/work/1811.phase.vae/exp01/estimates/5HQ2_vUW6GTone_Gvs_LRLR_5HQ2_vUW6GTone_Gvs_LRLR_Q2W0_conf_S5_M32C_adam_lr33_ep6_l2N_gc0_do0_mb02_mx1K_pt2T_FFFF_model_S_best/train_S5_ev/${UTTID}.S.CH5.estMag_estPha_GLA1H.wav 5HQ2_expJ7_${UTTID}_estMag_estPha_GLA1H.wav
done

echo "Converting to the OGG files ..."
for WAVFILE in `ls *.wav`; do
	ffmpeg -y -i ${WAVFILE} -c:a libvorbis -q:a 10 ${WAVFILE%.*}.ogg
done

echo "Deleting the WAV files ..."
rm -v *.wav
