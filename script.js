(function(){
var w=document.querySelector('.pin'),c=w.querySelector('.show'),s=w.querySelectorAll('.slide'),v=w.querySelector('.bgv'),cur=-1,tick=false,
rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(v.play){var pr=v.play();if(pr&&pr.catch)pr.catch(function(){})}
function upd(){tick=false;
var r=w.getBoundingClientRect(),h=w.offsetHeight-innerHeight,p=h>0?Math.min(1,Math.max(0,-r.top/h)):0,n=s.length,i=Math.min(n-1,Math.floor(p*n)),q=Math.min(1,p*n-i);
if(i!==cur){for(var k=0;k<n;k++)s[k].classList.toggle('on',k===i);cur=i}
s[i].style.setProperty('--q',q.toFixed(3));
c.style.setProperty('--p',p.toFixed(3));
if(!rm)v.style.transform='scale('+(1.02+p*0.16).toFixed(3)+')'}
function req(){if(!tick){tick=true;requestAnimationFrame(upd)}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);upd();
(function(){
var drop=document.querySelector('.drop'),dbtn=document.querySelector('.dbtn');
if(dbtn){dbtn.addEventListener('click',function(e){e.stopPropagation();var open=drop.classList.toggle('open');dbtn.setAttribute('aria-expanded',open?'true':'false');});
document.addEventListener('click',function(e){if(drop&&!drop.contains(e.target)){drop.classList.remove('open');dbtn.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){drop.classList.remove('open');dbtn.setAttribute('aria-expanded','false');}});}

var ROUTES={
 '#/servico/bot-financeiro':{lab:'Automação & IA',title:'Automações de microsserviços',text:'Bots inteligentes, integrações de APIs e microsserviços para acelerar sua rotina.'},
 '#/servico/automacoes':{lab:'Automação & IA',title:'Automações de microsserviços',text:'Bots inteligentes, integrações de APIs e microsserviços para acelerar sua rotina.'},
 '#/servico/edicao-de-video':{lab:'Serviço',title:'Edição de vídeo',text:'Vídeos com ritmo, corte e impacto para prender a atenção e fazer sua marca ser lembrada.'},
 '#/servico/sites':{lab:'Serviço',title:'Sites',text:'Sites estratégicos para transformar visitantes em clientes. Design exclusivo, alta performance e conversão.'},
 '#/servico/trafego-pago':{lab:'Serviço',title:'Tráfego Pago',text:'Campanhas pensadas para colocar sua marca na frente de quem importa.'},
 '#/servico/marketing-digital':{lab:'Serviço',title:'Marketing digital',text:'Faço sites e posts: sua estrutura digital pensada para transformar atenção em oportunidades.'},
 '#/sobre':{lab:'Feerless',title:'Sobre mim',text:'Em breve, mais sobre quem está por trás da Feerless.'}
};
var pv=document.getElementById('pageview'),pvLab=document.getElementById('pv-lab'),pvTitle=document.getElementById('pv-title'),pvText=document.getElementById('pv-text'),pvBgv=document.getElementById('pv-bgv');
var pvGenericBody=document.getElementById('pv-generic-body'),pvBotContent=document.getElementById('pv-bot-content'),pvVideoContent=document.getElementById('pv-video-content'),pvSitesContent=document.getElementById('pv-sites-content'),pvTrafegoContent=document.getElementById('pv-trafego-content'),pvMktContent=document.getElementById('pv-mkt-content');
var pvLightbox=document.getElementById('pv-lightbox'),pvLightboxVideo=document.getElementById('pv-lightbox-video'),pvLightboxImg=document.getElementById('pv-lightbox-img'),pvLightboxTitle=document.getElementById('pv-lightbox-title'),pvLightboxDesc=document.getElementById('pv-lightbox-desc'),pvLightboxWa=document.getElementById('pv-lightbox-wa'),pvLightboxClose=document.getElementById('pv-lightbox-close'),pvLightboxBackdrop=document.getElementById('pv-lightbox-backdrop');

function openLightbox(src, title, desc, mode){
 if(!pvLightbox)return;
 if(mode==='img'||mode===true){
  if(pvLightboxVideo){pvLightboxVideo.pause&&pvLightboxVideo.pause();pvLightboxVideo.style.display='none';}
  if(pvLightboxImg){pvLightboxImg.src=src;pvLightboxImg.style.display='block';}
 }else{
  if(pvLightboxImg){pvLightboxImg.style.display='none';}
  if(pvLightboxVideo){
   pvLightboxVideo.src=src;
   pvLightboxVideo.style.display='block';
   pvLightboxVideo.currentTime=0;
   if(pvLightboxVideo.play) pvLightboxVideo.play().catch(function(){});
  }
 }
 if(pvLightboxWa){
  var btnText='Quero um projeto neste estilo';
  var msg='Olá Felipe, gostei do projeto "'+(title||'')+'" e gostaria de um orçamento!';
  if(mode==='bot'){
   btnText='Quero testar o Bot Financeiro';
   msg='Olá Felipe, gostei da demonstração do Bot de Controle Financeiro e quero testar no WhatsApp!';
  }else if(mode==='site'){
   btnText='Quero um site neste estilo';
   msg='Olá Felipe, gostei do modelo de site "'+(title||'')+'" e quero um orçamento!';
  }else if(mode==='trafego'){
   btnText='Quero aplicar esta estratégia';
   msg='Olá Felipe, quero aplicar a estratégia de tráfego "'+(title||'')+'" no meu negócio!';
  }else if(mode==='mkt'){
   btnText='Quero esta assessoria de marketing';
   msg='Olá Felipe, gostei do formato de marketing "'+(title||'')+'" e quero uma proposta!';
  }else if(mode==='video'||mode===false){
   btnText='Quero um vídeo neste estilo';
   msg='Olá Felipe, gostei do estilo de edição "'+(title||'')+'" e quero um orçamento!';
  }
  pvLightboxWa.href='https://wa.me/5512987089203?text='+encodeURIComponent(msg);
  pvLightboxWa.textContent=btnText;
 }
 if(pvLightboxTitle) pvLightboxTitle.textContent=title||'';
 if(pvLightboxDesc) pvLightboxDesc.textContent=desc||'';
 pvLightbox.hidden=false;
}

function closeLightbox(){
 if(!pvLightbox)return;
 pvLightbox.hidden=true;
 if(pvLightboxVideo){
  if(pvLightboxVideo.pause) pvLightboxVideo.pause();
  pvLightboxVideo.removeAttribute('src');
  if(pvLightboxVideo.load) pvLightboxVideo.load();
  pvLightboxVideo.style.display='none';
 }
 if(pvLightboxImg){
  pvLightboxImg.removeAttribute('src');
  pvLightboxImg.style.display='none';
 }
}

if(pvLightboxClose) pvLightboxClose.addEventListener('click', closeLightbox);
if(pvLightboxBackdrop) pvLightboxBackdrop.addEventListener('click', closeLightbox);

// Cards clicks
var botCards=document.querySelectorAll('.pvb-card');
botCards.forEach(function(card){
 card.addEventListener('click',function(){
  var src=card.getAttribute('data-img-src');
  var title=card.getAttribute('data-title');
  var desc=card.getAttribute('data-desc');
  if(src) openLightbox(src, title, desc, 'bot');
 });
});

var videoCards=document.querySelectorAll('.pvv-card');
videoCards.forEach(function(card){
 card.addEventListener('click',function(){
  var src=card.getAttribute('data-video-src');
  var title=card.getAttribute('data-title');
  var desc=card.getAttribute('data-desc');
  if(src) openLightbox(src, title, desc, 'video');
 });
});

var siteCards=document.querySelectorAll('.pvs-card');
siteCards.forEach(function(card){
 card.addEventListener('click',function(){
  var src=card.getAttribute('data-img-src');
  var title=card.getAttribute('data-title');
  var desc=card.getAttribute('data-desc');
  if(src) openLightbox(src, title, desc, 'site');
 });
});

var trafegoCards=document.querySelectorAll('.pvt-card');
trafegoCards.forEach(function(card){
 card.addEventListener('click',function(){
  var src=card.getAttribute('data-img-src');
  var title=card.getAttribute('data-title');
  var desc=card.getAttribute('data-desc');
  if(src) openLightbox(src, title, desc, 'trafego');
 });
});

var mktCards=document.querySelectorAll('.pvm-card');
mktCards.forEach(function(card){
 card.addEventListener('click',function(){
  var src=card.getAttribute('data-img-src');
  var title=card.getAttribute('data-title');
  var desc=card.getAttribute('data-desc');
  if(src) openLightbox(src, title, desc, 'mkt');
 });
});

// Category filters
function setupFilter(btnSelector, cardSelector){
 var btns=document.querySelectorAll(btnSelector);
 var cards=document.querySelectorAll(cardSelector);
 btns.forEach(function(btn){
  btn.addEventListener('click',function(){
   btns.forEach(function(b){b.classList.remove('active');});
   btn.classList.add('active');
   var f=btn.getAttribute('data-filter');
   cards.forEach(function(c){
    var cat=c.getAttribute('data-category');
    if(f==='all'||cat===f){
     c.style.display='';
    }else{
     c.style.display='none';
    }
   });
  });
 });
}
setupFilter('.pvv-filter-btn', '.pvv-card');
setupFilter('.pvs-filter-btn', '.pvs-card');
setupFilter('.pvt-filter-btn', '.pvt-card');
setupFilter('.pvm-filter-btn', '.pvm-card');

// Smooth scroll inside modal
var internalAnchors=document.querySelectorAll('.pv-vpage a[href^="#pvb-"], .pv-vpage a[href^="#pvv-"], .pv-vpage a[href^="#pvs-"], .pv-vpage a[href^="#pvt-"], .pv-vpage a[href^="#pvm-"], .pv-vpage a[href^="#servico-"]');
internalAnchors.forEach(function(a){
 a.addEventListener('click',function(e){
  e.preventDefault();
  var tid=a.getAttribute('href').substring(1);
  var tel=document.getElementById(tid);
  if(tel&&pv){
   pv.scrollTo({top:tel.offsetTop-60,behavior:'smooth'});
  }
 });
});

document.addEventListener('keydown',function(e){
 if(e.key==='Escape'){
  if(pvLightbox&&!pvLightbox.hidden){
   closeLightbox();
  }else if(pv&&!pv.hidden){
   location.hash='';
  }
 }
});

function hideAllSubpages(){
 if(pvGenericBody) pvGenericBody.hidden=true;
 if(pvBotContent) pvBotContent.hidden=true;
 if(pvVideoContent) pvVideoContent.hidden=true;
 if(pvSitesContent) pvSitesContent.hidden=true;
 if(pvTrafegoContent) pvTrafegoContent.hidden=true;
 if(pvMktContent) pvMktContent.hidden=true;
}

function route(){
 var r=ROUTES[location.hash];
 if(r){
  pv.hidden=false;document.body.style.overflow='hidden';pv.scrollTop=0;
  hideAllSubpages();
  if(location.hash==='#/servico/bot-financeiro'||location.hash==='#/servico/automacoes'){
   pv.classList.add('pv-video');
   if(pvBotContent) pvBotContent.hidden=false;
   if(pvBgv){pvBgv.preload='auto';pvBgv.play&&pvBgv.play().catch(function(){});}
  }else if(location.hash==='#/servico/edicao-de-video'){
   pv.classList.add('pv-video');
   if(pvVideoContent) pvVideoContent.hidden=false;
   if(pvBgv){pvBgv.preload='auto';pvBgv.play&&pvBgv.play().catch(function(){});}
  }else if(location.hash==='#/servico/sites'){
   pv.classList.add('pv-video');
   if(pvSitesContent) pvSitesContent.hidden=false;
   if(pvBgv){pvBgv.preload='auto';pvBgv.play&&pvBgv.play().catch(function(){});}
  }else if(location.hash==='#/servico/trafego-pago'){
   pv.classList.add('pv-video');
   if(pvTrafegoContent) pvTrafegoContent.hidden=false;
   if(pvBgv){pvBgv.preload='auto';pvBgv.play&&pvBgv.play().catch(function(){});}
  }else if(location.hash==='#/servico/marketing-digital'){
   pv.classList.add('pv-video');
   if(pvMktContent) pvMktContent.hidden=false;
   if(pvBgv){pvBgv.preload='auto';pvBgv.play&&pvBgv.play().catch(function(){});}
  }else{
   pv.classList.remove('pv-video');
   if(pvGenericBody) pvGenericBody.hidden=false;
   pvLab.textContent=r.lab;pvTitle.textContent=r.title;pvText.textContent=r.text;
   if(pvBgv) pvBgv.pause&&pvBgv.pause();
  }
 }else{
  pv.hidden=true;document.body.style.overflow='';
  pv.classList.remove('pv-video');
  if(pvBgv) pvBgv.pause&&pvBgv.pause();
  closeLightbox();
 }
 if(drop){drop.classList.remove('open');if(dbtn)dbtn.setAttribute('aria-expanded','false');}
}
addEventListener('hashchange',route);route();
})();
(function(){
var els=document.querySelectorAll('.feature');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('inview');});return;}
var io=new IntersectionObserver(function(entries){
 entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('inview');io.unobserve(en.target);}});
},{threshold:.3});
els.forEach(function(e){io.observe(e);});
})();
(function(){
var proc=document.querySelector('.proc'),line=proc&&proc.querySelector('.steps-line');
if(!proc||!line)return;
function upd(){
 var r=proc.getBoundingClientRect(),wh=innerHeight;
 var p=(wh-r.top)/wh;
 p=Math.max(0,Math.min(1,p));
 line.style.transform='scaleX('+p+')';
 if(p>.08)proc.classList.add('inview');
}
addEventListener('scroll',upd,{passive:true});
addEventListener('resize',upd);
upd();
})();

