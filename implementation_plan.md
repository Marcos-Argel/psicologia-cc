# Plan de Implementación: Sitio Web Profesional "Psicología y Psicooncología C.C."

Desarrollo integral de la página web para **Psicología y Psicooncología C.C.**, basado en la identidad corporativa proporcionada (paleta verde salvia/dorado/marfil, tipografías *Cormorant Garamond* y *Montserrat*) y el modelo de referencia funcional (*Centro de Psicología Integral*).

---

## 1. Levantamiento de Requerimientos

### 1.1. Perfil del Negocio & Propuesta de Valor
- **Nombre**: Psicología y Psicooncología C.C.
- **Slogan**: *"Acompañamos tu proceso, transformamos juntos."*
- **Especialidad Principal**: Psicología Clínica y **Psicooncología** (acompañamiento emocional y terapéutico a personas diagnosticadas con cáncer, pacientes en remisión, sobrevivientes y sus núcleos familiares; manejo del duelo, dolor crónico y adaptación a la enfermedad).
- **Modalidades**: Atención Virtual (enfoque global/nacional) y Presencial.

### 1.2. Estructura y Secciones del Sitio (One-Page Modular Premium)
1. **Barra de Navegación (Header Sticky)**:
   - Logotipo vectorial oficial (Cerebro Dorado + Hoja Verde Salvia + Puntos de conexión).
   - Enlaces de navegación rápida: *Inicio, Sobre Nosotros, Psicooncología, Servicios, Filosofía, FAQ, Contacto*.
   - Botón de Acción Destacado: *"Agendar Cita"* (vinculado a WhatsApp y modal).
2. **Hero Section (Impacto Visual & Empatía)**:
   - Titular cálido y profesional con tipografía editorial (*Cormorant Garamond*).
   - Subtítulo explicativo enfocado en contención emocional y salud integral.
   - Botones dobles de conversión (*"Agendar Consulta"* y *"Conocer Servicios"*).
   - Badges de confianza: *Atención 100% Confidencial*, *Modalidad Virtual y Presencial*, *Especialistas Certificados*.
3. **Sobre Nosotros & Filosofía del Logo**:
   - Historia y propósito de la clínica.
   - Pestañas interactivas para:
     - **Nuestra Misión** (acompañar procesos de transformación y sanación integral).
     - **Nuestra Visión** (ser referente en salud mental y cuidado psicooncológico compasivo).
     - **Nuestros Valores** (Empatía, Rigor Científico, Contención Humana, Confidencialidad).
   - Desglose interactivo del simbolismo del logo (Cerebro = Clínica/Mente, Hoja = Transformación y Esperanza, Puntos = Conexión y Atención Online).
4. **Especialidad Destacada: Psicooncología**:
   - Explicación clara de qué es la psicooncología y cuándo acudir.
   - Cuadrantes de intervención:
     - *Acompañamiento en el Diagnóstico y Tratamiento*.
     - *Apoyo Emocional a Familias y Cuidadores*.
     - *Gestión de la Incertidumbre, Miedo y Dolor Crónico*.
     - *Elaboración del Duelo y Resiliencia*.
5. **Portafolio Completo de Servicios**:
   - Tarjetas interactivas con efectos hover y botón *"Más Información"* / *"Solicitar Información por WhatsApp"*:
     - 1. Psicooncología Especializada (Individual y Familiar).
     - 2. Psicoterapia Individual (Ansiedad, Depresión, Estrés, Autoestima).
     - 3. Terapia de Pareja y Familia.
     - 4. Acompañamiento en Duelo y Pérdidas Significativas.
     - 5. Gestión del Estrés y Regulación Emocional.
     - 6. Talleres & Formación Empresarial / Organizacional (Salud mental en el trabajo, autocuidado).
6. **¿Por Qué Elegirnos? (Diferenciales & Proceso Terapéutico)**:
   - Pasos claros para iniciar: *1. Contacto inicial -> 2. Valoración diagnóstica -> 3. Plan terapéutico personalizado -> 4. Acompañamiento continuo*.
7. **Preguntas Frecuentes (FAQ Acordeón Interactivo)**:
   - Respuestas a dudas comunes: ¿Cómo funcionan las sesiones virtuales? ¿Qué diferencia a la psicooncología de la terapia tradicional? ¿Cuánto dura una sesión? ¿Cómo es el método de pago?
8. **Módulo de Agendamiento y Contacto**:
   - Formulario de contacto interactivo y selector de motivo de consulta.
   - Generador automático de mensaje personalizado para WhatsApp (`wa.me`).
   - Información de contacto, horarios y canales de atención.
9. **Footer Completo**:
   - Logo, descripción, enlaces de navegación, redes sociales, aviso de confidencialidad y copyright.
10. **Widget Flotante de WhatsApp**:
    - Botón flotante siempre visible con tooltip interactivo para agendamiento inmediato.

---

## 2. Sistema de Diseño Visual

### 2.1. Tipografías (Google Fonts)
- **Titulares & Énfasis**: `'Cormorant Garamond', serif` (Elegante, cálida, médica, de alta gama).
- **Cuerpo, UI & Botones**: `'Montserrat', sans-serif` (Limpia, moderna, altamente legible).

### 2.2. Paleta de Color Oficial (Extraída del Brandbook)
- `--color-primary-dark`: `#1F382E` (Verde bosque profundo - transmite solidez, calma y profesionalismo).
- `--color-primary`: `#2D4A3E` (Verde corporativo principal).
- `--color-primary-light`: `#4A6B5D` (Verde medio para acentos y estados hover).
- `--color-sage`: `#8E9B8A` (Verde salvia suave para fondos secundarios e iconos).
- `--color-gold`: `#C5A880` (Dorado cálido - mente, conocimiento y calidez humana).
- `--color-gold-light`: `#E8DFD3` (Dorado arena suave para fondos de tarjetas).
- `--color-bg`: `#FAF8F5` (Marfil/crema cálido para fondo general - reduce la fatiga visual frente al blanco puro).
- `--color-card-bg`: `#FFFFFF` (Blanco con sutil sombra cálida).
- `--color-text`: `#222D28` (Gris oscuro carbón para máxima legibilidad).
- `--color-text-muted`: `#5F7068` (Verde grisáceo para subtítulos y textos secundarios).

---

## 3. Estructura de Archivos a Crear

```
Pagina de joel/
│
├── index.html            # Estructura semántica completa con SEO y accesibilidad
├── css/
│   └── styles.css        # Sistema de diseño, tokens CSS, componentes y animaciones
├── js/
│   └── main.js           # Lógica interactiva (agendador WhatsApp, acordeón, modales, navegación)
└── assets/
    ├── logo.svg          # Logotipo vectorial SVG de alta fidelidad (cerebro + hoja + tipografía)
    ├── logo-icon.svg     # Isotipo SVG para favicon y detalles
    └── images/           # Ilustraciones y recursos visuales vectoriales
```

---

## 4. Plan de Verificación

1. **Pruebas de Maquetación & Responsividad**:
   - Comprobación en resoluciones móviles (375px, 414px), tablets (768px, 1024px) y pantallas de escritorio (1440px+).
2. **Pruebas de Interactividad**:
   - Selector de consultas y apertura automática de WhatsApp con mensaje parametrizado.
   - Acordeón de FAQ con animaciones fluidas.
   - Pestañas de Misión/Visión y modales informativos de servicios.
   - Navegación suave por anclas (*smooth scroll*) con compensación del header fijo.
3. **Revisión de Accesibilidad & Rendimiento**:
   - Contrastes WCAG AA en textos y botones.
   - Carga instantánea sin dependencias pesadas innecesarias.
