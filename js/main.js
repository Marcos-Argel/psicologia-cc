/**
 * PSICOLOGÍA Y PSICOONCOLOGÍA C.C. - MAIN INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  const OFFICIAL_PHONE = '573227212546';

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

        // Close other items
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
      tag: 'Alta Especialidad Clínica',
      description: 'Acompañamiento psicológico de alta especialidad para personas diagnosticadas con cáncer, sobrevivientes y familiares en cada etapa del proceso médico.',
      points: [
        'Intervención en el momento del diagnóstico: contención ante el impacto, incertidumbre y asimilación de la noticia.',
        'Manejo de la ansiedad y el miedo durante quimioterapia, radioterapia, inmunoterapia y cirugías.',
        'Acompañamiento a cuidadores principales y núcleo familiar para evitar sobrecarga y fatiga por compasión.',
        'Técnicas de relajación y regulación para afrontar el dolor, la fatiga y los cambios corporales.',
        'Acompañamiento en remisión o en procesos de duelo oncológico y resignificación de la vida.'
      ],
      whatsappMsg: 'Hola Psicología y Psicooncología C.C., deseo agendar una consulta sobre el servicio de Psicooncología Especializada.'
    },
    'individual': {
      title: 'Psicoterapia Individual para Adultos',
      tag: 'Salud Mental & Bienestar Emocional',
      description: 'Espacio terapéutico confidencial y compasivo para comprender tus emociones, sanar heridas y desarrollar recursos personales para vivir con mayor serenidad.',
      points: [
        'Tratamiento de ansiedad generalizada, crisis de pánico, estrés agudo y fobias.',
        'Acompañamiento en depresión, desmotivación, tristeza persistente y vacío existencial.',
        'Fortalecimiento de la autoestima, seguridad personal y establecimiento de límites saludables.',
        'Gestión de transiciones vitales complejas (separaciones, cambios de empleo, duelos no oncológicos, migración).'
      ],
      whatsappMsg: 'Hola Psicología y Psicooncología C.C., deseo agendar mi cita de Psicoterapia Individual.'
    },
    'duelo': {
      title: 'Acompañamiento en Duelo y Pérdidas Significativas',
      tag: 'Sanación & Elaboración Emocional',
      description: 'Abordaje respetuoso y compasivo para transitar el dolor tras la pérdida de un ser querido, una ruptura o un cambio de vida irreversible.',
      points: [
        'Acompañamiento en duelo agudo y prevención de duelo prolongado o complicado.',
        'Espacio seguro para expresar emociones intensas sin juicios ni imposiciones de tiempos.',
        'Estrategias para la reorganización de la rutina y reestructuración del proyecto de vida.',
        'Herramientas para honrar la memoria del ser querido y reencontrar la paz interior.'
      ],
      whatsappMsg: 'Hola Psicología y Psicooncología C.C., deseo agendar una cita para acompañamiento en un proceso de duelo.'
    },
    'pareja': {
      title: 'Terapia de Pareja y Familiar',
      tag: 'Vínculos & Comunicación Asertiva',
      description: 'Fortalecimiento de la comunicación, resolución de desacuerdos afectivos y acompañamiento a familias que atraviesan momentos críticos o enfermedades.',
      points: [
        'Entrenamiento en comunicación no violenta, escucha activa y resolución de conflictos.',
        'Reconstrucción de la confianza y el afecto ante crisis de pareja o distanciamiento.',
        'Gestión emocional familiar ante el diagnóstico de una enfermedad de un integrante.',
        'Orientación para cuidadores y reorganización de roles familiares en armonía.'
      ],
      whatsappMsg: 'Hola Psicología y Psicooncología C.C., deseo solicitar información y agendar cita de Terapia de Pareja / Familiar.'
    },
    'estres': {
      title: 'Gestión del Estrés y Prevención del Burnout',
      tag: 'Regulación Somática & Equilibrio',
      description: 'Estrategias basadas en neurociencia y psicología clínica para desactivar la sobrecarga física y mental y recuperar el bienestar cotidiano.',
      points: [
        'Identificación temprana de detonantes de estrés y patrones de sobreexigencia.',
        'Entrenamiento en regulación del sistema nervioso mediante respiración y técnicas somáticas.',
        'Prácticas de Mindfulness y compasión aplicadas a la vida diaria y laboral.',
        'Herramientas prácticas para restaurar el sueño, la energía y el balance personal.'
      ],
      whatsappMsg: 'Hola Psicología y Psicooncología C.C., deseo agendar una consulta para la Gestión del Estrés y Regulación Emocional.'
    },
    'empresas': {
      title: 'Talleres, Capacitaciones & Bienestar para Empresas',
      tag: 'Salud Mental Organizacional',
      description: 'Programas y talleres prácticos diseñados a la medida para empresas y organizaciones que buscan promover el bienestar integral, reducir el estrés laboral y fortalecer el talento humano.',
      points: [
        'Talleres vivenciales de Prevención del Síndrome de Burnout y Gestión del Estrés Laboral.',
        'Capacitaciones en Primeros Auxilios Psicológicos para Líderes de Equipo y Talento Humano.',
        'Sesiones de Pausas Activas Emocionales, Mindfulness y Regulación del Clima de Trabajo.',
        'Acompañamiento psicooncológico y de salud mental para colaboradores o familiares con enfermedades complejas.',
        'Modalidad flexible: Talleres virtuales interactivos o presenciales con material de aplicación inmediata.'
      ],
      whatsappMsg: 'Hola Psicología y Psicooncología C.C., represento a una empresa/organización y deseo cotizar talleres y programas de bienestar mental para nuestros colaboradores.'
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
    modalWhatsappBtn.href = `https://wa.me/${OFFICIAL_PHONE}?text=${encodedMsg}`;

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
      message += `Deseo solicitar información / agendar para: *${service}*.\n`;
      message += `Modalidad de preferencia: *${modality}*.\n`;
      if (phone) message += `Mi número de contacto: *${phone}*.\n`;
      if (notes) message += `Detalles o motivo de consulta: _${notes}_\n\n`;
      message += `Agradezco su pronta respuesta para coordinar la cita o cotización. ¡Muchas gracias!`;

      const whatsappUrl = `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(message)}`;
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
