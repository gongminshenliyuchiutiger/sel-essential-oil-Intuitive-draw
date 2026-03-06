// Dataset of Essential Oils (Enhanced with SEL - Social and Emotional Learning)
const oils = [
    {
        name: "薰衣草",
        enName: "Lavender",
        icon: "💜",
        keyword: "平靜與安穩",
        selCompetency: "自我管理 (Self-Management)",
        description: "是時候放下焦慮與重擔。給自己一個深呼吸的機會，在混亂中尋找內在的寧靜，讓身心得到全然的放鬆與修復。",
        selQuestion: "我現在身體哪裡感覺最緊繃？我可以如何放鬆它？",
        selAction: "深呼吸三次，將注意力拉回當下。",
        themeColor: "rgba(141, 133, 166, 0.4)" // Soft purple
    },
    {
        name: "甜橙",
        enName: "Sweet Orange",
        icon: "🍊",
        keyword: "喜悅與豐盛",
        selCompetency: "自我覺察 (Self-Awareness)",
        description: "像冬日裡的暖陽，這支精油為你帶來純粹的快樂與活力。放下擔憂，擁抱生活中的美好與無限可能。",
        selQuestion: "今天有哪一件微小的事情讓我感到開心？",
        selAction: "對著鏡子給自己一個微笑，或者寫下一個感恩的事物。",
        themeColor: "rgba(235, 178, 126, 0.4)" // Soft orange
    },
    {
        name: "薄荷",
        enName: "Peppermint",
        icon: "🌿",
        keyword: "清晰與專注",
        selCompetency: "負責任的決策 (Responsible Decision-Making)",
        description: "清除腦中迷霧，帶給你煥然一新的洞察力。當你感到困頓時，它能提振精神，讓你重新找回前進的方向。",
        selQuestion: "目前我遇到最大的瓶頸是什麼？我有什麼不同的選擇？",
        selAction: "把複雜的問題拆解成三個小步驟來執行。",
        themeColor: "rgba(164, 219, 196, 0.4)" // Mint green
    },
    {
        name: "玫瑰",
        enName: "Rose",
        icon: "🌹",
        keyword: "愛與包容",
        selCompetency: "社會覺察 (Social Awareness)",
        description: "玫瑰提醒你，愛人之前請先好好愛自己。張開雙臂擁抱自己不完美的一面，你值得世間所有的溫柔對待。",
        selQuestion: "我是否對自己或他人太過嚴苛？",
        selAction: "試著換位思考，並對自己說一句肯定與溫柔的話語。",
        themeColor: "rgba(224, 153, 164, 0.4)" // Soft rose pink
    },
    {
        name: "乳香",
        enName: "Frankincense",
        icon: "🕯️",
        keyword: "扎根與靈性",
        selCompetency: "自我覺察 (Self-Awareness)",
        description: "被譽為精油之王，引領你回到內心深處的源頭。它帶給你腳踏實地的力量，並開啟你更高的靈性智慧。",
        selQuestion: "我現在的核心價值觀是什麼？我的行為有符合它嗎？",
        selAction: "花五分鐘安靜靜坐，連結自己內在的寧靜。",
        themeColor: "rgba(209, 191, 174, 0.5)" // Warm sand/gold
    },
    {
        name: "茶樹",
        enName: "Tea Tree",
        icon: "🌱",
        keyword: "淨化與邊界",
        selCompetency: "人際關係技巧 (Relationship Skills)",
        description: "這是一個建立健康心理邊界的時刻。茶樹幫助你淨化負面能量，勇敢拒絕不適合你的事物，保護自身磁場。",
        selQuestion: "我在哪段關係中感到過度消耗？我該如何設立健康的界線？",
        selAction: "練習溫和但堅定地說「不」，保護自己的能量。",
        themeColor: "rgba(155, 179, 151, 0.4)" // Muted sage green
    },
    {
        name: "依蘭",
        enName: "Ylang Ylang",
        icon: "🌼",
        keyword: "自信與魅力",
        selCompetency: "自我管理 (Self-Management)",
        description: "釋放你內在壓抑的情感，喚醒純真與熱情。依蘭鼓勵你展現最真實、最具獨特魅力的自我。",
        selQuestion: "我有多久沒有毫無顧忌地表達自己的感受了？",
        selAction: "找一個安全的方式（如繪畫、跳舞或寫日記）釋放壓抑的情緒。",
        themeColor: "rgba(242, 222, 136, 0.35)" // Soft yellow
    },
    {
        name: "天竺葵",
        enName: "Geranium",
        icon: "🌺",
        keyword: "平衡與和諧",
        selCompetency: "人際關係技巧 (Relationship Skills)",
        description: "在理智與情感之間找到完美的平衡。它是一雙溫柔的手，撫平內心的波動，為生活帶來和諧的節奏。",
        selQuestion: "在理智與情感中，我最近是否過於偏向某一方？",
        selAction: "主動去傾聽一位朋友的煩惱，提供支持而不急於給建議。",
        themeColor: "rgba(224, 150, 178, 0.4)" // Soft magenta/pink
    },
    {
        name: "檸檬",
        enName: "Lemon",
        icon: "🍋",
        keyword: "淨化與煥新",
        selCompetency: "負責任的決策 (Responsible Decision-Making)",
        description: "如同清晨的微風，檸檬洗滌鬱悶的心情。它鼓勵你以清新的視角看待事物，激發靈感並迎接新的挑戰。",
        selQuestion: "我對目前的生活模式有哪裡感到僵化？可以做什麼小改變？",
        selAction: "清理一個小角落的環境，以新視角面對舊問題。",
        themeColor: "rgba(235, 235, 143, 0.4)" // Bright yellow
    },
    {
        name: "檀香",
        enName: "Sandalwood",
        icon: "🪵",
        keyword: "寧靜與沉思",
        selCompetency: "自我覺察 (Self-Awareness)",
        description: "放慢腳步，沉澱心靈。檀香陪伴你走過內在旅程，在靜心冥想中找到生命深處的平靜與答案。",
        selQuestion: "什麼事物能真正帶給我內在的安定感？",
        selAction: "放下手機半小時，單純地陪伴自己或進行呼吸練習。",
        themeColor: "rgba(171, 143, 118, 0.4)" // Soft brown
    },
    {
        name: "迷迭香",
        enName: "Rosemary",
        icon: "🌿",
        keyword: "記憶與覺醒",
        selCompetency: "自我覺察 (Self-Awareness)",
        description: "喚醒沉睡的感官，迷迭香為你注入清晰的思考力。當你感到迷惘時，它幫助你回想起初衷與內在真正的渴望。",
        selQuestion: "我最初設定這個目標的原因是什麼？",
        selAction: "寫下三個當初吸引你做這件事的理由。",
        themeColor: "rgba(143, 172, 143, 0.4)" // Soft herbal green
    },
    {
        name: "尤加利",
        enName: "Eucalyptus",
        icon: "🍃",
        keyword: "呼吸與釋放",
        selCompetency: "自我管理 (Self-Management)",
        description: "帶來深層的開闊感，尤加利鼓勵你大口呼吸。釋放胸口積壓的悶氣，讓新鮮的能量進入你的生命空間。",
        selQuestion: "我有什麼情緒或壓力是一直憋在心裡的？",
        selAction: "走到戶外或打開窗戶，做五次深沉的腹式呼吸。",
        themeColor: "rgba(164, 203, 199, 0.4)" // Cool blue-green
    },
    {
        name: "佛手柑",
        enName: "Bergamot",
        icon: "🍈",
        keyword: "接納與陽光",
        selCompetency: "社會覺察 (Social Awareness)",
        description: "融合了陽光與大地氣息，佛手柑幫助你驅散陰霾。提醒你，即使在不完美的狀態下，你依然值得被愛與接納。",
        selQuestion: "我今天是否因為別人的期待而感到壓力？",
        selAction: "給自己一個擁抱，並告訴自己：「我現在的樣子就很好了。」",
        themeColor: "rgba(209, 219, 143, 0.4)" // Soft yellow-green
    },
    {
        name: "快樂鼠尾草",
        enName: "Clary Sage",
        icon: "💜",
        keyword: "靈感與直覺",
        selCompetency: "負責任的決策 (Responsible Decision-Making)",
        description: "為僵硬的思維帶來奇幻的轉折。快樂鼠尾草鼓勵你放下執念，相信你的直覺，靈感往往在放鬆時湧現。",
        selQuestion: "面對目前的選擇，我的直覺第一時間告訴我什麼？",
        selAction: "放下邏輯分析，讓自己做一件毫無目的、純粹好玩的事。",
        themeColor: "rgba(193, 172, 209, 0.4)" // Soft lavender-grey
    },
    {
        name: "羅馬洋甘菊",
        enName: "Roman Chamomile",
        icon: "🌼",
        keyword: "撫慰與純真",
        selCompetency: "人際關係技巧 (Relationship Skills)",
        description: "像溫柔的母親一般，它撫平你內在那個受傷或焦躁的小孩。在關係中帶來耐心，用更柔軟的方式溝通。",
        selQuestion: "我最近在和誰溝通時容易缺乏耐心？為什麼？",
        selAction: "下次對話前，先停頓三秒鐘，試著用更溫和的語氣回應。",
        themeColor: "rgba(240, 235, 182, 0.4)" // Soft pale yellow
    }
];