// Alternador automático de textos do Hero (Loop infinito a cada 10 segundos)
(function(){
  var slides=document.querySelectorAll('.heroSlide');
  var dots=document.querySelectorAll('.heroDot');
  if(!slides.length) return;
  var current=0;
  var timer=null;
  var INTERVAL=10000; // 10 segundos por texto

  function show(index){
    // Looping infinito estrito: do primeiro ao último e do último sempre voltando ao primeiro
    current=((index % slides.length) + slides.length) % slides.length;

    slides.forEach(function(s,i){
      s.classList.toggle('active', i === current);
    });

    dots.forEach(function(d,i){
      d.classList.toggle('active', i === current);
      var bar=d.querySelector('.heroDotBar');
      if(bar){
        bar.style.animation='none';
        bar.offsetHeight; /* força reflow para reiniciar animação da barra */
        if(i === current){
          bar.style.animation='heroDotProgress 10s linear forwards';
        }
      }
    });
  }

  function next(){
    show(current + 1);
    scheduleNext();
  }

  function scheduleNext(){
    if(timer){ clearTimeout(timer); }
    timer = setTimeout(next, INTERVAL);
  }

  dots.forEach(function(dot,i){
    dot.addEventListener('click', function(e){
      e.preventDefault();
      show(i);
      scheduleNext();
    });
  });

  // Inicia o primeiro texto e ativa o loop infinito ininterrupto
  show(0);
  scheduleNext();
})();
})();
