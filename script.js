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
var pvLightbox=document.getElementById('pv-lightbox'),pvLightboxVideo=document.getElementById('pv-lightbox-video'),pvLightboxImg=document.getElementById('pv-lightbox-img'),pvLightboxTitle=document.getElementById('pv-lightbox-title'),pvLightboxDesc=document.getElementById('pv-lightbox-desc'),pvLightboxWa=document.getElementById('pv-lightbox-wa'),pvLightboxClose=document.getElementById('pv-lightbox-close'),pvLightboxBackdrop=document.getElementById('pv-lightbox-backdrop'),pvLightboxLive=document.getElementById('pv-lightbox-live');

function openLightbox(src, title, desc, mode, liveUrl){
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
 if(pvLightboxLive){
  if(liveUrl){
   pvLightboxLive.href=liveUrl;
   pvLightboxLive.style.display='inline-flex';
  }else{
   pvLightboxLive.style.display='none';
  }
 }
 pvLightbox.hidden=false;
}

function closeLightbox(){
 if(!pvLightbox)return;
 pvLightbox.hidden=true;
 if(pvLightboxLive) pvLightboxLive.style.display='none';
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
 var liveUrl=card.getAttribute('data-live-url');
 var actBtn=card.querySelector('[data-role="live-action"]');
 if(actBtn && liveUrl && liveUrl.trim()!==''){
  actBtn.classList.remove('pvs-btn-empty');
  var spanText=actBtn.querySelector('span');
  if(spanText) spanText.textContent='Acessar site no ar';
 }

 card.addEventListener('click',function(e){
  if(e.target.closest('a')){
   return;
  }
  var url=card.getAttribute('data-live-url');
  if(url && url.trim()!==''){
   window.open(url, '_blank', 'noopener,noreferrer');
  } else {
   var title=card.getAttribute('data-title') || 'site institucional';
   var msg='Olá Felipe, vi o modelo "' + title + '" no portfólio da Feerless e gostaria de solicitar um projeto similar!';
   window.open('https://wa.me/5512987089203?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
  }
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
    var cat=c.getAttribute('data-category')||'';
    var catList=cat.split(' ');
    if(f==='all'||catList.indexOf(f)!==-1||cat===f){
     c.style.display='';
    }else{
     c.style.display='none';
    }
   });
  });
 });
}
setupFilter('.pvv-filter-btn', '.pvv-card');
setupFilter('.pvt-filter-btn', '.pvt-card');
setupFilter('.pvm-filter-btn', '.pvm-card');

// Carousel horizontal de Sites / Parceiros
var pvsTrack=document.getElementById('pvs-carousel-track');
var pvsPrev=document.getElementById('pvs-arrow-prev');
var pvsNext=document.getElementById('pvs-arrow-next');
if(pvsTrack&&pvsPrev&&pvsNext){
 function getPvsStep(){
  var c=pvsTrack.querySelector('.pvs-carousel-card');
  return c ? (c.offsetWidth + 24) : 340;
 }
 pvsPrev.addEventListener('click',function(){
  pvsTrack.scrollBy({left:-getPvsStep(),behavior:'smooth'});
 });
 pvsNext.addEventListener('click',function(){
  pvsTrack.scrollBy({left:getPvsStep(),behavior:'smooth'});
 });
 function updatePvsArrows(){
  var sl=pvsTrack.scrollLeft;
  var max=pvsTrack.scrollWidth-pvsTrack.clientWidth-5;
  pvsPrev.disabled=(sl<=5);
  pvsNext.disabled=(sl>=max);
 }
 pvsTrack.addEventListener('scroll',updatePvsArrows,{passive:true});
 setTimeout(updatePvsArrows,300);
}

// Vídeo Atmosférico em Câmera Lenta sem som (Cyclist Pedaling na seção Parceiros)
(function(){
  var partnerVideo = document.getElementById('pvs-partner-video');
  if(!partnerVideo) return;

  function initPartnerVideo(){
    partnerVideo.playbackRate = 0.55; // Câmera lenta elegante
    partnerVideo.muted = true;
    var playPromise = partnerVideo.play();
    if(playPromise && playPromise.catch){
      playPromise.catch(function(){});
    }
  }

  partnerVideo.addEventListener('loadedmetadata', initPartnerVideo);
  partnerVideo.addEventListener('play', function(){
    partnerVideo.playbackRate = 0.55;
  });

  window.addEventListener('hashchange', function(){
    if(location.hash === '#/servico/sites' || location.hash === '#pvs-portfolio'){
      setTimeout(initPartnerVideo, 80);
    }
  });

  initPartnerVideo();
  setTimeout(initPartnerVideo, 300);
})();

