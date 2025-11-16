document.addEventListener('DOMContentLoaded', function() {

  /* NAV TOGGLE */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if(navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  /* SMOOTH SCROLL for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  /* BACK TO TOP BUTTON (create if not present) */
  let backBtn = document.getElementById('back-to-top');
  if(!backBtn) {
    backBtn = document.createElement('button');
    backBtn.id = 'back-to-top';
    backBtn.className = 'back-to-top';
    backBtn.title = 'Back to top';
    backBtn.innerHTML = '<i class="fa fa-chevron-up"></i>';
    document.body.appendChild(backBtn);
  }
  window.addEventListener('scroll', () => {
    backBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
  });
  backBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  /* ACCORDION (if present) */
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      if(panel) {
        panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px';
      }
    });
  });

  /* GALLERY LIGHTBOX */
  const images = Array.from(document.querySelectorAll('.lightbox-img'));
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  const lbNext = document.getElementById('lightbox-next');
  const lbPrev = document.getElementById('lightbox-prev');
  let currentIndex = -1;

  function openLightbox(index) {
    if(!lightbox) return;
    currentIndex = index;
    const figure = images[index]?.closest('figure');
    lbImg.src = images[index].src;
    lbImg.alt = images[index].alt || '';
    lbCaption.textContent = figure?.querySelector('figcaption')?.textContent || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lbImg.focus?.();
  }

  function closeLightbox() {
    if(!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    currentIndex = -1;
  }

  function showNext(delta) {
    if(images.length === 0) return;
    currentIndex = (currentIndex + delta + images.length) % images.length;
    openLightbox(currentIndex);
  }

  images.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(i));
    img.addEventListener('keydown', (e) => { if(e.key === 'Enter') openLightbox(i); });
  });

  if(lbClose) lbClose.addEventListener('click', closeLightbox);
  if(lightbox) lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  if(lbNext) lbNext.addEventListener('click', () => showNext(1));
  if(lbPrev) lbPrev.addEventListener('click', () => showNext(-1));
  document.addEventListener('keydown', (e) => {
    if(lightbox && lightbox.classList.contains('open')) {
      if(e.key === 'Escape') closeLightbox();
      if(e.key === 'ArrowRight') showNext(1);
      if(e.key === 'ArrowLeft') showNext(-1);
    }
  });

  /* SEARCH FILTER (menu page) */
  const search = document.getElementById('search');
  if(search) {
    search.addEventListener('input', () => {
      const val = search.value.trim().toLowerCase();
      document.querySelectorAll('#menu-list li').forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(val) ? '' : 'none';
      });
    });
  }

  /* LEAFLET MAP initialization (contact page) */
  if(document.getElementById('map') && typeof L !== 'undefined') {
    try {
      const map = L.map('map').setView([-26.2041, 28.0473], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      L.marker([-26.2041, 28.0473]).addTo(map).bindPopup('The Daily Grind').openPopup();
    } catch(err) {
      console.warn('Leaflet init failed', err);
    }
  }

  /* FORM VALIDATION: CONTACT (opens mail client) */
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    const response = document.getElementById('contact-message-response');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#contact-name').value.trim();
      const email = contactForm.querySelector('#contact-email').value.trim();
      const type = contactForm.querySelector('#contact-type').value;
      const message = contactForm.querySelector('#contact-message').value.trim();
      // simple validation
      if(!name || !email || !type || !message) {
        response.textContent = 'Please complete all fields.';
        response.classList.add('error');
        return;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        response.textContent = 'Please enter a valid email address.';
        response.classList.add('error');
        return;
      }
      response.textContent = 'Preparing your message...';
      response.classList.remove('error');
      // compile mailto
      const recipient = 'recipient@example.com'; // <-- actual recipient
      const subject = encodeURIComponent(`${type} message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`);
      // open default mail client
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      response.textContent = 'If your email client did not open, please copy the details and email us at ' + recipient;
    });
  }

  /* FORM VALIDATION: ENQUIRY (simulated response) */
  const enquiryForm = document.getElementById('enquiryForm');
  if(enquiryForm) {
    const enqResp = document.getElementById('enquiry-message');
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = enquiryForm.querySelector('#enq-name').value.trim();
      const email = enquiryForm.querySelector('#enq-email').value.trim();
      const type = enquiryForm.querySelector('#enq-type').value;
      const details = enquiryForm.querySelector('#enq-details').value.trim();
      if(!name || !email || !type || !details) {
        enqResp.textContent = 'Please complete all fields.';
        enqResp.classList.add('error');
        return;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        enqResp.textContent = 'Please enter a valid email address.';
        enqResp.classList.add('error');
        return;
      }
      // simulate processing and give a minimal response (cost/availability)
      enqResp.classList.remove('error');
      enqResp.textContent = 'Processing enquiry...';
      setTimeout(() => {
        // simple calculation: if volunteer request -> immediate reply, service -> estimate cost
        if(type === 'volunteer') {
          enqResp.textContent = `Thanks ${name}. Volunteer applications are accepted. We'll email ${email} within 3 days.`;
        } else if(type === 'sponsor') {
          enqResp.textContent = `Thanks ${name}. Sponsorship enquiries require discussion. Estimated starting package: R5,000/month.`;
        } else {
          enqResp.textContent = `Thanks ${name}. We'll check availability and email ${email} shortly with details and cost.`;
        }
      }, 900);
    });
  }

  /* 1) Dynamic footer year */
  const footerFirstP = document.querySelector('footer p');
  if (footerFirstP) {
      footerFirstP.textContent = `© ${new Date().getFullYear()} The Daily Grind. All rights reserved.`;
  }

  /* 2) Lazy-load images (adds loading="lazy" to all images) */
  document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) img.loading = 'lazy';
  });

  /* 3) Simple reveal-on-scroll for .highlight and .hero-text */
  const revealTargets = document.querySelectorAll('.highlight, .hero-text');
  if ('IntersectionObserver' in window && revealTargets.length) {
      const obs = new IntersectionObserver((entries, observer) => {
          entries.forEach(e => {
              if (e.isIntersecting) {
                  e.target.classList.add('visible');
                  observer.unobserve(e.target);
              }
          });
      }, { threshold: 0.15 });
      revealTargets.forEach(t => obs.observe(t));
  } else {
      // fallback: add visible immediately
      revealTargets.forEach(t => t.classList.add('visible'));
  }

  /* 4) Smooth scroll for in-page anchors */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (ev) => {
          const target = document.querySelector(a.getAttribute('href'));
          if (target) {
              ev.preventDefault();
              target.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

  /* 5) Simple mobile nav toggle  */
  const navbar = document.querySelector('.navbar');
  const navLinks = navbar?.querySelector('.nav-links');
  if (navbar && navLinks) {
      // toggle button
      if (!navbar.querySelector('.nav-toggle')) {
          const btn = document.createElement('button');
          btn.className = 'nav-toggle';
          btn.type = 'button';
          btn.setAttribute('aria-label', 'Toggle navigation');
          btn.innerHTML = '<span class="hamburger"></span>';
          navbar.insertBefore(btn, navbar.firstChild);

          btn.addEventListener('click', () => {
              navLinks.classList.toggle('open');
              btn.classList.toggle('open');
          });
      }
  }

  /* 6) Small debug log */
  // console.log('main.js loaded — helpers active');
});