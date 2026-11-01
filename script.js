'use strict';

/* =========================================================
   TEXTOS EN 4 IDIOMES
   Per canviar un text, busca'l ací i edita'l en cada idioma.
   ========================================================= */
const translations = {
    es: {
        page_title: 'The Language Corner | Tu academia en Moncofa',
        meta_description: 'Academia en Moncofa con más de 25 años de experiencia: inglés para todas las edades, clases de español y valenciano, refuerzo escolar, preparación de certificaciones, traducciones y clases presenciales u online.',
        skip: 'Saltar al contenido',
        menu: 'Menú',
        nav_about: 'Quiénes somos',
        nav_services: 'Servicios',
        nav_facilities: 'Instalaciones',
        nav_contact: 'Contacto',
        hero_title: 'Tu academia en Moncofa',
        hero_subtitle: 'Más de 25 años formando a todas las edades',
        cta_whatsapp: 'Escríbenos por WhatsApp',
        alt_hero: 'Aula de The Language Corner con estantería de libros',
        about_title: 'Quiénes somos',
        about_subtitle: 'Centro de Formación y Enseñanza',
        about_p1: 'Somos Raquel y Mª Rosa, profesoras y propietarias de The Language Corner. Nuestra pasión es la enseñanza y el aprendizaje continuo.',
        about_years: 'años de experiencia',
        about_p2: 'Creemos en una enseñanza cercana, personalizada y adaptada a las necesidades de cada estudiante, en un ambiente familiar y acogedor.',
        why_title: '¿Por qué elegirnos?',
        why_1: 'Grupos reducidos',
        why_2: 'Enseñanza presencial y online',
        why_3: 'Todas las materias y todos los niveles',
        why_4: 'Más de 25 años de experiencia',
        why_5: 'Atención personalizada',
        services_title: 'Nuestros servicios',
        serv_1_title: 'Inglés a todos los niveles',
        serv_1_desc: 'Para todas las edades. Aprende y mejora tu nivel de inglés de forma dinámica.',
        serv_es_title: 'Clases de español y valenciano',
        serv_es_desc: 'Aprende español o valenciano, o mejora tu nivel, con clases adaptadas a tus necesidades.',
        serv_2_title: 'Refuerzo escolar',
        serv_2_desc: 'Apoyo en todas las materias, tanto de ciencias como de letras, para Primaria, ESO, Bachillerato y Estudios Superiores.',
        serv_study_title: 'Técnicas de estudio',
        serv_study_desc: 'Aprende a organizarte, planificar y estudiar de forma más eficaz.',
        serv_3_title: 'Preparación para certificaciones',
        serv_3_desc: 'Te preparamos para superar los exámenes oficiales de certificación de idiomas.',
        serv_4_title: 'Traducciones',
        serv_4_desc: 'Servicio profesional de traducción de textos y documentos.',
        serv_5_title: 'Técnicas de redacción',
        serv_5_desc: 'Mejora tus habilidades de escritura académica y profesional.',
        serv_6_title: 'Clases presenciales y online',
        serv_6_desc: 'Flexibilidad total. Elige la modalidad que mejor se adapte a ti.',
        facilities_title: 'Nuestras instalaciones',
        facilities_subtitle: 'Un espacio cercano y acogedor, pensado para aprender a gusto.',
        gallery_1: 'Aula grande',
        gallery_2: 'Aula pequeña',
        gallery_3: 'Sala de familias',
        gallery_4: 'Aula biblioteca',
        gallery_5: 'Entrada',
        contact_title: 'Contacto',
        contact_cta_desc: 'La forma más rápida de contactar con nosotras es por teléfono o WhatsApp.',
        map_load: 'Mostrar mapa',
        map_open: 'Abrir en Google Maps',
        footer_rights: 'Todos los derechos reservados.',
        footer_made: 'Hecho con ❤️ en Moncofa',
        footer_disclaimer: 'Esta página web puede contener errores u omisiones involuntarias. La información mostrada es orientativa y puede estar sujeta a cambios. Ante cualquier duda, contacta directamente con la academia.',
        lb_close: 'Cerrar',
        lb_prev: 'Foto anterior',
        lb_next: 'Foto siguiente'
    },
    val: {
        page_title: 'The Language Corner | La teua acadèmia a Moncofa',
        meta_description: 'Acadèmia a Moncofa amb més de 25 anys d\'experiència: anglés per a totes les edats, classes d\'espanyol i valencià, reforç escolar, preparació de certificacions, traduccions i classes presencials o en línia.',
        skip: 'Salta al contingut',
        menu: 'Menú',
        nav_about: 'Qui som',
        nav_services: 'Serveis',
        nav_facilities: 'Instal·lacions',
        nav_contact: 'Contacte',
        hero_title: 'La teua acadèmia a Moncofa',
        hero_subtitle: 'Més de 25 anys formant a totes les edats',
        cta_whatsapp: 'Escriu-nos per WhatsApp',
        alt_hero: 'Aula de The Language Corner amb prestatgeria de llibres',
        about_title: 'Qui som',
        about_subtitle: 'Centre de Formació i Ensenyament',
        about_p1: 'Som Raquel i Mª Rosa, professores i propietàries de The Language Corner. La nostra passió és l\'ensenyament i l\'aprenentatge continu.',
        about_years: 'anys d\'experiència',
        about_p2: 'Creiem en un ensenyament proper, personalitzat i adaptat a les necessitats de cada estudiant, en un ambient familiar i acollidor.',
        why_title: 'Per què triar-nos?',
        why_1: 'Grups reduïts',
        why_2: 'Ensenyament presencial i en línia',
        why_3: 'Totes les matèries i tots els nivells',
        why_4: 'Més de 25 anys d\'experiència',
        why_5: 'Atenció personalitzada',
        services_title: 'Els nostres serveis',
        serv_1_title: 'Anglés a tots els nivells',
        serv_1_desc: 'Per a totes les edats. Aprén i millora el teu nivell d\'anglés de manera dinàmica.',
        serv_es_title: 'Classes d\'espanyol i valencià',
        serv_es_desc: 'Aprén espanyol o valencià, o millora el teu nivell, amb classes adaptades a les teues necessitats.',
        serv_2_title: 'Reforç escolar',
        serv_2_desc: 'Suport en totes les matèries, tant de ciències com de lletres, per a Primària, ESO, Batxillerat i Estudis Superiors.',
        serv_study_title: 'Tècniques d\'estudi',
        serv_study_desc: 'Aprén a organitzar-te, planificar i estudiar de manera més eficaç.',
        serv_3_title: 'Preparació per a certificacions',
        serv_3_desc: 'Et preparem per a superar els exàmens oficials de certificació d\'idiomes.',
        serv_4_title: 'Traduccions',
        serv_4_desc: 'Servei professional de traducció de textos i documents.',
        serv_5_title: 'Tècniques de redacció',
        serv_5_desc: 'Millora les teues habilitats d\'escriptura acadèmica i professional.',
        serv_6_title: 'Classes presencials i en línia',
        serv_6_desc: 'Flexibilitat total. Tria la modalitat que millor s\'adapte a tu.',
        facilities_title: 'Les nostres instal·lacions',
        facilities_subtitle: 'Un espai proper i acollidor, pensat per a aprendre a gust.',
        gallery_1: 'Aula gran',
        gallery_2: 'Aula xicoteta',
        gallery_3: 'Sala de famílies',
        gallery_4: 'Aula biblioteca',
        gallery_5: 'Entrada',
        contact_title: 'Contacte',
        contact_cta_desc: 'La manera més ràpida de contactar amb nosaltres és per telèfon o WhatsApp.',
        map_load: 'Mostra el mapa',
        map_open: 'Obri en Google Maps',
        footer_rights: 'Tots els drets reservats.',
        footer_made: 'Fet amb ❤️ a Moncofa',
        footer_disclaimer: 'Esta pàgina web pot contindre errors o omissions involuntàries. La informació mostrada és orientativa i pot estar subjecta a canvis. Davant de qualsevol dubte, contacta directament amb l\'acadèmia.',
        lb_close: 'Tanca',
        lb_prev: 'Foto anterior',
        lb_next: 'Foto següent'
    },
    en: {
        page_title: 'The Language Corner | Your academy in Moncofa',
        meta_description: 'Academy in Moncofa with over 25 years of experience: English for all ages, Spanish and Valencian classes, school tutoring, exam preparation, translations, and in-person or online classes.',
        skip: 'Skip to content',
        menu: 'Menu',
        nav_about: 'About us',
        nav_services: 'Services',
        nav_facilities: 'Facilities',
        nav_contact: 'Contact',
        hero_title: 'Your academy in Moncofa',
        hero_subtitle: 'Over 25 years educating all ages',
        cta_whatsapp: 'Message us on WhatsApp',
        alt_hero: 'The Language Corner classroom with a bookcase',
        about_title: 'About us',
        about_subtitle: 'Training and Education Centre',
        about_p1: 'We are Raquel and Mª Rosa, the teachers and owners of The Language Corner. Our passion is teaching and lifelong learning.',
        about_years: 'years of experience',
        about_p2: 'We believe in close, personalised teaching adapted to each student\'s needs, in a friendly and welcoming environment.',
        why_title: 'Why choose us?',
        why_1: 'Small groups',
        why_2: 'In-person and online teaching',
        why_3: 'All subjects and all levels',
        why_4: 'Over 25 years of experience',
        why_5: 'Personal attention',
        services_title: 'Our services',
        serv_1_title: 'English for all levels',
        serv_1_desc: 'For all ages. Learn and improve your English in a dynamic way.',
        serv_es_title: 'Spanish and Valencian classes',
        serv_es_desc: 'Learn Spanish or Valencian, or improve your level, with classes tailored to your needs.',
        serv_2_title: 'School tutoring',
        serv_2_desc: 'Support in all subjects, sciences and humanities, for Primary, Secondary, Sixth Form and Higher Education.',
        serv_study_title: 'Study skills',
        serv_study_desc: 'Learn to organise yourself, plan ahead and study more effectively.',
        serv_3_title: 'Exam preparation',
        serv_3_desc: 'We prepare you to pass official language certification exams.',
        serv_4_title: 'Translations',
        serv_4_desc: 'Professional translation of texts and documents.',
        serv_5_title: 'Writing skills',
        serv_5_desc: 'Improve your academic and professional writing.',
        serv_6_title: 'In-person and online classes',
        serv_6_desc: 'Total flexibility. Choose the format that suits you best.',
        facilities_title: 'Our facilities',
        facilities_subtitle: 'A friendly, welcoming space designed for comfortable learning.',
        gallery_1: 'Main classroom',
        gallery_2: 'Small classroom',
        gallery_3: 'Family room',
        gallery_4: 'Library classroom',
        gallery_5: 'Entrance',
        contact_title: 'Contact',
        contact_cta_desc: 'The fastest way to reach us is by phone or WhatsApp.',
        map_load: 'Show map',
        map_open: 'Open in Google Maps',
        footer_rights: 'All rights reserved.',
        footer_made: 'Made with ❤️ in Moncofa',
        footer_disclaimer: 'This website may contain unintentional errors or omissions. The information shown is for guidance only and may change. If in doubt, please contact the academy directly.',
        lb_close: 'Close',
        lb_prev: 'Previous photo',
        lb_next: 'Next photo'
    },
    fr: {
        page_title: 'The Language Corner | Votre académie à Moncofa',
        meta_description: 'Académie à Moncofa avec plus de 25 ans d\'expérience : anglais pour tous les âges, cours d\'espagnol et de valencien, soutien scolaire, préparation aux certifications, traductions et cours en présentiel ou en ligne.',
        skip: 'Aller au contenu',
        menu: 'Menu',
        nav_about: 'Qui sommes-nous',
        nav_services: 'Services',
        nav_facilities: 'Nos locaux',
        nav_contact: 'Contact',
        hero_title: 'Votre académie à Moncofa',
        hero_subtitle: 'Plus de 25 ans à former tous les âges',
        cta_whatsapp: 'Écrivez-nous sur WhatsApp',
        alt_hero: 'Salle de The Language Corner avec une bibliothèque',
        about_title: 'Qui sommes-nous',
        about_subtitle: 'Centre de Formation et d\'Enseignement',
        about_p1: 'Nous sommes Raquel et Mª Rosa, professeures et propriétaires de The Language Corner. Notre passion est l\'enseignement et l\'apprentissage continu.',
        about_years: 'ans d\'expérience',
        about_p2: 'Nous croyons en un enseignement de proximité, personnalisé et adapté aux besoins de chaque élève, dans une ambiance familiale et chaleureuse.',
        why_title: 'Pourquoi nous choisir ?',
        why_1: 'Petits groupes',
        why_2: 'Enseignement en présentiel et en ligne',
        why_3: 'Toutes les matières et tous les niveaux',
        why_4: 'Plus de 25 ans d\'expérience',
        why_5: 'Suivi personnalisé',
        services_title: 'Nos services',
        serv_1_title: 'Anglais tous niveaux',
        serv_1_desc: 'Pour tous les âges. Apprenez et améliorez votre anglais de manière dynamique.',
        serv_es_title: 'Cours d\'espagnol et de valencien',
        serv_es_desc: 'Apprenez l\'espagnol ou le valencien, ou améliorez votre niveau, avec des cours adaptés à vos besoins.',
        serv_2_title: 'Soutien scolaire',
        serv_2_desc: 'Aide dans toutes les matières, sciences et lettres, pour le primaire, le collège, le lycée et les études supérieures.',
        serv_study_title: 'Méthodes de travail',
        serv_study_desc: 'Apprenez à vous organiser, à planifier et à étudier plus efficacement.',
        serv_3_title: 'Préparation aux certifications',
        serv_3_desc: 'Nous vous préparons à réussir les examens officiels de certification en langues.',
        serv_4_title: 'Traductions',
        serv_4_desc: 'Service professionnel de traduction de textes et de documents.',
        serv_5_title: 'Techniques de rédaction',
        serv_5_desc: 'Améliorez votre écriture académique et professionnelle.',
        serv_6_title: 'Cours en présentiel et en ligne',
        serv_6_desc: 'Flexibilité totale. Choisissez la formule qui vous convient le mieux.',
        facilities_title: 'Nos locaux',
        facilities_subtitle: 'Un espace chaleureux, pensé pour apprendre dans de bonnes conditions.',
        gallery_1: 'Grande salle',
        gallery_2: 'Petite salle',
        gallery_3: 'Salle des familles',
        gallery_4: 'Salle bibliothèque',
        gallery_5: 'Entrée',
        contact_title: 'Contact',
        contact_cta_desc: 'Le moyen le plus rapide de nous joindre est par téléphone ou WhatsApp.',
        map_load: 'Afficher la carte',
        map_open: 'Ouvrir dans Google Maps',
        footer_rights: 'Tous droits réservés.',
        footer_made: 'Fait avec ❤️ à Moncofa',
        footer_disclaimer: 'Ce site peut contenir des erreurs ou omissions involontaires. Les informations affichées sont indicatives et peuvent changer. En cas de doute, contactez directement l\'académie.',
        lb_close: 'Fermer',
        lb_prev: 'Photo précédente',
        lb_next: 'Photo suivante'
    }
};

