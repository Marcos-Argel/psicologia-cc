/**
 * PSICOLOGÍA Y PSICOONCOLOGÍA C.C. - MAIN INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header & Active Scroll State
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav link based on scroll position
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      const isExpanded = mobileToggle.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. Tabs System (Misión, Visión, Valores)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: close other open items for cleaner feel
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        item.classList.toggle('active', !isActive);
      });
    }
  });

  // 5. Service Modal Data & Handlers
  const serviceDetails = {
    'psicooncologia': {
      title: 'Psicooncología Especializada',
      tag: 'Especialidad Central',
      description: 'Acompañamiento psicológico de alta especialidad para personas diagnosticadas con cáncer, sobrevivientes y familiares en cada etapa del proceso oncológico.',
      points: [
        'Intervención terapéutica en el momento del diagnóstico (shock, incertidumbre y asimilación).',
        'Manejo de la ansiedad y el miedo durante quimioterapia, radioterapia y cirugías.',
        'Acompañamiento a cuidadores principales y núcleo familiar cercano.',
        'Herramientas para afrontar el dolor, la fatiga y cambios corporales.',
        'Procesos de duelo oncológico, despedida y resiliencia emocional.'
      ],
      whatsappMsg: 'Hola, deseo recibir información detallada sobre el servicio de Psicooncología Especializada.'
    },
    'individual': {
      title: 'Psicoterapia Individual para Adultos',
      tag: 'Salud Mental & Bienestar',
      description: 'Espacio confidencial y compasivo orientado a profundizar en tu historia, comprender tus emociones y desarrollar recursos personales para una vida plena.',
      points: [
        'Tratamiento de ansiedad, crisis de pánico, estrés y fobias.',
        'Acompañamiento en depresión, desmotivación y vacío existencial.',
        'Fortalecimiento de la autoestima, límites saludables y autoconocimiento.',
        'Gestión de transiciones de vida complejas (separaciones, cambios de empleo, migración).'
      ],
      whatsappMsg: 'Hola, deseo agendar una consulta de Psicoterapia Individual.'
    },
    'pareja': {
      title: 'Terapia de Pareja y Familiar',
      tag: 'Vínculos & Relaciones',
      description: 'Fortalecimiento de la comunicación asertiva, resolución de conflictos afectivos y reconstrucción del vínculo empático y de confianza.',
      points: [
        'Mejora de la comunicación no violenta y resolución de discusiones.',
        'Reconstrucción de la confianza ante crisis o infidelidad.',
        'Gestión emocional ante enfermedades graves de un miembro familiar.',
        'Orientación para padres en etapas de crianza y adolescencia.'
      ],
      whatsappMsg: 'Hola, me gustaría información sobre Terapia de Pareja y Familiar.'
    },
    'duelo': {
      title: 'Acompañamiento en Duelo y Pérdidas',
      tag: 'Sanación Emocional',
      description: 'Abordaje especializado para transitar el dolor tras la pérdida de un ser querido, una ruptura o un cambio de vida irreversible.',
      points: [
        'Acompañamiento en duelo agudo y duelo prolongado o complicado.',
        'Espacio para expresar el dolor sin juicios ni prisas.',
        'Reestructuración del proyecto de vida tras la pérdida.',
        'Herramientas para encontrar sentido y honrar la memoria.'
      ],
      whatsappMsg: 'Hola, requiero acompañamiento terapéutico para un proceso de duelo.'
    },
    'estres': {
      title: 'Gestión del Estrés y Regulación Emocional',
      tag: 'Mindfulness & Equilibrio',
      description: 'Técnicas basadas en evidencia científica para desactivar el agotamiento físico y mental (burnout) y recuperar el equilibrio emocional.',
      points: [
        'Identificación de detonantes de estrés y sobrecarga mental.',
        'Entrenamiento en regulación del sistema nervioso y respiración.',
        'Técnicas de Mindfulness y compasión hacia uno mismo.',
        'Estrategias para prevenir el síndrome de Burnout laboral.'
      ],
      whatsappMsg: 'Hola, deseo información sobre el programa de Gestión del Estrés y Regulación Emocional.'
    },
    'empresas': {
      title: 'Talleres y Formación Organizacional',
      tag: 'Salud Mental Corporativa',
      description: 'Capacitaciones grupales y programas de bienestar para empresas que buscan cuidar el talento humano y prevenir riesgos psicosociales.',
      points: [
        'Primeros auxilios psicológicos para equipos y líderes.',
        'Talleres de manejo de estrés laboral y resiliencia corporativa.',
        'Comunicación asertiva, empatía y resolución colaborativa.',
        'Diagnóstico y propuestas personalizadas de bienestar laboral.'
      ],
      whatsappMsg: 'Hola, represento a una organización y deseo cotizar un taller o formación corporativa.'
    }
  };

  const modalBackdrop = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalTag = document.getElementById('modalTag');
  const modalDesc = document.getElementById('modalDesc');
  const modalPoints = document.getElementById('modalPoints');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const openServiceModal = (serviceKey) => {
    const data = serviceDetails[serviceKey];
    if (!data || !modalBackdrop) return;

    modalTitle.textContent = data.title;
    modalTag.textContent = data.tag;
    modalDesc.textContent = data.description;

    modalPoints.innerHTML = '';
    data.points.forEach(pt => {
      const li = document.createElement('li');
      li.textContent = pt;
      modalPoints.appendChild(li);
    });

    const encodedMsg = encodeURIComponent(data.whatsappMsg);
    modalWhatsappBtn.href = `https://wa.me/573146453164?text=${encodedMsg}`;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-open-modal');
      openServiceModal(serviceKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeServiceModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeServiceModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeServiceModal();
    }
  });

  // 6. Interactive WhatsApp Appointment Form Builder
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bookingName').value.trim();
      const phone = document.getElementById('bookingPhone').value.trim();
      const service = document.getElementById('bookingService').value;
      const modality = document.getElementById('bookingModality').value;
      const notes = document.getElementById('bookingNotes').value.trim();

      let message = `¡Hola Psicología y Psicooncología C.C.!\n\n`;
      message += `Mi nombre es *${name}*.\n`;
      message += `Deseo agendar una cita para el servicio: *${service}*.\n`;
      message += `Modalidad de preferencia: *${modality}*.\n`;
      if (phone) message += `Mi número de contacto: *${phone}*.\n`;
      if (notes) message += `Motivo o consulta adicional: _${notes}_\n\n`;
      message += `Quedo atento/a para conocer la disponibilidad de agenda. ¡Muchas gracias!`;

      const whatsappUrl = `https://wa.me/573146453164?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // 7. Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.fade-in-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
