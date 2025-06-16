document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA HALAMAN LOGIN ---
    if (document.body.classList.contains('login-page-body')) {
        const loginButton=document.getElementById("loginButton"),usernameInput=document.getElementById("username"),passwordInput=document.getElementById("password"),errorMessage=document.getElementById("errorMessage"),handleLogin=()=>{const e=usernameInput.value.toLowerCase().trim(),t=passwordInput.value.trim();("dera"===e||"husen"===e)&&"211024"===t?window.location.href="ulangtahun.html":(errorMessage.textContent="Nama panggilan atau password-nya salah nih!",setTimeout(()=>{errorMessage.textContent=""},3e3))};loginButton.addEventListener("click",handleLogin),usernameInput.addEventListener("keyup",e=>"Enter"===e.key&&handleLogin()),passwordInput.addEventListener("keyup",e=>"Enter"===e.key&&handleLogin());
    }

    // --- LOGIKA HALAMAN ULANG TAHUN ---
    if (document.body.classList.contains('birthday-page-body')) {
        
        // ... (Logika lain seperti Pemicu Rahasia, Statistik, Linimasa, dll. tetap sama) ...
        const secretTrigger=document.getElementById("secret-trigger");secretTrigger&&secretTrigger.addEventListener("click",()=>{let e=0;e++,secretTrigger.classList.add("clicked"),setTimeout(()=>{secretTrigger.classList.remove("clicked")},400),5===e&&(window.location.href="rahasia.html")});const timelineItems=document.querySelectorAll(".timeline-item-new");timelineItems.forEach(e=>{const t=e.querySelector(".timeline-summary");t&&t.addEventListener("click",()=>{const n=e.classList.contains("expanded");timelineItems.forEach(e=>{e.classList.remove("expanded")}),n||e.classList.add("expanded")})});(function(){const e=document.getElementById("days-together");if(!e)return;const t=new Date("2024-10-21T00:00:00"),n=new Date,o=n.getTime()-t.getTime(),a=Math.floor(o/864e5);e.textContent=a})(),function(){if(!document.getElementById("countdown"))return;const e=new Date("2025-10-21T00:00:00");setInterval(()=>{const t=new Date().getTime(),n=e-t;if(n<0)return clearInterval(this),void(document.getElementById("countdown").innerHTML="Selamat Ulang Tahun Lagi!");const o=Math.floor(n/864e5),a=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(n%(1e3*60*60)/(1e3*60)),i=Math.floor(n%(1e3*60)/1e3);document.getElementById("days").textContent=o,document.getElementById("hours").textContent=a,document.getElementById("minutes").textContent=r,document.getElementById("seconds").textContent=i},1e3)}();const letterElement=document.getElementById("letter");if(letterElement){const e="halo sayang, selamat ulangtahun ya sayang aku harap kita bisa terus bersama sama terus sampai kapanpun itu ,aku sayang bangget sama kamu,semoga hadiah kecil ini bisa bikin kamu bahagia";let t=0;!function n(){t<e.length&&(letterElement.textContent+=e.charAt(t),t++,setTimeout(n,50))}()}const carouselInner=document.querySelector(".carousel-inner");if(carouselInner){const e=document.querySelectorAll(".carousel-item");let t=e.length,n=0;function o(){carouselInner&&(carouselInner.style.transform=`translateX(-${n*100}%)`)}setInterval(()=>{n=(n+1)%t,o()},4e3)}const giftBox=document.getElementById("giftBox"),quizContainer=document.getElementById("quiz-container");giftBox&&giftBox.addEventListener("click",()=>{giftBox.classList.add("open"),setTimeout(()=>{quizContainer&&!quizContainer.classList.remove("hidden"),quizContainer.scrollIntoView({behavior:"smooth"})},500)});const quizData=[ { question: "Di mana kita pertama kali resmi jadian?", options: ["di setu babakan", "Di Taman", "di jalan", "Di sekolah"], answer: "Di setu babakan" }, { question: "Apa makanan favorit aku?", options: ["nasi goreng", "bakso", "mie ayam", "seblak"], answer: "mie ayam" }, { question: "Lagu yang paling sering kita dengerin bareng?", options: ["nanti kita seperti ini", "jakarta hari ini", "Monokrom", "ocean eyes"], answer: "jakarta hari ini" }, { question: "lagu kesukaan aku?", options: ["Bunga maaf", "serena", "mangu", "monokrom"], answer: "mangu" }, { question: "Apa panggilan sayang rahasiaku buat kamu?", options: ["baby", "honey", "cinta", "baby bocil"], answer: "baby bocil" }];const quizForm=document.getElementById("quiz-form");if(quizForm){quizForm.innerHTML="",quizData.forEach((e,t)=>{const n=document.createElement("div");n.className="quiz-question";let o='<ul class="quiz-options">';e.options.forEach(e=>{o+=`<li><label><input type="radio" name="question${t}" value="${e}"> ${e}</label></li>`}),o+="</ul>",n.innerHTML=`<p>${t+1}. ${e.question}</p>${o}`,quizForm.appendChild(n)})}const submitButton=document.getElementById("submit-quiz");submitButton&&submitButton.addEventListener("click",()=>{let e=0;quizData.forEach((t,n)=>{const o=document.querySelector(`input[name="question${n}"]:checked`);o&&o.value===t.answer&&e++});const t=`Kamu benar ${e} dari ${quizData.length} pertanyaan! I love you! 💕`,n=document.getElementById("quiz-result");n&&(n.textContent=t)});const scrollElements=document.querySelectorAll("[data-scroll]"),observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("in-view")})},{threshold:.1});scrollElements.forEach(e=>observer.observe(e));
        

        /* ================================================= */
        /* LOGIKA GAME TETRIS (PERBAIKAN UKURAN PARTIKEL)    */
        /* ================================================= */
        const canvas = document.getElementById('tetris');
        if (canvas) {
            const context = canvas.getContext('2d');
            const scoreElement = document.getElementById('score');
            const startGameBtn = document.getElementById('start-game-btn');
            const tetrisWrapper = document.getElementById('tetris-wrapper');
            const modalOverlay = document.getElementById('game-modal-overlay');
            const modalMessage = document.getElementById('modal-message');
            const modalButtons = document.getElementById('modal-buttons');

            let animationFrameId;
            let isGamePaused = true;
            let isGameOver = false;
            
            context.scale(20, 20);
            const colors = [ null, '#ff8fab', '#ffc2d1', '#ffb3c6', '#fae0e4', '#f8ad9d', '#fbc4ab', '#e56b6f' ];
            const board = createBoard(12, 20);
            const player = { pos: {x: 0, y: 0}, matrix: null, score: 0, level: 1 };
            
            // --- Sistem Partikel Hati ---
            let particles = [];
            function createParticles(x, y) {
                for (let i = 0; i < 15; i++) {
                    particles.push({
                        x: x + Math.random(), y: y + Math.random(),
                        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.8) * 0.4,
                        life: 60,
                    });
                }
            }
            function drawParticles() {
                for (let i = particles.length - 1; i >= 0; i--) {
                    const p = particles[i];
                    p.x += p.vx; p.y += p.vy; p.life--;
                    if (p.life <= 0) { particles.splice(i, 1); }
                    context.fillStyle = `rgba(233, 64, 87, ${p.life / 60})`;
                    context.save();
                    context.translate(p.x, p.y);
                    // --- PERBAIKAN DI SINI: Ukuran font diubah ---
                    context.font = '0.4px sans-serif'; 
                    context.fillText('❤️', 0, 0);
                    context.restore();
                }
            }
            
            // --- Fungsi Inti Tetris ---
            function createBoard(w, h) { const b = []; while (h--) { b.push(new Array(w).fill(0)); } return b; }
            function createPiece(type) { if (type === 'T') { return [[0,0,0],[1,1,1],[0,1,0]]; } else if (type === 'O') { return [[2,2],[2,2]]; } else if (type === 'L') { return [[0,3,0],[0,3,0],[0,3,3]]; } else if (type === 'J') { return [[0,4,0],[0,4,0],[4,4,0]]; } else if (type === 'I') { return [[0,5,0,0],[0,5,0,0],[0,5,0,0],[0,5,0,0]]; } else if (type === 'S') { return [[0,6,6],[6,6,0],[0,0,0]]; } else if (type === 'Z') { return [[7,7,0],[0,7,7],[0,0,0]]; } }
            function drawMatrix(matrix, offset) { matrix.forEach((row, y) => { row.forEach((value, x) => { if (value !== 0) { context.fillStyle = colors[value]; context.fillRect(x + offset.x, y + offset.y, 1, 1); } }); }); }
            function draw() { context.fillStyle = 'rgba(255, 253, 253, 1)'; context.fillRect(0, 0, canvas.width, canvas.height); drawMatrix(board, {x: 0, y: 0}); if (!isGameOver) drawMatrix(player.matrix, player.pos); drawParticles(); }
            function merge(board, player) { player.matrix.forEach((row, y) => { row.forEach((value, x) => { if (value !== 0) { board[y + player.pos.y][x + player.pos.x] = value; } }); }); }
            function collide(board, player) { const [m, o] = [player.matrix, player.pos]; for (let y = 0; y < m.length; ++y) { for (let x = 0; x < m[y].length; ++x) { if (m[y][x] !== 0 && (board[y + o.y] && board[y + o.y][x + o.x]) !== 0) { return true; } } } return false; }
            function rotate(matrix, dir) { for (let y = 0; y < matrix.length; ++y) { for (let x = 0; x < y; ++x) { [ matrix[x][y], matrix[y][x] ] = [ matrix[y][x], matrix[x][y] ]; } } if (dir > 0) { matrix.forEach(row => row.reverse()); } else { matrix.reverse(); } }
            
            function showModal(message, buttons) { isGamePaused = true; modalMessage.innerHTML = message; modalButtons.innerHTML = ''; buttons.forEach(btnInfo => { if (btnInfo.isLink) { const anchor = document.createElement('a'); anchor.textContent = btnInfo.text; anchor.className = btnInfo.class; anchor.href = btnInfo.url; anchor.target = "_blank"; modalButtons.appendChild(anchor); } else { const button = document.createElement('button'); button.textContent = btnInfo.text; button.className = btnInfo.class; button.onclick = btnInfo.action; modalButtons.appendChild(button); } }); modalOverlay.classList.remove('hidden'); }
            function hideModal() { modalOverlay.classList.add('hidden'); }
            function closeGame() { hideModal(); tetrisWrapper.classList.add('hidden'); startGameBtn.textContent = 'Mulai Game!'; startGameBtn.classList.remove('hidden'); if(animationFrameId) cancelAnimationFrame(animationFrameId); }
            function startGame() { board.forEach(row => row.fill(0)); player.score = 0; player.level = 1; dropInterval = 1000; updateScore(); isGameOver = false; isGamePaused = false; hideModal(); playerReset(); if (animationFrameId) cancelAnimationFrame(animationFrameId); update(); }
            function restartLevel(level) { board.forEach(row => row.fill(0)); player.level = level; if (level === 2) player.score = 100; if (level === 3) player.score = 200; updateScore(); isGameOver = false; isGamePaused = false; hideModal(); playerReset(); if (animationFrameId) cancelAnimationFrame(animationFrameId); update(); }
            function continueToNextLevel(level) { player.level = level; if (level === 2) dropInterval = 800; if (level === 3) dropInterval = 600; isGamePaused = false; hideModal(); if (animationFrameId) cancelAnimationFrame(animationFrameId); update(); }

            function boardSweep() {
                let linesCleared = 0;
                outer: for (let y = board.length - 1; y > 0; --y) {
                    for (let x = 0; x < board[y].length; ++x) { if (board[y][x] === 0) continue outer; }
                    linesCleared++;
                    const row = board.splice(y, 1)[0];
                    for (let i = 0; i < row.length; i++) { if(row[i] !== 0) createParticles(i, y); }
                }
                if (linesCleared > 0) {
                    while (linesCleared--) { board.unshift(new Array(board[0].length).fill(0)); }
                    player.score += linesCleared * 10 * linesCleared;
                    updateScore();
                    if (!isGamePaused && !isGameOver) {
                        checkLevelUp();
                    }
                }
            }
            function checkLevelUp() { if (player.level === 1 && player.score >= 100) { showModal('Yey level satu selesai!', [ { text: 'Nyerah aja', class: 'secondary', action: closeGame }, { text: 'Lanjut', class: 'primary', action: () => continueToNextLevel(2) } ]); } else if (player.level === 2 && player.score >= 200) { showModal('Kamu lolos sampai level 3 nihh!', [ { text: 'Udah Cape', class: 'secondary', action: closeGame }, { text: 'Ez, Lanjut lah', class: 'primary', action: () => continueToNextLevel(3) } ]); } else if (player.level === 3 && player.score >= 300) { isGameOver = true; showModal('Yey kamu menang! Hadiahnya coba kamu cari halaman tersembunyi di website ini 😉', [ { text: 'Clue Dong!', class: 'primary', isLink: true, url: 'https://wa.me/6283894828175?text=sayangggg%20kasihhhh%20akuuuu%20clueeee%20nyaaaaa%20donggggg' }, { text: 'Tutup', class: 'secondary', action: closeGame} ]); } }
            function playerReset() {
                const pieces = 'TJLOSZI';
                player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
                player.pos.y = 0;
                player.pos.x = (board[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
                if (collide(board, player)) {
                    isGameOver = true;
                    if (player.score < 100) { showModal('Gampang gini kok kalah?', [ { text: 'Nyerah ah', class: 'secondary', action: closeGame }, { text: 'Coba Lagi', class: 'primary', action: startGame } ]); }
                    else if (player.score < 200) { showModal('Ayo udah setengah jalan!', [ { text: 'Nyerah', class: 'secondary', action: closeGame }, { text: 'Ulang', class: 'primary', action: () => restartLevel(2) } ]); }
                    else if (player.score < 300) { showModal('Yah kamu gagal di sini, jangan nyerah!', [ { text: 'Nyerah', class: 'secondary', action: closeGame }, { text: 'Lanjut', class: 'primary', action: () => restartLevel(3) } ]); }
                }
            }
            function playerDrop() { if (isGameOver || isGamePaused) return; player.pos.y++; if (collide(board, player)) { player.pos.y--; merge(board, player); playerReset(); boardSweep(); } dropCounter = 0; }
            let dropCounter = 0; let dropInterval = 1000; let lastTime = 0;
            function update(time = 0) { if (isGamePaused || isGameOver) { if (animationFrameId) cancelAnimationFrame(animationFrameId); return; } const deltaTime = time - lastTime; lastTime = time; dropCounter += deltaTime; if (dropCounter > dropInterval) { playerDrop(); } draw(); animationFrameId = requestAnimationFrame(update); }
            function updateScore() { scoreElement.innerText = player.score; }
            function playerMove(dir) { if (isGamePaused || isGameOver) return; player.pos.x += dir; if (collide(board, player)) { player.pos.x -= dir; } draw(); }
            function playerRotate(dir) { if (isGamePaused || isGameOver) return; const pos = player.pos.x; let offset = 1; rotate(player.matrix, dir); while(collide(board, player)) { player.pos.x += offset; offset = -(offset + (offset > 0 ? 1 : -1)); if (offset > player.matrix[0].length) { rotate(player.matrix, -dir); player.pos.x = pos; return; } } draw(); }
            function playerSoftDrop() { if (isGamePaused || isGameOver) return; player.pos.y++; if (collide(board, player)) { player.pos.y--; merge(board, player); playerReset(); boardSweep(); } else { player.score++; } updateScore(); draw(); }
            
            document.addEventListener('keydown', event => { if (isGamePaused || isGameOver) return; if (event.keyCode === 37) playerMove(-1); else if (event.keyCode === 39) playerMove(1); else if (event.keyCode === 40) playerSoftDrop(); else if (event.keyCode === 38) playerRotate(1); });
            document.getElementById('move-left').addEventListener('click', () => playerMove(-1));
            document.getElementById('move-right').addEventListener('click', () => playerMove(1));
            document.getElementById('move-down').addEventListener('click', () => playerSoftDrop());
            document.getElementById('rotate').addEventListener('click', () => playerRotate(1));
            
            startGameBtn.addEventListener('click', () => {
                tetrisWrapper.classList.remove('hidden');
                startGameBtn.classList.add('hidden');
                const instructionsMessage = `<h3 style="margin-top:0; font-family: var(--font-heading); color: var(--primary-color);">Aturan Main</h3><p style="text-align: left; margin-bottom: 5px; font-size: 0.9rem;"><strong>Level 1:</strong> Capai 100 Poin</p><p style="text-align: left; margin-bottom: 5px; font-size: 0.9rem;"><strong>Level 2:</strong> Capai 200 Poin</p><p style="text-align: left; margin-bottom: 20px; font-size: 0.9rem;"><strong>Level 3:</strong> Capai 300 Poin</p><p style="font-size: 1rem;">Jika berhasil, ada hadiah spesial menantimu!</p>`;
                showModal(instructionsMessage, [ { text: 'Mengerti, Mulai!', class: 'primary', action: startGame } ]);
            });
        }
    }
});
