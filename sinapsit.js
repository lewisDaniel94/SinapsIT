document.documentElement.classList.add('js');
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const hd=$('.hdr'),pg=$('.pg');
addEventListener('scroll',()=>{hd.classList.toggle('sc',scrollY>20);pg.style.width=scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*100+'%'},{passive:true});
$('.burger').onclick=()=>$('.menu').classList.toggle('open');
$$('.menu a').forEach(a=>a.onclick=()=>$('.menu').classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%3)*.1+'s';io.observe(e)});
$$('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
/* Hero: red neuronal (sinapsis) + inclinación 3D */
const cv=$('#net');
if(cv){const x=cv.getContext('2d');let W,H,N=[],m={x:-999,y:-999};
const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;N=Array.from({length:Math.min(90,W*H/15000|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))};
rs();addEventListener('resize',()=>{if(cv.offsetWidth!==W)rs()});cv.parentElement.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();m={x:e.clientX-r.left,y:e.clientY-r.top}});
(function f(){x.clearRect(0,0,W,H);N.forEach((a,i)=>{if(!rm){a.x+=a.vx;a.y+=a.vy}if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
x.fillStyle='rgba(85,200,212,.8)';x.beginPath();x.arc(a.x,a.y,2,0,7);x.fill();
for(let j=i+1;j<N.length;j++){const b=N[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle=`rgba(85,200,212,${.28*(1-d/130)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
const dm=Math.hypot(a.x-m.x,a.y-m.y);if(dm<160){x.strokeStyle=`rgba(255,255,255,${.4*(1-dm/160)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(m.x,m.y);x.stroke()}});requestAnimationFrame(f)})();
const t=$('.tilt');if(t&&!rm){cv.parentElement.addEventListener('pointermove',e=>{if(e.pointerType&&e.pointerType!=='mouse')return;const a=e.clientX/innerWidth-.5,b=e.clientY/innerHeight-.5;t.style.transform=`perspective(900px) rotateY(${a*16}deg) rotateX(${-b*16}deg)`})}}
/* Servicios: pestañas */
function tab(id){$$('.tl button').forEach(b=>b.classList.toggle('on',b.dataset.t==id));$$('.pn').forEach(p=>p.classList.toggle('on',p.id==id))}
$$('.tl button').forEach(b=>b.onclick=()=>{tab(b.dataset.t);history.replaceState(0,0,'#'+b.dataset.t)});
if($('.tl')){const h=location.hash.slice(1),el=h?document.getElementById(h):null;tab(el&&el.classList.contains('pn')?h:$('.tl button').dataset.t)}
/* Contacto: formulario a WhatsApp */
const f=$('#wf');if(f)f.onsubmit=e=>{e.preventDefault();const v=i=>$('#'+i).value;
open('https://wa.me/584126613818?text='+encodeURIComponent(`Hola, mi nombre es *${v('n')}*.\nMi correo es: *${v('m')}*.\n\n¿Qué servicio o proyecto deseo?\n_${v('d')}_`),'_blank')};

setTimeout(()=>$$('.rv').forEach(e=>e.classList.add('on')),2500);

/* Evita el zoom por gestos (pellizco) en Safari/iOS */
['gesturestart','gesturechange','gestureend'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault(),{passive:false}));
/* Diagnóstico: abre la web con ?debug al final para ver las medidas reales del celular */
if(/[?&]debug/.test(location.search)){const d=document.createElement('pre');d.style.cssText='position:fixed;left:6px;bottom:6px;z-index:999;background:#000c;color:#0f0;font:11px/1.3 monospace;padding:8px;border-radius:8px;max-width:92vw;white-space:pre-wrap;pointer-events:none';
const u=()=>{const v=window.visualViewport;let w='',mx=0;$$('body *').forEach(e=>{if(e.closest('.tl')||getComputedStyle(e).position==='fixed')return;const r=e.getBoundingClientRect();if(r.right>mx){mx=r.right;w=e.tagName.toLowerCase()+'.'+e.className}});
d.textContent='innerWidth '+innerWidth+'\nscreen '+screen.width+'\nzoom '+(v?v.scale.toFixed(2):'?')+'\nscrollWidth '+document.documentElement.scrollWidth+'\nmeta '+($('meta[name=viewport]')||{}).content+'\nmás ancho '+w+' ('+Math.round(mx)+')'};
document.body.append(d);u();addEventListener('resize',u);if(window.visualViewport)visualViewport.addEventListener('resize',u);setInterval(u,1000)}






/* ===== Popup de Oferta - Sinapsit (reemplaza tu script anterior) ===== */
document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("promo-popup");
  if (!popup) return;

  var card = popup.querySelector(".promo-card");
  var closeBtn = document.getElementById("close-popup");
  var skipBtn = document.getElementById("promo-skip");
  var cta = document.getElementById("promo-cta");
  var fab = document.getElementById("promo-fab");
  var numEl = document.getElementById("promo-num");
  var barFill = document.getElementById("promo-bar-fill");
  var canvas = document.getElementById("promo-confetti");
  var els = {
    d: document.getElementById("pt-d"), h: document.getElementById("pt-h"),
    m: document.getElementById("pt-m"), s: document.getElementById("pt-s")
  };

  /* ---------- Configuración ---------- */
  var CONFIG = {
    delay: 1200,                 // ms tras cargar la página
    start: new Date(new Date().getFullYear(), 10, 1),                 // 1 nov (inicio de campaña)
    end: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59),      // 31 dic 23:59:59
    storageKey: "sinapsit_promo_closed",
    hideHours: 24                // no volver a mostrar automáticamente durante X horas
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lastFocus = null, timerId = null, shownOnce = false;

  /* Si la promo ya venció, no mostrar nada */
  if (Date.now() >= CONFIG.end.getTime()) return;

  /* ---------- Utilidades ---------- */
  function pad(n) { return String(n).padStart(2, "0"); }

  function recentlyClosed() {
    try {
      var t = parseInt(localStorage.getItem(CONFIG.storageKey), 10);
      return t && (Date.now() - t) < CONFIG.hideHours * 3600000;
    } catch (e) { return false; }
  }
  function markClosed() {
    try { localStorage.setItem(CONFIG.storageKey, String(Date.now())); } catch (e) {}
  }

  /* ---------- Cuenta regresiva ---------- */
  function setVal(el, v) {
    if (el.textContent !== v) {
      el.textContent = v;
      if (!reduceMotion) { el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); }
    }
  }
  function updateTimer() {
    var left = CONFIG.end.getTime() - Date.now();
    if (left <= 0) {
      clearInterval(timerId);
      closePopup(true);
      if (fab) fab.hidden = true;
      return;
    }
    var s = Math.floor(left / 1000);
    setVal(els.d, pad(Math.floor(s / 86400)));
    setVal(els.h, pad(Math.floor(s % 86400 / 3600)));
    setVal(els.m, pad(Math.floor(s % 3600 / 60)));
    setVal(els.s, pad(s % 60));
  }
  function updateBar() {
    var total = CONFIG.end - CONFIG.start;
    var remaining = Math.max(0, Math.min(1, (CONFIG.end - Date.now()) / total));
    barFill.style.width = (remaining * 100).toFixed(1) + "%";
  }

  /* ---------- Contador animado 0 → 30 ---------- */
  function countUp() {
    var to = parseInt(numEl.dataset.to, 10) || 30;
    if (reduceMotion) { numEl.textContent = to; return; }
    var t0 = performance.now(), dur = 1100;
    (function step(now) {
      var p = Math.min((now - t0) / dur, 1);
      numEl.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ---------- Confeti ligero ---------- */
  function confetti() {
    if (reduceMotion || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
    var colors = ["#55c8d4", "#8aa4ff", "#5fe0a8", "#ffffff", "#ffd36b"];
    var parts = [];
    for (var i = 0; i < 70; i++) {
      parts.push({
        x: W / 2 + (Math.random() - .5) * 120, y: H * 0.35,
        vx: (Math.random() - .5) * 11, vy: -Math.random() * 11 - 3,
        w: 5 + Math.random() * 6, h: 3 + Math.random() * 5,
        r: Math.random() * 6.28, vr: (Math.random() - .5) * .35,
        c: colors[(Math.random() * colors.length) | 0]
      });
    }
    var t0 = performance.now();
    (function frame(now) {
      var life = now - t0;
      ctx.clearRect(0, 0, W, H);
      parts.forEach(function (p) {
        p.vy += .28; p.vx *= .992; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.globalAlpha = Math.max(0, 1 - life / 2600);
        ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (life < 2600) requestAnimationFrame(frame); else ctx.clearRect(0, 0, W, H);
    })(t0);
  }

  /* ---------- Abrir / cerrar ---------- */
  function openPopup() {
    lastFocus = document.activeElement;
    popup.hidden = false;
    if (fab) { fab.classList.remove("show"); }
    document.documentElement.style.overflow = "hidden";
    updateTimer(); updateBar();
    clearInterval(timerId); timerId = setInterval(updateTimer, 1000);
    barFill.style.width = "0";
    requestAnimationFrame(function () {
      popup.classList.add("is-open");
      updateBar();
      if (!shownOnce) { countUp(); setTimeout(confetti, 350); shownOnce = true; }
      closeBtn.focus({ preventScroll: true });
    });
  }

  function closePopup(silent) {
    popup.classList.remove("is-open");
    card.style.transform = ""; card.style.transition = "";
    document.documentElement.style.overflow = "";
    setTimeout(function () { popup.hidden = true; }, 350);
    if (!silent) {
      markClosed();
      if (fab && Date.now() < CONFIG.end.getTime()) {
        fab.hidden = false;
        requestAnimationFrame(function () { fab.classList.add("show"); });
      }
    }
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  /* ---------- Eventos ---------- */
  closeBtn.addEventListener("click", function () { closePopup(); });
  skipBtn.addEventListener("click", function () { closePopup(); });
  popup.addEventListener("click", function (e) { if (e.target === popup) closePopup(); });
  if (fab) fab.addEventListener("click", openPopup);
  cta.addEventListener("click", function () { markClosed(); });

  document.addEventListener("keydown", function (e) {
    if (popup.hidden) return;
    if (e.key === "Escape") closePopup();
    if (e.key === "Tab") {            // mantener el foco dentro del popup
      var f = popup.querySelectorAll("button, a[href]");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Deslizar hacia abajo para cerrar (móvil) */
  var startY = 0, dy = 0, dragging = false;
  card.addEventListener("touchstart", function (e) {
    if (window.innerWidth > 560 || card.scrollTop > 0) return;
    startY = e.touches[0].clientY; dy = 0; dragging = true; card.style.transition = "none";
  }, { passive: true });
  card.addEventListener("touchmove", function (e) {
    if (!dragging) return;
    dy = Math.max(0, e.touches[0].clientY - startY);
    card.style.transform = "translateY(" + dy + "px)";
  }, { passive: true });
  card.addEventListener("touchend", function () {
    if (!dragging) return;
    dragging = false; card.style.transition = "";
    if (dy > 110) closePopup(); else card.style.transform = "";
  });

  /* ---------- Disparadores ---------- */
  if (recentlyClosed()) {
    // Ya la vio hace poco: solo mostramos el botón flotante
    if (fab) { fab.hidden = false; setTimeout(function () { fab.classList.add("show"); }, 1500); }
    updateTimer();
    timerId = setInterval(updateTimer, 1000);
  } else {
    setTimeout(openPopup, CONFIG.delay);
    // Intención de salida en escritorio (si todavía no la ha visto)
    document.addEventListener("mouseout", function onExit(e) {
      if (e.clientY <= 0 && popup.hidden && !shownOnce && window.innerWidth > 900) {
        document.removeEventListener("mouseout", onExit);
        openPopup();
      }
    });
  }
});



