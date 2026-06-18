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
        <div class="beranda__papan-link">
          <a href="#" class="btn-papan js-btn-papan">🏁 Lihat Papan Posisi Awal</a>
        </div>
      </section>

      <footer class="beranda__footer">
        <p>Belajar xiangqi tidak pernah semudah ini 🇨🇳</p>
      </footer>
    </div>
  `}var o=function(e){return e.Jiang=`jiang`,e.Shi=`shi`,e.Xiang=`xiang`,e.Ma=`ma`,e.Che=`che`,e.Pao=`pao`,e.Bing=`bing`,e}({}),s=function(e){return e.Red=`red`,e.Black=`black`,e}({}),c=540,l=600,u=40,d=(c-u*2)/8,f=(l-u*2)/9,p=20;function m(e){return u+e*d}function h(e){return u+(10-e)*f}var g={[o.Jiang]:`Raja (Jiang)`,[o.Shi]:`Menteri (Shi)`,[o.Xiang]:`Gajah (Xiang)`,[o.Ma]:`Kuda (Ma)`,[o.Che]:`Benteng (Che)`,[o.Pao]:`Meriam (Pao)`,[o.Bing]:`Prajurit (Bing)`},_={[o.Jiang]:{red:`帥`,black:`將`},[o.Shi]:{red:`仕`,black:`士`},[o.Xiang]:{red:`相`,black:`象`},[o.Ma]:{red:`傌`,black:`馬`},[o.Che]:{red:`俥`,black:`車`},[o.Pao]:{red:`炮`,black:`砲`},[o.Bing]:{red:`兵`,black:`卒`}};function v(){let e=``;for(let t=0;t<10;t++){let n=h(t+1);e+=`<line x1="${m(0)}" y1="${n}" x2="${m(8)}" y2="${n}" stroke="#3d2b1f" stroke-width="1"/>`}for(let t=1;t<=7;t++){let n=m(t);e+=`<line x1="${n}" y1="${h(6)}" x2="${n}" y2="${h(10)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${n}" y1="${h(1)}" x2="${n}" y2="${h(5)}" stroke="#3d2b1f" stroke-width="1"/>`}for(let t of[0,8]){let n=m(t);e+=`<line x1="${n}" y1="${h(1)}" x2="${n}" y2="${h(10)}" stroke="#3d2b1f" stroke-width="1.5"/>`}e+=`<line x1="${m(3)}" y1="${h(1)}" x2="${m(5)}" y2="${h(3)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${m(5)}" y1="${h(1)}" x2="${m(3)}" y2="${h(3)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${m(3)}" y1="${h(8)}" x2="${m(5)}" y2="${h(10)}" stroke="#3d2b1f" stroke-width="1"/>`,e+=`<line x1="${m(5)}" y1="${h(8)}" x2="${m(3)}" y2="${h(10)}" stroke="#3d2b1f" stroke-width="1"/>`;let t=(h(5)+h(6))/2;e+=`<text x="${c/2}" y="${t}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="#8b7355" font-weight="bold" letter-spacing="8">楚 河　　　　漢 界</text>`;let n=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`];for(let t=0;t<9;t++){let r=m(t);e+=`<text x="${r}" y="${h(1)+18}" text-anchor="middle" font-size="10" fill="#6b5a40">${n[t]}</text>`,e+=`<text x="${r}" y="${h(10)-12}" text-anchor="middle" font-size="10" fill="#6b5a40">${n[t]}</text>`}for(let t=1;t<=10;t++){let n=h(t);e+=`<text x="${m(0)-14}" y="${n}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${t}</text>`,e+=`<text x="${m(8)+14}" y="${n}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${t}</text>`}for(let t of[0,8]){for(let n=2;n<=4;n++){if((n+t)%2==0)continue;let r=m(t),i=h(n);e+=`<line x1="${r-5}" y1="${i-5}" x2="${r+5}" y2="${i+5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`,e+=`<line x1="${r-5}" y1="${i+5}" x2="${r+5}" y2="${i-5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`}for(let n=7;n<=9;n++){if((n+t)%2==0)continue;let r=m(t),i=h(n);e+=`<line x1="${r-5}" y1="${i-5}" x2="${r+5}" y2="${i+5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`,e+=`<line x1="${r-5}" y1="${i+5}" x2="${r+5}" y2="${i-5}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`}}return e}function y(e){let t=``;for(let n=0;n<10;n++)for(let r=0;r<9;r++){let i=e[n][r];if(!i)continue;let a=m(r),o=h(n+1),c=_[i.type][i.side],l=g[i.type],u=i.side===s.Red?`#c0392b`:`#1a1a1a`,d=i.side===s.Red?`#922b21`:`#000000`,f=i.side===s.Red?`#f5deb3`:`#e8d5b7`;t+=`
        <g class="piece" data-row="${n}" data-col="${r}" data-side="${i.side}" data-type="${i.type}">
          <title>${l} (${i.side===s.Red?`Merah`:`Hitam`})</title>
          <circle cx="${a}" cy="${o}" r="${p}" fill="${u}" stroke="${d}" stroke-width="2"/>
          <circle cx="${a}" cy="${o}" r="${p-4}" fill="none" stroke="${f}" stroke-width="0.8" opacity="0.5"/>
          <text x="${a}" y="${o}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="${f}" font-weight="bold" style="pointer-events:none;">${c}</text>
        </g>`}return t}function b(e){let{board:t}=e;return`
    <svg
      viewBox="0 0 ${c} ${l}"
      xmlns="http://www.w3.org/2000/svg"
      class="papan-svg"
      role="img"
      aria-label="Papan Xiangqi 9×10"
    >
      <!-- Background -->
      <rect x="0" y="0" width="${c}" height="${l}" fill="#f5deb3" rx="4"/>

      <!-- Grid -->
      ${v()}

      <!-- Pieces -->
      ${y(t)}
    </svg>`}function x(e,t){e.innerHTML=`
    <div class="papan-container">
      <div class="papan-wrapper">
        ${b({board:t})}
      </div>
    </div>
  `}function S(e){let t=Array.from({length:10},()=>Array.from({length:9},()=>null));for(let[n,r]of Object.entries(e)){if(r===null||r===``)continue;let[e,i]=n.split(`-`),a=parseInt(e,10),c=parseInt(i,10);if(isNaN(a)||isNaN(c)||a<1||a>10||c<0||c>8)throw Error(`Invalid position: ${n}`);let[l,u]=r.split(`.`),d=l,f=u;if(!Object.values(s).includes(d))throw Error(`Invalid side: ${l} at ${n}`);if(!Object.values(o).includes(f))throw Error(`Invalid piece type: ${u} at ${n}`);t[a-1][c]={type:f,side:d}}return t}function C(){return S({"1-0":`red.che`,"1-1":`red.ma`,"1-2":`red.xiang`,"1-3":`red.shi`,"1-4":`red.jiang`,"1-5":`red.shi`,"1-6":`red.xiang`,"1-7":`red.ma`,"1-8":`red.che`,"3-1":`red.pao`,"3-7":`red.pao`,"4-0":`red.bing`,"4-2":`red.bing`,"4-4":`red.bing`,"4-6":`red.bing`,"4-8":`red.bing`,"7-0":`black.bing`,"7-2":`black.bing`,"7-4":`black.bing`,"7-6":`black.bing`,"7-8":`black.bing`,"8-1":`black.pao`,"8-7":`black.pao`,"10-0":`black.che`,"10-1":`black.ma`,"10-2":`black.xiang`,"10-3":`black.shi`,"10-4":`black.jiang`,"10-5":`black.shi`,"10-6":`black.xiang`,"10-7":`black.ma`,"10-8":`black.che`})}function w(e){a(e);let t=e.querySelector(`.js-btn-papan`);t&&t.addEventListener(`click`,()=>T(e))}function T(e){x(e,C());let t=e.querySelector(`.papan-wrapper`);if(t){let n=document.createElement(`a`);n.href=`#`,n.className=`papan-back-btn`,n.textContent=`← Kembali ke Beranda`,n.addEventListener(`click`,t=>{t.preventDefault(),w(e)}),t.parentElement?.insertBefore(n,t)}}var E=document.body;w(E);