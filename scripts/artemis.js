const missions = [
  {
    icon: '🚀',
    date: 'November 2022',
    name: 'Artemis I',
    status: 'done',
    desc: 'Uncrewed test flight of SLS and Orion. Orion traveled 40,000 miles beyond the Moon and splashed down after 25.5 days. All objectives achieved.'
  },
  {
    icon: '👨‍🚀',
    date: '2026',
    name: 'Artemis II',
    status: 'active',
    desc: 'First crewed Artemis flight. Four astronauts will fly around the Moon without landing — the first humans at lunar distance since Apollo 17 in 1972.'
  },
  {
    icon: '🌕',
    date: '2027',
    name: 'Artemis III',
    status: 'planned',
    desc: 'First crewed lunar landing since Apollo 17. Two astronauts will land near the south pole aboard SpaceX Starship HLS.'
  },
  {
    icon: '🛰️',
    date: '2028',
    name: 'Artemis IV',
    status: 'planned',
    desc: 'First mission to dock with the Lunar Gateway. Delivers ESA/JAXA habitation module and expands surface operations.'
  },
  {
    icon: '🔭',
    date: '2029+',
    name: 'Artemis V and Beyond',
    status: 'planned',
    desc: 'Sustained lunar operations, increasing surface stays, and technology validation for eventual crewed missions to Mars.'
  }
];

const hardware = [
  {
    icon: '🚀',
    tag: 'Launch Vehicle',
    name: 'Space Launch System (SLS)',
    desc: 'The most powerful operational rocket ever built. Stands 322 feet tall and generates 8.8 million pounds of thrust at liftoff — 15% more than the Saturn V.',
    specs: ['322 ft tall', '8.8M lbs thrust', '4× RS-25 engines', 'Operational 2022']
  },
  {
    icon: '🛸',
    tag: 'Crew Capsule',
    name: 'Orion',
    desc: 'Built for deep space. Carries 4 astronauts beyond low Earth orbit with a heat shield rated for 25,000 mph re-entry. ESA provides the Service Module.',
    specs: ['4-crew capacity', '25,000 mph re-entry', 'ESA Service Module', '21-day missions']
  },
  {
    icon: '🛰️',
    tag: 'Lunar Outpost',
    name: 'Lunar Gateway',
    desc: 'A small space station in lunar orbit. Serves as a staging point for all surface missions. Built with partners from ESA, JAXA, and Canada.',
    specs: ['Lunar orbit', 'International crew', 'Solar electric power', 'Multi-mission hub']
  },
  {
    icon: '🌑',
    tag: 'Lunar Lander',
    name: 'Human Landing System (HLS)',
    desc: 'SpaceX Starship selected as NASA\'s lunar lander. Transports astronauts from Gateway to the lunar surface. Targets the water-ice-rich south pole.',
    specs: ['SpaceX Starship', 'South pole landing', 'Reusable design', 'First use: Artemis III']
  }
];


document.addEventListener('DOMContentLoaded', () => {
  renderHardware();
  renderTimeline();
  initNav();
  initForm();
  setActiveNav();
  setTimeout(initFadeIn, 50);
});


function renderHardware() {
  const grid = document.getElementById('hardware-grid');
  if (!grid) return;

  grid.innerHTML = hardware.map(hw => `
    <div class="hw-card fade-in">
      <span class="icon">${hw.icon}</span>
      <div class="tag">${hw.tag}</div>
      <h3>${hw.name}</h3>
      <p>${hw.desc}</p>
      <div class="specs">
        ${hw.specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}


function renderTimeline() {
  const list = document.getElementById('timeline-list');
  if (!list) return;

  const badgeMap = {
    done: ['badge-done', 'Complete'],
    active: ['badge-active', 'In Progress'],
    planned: ['badge-planned', 'Planned']
  };

  list.innerHTML = missions.map(m => {
    const [cls, label] = badgeMap[m.status];
    return `
      <div class="tl-item fade-in">
        <div class="tl-dot">${m.icon}</div>
        <div class="tl-card">
          <div class="tl-date">${m.date}</div>
          <div class="tl-title">${m.name} <span class="badge ${cls}">${label}</span></div>
          <p>${m.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}


function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });
}

function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
}


function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const success = document.getElementById('form-success');
  const countEl = document.getElementById('sub-count');

  const subs = JSON.parse(localStorage.getItem('artemis-subs') || '[]');
  if (countEl) countEl.textContent = subs.length;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const interest = form.querySelector('#interest').value;

    if (!name || !email) return;

    subs.push({ name, email, interest, date: new Date().toISOString() });
    localStorage.setItem('artemis-subs', JSON.stringify(subs));

    if (countEl) countEl.textContent = subs.length;

    form.style.display = 'none';
    if (success) {
      success.style.display = 'block';
      success.innerHTML = `<p>🚀 Welcome aboard, ${name}!</p><p>You're now tracking the Artemis mission.</p>`;
    }
  });
}


function initFadeIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}