// Number of cards to display in the initial deck
const NUM_CARDS = 15;

// Audio logic
let isBgmPlaying = false;
let audioFiles = {};

document.addEventListener('DOMContentLoaded', () => {
    const deckContainer = document.getElementById('deck-container');
    const resultModal = document.getElementById('result-modal');
    const modalContentPanel = document.getElementById('modal-content-panel');
    const closeBtn = document.getElementById('close-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultCard = document.getElementById('result-card');
    const resultCardContainer = document.getElementById('result-card-container');

    // Audio elements
    const bgmToggle = document.getElementById('bgm-toggle');
    audioFiles.bgm = document.getElementById('bgm-audio');
    audioFiles.hover = document.getElementById('hover-audio');
    audioFiles.click = document.getElementById('click-audio');
    audioFiles.reveal = document.getElementById('reveal-audio');

    // BGM Toggle
    bgmToggle.addEventListener('click', () => {
        if (isBgmPlaying) {
            audioFiles.bgm.pause();
            bgmToggle.innerHTML = '<i class="fa-solid fa-music"></i> BGM Off';
            bgmToggle.classList.remove('playing');
        } else {
            // Attempt to play (browsers may block auto-play until user interaction)
            audioFiles.bgm.volume = 0.3;
            audioFiles.bgm.play().catch(e => console.log('Audio play failed:', e));
            bgmToggle.innerHTML = '<i class="fa-solid fa-music"></i> BGM On';
            bgmToggle.classList.add('playing');
        }
        isBgmPlaying = !isBgmPlaying;
    });

    const playSound = (soundType) => {
        if (audioFiles[soundType]) {
            audioFiles[soundType].currentTime = 0;
            // Provide a realistic volume
            audioFiles[soundType].volume = soundType === 'bgm' ? 0.3 : 0.6;
            audioFiles[soundType].play().catch(e => { /* Ignore blocked play */ });
        }
    };

    // Result DOM elements
    const oilIcon = document.getElementById('oil-icon');
    const oilName = document.getElementById('oil-name');
    const oilEnName = document.getElementById('oil-en-name');
    const oilKeyword = document.getElementById('oil-keyword');
    const oilDescription = document.getElementById('oil-description');
    const selCompetency = document.getElementById('sel-competency');
    const selQuestion = document.getElementById('sel-question');
    const selAction = document.getElementById('sel-action');

    // Initialize the deck
    function initDeck() {
        deckContainer.innerHTML = '';

        // Shuffle the oils slightly so the draw feels random (even though we pick randomly on click anyway)
        // It's mostly visual right now
        for (let i = 0; i < NUM_CARDS; i++) {
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'card-wrapper';
            cardWrapper.style.animationDelay = `${i * 0.1}s`;

            cardWrapper.innerHTML = `
                <div class="card">
                    <div class="card-face card-back">
                        <div class="card-back-inner">
                            <div class="ornament"><i class="fa-solid fa-leaf"></i></div>
                        </div>
                    </div>
                </div>
            `;

            // Add keyboard accessibility
            cardWrapper.setAttribute('tabindex', '0');

            // Add interaction sounds
            cardWrapper.addEventListener('mouseenter', () => playSound('hover'));

            // Add click event for drawing a card
            cardWrapper.addEventListener('click', () => {
                playSound('click');
                handleCardDraw(cardWrapper);
            });

            // Add keyboard event for drawing a card
            cardWrapper.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    playSound('click');
                    handleCardDraw(cardWrapper);
                }
            });

            deckContainer.appendChild(cardWrapper);
        }
    }

    // Handle user drawing a card
    function handleCardDraw(clickedCard) {
        // Prevent clicking multiple cards quickly
        if (resultModal.classList.contains('active')) return;

        // Visual feedback on the clicked card
        clickedCard.style.transform = 'translateY(-20px) scale(1.1)';
        clickedCard.style.zIndex = '10';

        // Select a random oil
        const selectedOil = oils[Math.floor(Math.random() * oils.length)];

        // Populate the result modal
        oilIcon.textContent = selectedOil.icon;
        oilName.textContent = selectedOil.name;
        oilEnName.textContent = selectedOil.enName;
        oilKeyword.textContent = `「${selectedOil.keyword}」`;
        oilDescription.textContent = selectedOil.description;

        selCompetency.textContent = selectedOil.selCompetency;
        selQuestion.textContent = selectedOil.selQuestion;
        selAction.textContent = selectedOil.selAction;

        // Apply theme color to modal panel
        modalContentPanel.style.backgroundColor = "var(--glass-bg)";
        modalContentPanel.style.boxShadow = "var(--glass-shadow)";

        // Ensure the big result card is facing back initially
        resultCard.classList.remove('flipped');

        // Show modal after a brief delay
        setTimeout(() => {
            resultModal.classList.add('active');

            // Trigger 3D flip animation of the result card
            setTimeout(() => {
                resultCard.classList.add('flipped');
                playSound('reveal');

                // Magical Confetti Effect using Canvas-Confetti
                triggerConfetti(selectedOil.themeColor);

            }, 400); // Wait for modal to fade in

            // Reset clicked card style behind modal
            clickedCard.style.transform = '';
            clickedCard.style.zIndex = '';
        }, 600);
    }

    // Particle Effects
    function triggerConfetti(colorString) {
        if (typeof confetti === 'function') {
            const count = 200;
            const defaults = {
                origin: { y: 0.7 },
                colors: ['#ffffff', '#f4e6b3', '#cfdec2'] // fallback colors
            };

            function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }

            fire(0.25, { spread: 26, startVelocity: 55 });
            fire(0.2, { spread: 60 });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            fire(0.1, { spread: 120, startVelocity: 45 });
        }
    }

    // Close Modal
    function closeModal() {
        resultModal.classList.remove('active');
        // Reset color panel
        modalContentPanel.style.backgroundColor = "var(--glass-bg)";
        modalContentPanel.style.boxShadow = "var(--glass-shadow)";
        // Flip card back so it's ready for next time (after fade out)
        setTimeout(() => {
            resultCard.classList.remove('flipped');
        }, 500);
    }

    closeBtn.addEventListener('click', closeModal);

    // Reset app
    resetBtn.addEventListener('click', () => {
        closeModal();
        setTimeout(() => {
            initDeck();
        }, 500); // re-init deck after modal closed
    });

    // Run initialization
    initDeck();

    // Mascot dragging functionality
    const mascot = document.getElementById('mascot');
    let isDragging = false;
    let offsetX, offsetY;

    mascot.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - mascot.getBoundingClientRect().left;
        offsetY = e.clientY - mascot.getBoundingClientRect().top;
        mascot.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        // Prevent mascot from going completely off-screen
        x = Math.max(0, Math.min(x, window.innerWidth - mascot.offsetWidth));
        y = Math.max(0, Math.min(y, window.innerHeight - mascot.offsetHeight));

        mascot.style.left = `${x}px`;
        mascot.style.top = `${y}px`;
        mascot.style.bottom = 'auto'; // Disable bottom positioning and rely only on top
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        mascot.style.cursor = 'grab';
    });

    // Touch support for mobile devices
    mascot.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - mascot.getBoundingClientRect().left;
        offsetY = touch.clientY - mascot.getBoundingClientRect().top;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        let x = touch.clientX - offsetX;
        let y = touch.clientY - offsetY;

        x = Math.max(0, Math.min(x, window.innerWidth - mascot.offsetWidth));
        y = Math.max(0, Math.min(y, window.innerHeight - mascot.offsetHeight));

        mascot.style.left = `${x}px`;
        mascot.style.top = `${y}px`;
        mascot.style.bottom = 'auto';
        e.preventDefault(); // Prevent scrolling while dragging
    }, { passive: false });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
});
