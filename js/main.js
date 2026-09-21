(function(){
  var INK = '#1B2A41';

  /* ---------- palette per pet ---------- */
  var TONES = {
    dogs:  {tone:'#FFC533', tint:'#FFF0C2', dark:'#E59A00', light:'#FFF6DA'},
    cats:  {tone:'#FF9EBB', tint:'#FFDDE7', dark:'#F2789F', light:'#FFD3E0'},
    fish:  {tone:'#58B6E8', tint:'#D3EDFA', dark:'#3B93C9', light:'#B7E1F6'},
    birds: {tone:'#5DBB8A', tint:'#D2EFDF', dark:'#3E9C6B', light:'#9FDCBB'},
    small: {tone:'#B9A6FF', tint:'#E6DFFF', dark:'#9580F0', light:'#D9CFFF'}
  };

  /* ---------- faces (200 x 200 local space) ---------- */
  function eye(cx, cy, r, pr){
    var hl = pr * 0.32;
    return '<g class="eye" data-r="' + r + '" data-max="' + (r - pr - 2).toFixed(1) + '">' +
      '<circle class="sclera" cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#fff"/>' +
      '<g class="pupil"><circle cx="' + cx + '" cy="' + cy + '" r="' + pr + '" fill="' + INK + '"/>' +
      '<circle cx="' + (cx + pr*0.35) + '" cy="' + (cy - pr*0.35) + '" r="' + hl + '" fill="#fff"/></g></g>';
  }
  var FACES = {
    dogs: function(c){ return '' +
      '<ellipse cx="32" cy="100" rx="24" ry="46" transform="rotate(14 32 100)" fill="' + c.dark + '"/>' +
      '<ellipse cx="168" cy="100" rx="24" ry="46" transform="rotate(-14 168 100)" fill="' + c.dark + '"/>' +
      '<ellipse cx="100" cy="100" rx="66" ry="64" fill="' + c.tone + '"/>' +
      '<ellipse cx="100" cy="130" rx="34" ry="26" fill="' + c.light + '"/>' +
      eye(76,86,14,7) + eye(124,86,14,7) +
      '<ellipse cx="100" cy="116" rx="12" ry="8.5" fill="' + INK + '"/>' +
      '<path d="M100 124v9M100 133q-9 8-18 2M100 133q9 8 18 2" stroke="' + INK + '" stroke-width="3" stroke-linecap="round" fill="none"/>' +
      '<path d="M92 138q8 16 16 0z" fill="#FF6F91"/>';
    },
    cats: function(c){ return '' +
      '<path d="M38 96L40 22 96 60z" fill="' + c.tone + '"/><path d="M162 96L160 22 104 60z" fill="' + c.tone + '"/>' +
      '<path d="M50 74L52 44 78 62z" fill="' + c.light + '"/><path d="M150 74L148 44 122 62z" fill="' + c.light + '"/>' +
      '<ellipse cx="100" cy="108" rx="70" ry="60" fill="' + c.tone + '"/>' +
      eye(72,98,15,7.5) + eye(128,98,15,7.5) +
      '<path d="M92 120h16l-8 9z" fill="' + INK + '"/>' +
      '<path d="M100 129q-6 9-15 4M100 129q6 9 15 4" stroke="' + INK + '" stroke-width="3" stroke-linecap="round" fill="none"/>' +
      '<path d="M60 124L16 116M60 132L18 140M140 124l44-8M140 132l42 8" stroke="' + c.dark + '" stroke-width="2.5" stroke-linecap="round"/>';
    },
    fish: function(c){ return '' +
      '<path d="M36 112Q4 84 8 128Q12 156 40 142z" fill="' + c.dark + '"/>' +
      '<path d="M164 112Q196 84 192 128Q188 156 160 142z" fill="' + c.dark + '"/>' +
      '<path d="M76 52Q100 14 124 52z" fill="' + c.dark + '"/>' +
      '<ellipse cx="100" cy="112" rx="68" ry="62" fill="' + c.tone + '"/>' +
      '<ellipse cx="100" cy="142" rx="40" ry="26" fill="' + c.light + '"/>' +
      eye(72,96,15,7.5) + eye(128,96,15,7.5) +
      '<ellipse cx="100" cy="128" rx="10" ry="8" fill="#FF7FA3"/><ellipse cx="100" cy="128" rx="4.5" ry="3.5" fill="' + INK + '"/>' +
      '<circle cx="166" cy="40" r="8" fill="#fff" opacity=".75"/><circle cx="182" cy="18" r="5" fill="#fff" opacity=".75"/>';
    },
    birds: function(c){ return '' +
      '<ellipse cx="100" cy="40" rx="9" ry="22" fill="' + c.dark + '"/>' +
      '<ellipse cx="82" cy="46" rx="8" ry="19" transform="rotate(-28 82 46)" fill="' + c.dark + '"/>' +
      '<ellipse cx="118" cy="46" rx="8" ry="19" transform="rotate(28 118 46)" fill="' + c.dark + '"/>' +
      '<circle cx="100" cy="112" r="64" fill="' + c.tone + '"/>' +
      '<circle cx="62" cy="128" r="13" fill="#FFB3A7"/><circle cx="138" cy="128" r="13" fill="#FFB3A7"/>' +
      eye(76,98,14,7) + eye(124,98,14,7) +
      '<path d="M82 116Q100 102 118 116Q118 146 100 158Q82 146 82 116z" fill="#FFC533"/>' +
      '<path d="M88 126Q100 132 112 126" stroke="' + INK + '" stroke-width="2.5" stroke-linecap="round" fill="none"/>';
    },
    small: function(c){ return '' +
      '<ellipse cx="70" cy="48" rx="20" ry="46" transform="rotate(-8 70 48)" fill="' + c.tone + '"/>' +
      '<ellipse cx="70" cy="50" rx="9" ry="32" transform="rotate(-8 70 50)" fill="#FFC9DB"/>' +
      '<ellipse cx="130" cy="48" rx="20" ry="46" transform="rotate(8 130 48)" fill="' + c.tone + '"/>' +
      '<ellipse cx="130" cy="50" rx="9" ry="32" transform="rotate(8 130 50)" fill="#FFC9DB"/>' +
      '<ellipse cx="100" cy="124" rx="62" ry="56" fill="' + c.tone + '"/>' +
      eye(76,114,13,6.5) + eye(124,114,13,6.5) +
      '<ellipse cx="100" cy="134" rx="7" ry="5" fill="#FF7FA3"/>' +
      '<path d="M100 139v5M100 144q-7 7-14 2M100 144q7 7 14 2" stroke="' + INK + '" stroke-width="3" stroke-linecap="round" fill="none"/>' +
      '<rect x="94" y="147" width="12" height="11" rx="3" fill="#fff"/>';
    }
  };
  function place(k, x, y, s){
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + FACES[k](TONES[k]) + '</g>';
  }

  /* hero cluster: back to front */
  document.getElementById('hero-faces').innerHTML =
    '<circle cx="320" cy="262" r="238" fill="#fff" opacity=".06"/>' +
    place('small', 360, 20, 1.25) +
    place('cats',   20, 60, 1.3) +
    place('fish',   10, 340, .8) +
    place('birds', 440, 350, .9) +
    place('dogs',  170, 205, 1.65);

  /* tile faces */
  document.querySelectorAll('.tile .face').forEach(function(el){
    var k = el.getAttribute('data-face');
    el.innerHTML = '<svg viewBox="0 0 200 200" aria-hidden="true">' + FACES[k](TONES[k]) + '</svg>';
  });

  /* ---------- eyes follow the pointer ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var eyes = Array.prototype.map.call(document.querySelectorAll('.eye'), function(g){
    return {
      sclera: g.querySelector('.sclera'),
      pupil: g.querySelector('.pupil'),
      r: parseFloat(g.getAttribute('data-r')),
      max: parseFloat(g.getAttribute('data-max'))
    };
  });
  var lastX = window.innerWidth * 0.28, lastY = window.innerHeight * 0.4, lastMove = 0, queued = false;

  function look(x, y){
    for (var i = 0; i < eyes.length; i++){
      var e = eyes[i], b = e.sclera.getBoundingClientRect();
      if (b.bottom < -200 || b.top > window.innerHeight + 200){ continue; }
      var cx = b.left + b.width / 2, cy = b.top + b.height / 2;
      var scale = b.width / (2 * e.r);
      var dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy) || 1;
      var k = Math.min(1, d / (scale * 90));
      var off = e.max * k;
      e.pupil.style.transform = 'translate(' + (dx / d * off).toFixed(2) + 'px,' + (dy / d * off).toFixed(2) + 'px)';
    }
  }
  function schedule(){
    if (queued) return;
    queued = true;
    requestAnimationFrame(function(){ queued = false; look(lastX, lastY); });
  }
  function onPointer(ev){
    lastX = ev.clientX; lastY = ev.clientY; lastMove = performance.now(); schedule();
  }
  window.addEventListener('pointermove', onPointer, {passive:true});
  window.addEventListener('pointerdown', onPointer, {passive:true});
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('resize', schedule);
  look(lastX, lastY);

  /* when nobody is moving a pointer, the animals glance around the stage */
  if (!reduce){
    var stage = document.getElementById('stage');
    setInterval(function(){
      if (performance.now() - lastMove < 4000) return;
      var b = stage.getBoundingClientRect();
      if (b.bottom < 0 || b.top > window.innerHeight) return;
      lastX = b.left + Math.random() * b.width;
      lastY = b.top + Math.random() * b.height;
      look(lastX, lastY);
    }, 2600);
  }

  /* ---------- products ---------- */
  var PRODUCTS = [
    {id:'p1', pet:'dogs',  name:'Chicken and rice puppy food', size:'3 kg bag',                                  price:1150, glyph:'bag'},
    {id:'p2', pet:'dogs',  name:'Knotted rope tug toy',        size:'Medium',                                    price:299,  glyph:'rope'},
    {id:'p3', pet:'dogs',  name:'Slicker brush',               size:'For medium coats',                          price:399,  glyph:'brush'},
    {id:'p4', pet:'cats',  name:'Salmon pâté for cats',        size:'12 cans, 85 g each',                        price:1320, glyph:'can'},
    {id:'p5', pet:'cats',  name:'Feather wand teaser',         size:'90 cm',                                     price:249,  glyph:'wand'},
    {id:'p6', pet:'fish',  name:'Tropical fish flakes',        size:'100 g tub',                                 price:180,  glyph:'tub'},
    {id:'p7', pet:'birds', name:'Budgie seed mix',             size:'1 kg pack',                                 price:340,  glyph:'seed'},
    {id:'p8', pet:'small', name:'Timothy hay',                 size:'1 kg bundle for rabbits and guinea pigs',   price:260,  glyph:'hay'}
  ];
  var byId = {};
  PRODUCTS.forEach(function(p){ byId[p.id] = p; });
  function fmt(n){ return '₹' + n.toLocaleString('en-IN'); }

  var grid = document.getElementById('shelf-grid');
  var countEl = document.getElementById('shelf-count');
  var chips = document.querySelectorAll('#chips .chip');
  var filter = 'all';

  function renderShelf(){
    var list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(function(p){ return p.pet === filter; });
    grid.innerHTML = list.map(function(p){
      var t = TONES[p.pet];
      return '<article class="prod" style="--tone:' + t.tone + ';--tint:' + t.tint + '">' +
        '<div class="medal"><svg class="glyph" viewBox="0 0 64 64" aria-hidden="true"><use href="#g-' + p.glyph + '"/></svg></div>' +
        '<h3>' + p.name + '</h3>' +
        '<p class="size">' + p.size + '</p>' +
        '<div class="prod-foot"><span class="price">' + fmt(p.price) + '</span>' +
        '<button class="add" type="button" data-add="' + p.id + '" aria-label="Add ' + p.name + ' to basket">Add</button></div>' +
      '</article>';
    }).join('');
    countEl.textContent = filter === 'all'
      ? 'Showing all ' + PRODUCTS.length + ' products'
      : 'Showing ' + list.length + ' of ' + PRODUCTS.length + ' products';
  }
  function setFilter(k){
    filter = k;
    chips.forEach(function(c){ c.setAttribute('aria-pressed', c.getAttribute('data-filter') === k ? 'true' : 'false'); });
    renderShelf();
    schedule();
  }
  chips.forEach(function(c){ c.addEventListener('click', function(){ setFilter(c.getAttribute('data-filter')); }); });
  document.querySelectorAll('.tile').forEach(function(t){
    t.addEventListener('click', function(){ setFilter(t.getAttribute('data-filter')); });
  });

  /* ---------- basket ---------- */
  var basket = {};           // id -> qty
  var dlg = document.getElementById('basket');
  var openBtn = document.getElementById('basket-btn');
  var countBadge = document.getElementById('basket-count');
  var linesEl = document.getElementById('basket-lines');
  var emptyEl = document.getElementById('basket-empty');
  var totalEl = document.getElementById('basket-total');
  var shipEl = document.getElementById('basket-ship');
  var checkout = document.getElementById('checkout');
  var checkoutStatus = document.getElementById('checkout-status');
  var FREE_SHIPPING = 999;

  function renderBasket(){
    var ids = Object.keys(basket);
    var items = 0, total = 0;
    linesEl.innerHTML = ids.map(function(id){
      var p = byId[id], q = basket[id];
      items += q; total += p.price * q;
      return '<li class="line">' +
        '<div><strong>' + p.name + '</strong><small>' + p.size + '</small></div>' +
        '<div class="qty"><button type="button" data-dec="' + id + '" aria-label="Remove one ' + p.name + '">−</button>' +
        '<span aria-label="Quantity">' + q + '</span>' +
        '<button type="button" data-inc="' + id + '" aria-label="Add one more ' + p.name + '">+</button></div>' +
        '<span class="line-price">' + fmt(p.price * q) + '</span></li>';
    }).join('');
    emptyEl.hidden = ids.length > 0;
    totalEl.textContent = fmt(total);
    countBadge.textContent = items;
    openBtn.setAttribute('aria-label', 'Open basket, ' + items + (items === 1 ? ' item' : ' items'));
    checkout.disabled = ids.length === 0;
    shipEl.textContent = total === 0 ? '' :
      total >= FREE_SHIPPING ? 'Delivery is free on this order.' : 'Add ' + fmt(FREE_SHIPPING - total) + ' more for free delivery.';
    if (ids.length === 0) checkoutStatus.textContent = '';
  }

  grid.addEventListener('click', function(ev){
    var btn = ev.target.closest('[data-add]');
    if (!btn) return;
    var id = btn.getAttribute('data-add');
    basket[id] = (basket[id] || 0) + 1;
    renderBasket();
    openBtn.classList.remove('bump'); void openBtn.offsetWidth; openBtn.classList.add('bump');
    btn.textContent = 'Added'; btn.classList.add('done');
    setTimeout(function(){ btn.textContent = 'Add'; btn.classList.remove('done'); }, 900);
  });
  linesEl.addEventListener('click', function(ev){
    var inc = ev.target.closest('[data-inc]'), dec = ev.target.closest('[data-dec]');
    if (inc){ basket[inc.getAttribute('data-inc')]++; }
    if (dec){
      var id = dec.getAttribute('data-dec');
      basket[id]--; if (basket[id] <= 0) delete basket[id];
    }
    if (inc || dec) renderBasket();
  });
  openBtn.addEventListener('click', function(){ dlg.showModal(); document.body.style.overflow = 'hidden'; });
  document.getElementById('basket-close').addEventListener('click', function(){ dlg.close(); });
  dlg.addEventListener('click', function(ev){ if (ev.target === dlg) dlg.close(); });
  dlg.addEventListener('close', function(){ document.body.style.overflow = ''; });
  checkout.addEventListener('click', function(){
    checkoutStatus.textContent = 'This is a demo, so orders are not sent anywhere yet.';
  });
  renderBasket();

  /* ---------- grooming form ---------- */
  var form = document.getElementById('book-form');
  var formWrap = document.getElementById('book-form-wrap');
  var done = document.getElementById('book-done');
  var doneText = document.getElementById('book-done-text');
  var status = document.getElementById('form-status');
  var dateEl = document.getElementById('f-date');
  var nameEl = document.getElementById('f-name'), phoneEl = document.getElementById('f-phone');
  var petEl = document.getElementById('f-pet'), timeEl = document.getElementById('f-time');

  var now = new Date();
  var pad = function(n){ return String(n).padStart(2, '0'); };
  dateEl.min = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());

  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    var name = nameEl.value.trim(), phone = phoneEl.value.trim(), date = dateEl.value;
    if (!name){ status.textContent = 'Enter your name so we know who to ask for.'; nameEl.focus(); return; }
    if (!phone){ status.textContent = 'Enter a phone number so we can call to confirm.'; phoneEl.focus(); return; }
    if (!date){ status.textContent = 'Choose the day you would like to come in.'; dateEl.focus(); return; }
    status.textContent = '';
    var pretty = new Date(date + 'T00:00').toLocaleDateString('en-IN', {weekday:'long', day:'numeric', month:'long'});
    doneText.textContent = 'Thanks, ' + name + '. We will call ' + phone + ' to confirm grooming for your ' +
      petEl.value.toLowerCase() + ' on ' + pretty + ', ' + timeEl.value + '.';
    formWrap.hidden = true; done.hidden = false;
    done.querySelector('h3').setAttribute('tabindex', '-1'); done.querySelector('h3').focus();
  });
  document.getElementById('book-again').addEventListener('click', function(){
    form.reset(); done.hidden = true; formWrap.hidden = false; nameEl.focus();
  });

  /* start with the animals looking toward the headline */
  renderShelf();
  schedule();
})();