const LANGS = {
    es:  { code: 'ES',  html: 'es', flag: '🇪🇸' },
    val: { code: 'VAL', html: 'ca', flag: null },   // valencià: codi oficial "ca"
    en:  { code: 'EN',  html: 'en', flag: '🇬🇧' },
    fr:  { code: 'FR',  html: 'fr', flag: '🇫🇷' }
};

// Guardar l'idioma triat (protegit per si el navegador bloqueja l'emmagatzematge)
const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* res */ } }
};

function detectLang() {
    const saved = store.get('tlc_lang');
    if (saved && translations[saved]) return saved;
    const nav = (navigator.language || 'es').toLowerCase();
    if (nav.startsWith('ca')) return 'val';
    if (nav.startsWith('en')) return 'en';
    if (nav.startsWith('fr')) return 'fr';
    return 'es';
}

document.addEventListener('DOMContentLoaded', () => {
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    /* ---------- 1. Idiomes ---------- */
    const langBtn = $('#lang-btn');
    const langMenu = $('#lang-menu');
    const flagEl = $('#lang-flag');
    const codeEl = $('#lang-code');
    let currentLang = 'es';

    function setLanguage(lang) {
        const t = translations[lang];
        if (!t) return;
        currentLang = lang;
        store.set('tlc_lang', lang);
        document.documentElement.lang = LANGS[lang].html;

        // Bandera: es construeix amb DOM (no innerHTML) per seguretat
        flagEl.replaceChildren();
        if (LANGS[lang].flag) {
            flagEl.textContent = LANGS[lang].flag;
        } else {
            const s = document.createElement('span');
            s.className = 'flag-val';
            flagEl.appendChild(s);
        }
        codeEl.textContent = LANGS[lang].code;

        $$('[data-i18n]').forEach(el => {
            const v = t[el.dataset.i18n];
            if (v) el.textContent = v;
        });
        $$('[data-i18n-alt]').forEach(el => {
            const v = t[el.dataset.i18nAlt];
            if (v) el.alt = v;
        });
        $$('[data-i18n-aria]').forEach(el => {
            const v = t[el.dataset.i18nAria];
            if (v) el.setAttribute('aria-label', v);
        });
        $$('[data-i18n-content]').forEach(el => {
            const v = t[el.dataset.i18nContent];
            if (v) el.setAttribute('content', v);
        });
        $$('#lang-menu button').forEach(b => b.setAttribute('aria-current', String(b.dataset.lang === lang)));
    }

    function toggleLangMenu(open) {
        const willOpen = open ?? langMenu.hidden;
        langMenu.hidden = !willOpen;
        langBtn.setAttribute('aria-expanded', String(willOpen));
        if (willOpen) $('button', langMenu).focus();
    }

    langBtn.addEventListener('click', e => { e.stopPropagation(); toggleLangMenu(); });
    langMenu.addEventListener('click', e => {
        const b = e.target.closest('button[data-lang]');
        if (!b) return;
        setLanguage(b.dataset.lang);
        toggleLangMenu(false);
        langBtn.focus();
    });
    document.addEventListener('click', e => {
        if (!langMenu.hidden && !e.target.closest('.lang')) toggleLangMenu(false);
    });
    langMenu.addEventListener('keydown', e => {
        const items = $$('button', langMenu);
        const i = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
        if (e.key === 'Escape') { toggleLangMenu(false); langBtn.focus(); }
    });

    setLanguage(detectLang());

    /* ---------- 2. Menú mòbil ---------- */
    const hamburger = $('#hamburger');
    const nav = $('#nav');
    function setMenu(open) {
        nav.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
    }
    hamburger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));

    /* ---------- 3. Capçalera i enllaç actiu ---------- */
    const header = $('#header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if ('IntersectionObserver' in window) {
        const links = $$('a', nav);
        const io = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (!en.isIntersecting) return;
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        $$('main section[id]').forEach(s => io.observe(s));
    }

    /* ---------- 4. Visor de fotos ---------- */
    const items = $$('#gallery .g-item');
    const dlg = $('#lightbox');
    const lbImg = $('#lb-img');
    const lbCap = $('#lb-cap');
    let idx = 0;

    function show(i) {
        idx = (i + items.length) % items.length;
        const it = items[idx];
        lbImg.src = it.dataset.full;
        lbImg.alt = it.getAttribute('aria-label') || '';
        lbCap.textContent = (idx + 1) + ' / ' + items.length;
    }

    if (dlg && typeof dlg.showModal === 'function') {
        items.forEach((it, i) => it.addEventListener('click', () => { show(i); dlg.showModal(); }));
        $('#lb-close').addEventListener('click', () => dlg.close());
        $('#lb-prev').addEventListener('click', () => show(idx - 1));
        $('#lb-next').addEventListener('click', () => show(idx + 1));
        dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
        dlg.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') show(idx - 1);
            if (e.key === 'ArrowRight') show(idx + 1);
        });
        dlg.addEventListener('close', () => { lbImg.src = 'data:,'; items[idx].focus(); });

        // Lliscar amb el dit (mòbil)
        let x0 = null;
        dlg.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
        dlg.addEventListener('touchend', e => {
            if (x0 === null) return;
            const dx = e.changedTouches[0].clientX - x0;
            if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
            x0 = null;
        });
    } else {
        // Navegadors molt antics: obrir la foto directament
        items.forEach(it => it.addEventListener('click', () => { window.open(it.dataset.full, '_blank', 'noopener'); }));
    }

    /* ---------- 5. Mapa sota demanda ---------- */
    const mapBtn = $('#map-load');
    mapBtn.addEventListener('click', () => {
        const f = document.createElement('iframe');
        f.src = 'https://www.google.com/maps?q=39.8094826,-0.1472642&z=17&output=embed';
        f.title = 'Google Maps: The Language Corner, Moncofa';
        f.loading = 'lazy';
        f.referrerPolicy = 'no-referrer-when-downgrade';
        f.allowFullscreen = true;
        $('#map').replaceChildren(f);
    });

    /* ---------- 6. Comptador "+25 anys" ---------- */
    const counter = $('#exp-counter');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (counter && 'IntersectionObserver' in window && !reduceMotion) {
        const target = parseInt(counter.dataset.target, 10);
        counter.textContent = '0';
        const co = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) return;
            co.disconnect();
            const t0 = performance.now(), dur = 1800;
            const step = now => {
                const k = Math.min((now - t0) / dur, 1);
                const eased = 1 - Math.pow(1 - k, 3);          // frena en arribar
                counter.textContent = Math.round(eased * target);
                if (k < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }, { threshold: 0.6 });
        co.observe(counter);
    }

    /* ---------- 7. Any automàtic al peu ---------- */
    $('#year').textContent = new Date().getFullYear();
});
