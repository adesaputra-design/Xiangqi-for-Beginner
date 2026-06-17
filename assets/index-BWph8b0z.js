(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`modul-1`,nama:`General Face-off (Raja Berhadapan)`,estimasiMenit:15},{id:`modul-2`,nama:`Meriam (Pao)`,estimasiMenit:15},{id:`modul-3`,nama:`Prajurit (Bing)`,estimasiMenit:10},{id:`modul-4`,nama:`Kuda (Ma)`,estimasiMenit:15},{id:`modul-5`,nama:`Gajah (Xiang)`,estimasiMenit:10}];function t(e){try{let t=localStorage.getItem(`progress-${e}`);if(!t)return`segera-hadir`;let n=JSON.parse(t);return n?.selesai===!0?`selesai`:n?.mulai===!0?`lanjutkan`:`segera-hadir`}catch{return`segera-hadir`}}function n(e){switch(e){case`selesai`:return`Selesai ✓`;case`lanjutkan`:return`Lanjutkan →`;case`segera-hadir`:return`Segera Hadir`}}function r(e){switch(e){case`selesai`:return`status-selesai`;case`lanjutkan`:return`status-lanjutkan`;case`segera-hadir`:return`status-segera`}}function i(e){let i=t(e.id),a=n(i),o=r(i);return`
    <li class="modul-card">
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
      </section>

      <footer class="beranda__footer">
        <p>Belajar xiangqi tidak pernah semudah ini 🇨🇳</p>
      </footer>
    </div>
  `}var o=document.body;a(o);