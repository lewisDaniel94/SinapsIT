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
if($('.tl')){const h=location.hash.slice(1);tab($('#'+h)?.classList.contains('pn')?h:$('.tl button').dataset.t)}
/* Contacto: formulario a WhatsApp */
const f=$('#wf');if(f)f.onsubmit=e=>{e.preventDefault();const v=i=>$('#'+i).value;
open('https://wa.me/584126613818?text='+encodeURIComponent(`Hola, mi nombre es *${v('n')}*.\nMi correo es: *${v('m')}*.\n\n¿Qué servicio o proyecto deseo?\n_${v('d')}_`),'_blank')};

setTimeout(()=>$$('.rv').forEach(e=>e.classList.add('on')),2500);
