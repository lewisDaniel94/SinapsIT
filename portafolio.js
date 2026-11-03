/* ===== Portafolio: filtros, galería y ventana de detalle ===== */
(()=>{
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
if(!$('#pgrid'))return;

const ico=p=>`<svg class="pi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I={
  eye:ico('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
  check:ico('<polyline points="20 6 9 17 4 12"/>'),
  ext:ico('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'),
  prev:ico('<polyline points="15 18 9 12 15 6"/>'),
  next:ico('<polyline points="9 18 15 12 9 6"/>')
};

const C={all:'Todos',restaurantes:'Restaurantes',citas:'Citas y reservas',tiendas:'Tiendas y catálogos',personal:'Personal',sorpresas:'Sorpresas digitales'};
const P=[
['tiendas','Multiservicios Ovañez','Catálogo web con pre-orden',
 'Muestra con fotos y precios los productos de una empresa de suministros: papelería, empaque, seguridad industrial y rollos térmicos. El cliente arma su pre-orden y la envía por WhatsApp.',
 ['Catálogo por categorías con buscador','Pre-orden con total estimado','Envío del pedido por WhatsApp'],
 [['Ver página en vivo','https://multiservicios-ova-ez.vercel.app/']]],
['restaurantes','Restaurante con menú y administrador','Menú digital con panel de control',
 'Un menú digital para restaurantes y locales de comida: el cliente ve los platos con foto y precio, elige cantidades y envía su pedido. El dueño entra a un panel privado para gestionar el menú y los pedidos.',
 ['Menú con fotos, descripciones y precios','Carrito de compras','Panel de administración con inicio de sesión'],
 [['Ver menú en vivo','https://tiendaonlinelewis.vercel.app/'],['Ver panel de administración','https://tiendaonlinelewis.vercel.app/login.html']]],
['restaurantes','Sistema de pedidos para restaurante','Pedidos en línea',
 'Permite que los clientes pidan en línea hamburguesas, pizzas y salchipapas para recibirlas en casa o retirarlas en el local, sin llamadas ni confusiones. Ideal para restaurantes y negocios de comida rápida.',
 ['Pedido en línea con carrito','Entrega a domicilio o retiro en el local','Botón flotante de WhatsApp'],
 [['Ver página en vivo','https://restaurante-online-yl.vercel.app/']]],
['citas','Brothers Barber Shop','Sistema de citas para barbería',
 'Sistema de reservas para una barbería a domicilio. El cliente elige su servicio y agenda su cita en línea, y el barbero administra las reservas desde un panel propio.',
 ['Agenda de citas en línea','Catálogo de servicios','Panel de administración para gestionar reservas','Contacto directo por WhatsApp'],
 [['Ver página en vivo','https://barberiabrotherbarbershop.vercel.app/'],['Ver panel de administración','https://barberiabrotherbarbershop.vercel.app/admin.html']]],
['citas','Uñas y Belleza','Sistema de citas para salón de belleza',
 'Página para un negocio de manicura y belleza que permite reservar en un minuto, conocer los servicios y ver el trabajo realizado. Su diseño colorido transmite la personalidad de la marca.',
 ['Reserva de citas rápida','Servicios y nail art a la vista','Selector de idioma español e inglés','Contacto directo por WhatsApp'],
 [['Ver página en vivo','https://manicuristaestrella.vercel.app/']]],
['tiendas','Catálogo de ropa urbana','Catálogo para tienda de ropa',
 'Catálogo digital para una tienda de ropa con estilo urbano. Presenta las colecciones con fotografía a gran formato y permite guardar favoritos y consultar por WhatsApp.',
 ['Fotografías a gran formato','Lista de favoritos','Contacto directo por WhatsApp'],
 [['Ver página en vivo','https://lewiskateropaestilourbano.vercel.app/']]],
['personal','Portafolio web profesional','Página personal',
 'Portafolio para presentar la trayectoria, los logros y los datos de contacto de un profesional. Ayuda a destacar en procesos de selección y a que nuevos contactos conozcan su perfil.',
 ['Presentación profesional con foto','Modo claro y oscuro','Enlaces a redes sociales'],
 [['Ver página en vivo','https://portafolioyanioskagonzalez.vercel.app/']]],
['sorpresas','Web de cumpleaños','Página sorpresa',
 'Una tarjeta de cumpleaños interactiva para sorprender a alguien especial. Se abre con un botón, acompaña el mensaje con animaciones y sonido, y se comparte con un simple enlace.',
 ['Apertura animada de la sorpresa','Pensada para verse y escucharse en el celular','Se comparte por enlace'],
 [['Ver página en vivo','https://felizcumpletiayoli.vercel.app/']]],
['sorpresas','Web de amor','Página sorpresa',
 'Una página romántica para aniversarios, San Valentín o cualquier momento especial. Revela un mensaje personalizado con animaciones y música, y se comparte con un enlace.',
 ['Apertura animada de la sorpresa','Pensada para verse y escucharse en el celular','Se comparte por enlace'],
 [['Ver página en vivo','https://nuestrawebdeamor.vercel.app/']]]
].map(([c,n,t,d,f,l],i)=>({c,n,t,d,f,l,i,img:`img/p${String(i+2).padStart(2,'0')}.jpg`}));

/* Filtros y galería */
let cat='all';
$('#pchips').innerHTML=Object.entries(C).map(([k,v])=>`<button type="button" data-k="${k}" class="${k==='all'?'on':''}">${v}</button>`).join('');
function draw(){
  const l=P.filter(p=>cat==='all'||p.c===cat);
  $('#pgrid').innerHTML=l.map((p,k)=>`<button type="button" class="pcard" data-i="${p.i}" style="--d:${k*55}ms"><span class="pim"><img src="${p.img}" alt="Captura de ${p.n}" loading="lazy"><span class="pgo">${I.eye} Ver detalles</span></span><span class="ptx"><b>${p.n}</b><small>${p.t}</small></span></button>`).join('');
  $('#pct').textContent=`${l.length} ${l.length===1?'proyecto':'proyectos'}`;
}
$('#pchips').onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  cat=b.dataset.k;$$('#pchips button').forEach(x=>x.classList.toggle('on',x===b));draw();
};

/* Ventana de detalle */
const dlg=$('#pdlg');let cur=0;
function show(i){
  cur=(i+P.length)%P.length;const p=P[cur];
  $('#pdi').src=p.img;$('#pdi').alt='Captura de '+p.n;
  $('#pdc').textContent=p.t;$('#pdt').textContent=p.n;$('#pdd').textContent=p.d;
  $('#pdf').innerHTML=p.f.map(x=>`<li>${I.check}<span>${x}</span></li>`).join('');
  $('#pda').innerHTML=p.l.map(([t,u],k)=>`<a class="btn${k?' ghost':''}" href="${u}" target="_blank" rel="noopener">${t} ${I.ext}</a>`).join('');
  $('#pdn').textContent=`${cur+1} de ${P.length}`;
  const g=$('.pdg');g.classList.remove('psw');void g.offsetWidth;g.classList.add('psw');
  if(!dlg.open)dlg.showModal();
}
$('#pgrid').onclick=e=>{const c=e.target.closest('.pcard');if(c)show(+c.dataset.i)};
$('#pdx').onclick=()=>dlg.close();
$('#pdp').onclick=()=>show(cur-1);
$('#pdnx').onclick=()=>show(cur+1);
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});

draw();
})();
