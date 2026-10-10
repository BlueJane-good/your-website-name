var app = document.getElementById('app');
var header = document.querySelector('[data-header]');
var progress = document.querySelector('[data-progress]');
var menuToggle = document.querySelector('[data-menu-toggle]');
var mobileMenu = document.querySelector('[data-mobile-menu]');
var toast = document.querySelector('[data-toast]');

function currentRoute() {
  var hash = window.location.hash;
  if (!hash || hash === '#/' || hash === '#') return '/';
  if (hash.indexOf('#/') === 0) return hash.slice(1).split('?')[0];
  return '/';
}

function sectionHead(index, eyebrow, title, aside) {
  return '<div class="section-head reveal">' +
    '<div class="section-index"><b>' + index + '</b>' + eyebrow + '</div>' +
    '<h2 class="section-title">' + title + '</h2>' +
    '<p class="section-aside">' + aside + '</p>' +
  '</div>';
}

function homePage() {
  return '<section class="home-hero">' +
    '<div class="hero-inner">' +
      '<div class="hero-eyebrow"><span>Global marketing operating system</span><span>Singapore · 15 entities · 69 markets</span></div>' +
      '<h1 class="hero-title"><span>DIGITAL</span><span>TEAM</span></h1>' +
      '<p class="hero-position">Rooted locally.<br />Built for global growth.</p>' +
      '<div class="hero-lower"><p>15 countries<br />69 markets.</p><button class="circle-button" type="button" data-scroll="#about" aria-label="Explore Digital Team">↓</button></div>' +
    '</div>' +
  '</section>' +
  '<section class="section" id="about"><div class="section-inner">' +
    sectionHead('01', 'Who We Are', 'Rooted locally.<br /><em>Built for global growth.</em>', 'Founded in Singapore in 2022, Digital Team combines global reach, local depth and proprietary technology.') +
    '<div class="about-grid"><div class="about-statement reveal"><p class="about-statement">We are a <strong>rooted and tech-driven global marketing agency</strong> helping ambitious brands become locally relevant.</p></div><div class="about-copy reveal"><p class="about-copy">As a BytePlus service provider powered by GPT, we bring insight, automation and execution into one operating system. From automotive and 3C to travel and FMCG, our teams deliver international expression with genuine local market penetration.</p><button class="link-arrow" type="button">Explore our growth system <span>→</span></button></div></div>' +
  '</div></section>' +
  '<section class="section section-soft"><div class="section-inner">' +
    sectionHead('02', 'Key Figures', 'Scale that makes<br /><em>global feel local.</em>', 'A connected operating footprint built to move from strategic ambition to in-market execution.') +
    '<div class="figures-grid reveal"><article class="figure-item"><strong>15</strong><p>Countries with entities</p></article><article class="figure-item"><strong>600+</strong><p>Global employees</p></article><article class="figure-item"><strong>70%</strong><p>Local staff ratio</p></article><article class="figure-item"><strong>40+</strong><p>Brands served</p></article></div>' +
  '</div></section>' +
  '<section class="section section-dark"><div class="section-inner">' +
    sectionHead('03', 'Four Core Advantages', 'One partner.<br /><em>Four decisive edges.</em>', 'Premium access, full-service delivery, AI-powered operations and teams rooted in market.') +
    '<div class="advantage-grid reveal"><article class="advantage-item"><span>01</span><h3>Premium global resources</h3><p>Exclusive strategic access across five leading airlines, 268,000+ media placements and high-value regional IP.</p></article><article class="advantage-item"><span>02</span><h3>Full-service execution</h3><p>A four-stage system that sets direction, builds assets, amplifies reach and captures measurable business results.</p></article><article class="advantage-item"><span>03</span><h3>AI marketing engines</h3><p>DT GlowMind and DT-light connect intelligence, automation and localized production across 69 countries and regions.</p></article><article class="advantage-item"><span>04</span><h3>Local delivery at scale</h3><p>A Singapore headquarters, 10 regional operating centers and 400+ local content specialists embedded in market.</p></article></div>' +
  '</div></section>';
}

function casesPage() {
  return '<section class="inner-hero"><img src="assets/brand-mark-orange.svg" alt="Case studies" /><div class="inner-hero-content"><div class="eyebrow">Case Studies</div><h1 class="inner-title">Global work.<br />Local proof.</h1><p class="inner-description">A selection of real market programs across automotive, 3C, travel, FMCG and consumer brands.</p></div></section>' +
    '<section class="section section-dark"><div class="section-inner"><div class="case-filters reveal"><button type="button" class="case-filter is-active">Automotive</button><button type="button" class="case-filter">3C</button><button type="button" class="case-filter">Travel &amp; FMCG</button><button type="button" class="case-filter">Other</button></div><div class="case-horizontal-viewport"><div class="case-horizontal-track"><article class="case-card reveal"><img src="assets/brand-mark-orange.svg" alt="Case example" /><div class="case-card-copy"><div class="case-meta">2026 · Malaysia · Haier</div><h3>TikTok Live Selling from Zero</h3></div></article><article class="case-card reveal"><img src="assets/brand-mark-orange.svg" alt="Case example" /><div class="case-card-copy"><div class="case-meta">2025 · Indonesia · Chery</div><h3>TikTok Live-Selling Account Matrix</h3></div></article></div></div></div></section>';
}

