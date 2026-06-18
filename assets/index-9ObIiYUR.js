(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`modul-1`,nama:`General Face-off (Raja Berhadapan)`,estimasiMenit:15},{id:`modul-2`,nama:`Meriam (Pao)`,estimasiMenit:15},{id:`modul-3`,nama:`Prajurit (Bing)`,estimasiMenit:10},{id:`modul-4`,nama:`Kuda (Ma)`,estimasiMenit:15},{id:`modul-5`,nama:`Gajah (Xiang)`,estimasiMenit:10}];function t(e){try{let t=localStorage.getItem(`progress-${e}`);if(!t)return`segera-hadir`;let n=JSON.parse(t);return n?.selesai===!0?`selesai`:n?.mulai===!0?`lanjutkan`:`segera-hadir`}catch{return`segera-hadir`}}function n(e){switch(e){case`selesai`:return`Selesai ✓`;case`lanjutkan`:return`Lanjutkan →`;case`segera-hadir`:return`Segera Hadir`}}function r(e){switch(e){case`selesai`:return`status-selesai`;case`lanjutkan`:return`status-lanjutkan`;case`segera-hadir`:return`status-segera`}}function i(e){let i=t(e.id),a=n(i),o=r(i);return`
    <li class="modul-card" data-modul-id="${e.id}">
      <div class="modul-card__header">
        <h2 class="modul-card__nama">${e.nama}</h2>
      </div>
      <div class="modul-card__meta">
        <span class="modul-card__estimasi">⏱ ${e.estimasiMenit} menit</span>
        <span class="modul-card__status ${o}">${a}</span>
      </div>
    </li>
  `}function a(t){t.innerHTML=`
    <div class="beranda">
      <header class="beranda__header">
        <h1 class="beranda__judul">Xiangqi untuk Pemula</h1>
        <p class="beranda__deskripsi">
          Belajar aturan xiangqi (catur Cina) selangkah demi selangkah — dari dasar
          hingga mahir. Setiap modul berisi eksplorasi papan interaktif dan quiz.
        </p>
      </header>

      <section class="beranda__modul">
        <ol class="modul-list">
          ${e.map(i).join(``)}
        </ol>
        <div class="beranda__papan-link">
          <a href="#" class="btn-papan js-btn-papan">🏁 Lihat Papan Posisi Awal</a>
        </div>
      </section>

      <footer class="beranda__footer">
        <p>Belajar xiangqi tidak pernah semudah ini 🇨🇳</p>
      </footer>
    </div>
  `}var o=function(e){return e.Jiang=`jiang`,e.Shi=`shi`,e.Xiang=`xiang`,e.Ma=`ma`,e.Che=`che`,e.Pao=`pao`,e.Bing=`bing`,e}({}),s=function(e){return e.Red=`red`,e.Black=`black`,e}({});function c(e){let t=null,n=null;for(let r=0;r<10;r++)for(let i=0;i<9;i++){let a=e[r][i];a?.type===o.Jiang&&(a.side===s.Red?t={baris:r+1,kolom:i}:n={baris:r+1,kolom:i})}if(!t||!n||t.kolom!==n.kolom)return!1;let r=t.kolom,i=Math.min(t.baris,n.baris),a=Math.max(t.baris,n.baris);for(let t=i+1;t<a;t++)if(e[t-1][r]!==null)return!1;return!0}function l(e,t,n){let r=e.map(e=>[...e]);return r[n.baris-1][n.kolom]=r[t.baris-1][t.kolom],r[t.baris-1][t.kolom]=null,r}function u(e,t,n){return t<3||t>5?!1:n===s.Red?e>=1&&e<=3:e>=8&&e<=10}function d(e,t,n,r){if(t.baris<1||t.baris>10||t.kolom<0||t.kolom>8||n.baris<1||n.baris>10||n.kolom<0||n.kolom>8)return!1;let i=e[t.baris-1][t.kolom];if(!i||i.side!==r)return!1;let a=e[n.baris-1][n.kolom];if(a&&a.side===r)return!1;let s=!1;switch(i.type){case o.Jiang:s=f(t,n,r);break;default:s=!1}return!(!s||c(l(e,t,n)))}function f(e,t,n){let r=Math.abs(t.baris-e.baris),i=Math.abs(t.kolom-e.kolom);return!(!(r===1&&i===0||r===0&&i===1)||!u(t.baris,t.kolom,n))}function p(e,t){let n=e[t.baris-1][t.kolom];if(!n)return[];let r=[];for(let i=1;i<=10;i++)for(let a=0;a<9;a++){if(i===t.baris&&a===t.kolom)continue;let o={baris:i,kolom:a};if(d(e,t,o,n.side)){let t=e[i-1][a];r.push({ke:o,jenis:t?`capture`:`move`})}}return r}var m=540,h=600,g=40,_=(m-g*2)/8,v=(h-g*2)/9,y=20;function b(e){return g+e*_}function x(e){return g+(10-e)*v}var S={[o.Jiang]:`Raja (Jiang)`,[o.Shi]:`Menteri (Shi)`,[o.Xiang]:`Gajah (Xiang)`,[o.Ma]:`Kuda (Ma)`,[o.Che]:`Benteng (Che)`,[o.Pao]:`Meriam (Pao)`,[o.Bing]:`Prajurit (Bing)`},C={[o.Jiang]:{red:`帥`,black:`將`},[o.Shi]:{red:`仕`,black:`士`},[o.Xiang]:{red:`相`,black:`象`},[o.Ma]:{red:`傌`,black:`馬`},[o.Che]:{red:`俥`,black:`車`},[o.Pao]:{red:`炮`,black:`砲`},[o.Bing]:{red:`兵`,black:`卒`}},w=null,T=[],E=null;function D(){let e=``;for(let t=0;t<10;t++){let n=x(t+1);e+=`<line x1="${b(0)}" y1="${n}" x2="${b(8)}" y2="${n}" stroke="#3d2b1f" stroke-width="1"/>`}for(let t=1;t<=7;t++){let n=b(t);e+=`<line x1="${n}" y1="${x(6)}" x2="${n}" y2="${x(10)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${n}" y1="${x(1)}" x2="${n}" y2="${x(5)}" stroke="#3d2b1f" stroke-width="1"/>`}for(let t of[0,8]){let n=b(t);e+=`<line x1="${n}" y1="${x(1)}" x2="${n}" y2="${x(10)}" stroke="#3d2b1f" stroke-width="1.5"/>`}e+=`<line x1="${b(3)}" y1="${x(1)}" x2="${b(5)}" y2="${x(3)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${b(5)}" y1="${x(1)}" x2="${b(3)}" y2="${x(3)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${b(3)}" y1="${x(8)}" x2="${b(5)}" y2="${x(10)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${b(5)}" y1="${x(8)}" x2="${b(3)}" y2="${x(10)}" stroke="#3d2b1f" stroke-width="1"/>`;let t=(x(5)+x(6))/2;e+=`<text x="${m/2}" y="${t}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="#8b7355" font-weight="bold" letter-spacing="8">楚 河　　　　漢 界</text>`;let n=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`];for(let t=0;t<9;t++){let r=b(t);e+=`<text x="${r}" y="${x(1)+18}" text-anchor="middle" font-size="10" fill="#6b5a40">${n[t]}</text>`,e+=`<text x="${r}" y="${x(10)-12}" text-anchor="middle" font-size="10" fill="#6b5a40">${n[t]}</text>`}for(let t=1;t<=10;t++){let n=x(t);e+=`<text x="${b(0)-14}" y="${n}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${t}</text>`,e+=`<text x="${b(8)+14}" y="${n}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${t}</text>`}for(let t of[0,8]){for(let n=2;n<=4;n++){if((n+t)%2==0)continue;let r=b(t),i=x(n);e+=`<line x1="${r-5}" y1="${i-5}" x2="${r+5}" y2="${i+5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`,e+=`<line x1="${r-5}" y1="${i+5}" x2="${r+5}" y2="${i-5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`}for(let n=7;n<=9;n++){if((n+t)%2==0)continue;let r=b(t),i=x(n);e+=`<line x1="${r-5}" y1="${i-5}" x2="${r+5}" y2="${i+5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`,e+=`<line x1="${r-5}" y1="${i+5}" x2="${r+5}" y2="${i-5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`}}return e}function O(){if(!w||T.length===0)return``;let e=b(w.kolom),t=x(w.baris),n=`<rect x="${e-y-2}" y="${t-y-2}" width="44" height="44" rx="99" fill="none" stroke="#0077cc" stroke-width="2.5" stroke-dasharray="6 3" opacity="0.9"/>`;for(let e of T){let t=b(e.ke.kolom),r=x(e.ke.baris);E?.[e.ke.baris-1]?.[e.ke.kolom]?(n+=`<circle cx="${t}" cy="${r}" r="23" fill="none" stroke="#dc2626" stroke-width="2.5" opacity="0.85"/>`,n+=`<circle cx="${t}" cy="${r}" r="5" fill="#dc2626" opacity="0.6"/>`):(n+=`<circle cx="${t}" cy="${r}" r="7" fill="#16a34a" opacity="0.7"/>`,n+=`<circle cx="${t}" cy="${r}" r="11" fill="none" stroke="#16a34a" stroke-width="1.5" opacity="0.4"/>`)}return n}function k(e){let t=``;for(let n=0;n<10;n++)for(let r=0;r<9;r++){let i=e[n][r];if(!i)continue;let a=b(r),o=x(n+1),c=C[i.type][i.side],l=S[i.type],u=i.side===s.Red?`#c0392b`:`#1a1a1a`,d=i.side===s.Red?`#922b21`:`#000000`,f=i.side===s.Red?`#f5deb3`:`#e8d5b7`;t+=`
        <g class="piece" data-row="${n}" data-col="${r}" data-side="${i.side}" data-type="${i.type}">
          <title>${l} (${i.side===s.Red?`Merah`:`Hitam`}) — Klik untuk lihat langkah legal</title>
          <circle cx="${a}" cy="${o}" r="${y}" fill="${u}" stroke="${d}" stroke-width="2"/>
          <circle cx="${a}" cy="${o}" r="${y-4}" fill="none" stroke="${f}" stroke-width="0.8" opacity="0.5"/>
          <text x="${a}" y="${o}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="${f}" font-weight="bold" style="pointer-events:none;">${c}</text>
        </g>`}return t}function A(e){let{board:t}=e;return E=t,`
    <svg
      viewBox="0 0 ${m} ${h}"
      xmlns="http://www.w3.org/2000/svg"
      class="papan-svg"
      role="img"
      aria-label="Papan Xiangqi 9×10"
    >
      <rect x="0" y="0" width="${m}" height="${h}" fill="#f5deb3" rx="4"/>
      ${D()}
      ${O()}
      ${k(t)}
    </svg>`}function j(e,t,n=!0){E=t,w=null,T=[],e.innerHTML=`
    <div class="papan-container">
      <a href="#" class="papan-back-btn" id="btn-back-beranda">← Kembali ke Beranda</a>
      <div class="papan-wrapper" id="papan-wrapper">
        ${A({board:t})}
      </div>
    </div>
  `;let r=e.querySelector(`#btn-back-beranda`);if(r&&r.addEventListener(`click`,e=>{e.preventDefault(),w=null,T=[],window.dispatchEvent(new CustomEvent(`navigate-beranda`))}),!n)return;let i=e.querySelector(`.papan-svg`);i&&i.addEventListener(`click`,n=>{let r=n.target.closest(`.piece`);if(!r){w=null,T=[],M(e,t);return}let i=parseInt(r.dataset.row||``,10)+1,a=parseInt(r.dataset.col||``,10);isNaN(i)||isNaN(a)||(w={baris:i,kolom:a},T=p(t,w),M(e,t))})}function M(e,t){let n=e.querySelector(`#papan-wrapper`);n&&(n.innerHTML=A({board:t}))}function N(e){let t=Array.from({length:10},()=>Array.from({length:9},()=>null));for(let[n,r]of Object.entries(e)){if(r===null||r===``)continue;let[e,i]=n.split(`-`),a=parseInt(e,10),c=parseInt(i,10);if(isNaN(a)||isNaN(c)||a<1||a>10||c<0||c>8)throw Error(`Invalid position: ${n}`);let[l,u]=r.split(`.`),d=l,f=u;if(!Object.values(s).includes(d))throw Error(`Invalid side: ${l} at ${n}`);if(!Object.values(o).includes(f))throw Error(`Invalid piece type: ${u} at ${n}`);t[a-1][c]={type:f,side:d}}return t}function P(){return N({"1-0":`red.che`,"1-1":`red.ma`,"1-2":`red.xiang`,"1-3":`red.shi`,"1-4":`red.jiang`,"1-5":`red.shi`,"1-6":`red.xiang`,"1-7":`red.ma`,"1-8":`red.che`,"3-1":`red.pao`,"3-7":`red.pao`,"4-0":`red.bing`,"4-2":`red.bing`,"4-4":`red.bing`,"4-6":`red.bing`,"4-8":`red.bing`,"7-0":`black.bing`,"7-2":`black.bing`,"7-4":`black.bing`,"7-6":`black.bing`,"7-8":`black.bing`,"8-1":`black.pao`,"8-7":`black.pao`,"10-0":`black.che`,"10-1":`black.ma`,"10-2":`black.xiang`,"10-3":`black.shi`,"10-4":`black.jiang`,"10-5":`black.shi`,"10-6":`black.xiang`,"10-7":`black.ma`,"10-8":`black.che`})}function F(e){return{soal:e,currentIndex:0,jawaban:Array(e.length).fill(null),selesai:!1}}function I(e,t){let n=e.soal[e.currentIndex],r=t===n.kunci;return e.jawaban[e.currentIndex]=t,{benar:r,kunci:n.kunci,penjelasan:n.penjelasan}}function L(e){e.currentIndex++,e.currentIndex>=e.soal.length&&(e.selesai=!0)}function R(e){let t=0;for(let n=0;n<e.soal.length;n++)e.jawaban[n]===e.soal[n].kunci&&t++;return{benar:t,total:e.soal.length,persen:Math.round(t/e.soal.length*100)}}function z(e){let t=[];for(let n=0;n<e.soal.length;n++)e.jawaban[n]!==null&&e.jawaban[n]!==e.soal[n].kunci&&t.push(e.soal[n]);return t}var B=null,V={},H=null;function U(e,t){B=F(t.soal),V=t.boardMap||{},H=t.onSelesai||null,W(e,t.judulModul)}function W(e,t){if(!B||B.selesai){q(e,t);return}let n=B.soal[B.currentIndex],r=B.soal.length,i=B.currentIndex+1,a=``;n.boardKey&&V[n.boardKey]&&(a=`
      <div class="quiz-board">
        ${A({board:N(V[n.boardKey]),showCoordinates:!1})}
      </div>`);let o=n.pilihan.map((e,t)=>`
    <button class="quiz-pilihan-btn" data-index="${t}" type="button">
      <span class="quiz-pilihan-label">${String.fromCharCode(65+t)}</span>
      <span class="quiz-pilihan-text">${e}</span>
    </button>`).join(``);e.innerHTML=`
    <div class="quiz-container">
      <a href="#" class="papan-back-btn" id="btn-back-modul">← Kembali ke Daftar Modul</a>
      <div class="quiz-header">
        <h2 class="quiz-judul">${t}</h2>
        <p class="quiz-progress">Soal ${i} dari ${r}</p>
      </div>
      ${a}
      <div class="quiz-soal">
        <p class="quiz-pertanyaan">${n.pertanyaan}</p>
      </div>
      <div class="quiz-pilihan">
        ${o}
      </div>
      <div class="quiz-feedback" id="quiz-feedback" style="display:none;"></div>
      <div class="quiz-actions" id="quiz-actions" style="display:none;">
        <button class="quiz-lanjut-btn" id="btn-lanjut">Lanjut →</button>
      </div>
    </div>
  `,G(e,t)}function G(e,t){let n=e.querySelector(`#btn-back-modul`);n&&n.addEventListener(`click`,e=>{e.preventDefault(),B=null,window.dispatchEvent(new CustomEvent(`navigate-beranda`))}),e.querySelectorAll(`.quiz-pilihan-btn`).forEach(n=>{n.addEventListener(`click`,()=>{!B||B.selesai||K(e,parseInt(n.dataset.index||``,10),t)})});let r=e.querySelector(`#btn-lanjut`);r&&r.addEventListener(`click`,()=>{B&&(L(B),W(e,t))})}function K(e,t,n){if(!B)return;let r=I(B,t);e.querySelectorAll(`.quiz-pilihan-btn`).forEach(e=>{e.disabled=!0;let n=parseInt(e.dataset.index||``,10);n===r.kunci?e.classList.add(`quiz-pilihan--benar`):n===t&&!r.benar&&e.classList.add(`quiz-pilihan--salah`)});let i=e.querySelector(`#quiz-feedback`);i&&(i.style.display=`block`,i.innerHTML=`
      <div class="quiz-feedback__icon">${r.benar?`✅`:`❌`}</div>
      <div class="quiz-feedback__status">${r.benar?`Benar!`:`Salah`}</div>
      <div class="quiz-feedback__penjelasan">${r.penjelasan}</div>
    `);let a=e.querySelector(`#quiz-actions`);a&&(a.style.display=`block`)}function q(e,t){if(!B)return;let n=R(B),r=z(B),i=n.persen>=70;e.innerHTML=`
    <div class="quiz-container quiz-skor">
      <div class="quiz-header">
        <h2 class="quiz-judul">${t} — Hasil</h2>
      </div>
      <div class="quiz-skor__ring">
        <div class="quiz-skor__nilai">${n.persen}%</div>
        <div class="quiz-skor__detail">${n.benar} / ${n.total} benar</div>
      </div>
      <div class="quiz-skor__status ${i?`lulus`:`gagal`}">
        ${i?`🎉 Modul Selesai! Bagus sekali!`:`📚 Coba lagi — minimal 70% untuk lulus`}
      </div>
      ${r.length>0?`
        <div class="quiz-ulang">
          <p>Sempurnakan pemahamanmu: ${r.length} soal bisa diulang</p>
          <button class="quiz-ulang-btn" id="btn-ulang-salah">🔄 Ulangi Soal yang Salah</button>
        </div>`:``}
      <div class="quiz-actions">
        <button class="quiz-back-btn" id="btn-back-to-modules">← Kembali ke Daftar Modul</button>
      </div>
    </div>
  `,H&&H(n);let a=e.querySelector(`#btn-ulang-salah`);a&&r.length>0&&a.addEventListener(`click`,()=>{B&&(B.selesai=!1,B.soal=r,B.currentIndex=0,B.jawaban=Array(r.length).fill(null),W(e,`${t} (Ulang)`))});let o=e.querySelector(`#btn-back-to-modules`);o&&o.addEventListener(`click`,()=>{B=null,window.dispatchEvent(new CustomEvent(`navigate-beranda`))})}var J=[{id:`fo-1`,pertanyaan:`Dua Jenderal (Raja) di kolom yang sama tanpa bidak di antaranya disebut...`,pilihan:[`Flying General`,`General Face-off`,`Double Check`,`Perpetual Check`],kunci:1,penjelasan:`General Face-off adalah kondisi ilegal di mana dua Jenderal saling berhadapan di kolom yang sama tanpa ada bidak penghalang. Aturan ini unik di xiangqi dan tidak ada di catur Barat.`,boardKey:null},{id:`fo-2`,pertanyaan:`Perhatikan posisi: Merah Jiang di e1, Hitam Jiang di e10, tidak ada bidak di kolom e. Apakah posisi ini legal?`,pilihan:[`Legal, karena masih di palace masing-masing`,`Ilegal — ini adalah General Face-off`,`Legal selama bukan giliran Merah`,`Ilegal hanya jika Merah yang menciptakan posisi ini`],kunci:1,penjelasan:`Posisi ini ilegal terlepas dari giliran siapa. Dua Jenderal tidak boleh saling berhadapan di kolom yang sama tanpa penghalang — ini adalah pelanggaran aturan General Face-off.`,boardKey:`fo-faceoff-simple`},{id:`fo-3`,pertanyaan:`Merah Jiang di e1, Hitam Jiang di e10, ada Merah Bing di e5. Merah memindahkan Bing dari e5 ke f5. Apakah langkah ini legal? (Petunjuk: apa yang terjadi setelah Bing pindah?)`,pilihan:[`Legal, Bing boleh pindah ke kolom f`,`Ilegal — menciptakan General Face-off`,`Legal, karena Bing bukan Jenderal`,`Ilegal — Bing tidak bisa pindah ke samping`],kunci:1,penjelasan:`Setelah Bing pindah dari e5, tidak ada lagi bidak di antara dua Jenderal di kolom e. Ini menciptakan General Face-off — posisi yang ilegal. Aturan face-off berlaku untuk SEMUA bidak, bukan hanya Jenderal.`,boardKey:`fo-blocker-move`},{id:`fo-4`,pertanyaan:`Apa itu Flying General dalam xiangqi?`,pilihan:[`Jenderal yang bisa terbang melewati sungai`,`Teknik ofensif: mengunci bidak lawan di antara dua Jenderal yang berhadapan`,`Jenderal yang tidak bisa bergerak sama sekali`,`Aturan khusus saat Jenderal berada di baris terakhir`],kunci:1,penjelasan:`Flying General adalah aplikasi ofensif dari aturan face-off. Jika dua Jenderal sudah berhadapan (tapi masih ada 1 blocker di antaranya), blocker tersebut tidak bisa pindah dari kolom itu — artinya 'terkunci'. Pemain bisa memanfaatkan ini untuk melumpuhkan bidak lawan.`,boardKey:null},{id:`fo-5`,pertanyaan:`Merah Jiang di e1, Hitam Jiang di e10, Hitam Pao di e5 (satu-satunya blocker). Giliran Hitam. Apakah Hitam boleh memindahkan Pao-nya ke d5?`,pilihan:[`Boleh, Pao bisa bergerak bebas`,`Boleh, karena Pao milik Hitam sendiri`,`Tidak boleh — menciptakan General Face-off`,`Boleh, karena blocker boleh pindah selama bukan Jenderal`],kunci:2,penjelasan:`Tidak boleh. Setelah Pao pindah, dua Jenderal akan saling berhadapan tanpa penghalang (face-off). Aturan face-off berlaku untuk SEMUA bidak — bahkan bidak sendiri.`,boardKey:`fo-blocker-black`},{id:`fo-6`,pertanyaan:`Merah Jiang di e1, Hitam Jiang di e10, Merah Bing di e5, Merah Pao di e7. Merah memindahkan Bing dari e5 ke e6. Apakah langkah ini legal?`,pilihan:[`Ilegal — Bing tidak bisa mundur`,`Legal — Pao masih memblokir face-off di e7`,`Ilegal — menciptakan face-off`,`Legal — Bing boleh pindah sepanjang kolom e`],kunci:1,penjelasan:`Legal! Meskipun Bing pindah dari e5, masih ada Pao di e7 yang memblokir face-off. Face-off hanya terjadi jika TIDAK ADA SATUPUN bidak di antara dua Jenderal di kolom yang sama. Dengan dua blocker, memindahkan salah satu masih aman.`,boardKey:`fo-multi-blocker`},{id:`fo-7`,pertanyaan:`Dalam posisi awal xiangqi, apakah mungkin terjadi General Face-off?`,pilihan:[`Ya, karena dua Jenderal selalu di kolom yang sama (e)`,`Tidak, karena ada banyak bidak di antara dua Jenderal di kolom e`,`Ya, jika salah satu Jenderal bergerak duluan`,`Tidak, karena Jenderal tidak bisa melihat satu sama lain`],kunci:1,penjelasan:`Tidak mungkin. Meskipun dua Jenderal berada di kolom e yang sama, di antara mereka ada Prajurit (e4 dan e7) dan berpotensi bidak lain. Face-off hanya terjadi jika SEMUA bidak di antara dua Jenderal sudah tidak ada di kolom tersebut.`,boardKey:null},{id:`fo-8`,pertanyaan:`Merah Jiang di e2, Hitam Jiang di e10. Merah menggerakkan Jiang-nya dari e2 ke e1. Apakah ini legal? (Petunjuk: cek apa yang terjadi setelah pergerakan.)`,pilihan:[`Legal — mundur 1 langkah di dalam palace`,`Ilegal — Jenderal tidak bisa mundur`,`Legal — kolom berbeda jadi tidak face-off`,`Ilegal — menciptakan face-off karena setelah mundur, Merah Jiang di e1 berhadapan langsung dengan Hitam Jiang di e10 tanpa blocker`],kunci:3,penjelasan:`ILEGAL. Setelah Merah Jiang mundur ke e1, posisinya menjadi: Merah Jiang di e1, Hitam Jiang di e10 — tidak ada blocker di antaranya di kolom e. Ini menciptakan General Face-off. Aturan dicek SETELAH langkah selesai, bukan sebelum.`,boardKey:null}],Y={"fo-faceoff-simple":{"1-4":`red.jiang`,"10-4":`black.jiang`},"fo-blocker-move":{"1-4":`red.jiang`,"5-4":`red.bing`,"10-4":`black.jiang`},"fo-blocker-black":{"1-4":`red.jiang`,"5-4":`black.pao`,"10-4":`black.jiang`},"fo-multi-blocker":{"1-4":`red.jiang`,"5-4":`red.bing`,"7-4":`red.pao`,"10-4":`black.jiang`}},X=document.body;function Z(){a(X);let e=X.querySelector(`.js-btn-papan`);e&&e.addEventListener(`click`,e=>{e.preventDefault(),Q()}),X.querySelectorAll(`.modul-card`).forEach(e=>{e.addEventListener(`click`,t=>{e.dataset.modulId===`modul-1`&&$()})})}function Q(){j(X,P(),!0)}function $(){U(X,{soal:J,boardMap:Y,judulModul:`Modul 1 — General Face-off`,modulId:`modul-1`,onSelesai:e=>{let t={selesai:e.persen>=70,mulai:!0,skor:e.persen};localStorage.setItem(`progress-modul-1`,JSON.stringify(t))}})}window.addEventListener(`navigate-beranda`,()=>{Z()}),Z();