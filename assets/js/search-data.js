// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "This page lists publications in reversed chronological order. Asterisk symbols (*) indicate authors who contributed equally to an article. An up-to-date list is available on Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-demo",
          title: "demo",
          description: "Demo pages and supplementary materials accompanying selected publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/demo/";
          },
        },{id: "nav-curriculum-vitae",
          title: "curriculum vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "demo-speech-enhancement-with-deep-speech-prior",
          title: 'Speech Enhancement with Deep Speech Prior',
          description: "K. Sekiguchi, Y. Bando, A. A. Nugraha, K. Yoshii, and T. Kawahara, &quot;Semi-supervised multichannel speech enhancement with a deep speech prior,&quot; IEEE/ACM Trans. Audio, Speech, Language Process., vol. 27, no. 12, pp. 2197–2212, 2019.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/deep_speech_prior/";
            },},{id: "demo-gf-vae",
          title: 'GF-VAE',
          description: "A. A. Nugraha, K. Sekiguchi, and K. Yoshii, &quot;A flow-based deep latent variable model for speech spectrogram modeling and enhancement,&quot; IEEE/ACM Trans. Audio, Speech, Language Process., vol. 28, pp. 1104--1117, 2020.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/gfvae/";
            },},{id: "demo-time-domain-audio-source-separation-based-on-gaussian-processes-with-deep-kernel-learning",
          title: 'Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning',
          description: "A. A. Nugraha, D. Di Carlo, Y. Bando, M. Fontaine, and K. Yoshii, &quot;Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning,&quot; in Proc. IEEE Workshop Appl. Signal Process. Audio Acoust., New Paltz, NY, USA, 2023, pp. 1-5.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/gpdkl/";
            },},{id: "demo-sampling-rate-agnostic-speech-super-resolution-based-on-gaussian-process-dynamical-systems-with-deep-kernel-learning",
          title: 'Sampling-Rate-Agnostic Speech Super-Resolution Based on Gaussian Process Dynamical Systems With Deep Kernel Learning...',
          description: "A. A. Nugraha, D. Di Carlo, Y. Bando, M. Fontaine, and K. Yoshii, &quot;Sampling-Rate-Agnostic Speech Super-Resolution Based on Gaussian Process Dynamical Systems With Deep Kernel Learning,&quot; in Proc. IEEE Int. Conf. Acoust., Speech, Signal Process., Barcelona, Spain, 2026, pp. 15442-15446.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/gpds-sr/";
            },},{id: "demo-adaptive-online-neural-speech-enhancement-with-augmented-reality-smart-glasses",
          title: 'Adaptive Online Neural Speech Enhancement with Augmented Reality Smart Glasses',
          description: "K. Sekiguchi, A. A. Nugraha, Y. Du, Y. Bando, M. Fontaine, and K. Yoshii, &quot;Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel Learning,&quot; in Proc. IEEE/RSJ Int. Conf. Intell. Robots Syst., Kyoto, Japan, 2022, pp. 9266-9273.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/iros22/";
            },},{id: "demo-music-separation",
          title: 'Music Separation',
          description: "A. A. Nugraha, A. Liutkus, and E. Vincent, &quot;Multichannel music separation with deep neural networks,&quot; in Proc. Eur. Signal Process. Conf., Budapest, Hungary, 2016, pp. 1748–1752.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/music_separation/";
            },},{id: "demo-neural-fca",
          title: 'Neural FCA',
          description: "Y. Bando, K. Sekiguchi, Y. Masuyama, A. A. Nugraha, M. Fontaine and K. Yoshii, &quot;Neural Full-Rank Spatial Covariance Analysis for Blind Source Separation,&quot; IEEE Signal Processing Letters, vol. 28, pp. 1670-1674, 2021.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/neural_fca/";
            },},{id: "demo-nf-fastmnmf",
          title: 'NF-FastMNMF',
          description: "A. A. Nugraha, K. Sekiguchi, M. Fontaine, Y. Bando, and K. Yoshii, &quot;Flow-Based Fast Multichannel Nonnegative Matrix Factorization for Blind Source Separation,&quot; in Proc. IEEE Int. Conf. Acoust., Speech, Signal Process., Singapore, Singapore, 2022, pp. 501-505.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/nffastmnmf/";
            },},{id: "demo-nf-iva",
          title: 'NF-IVA',
          description: "A. A. Nugraha, K. Sekiguchi, M. Fontaine, Y. Bando, and K. Yoshii, &quot;Flow-Based Independent Vector Analysis for Blind Source Separation,&quot; IEEE Signal Process. Lett., vol. 27, pp. 2173-2177, 2020.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/nfiva/";
            },},{id: "demo-complex-valued-speech-generative-model",
          title: 'Complex-Valued Speech Generative Model',
          description: "A. A. Nugraha, K. Sekiguchi, and K. Yoshii, &quot;A deep generative model of speech complex spectrograms,&quot; in Proc. IEEE Int. Conf. Acoust., Speech, Signal Process., Brighton, UK, 2019, pp. 905--909.",
          section: "Demo",handler: () => {
              window.location.href = "/demo/speech_gen_model/";
            },},{id: "news-our-article-neural-full-rank-spatial-covariance-analysis-for-blind-source-separation-has-been-accepted-for-publication-in-ieee-signal-processing-letters-it-is-now-available-on-ieee-xplore",
          title: 'Our article “Neural Full-Rank Spatial Covariance Analysis for Blind Source Separation” has been...',
          description: "",
          section: "News",},{id: "news-our-sound-scene-understanding-team-hosted-the-39th-riken-aip-center-open-seminar-a-video-archive-will-be-available-soon-on-the-webpage-of-aip-open-seminar-series",
          title: 'Our Sound Scene Understanding Team hosted the 39th RIKEN AIP Center Open Seminar....',
          description: "",
          section: "News",},{id: "news-the-final-published-version-of-our-article-neural-full-rank-spatial-covariance-analysis-for-blind-source-separation-is-now-available-on-ieee-xplore",
          title: 'The final published version of our article “Neural Full-Rank Spatial Covariance Analysis for...',
          description: "",
          section: "News",},{id: "news-our-article-quot-an-analysis-of-environment-microphone-and-data-simulation-mismatches-in-robust-speech-recognition-quot-received-isca-award-for-the-best-review-paper-published-in-computer-speech-and-language-2016-2020",
          title: 'Our article &amp;quot;An analysis of environment, microphone and data simulation mismatches in robust...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/chime4_award/";
            },},{id: "news-our-article-fast-multichannel-nonnegative-matrix-factorization-with-directivity-aware-jointly-diagonalizable-spatial-covariance-matrices-for-blind-source-separation-received-the-15th-ieee-signal-processing-society-sps-japan-student-journal-paper-award",
          title: 'Our article “Fast Multichannel Nonnegative Matrix Factorization With Directivity-Aware Jointly-Diagonalizable Spatial Covariance Matrices...',
          description: "",
          section: "News",},{id: "news-our-article-multichannel-audio-source-separation-with-deep-neural-networks-received-the-6th-ieee-signal-processing-society-sps-japan-young-author-best-paper-award",
          title: 'Our article “Multichannel Audio Source Separation With Deep Neural Networks” received the 6th...',
          description: "",
          section: "News",},{id: "news-our-paper-flow-based-fast-multichannel-nonnegative-matrix-factorization-for-blind-source-separation-has-been-accepted-to-ieee-icassp-2022",
          title: 'Our paper “Flow-Based Fast Multichannel Nonnegative Matrix Factorization for Blind Source Separation” has...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-share-that-i-m-starting-a-new-position-as-research-scientist-研究員-at-riken",
          title: 'I’m happy to share that I’m starting a new position as Research Scientist...',
          description: "",
          section: "News",},{id: "news-our-article-generalized-fast-multichannel-nonnegative-matrix-factorization-based-on-gaussian-scale-mixtures-for-blind-source-separation-has-been-accepted-for-publication-in-ieee-acm-transactions-on-audio-speech-and-language-processing-it-is-now-available-on-ieee-xplore",
          title: 'Our article “Generalized Fast Multichannel Nonnegative Matrix Factorization Based on Gaussian Scale Mixtures...',
          description: "",
          section: "News",},{id: "news-our-sound-scene-understanding-team-presented-two-papers-at-ieee-icassp-2022-flow-based-fast-multichannel-nonnegative-matrix-factorization-for-blind-source-separation-and-neural-full-rank-spatial-covariance-analysis-for-blind-source-separation",
          title: 'Our Sound Scene Understanding Team presented two papers at IEEE ICASSP 2022: ①...',
          description: "",
          section: "News",},{id: "news-we-presented-two-papers-at-iwaenc-2022-dnn-free-low-latency-adaptive-speech-enhancement-based-on-frame-online-beamforming-powered-by-block-online-fastmnmf-and-joint-localization-and-synchronization-of-distributed-camera-attached-microphone-arrays-for-indoor-scene-analysis",
          title: 'We presented two papers at IWAENC 2022: ① “DNN-free Low-Latency Adaptive Speech Enhancement...',
          description: "",
          section: "News",},{id: "news-our-paper-quot-direction-aware-joint-adaptation-of-neural-speech-enhancement-and-recognition-in-real-multiparty-conversational-environments-quot-was-presented-at-interspeech-2022",
          title: 'Our paper &amp;quot;Direction-Aware Joint Adaptation of Neural Speech Enhancement and Recognition in Real...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/interspeech2022_presentation/";
            },},{id: "news-our-paper-quot-direction-aware-adaptive-online-neural-speech-enhancement-with-an-augmented-reality-headset-in-real-noisy-conversational-environments-quot-was-presented-at-ieee-rsj-iros-2022",
          title: 'Our paper &amp;quot;Direction-Aware Adaptive Online Neural Speech Enhancement with an Augmented Reality Headset...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/iros2022_presentation/";
            },},{id: "news-our-paper-quot-exploiting-sparse-recovery-algorithms-for-semi-supervised-training-of-deep-neural-networks-for-direction-of-arrival-estimation-quot-was-presented-at-ieee-icassp-2023",
          title: 'Our paper &amp;quot;Exploiting Sparse Recovery Algorithms for Semi-Supervised Training of Deep Neural Networks...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/icassp2023_presentation/";
            },},{id: "news-our-team-provided-a-tutorial-entitled-quot-foundations-extensions-and-applications-of-statistical-multichannel-speech-separation-models-quot-at-interspeech-2023",
          title: 'Our team provided a tutorial entitled &amp;quot;Foundations, Extensions and Applications of Statistical Multichannel...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/interspeech23_tutorial/";
            },},{id: "news-our-paper-quot-time-domain-audio-source-separation-based-on-gaussian-processes-with-deep-kernel-learning-quot-was-presented-at-ieee-waspaa-2023",
          title: 'Our paper &amp;quot;Time-Domain Audio Source Separation Based on Gaussian Processes with Deep Kernel...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/waspaa2023_presentation/";
            },},{id: "news-av-suara-goes-live-augmented-listening-at-the-ipsj-otogaku-symposium-2025",
          title: 'AV-SUARA Goes Live: Augmented Listening at the IPSJ Otogaku Symposium 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250613_avsuara_demo_at_otogaku_sympo/";
            },},{id: "news-a-new-chapter-at-riken-aip-from-sound-scene-understanding-to-music-information-intelligence",
          title: 'A New Chapter at RIKEN-AIP: From Sound Scene Understanding to Music Information Intelligence...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026_riken_aip/";
            },},{id: "news-i-am-grateful-to-receive-a-grants-in-aid-for-scientific-research-kakenhi-scientific-research-c-no-26k14896-from-the-japan-society-for-the-promotion-of-science-jsps-for-the-project-semantics-driven-multimodal-control-of-spatio-spectral-filtering-for-real-world-augmented-listening-with-smart-glasses",
          title: 'I am grateful to receive a Grants-in-Aid for Scientific Research (KAKENHI) – Scientific...',
          description: "",
          section: "News",},{id: "news-three-papers-at-icassp-2026-from-missing-samples-to-personalized-3d-audio",
          title: 'Three Papers at ICASSP 2026: From Missing Samples to Personalized 3D Audio',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026_icassp/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%61.%6E%75%67%72%61%68%61@%69%65%65%65.%6F%72%67", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=j40T6joAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5424-747X", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/145/5298.html", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aanugraha", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/aanugraha", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aanugraha", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/AArieNugraha", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