function resourcePage() {
  return '<section class="inner-hero"><img src="assets/brand-mark-orange.svg" alt="Resources" /><div class="inner-hero-content"><div class="eyebrow">Global Resources</div><h1 class="inner-title">Local access.<br /><em>Global impact.</em></h1><p class="inner-description">A regionally rooted network of media, landmark OOH, cultural IP, entertainment and public-sector opportunities for brands entering high-value global markets.</p></div></section>' +
    '<section class="section"><div class="section-inner"><div class="metric-row reveal"><div class="metric"><strong>GLOBAL</strong><b>Media ecosystem</b><small>Search · mobile · news · audio · social · video</small></div><div class="metric"><strong>04</strong><b>Regional networks</b><small>Global · APAC · Middle East &amp; Africa · Americas &amp; Europe</small></div><div class="metric"><strong>PREMIUM</strong><b>Access portfolio</b><small>Landmarks · OOH · event IP · culture · sport</small></div></div></div></section>';
}

function hostPage() {
  return '<section class="inner-hero"><img src="assets/brand-mark-orange.svg" alt="Host agency" /><div class="inner-hero-content"><div class="eyebrow">Host Agency</div><h1 class="inner-title">The region’s premier<br />host agency.</h1><p class="inner-description">A professional talent agency powering Southeast Asia’s livestream ecosystem — signed creators, structured training and brand collaboration under one roof.</p></div></section>';
}

function businessPage() {
  return '<section class="inner-hero"><img src="assets/brand-mark-orange.svg" alt="Business" /><div class="inner-hero-content"><div class="eyebrow">Global Growth System</div><h1 class="inner-title">Global growth.<br />One operating system.</h1><p class="inner-description">Strategy, content, media, creators, AI and local sales connected from first-market entry to sustained conversion.</p></div></section>' +
    '<section class="section"><div class="section-inner"><div class="metric-row reveal"><div class="metric"><strong>268K+</strong><b>Global media placements</b><small>Search · mobile · portal · audio · social · CTV</small></div><div class="metric"><strong>183</strong><b>Airline destinations</b><small>Across six continents</small></div><div class="metric"><strong>14M+</strong><b>Premium travelers monthly</b><small>High-attention international audiences</small></div></div></div></section>';
}

function renderApp() {
  var route = currentRoute();
  var page = {
    '/': homePage,
    '/cases': casesPage,
    '/resources': resourcePage,
    '/host-agency': hostPage,
    '/business': businessPage
  }[route] || function () { return '<section class="not-found"><div><strong>404</strong><h1>That page has moved.</h1><button class="link-arrow" type="button">Back home <span>→</span></button></div></section>'; };
  app.innerHTML = page() + '<section class="contact-section" id="contact"><div class="contact-grid"><div class="reveal"><div class="eyebrow">Get in touch</div><h2 class="contact-title">Ready to make<br />your brand <strong>global?</strong></h2><p class="contact-intro">Tell us about your market, ambition and timeline. Our regional team will reply within one business day.</p></div><form class="contact-form reveal"><div class="field"><label>Name</label><input required /></div><div class="field"><label>Company</label><input required /></div><div class="field"><label>Work email</label><input type="email" required /></div><div class="field"><label>Target market</label><select><option>Southeast Asia</option><option>Middle East</option><option>Greater China</option></select></div><div class="field field-wide"><label>Project brief</label><textarea></textarea></div><button class="submit-button" type="submit">Send project brief ↗</button></form></div></section>' + '<footer class="footer"><div class="footer-inner"><div><a class="footer-brand" href="#/"><img src="assets/brand-logo-white.svg" alt="Digital Team" /></a><p>Rooted and tech-driven global marketing agency. Global strategy, local relevance and technology at scale.</p></div><div><h3>Navigate</h3><a href="#/">Home</a><a href="#/resources">Resources</a><a href="#/cases">Cases</a><a href="#/host-agency">Host Agency</a><a href="#/business">Business</a></div><div><h3>Offices</h3><address>Singapore · Bangkok · Kuala Lumpur · Dubai</address></div></div><div class="footer-bottom"><span>© 2026 DIGITAL TEAM</span><span>Singapore · Thailand · Malaysia · UAE · China</span></div></footer>';
  document.title = route === '/' ? 'Digital Team — Rooted & Tech-Driven Global Marketing Agency' : 'Digital Team';
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  window.scrollTo(0, 0);
}

function closeMenu() {
  menuToggle.classList.remove('is-open');
  menuToggle.classList.remove('is-active');
  mobileMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', function () {
  var opening = !mobileMenu.classList.contains('is-open');
  menuToggle.classList.toggle('is-open', opening);
  menuToggle.classList.toggle('is-active', opening);
  mobileMenu.classList.toggle('is-open', opening);
  menuToggle.setAttribute('aria-expanded', String(opening));
  mobileMenu.setAttribute('aria-hidden', String(!opening));
  document.body.classList.toggle('menu-open', opening);
});

document.querySelectorAll('.mobile-menu a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', function (event) {
  var target = event.target.closest('[data-contact]');
  if (!target) return;
  closeMenu();
  var contact = document.getElementById('contact');
  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('click', function (event) {
  var target = event.target.closest('[data-scroll]');
  if (!target) return;
  var selector = target.getAttribute('data-scroll');
  var element = document.querySelector(selector);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
  var scrollable = document.documentElement.scrollHeight - window.innerHeight;
  var ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = 'scaleX(' + ratio + ')';
  header.classList.toggle('is-compact', window.scrollY > 42);
}, { passive: true });

window.addEventListener('hashchange', renderApp);
renderApp();