// Fundo Dinâmico Ultra-Fluido com Canvas Image Sequence (Padrão Apple 60/120fps sem travamento)
(function(){
  var metodologiaSec = document.getElementById('pvs-metodologia');
  var canvas = document.getElementById('pvs-metodologia-canvas');
  if(!metodologiaSec || !canvas) return;

  var ctx = canvas.getContext('2d');
  var frameCount = 97;
  var images = [];
  var currentFrame = 1;
  var targetFrame = 1;
  var rafId = null;

  function pad(num) {
    return String(num).padStart(3, '0');
  }

  function getFrameSrc(index) {
    return 'video/frames/frame_' + pad(index) + '.webp';
  }

  // Renderização instantânea do frame no canvas (0ms de atraso, acelerado por hardware)
  function renderFrame(index) {
    var img = images[index - 1];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }

  // Loop contínuo com física amortecida suave (lerp)
  function renderLoop() {
    var diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.05) {
      currentFrame += diff * 0.35;
      var drawIndex = Math.max(1, Math.min(frameCount, Math.round(currentFrame)));
      renderFrame(drawIndex);
      rafId = requestAnimationFrame(renderLoop);
    } else {
      currentFrame = targetFrame;
      renderFrame(Math.round(currentFrame));
      rafId = null;
    }
  }

  function onScrollScrub() {
    if (!metodologiaSec || metodologiaSec.offsetParent === null) return;
    var rect = metodologiaSec.getBoundingClientRect();
    var vh = window.innerHeight || 800;

    // Janela de scroll confortável através da seção Metodologia
    var start = vh * 0.88;
    var end = -rect.height * 0.35;
    var progress = (start - rect.top) / (start - end);
    progress = Math.max(0, Math.min(1, progress));

    targetFrame = 1 + progress * (frameCount - 1);
    if (!rafId) {
      rafId = requestAnimationFrame(renderLoop);
    }
  }

  // 1. Carrega imediatamente o frame 1 para exibição instantânea sem delay
  var firstImg = new Image();
  firstImg.src = getFrameSrc(1);
  firstImg.onload = function() {
    images[0] = firstImg;
    renderFrame(1);
    onScrollScrub();
  };

  // 2. Pré-carrega os demais frames em segundo plano para resposta instantânea
  for (var i = 1; i <= frameCount; i++) {
    (function(idx) {
      if (idx === 1) {
        images[0] = firstImg;
        return;
      }
      var img = new Image();
      img.src = getFrameSrc(idx);
      img.onload = function() {
        images[idx - 1] = img;
        if (Math.round(currentFrame) === idx) {
          renderFrame(idx);
        }
      };
    })(i);
  }

  if (pv) {
    pv.addEventListener('scroll', onScrollScrub, { passive: true });
  }
  window.addEventListener('scroll', onScrollScrub, { passive: true });
  window.addEventListener('resize', onScrollScrub, { passive: true });

  window.addEventListener('hashchange', function() {
    if (location.hash === '#/servico/sites' || location.hash === '#pvs-metodologia') {
      setTimeout(onScrollScrub, 80);
      setTimeout(onScrollScrub, 300);
    }
  });

  setTimeout(onScrollScrub, 150);
})();

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
  pv.classList.add('pv-video');
  pv.classList.remove('pv-theme-volt');
  pv.classList.remove('pv-theme-trafego');
  if(location.hash==='#/servico/bot-financeiro'||location.hash==='#/servico/automacoes'){
   if(pvBotContent) pvBotContent.hidden=false;
  }else if(location.hash==='#/servico/edicao-de-video'){
   pv.classList.add('pv-theme-volt');
   if(pvVideoContent) pvVideoContent.hidden=false;
  }else if(location.hash==='#/servico/sites'){
   pv.classList.add('pv-theme-volt');
   if(pvSitesContent) pvSitesContent.hidden=false;
  }else if(location.hash==='#/servico/trafego-pago'){
   pv.classList.add('pv-theme-trafego');
   if(pvTrafegoContent) pvTrafegoContent.hidden=false;
  }else if(location.hash==='#/servico/marketing-digital'){
   if(pvMktContent) pvMktContent.hidden=false;
  }else{
   if(pvGenericBody) pvGenericBody.hidden=false;
   pvLab.textContent=r.lab;pvTitle.textContent=r.title;pvText.textContent=r.text;
  }
  if(pvBgv) pvBgv.pause&&pvBgv.pause();
 }else{
  pv.hidden=true;document.body.style.overflow='';
  pv.classList.remove('pv-video');
  pv.classList.remove('pv-theme-volt');
  pv.classList.remove('pv-theme-trafego');
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



// Marcas com quem trabalho: Carrossel Horizontal com Auto-Scroll no Hover nas 2 últimas empresas
(function(){
  var grid = document.getElementById('brands-grid');
  var prevBtn = document.getElementById('brands-arrow-prev');
  var nextBtn = document.getElementById('brands-arrow-next');
  var wrapper = document.getElementById('brands-wrapper');
  if(!grid) return;

  var scrollAnimId = null;
  var scrollSpeed = 0;
  var lastMouseX = 0;
  var lastMouseY = 0;
  var isHovering = false;

  function stepScroll(){
    if(scrollSpeed !== 0){
      grid.scrollLeft += scrollSpeed;
      updateArrows();
      checkHoverPosition();
      if(scrollSpeed !== 0){
        scrollAnimId = requestAnimationFrame(stepScroll);
      }
    }
  }

  function startScroll(speed){
    if(scrollSpeed === speed) return;
    scrollSpeed = speed;
    if(!scrollAnimId){
      scrollAnimId = requestAnimationFrame(stepScroll);
    }
  }

  function stopScroll(){
    scrollSpeed = 0;
    if(scrollAnimId){
      cancelAnimationFrame(scrollAnimId);
      scrollAnimId = null;
    }
  }

  function getStep(){
    var firstCard = grid.querySelector('.brand-card');
    return firstCard ? (firstCard.offsetWidth + 24) : 280;
  }

  function updateArrows(){
    var sl = grid.scrollLeft;
    var max = grid.scrollWidth - grid.clientWidth - 4;
    if(prevBtn) prevBtn.disabled = (sl <= 4);
    if(nextBtn) nextBtn.disabled = (sl >= max);
    if(wrapper){
      wrapper.classList.toggle('can-scroll-right', sl < max);
      wrapper.classList.toggle('can-scroll-left', sl > 4);
    }
  }

  if(prevBtn){
    prevBtn.addEventListener('click', function(){
      grid.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });
  }
  if(nextBtn){
    nextBtn.addEventListener('click', function(){
      grid.scrollBy({ left: getStep(), behavior: 'smooth' });
    });
  }

  grid.addEventListener('scroll', updateArrows, { passive: true });

  function checkHoverPosition(){
    if(!isHovering) return;
    var target = document.elementFromPoint(lastMouseX, lastMouseY);
    if(!target || !grid.contains(target)){
      stopScroll();
      return;
    }

    var gridRect = grid.getBoundingClientRect();
    var cards = Array.from(grid.querySelectorAll('.brand-card'));

    var visibleCards = cards.filter(function(card){
      var r = card.getBoundingClientRect();
      return (r.right > gridRect.left + 25) && (r.left < gridRect.right - 25);
    });

    if(visibleCards.length < 2){
      stopScroll();
      return;
    }

    var lastTwo = visibleCards.slice(-2);
    var firstTwo = visibleCards.slice(0, 2);

    var cardUnderMouse = target.closest('.brand-card');
    var isOverLastTwo = cardUnderMouse && lastTwo.indexOf(cardUnderMouse) !== -1;
    var isOverFirstTwo = cardUnderMouse && firstTwo.indexOf(cardUnderMouse) !== -1;
    var max = grid.scrollWidth - grid.clientWidth - 4;

    if(isOverLastTwo && grid.scrollLeft < max){
      startScroll(4);
    } else if(isOverFirstTwo && grid.scrollLeft > 4){
      startScroll(-4);
    } else {
      stopScroll();
    }
  }

  grid.addEventListener('mouseenter', function(){
    isHovering = true;
  });

  grid.addEventListener('mouseleave', function(){
    isHovering = false;
    stopScroll();
  });

  grid.addEventListener('mousemove', function(e){
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    checkHoverPosition();
  });

  setTimeout(updateArrows, 300);
})();

// Gerenciador Inteligente de Vídeos (Pausa vídeos fora da tela para poupar 100% da GPU)
(function(){
  if(!('IntersectionObserver' in window)) return;

  var bgVideos = document.querySelectorAll('.pin .bgv, #partners-dino-video, #feature-smoke-video');
  if(!bgVideos.length) return;

  var videoObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      var vid = entry.target;
      if(entry.isIntersecting){
        vid.muted = true;
        if(vid.id === 'feature-smoke-video'){
          vid.playbackRate = 0.85; // Fluidez cinematográfica suave sem queda de taxa de quadros
        }
        if(vid.play){
          var p = vid.play();
          if(p && p.catch) p.catch(function(){});
        }
      } else {
        if(vid.pause){
          vid.pause();
        }
      }
    });
  }, { threshold: 0.08 });

  bgVideos.forEach(function(vid){
    videoObserver.observe(vid);
  });
})();
})();

