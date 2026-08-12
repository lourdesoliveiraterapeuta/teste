/**
 * Lourdes Oliveira Terapeuta - Script Principal
 * Funcionalidades interativas leves, acessíveis e puras (sem dependências externas)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Elementos da DOM
  const header = document.querySelector('.header');
  const menuToggleBtn = document.querySelector('.menu-toggle-btn');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const faqButtons = document.querySelectorAll('.faq-button');
  const backToTopBtn = document.querySelector('.back-to-top');
  const whatsappFloat = document.querySelector('.whatsapp-float');
  const heroSection = document.querySelector('.hero-section');

  // Desativa restauração automática de rolagem do navegador e limpa qualquer hash
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);

  // ==========================================================================
  // INTRO ANIMADA (LOADER INICIAL EM 6 ETAPAS)
  // 1. Bege (fundo da overlay)
  // 2. Fade in: rodape.png
  // 3. Fade in: carregamento
  // 4. Some fade: carregamento
  // 5. Fade out: rodape.png
  // 6. Fade out: Bege -> Abre a home com animações leves
  // ==========================================================================
  const introOverlay = document.getElementById('site-intro-overlay');
  const introLogo = introOverlay?.querySelector('.intro-logo');
  const introProgressContainer = introOverlay?.querySelector('.intro-progress-container');
  const introProgressBar = introOverlay?.querySelector('.intro-progress-bar');

  const scrollToTopForce = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const runIntroAnimation = () => {
    // Bloqueia rolagem durante a abertura da intro e mantêm no topo
    document.documentElement.classList.add('intro-active');
    document.body.classList.add('intro-active');
    scrollToTopForce();

    if (!introOverlay) {
      document.documentElement.classList.remove('intro-active');
      document.body.classList.remove('intro-active');
      document.body.classList.add('site-loaded');
      scrollToTopForce();
      initScrollReveal();
      return;
    }

    // Etapa 1: Fundo Bege já está visível por padrão
    
    // Etapa 2: Fade in: rodape.png (300ms)
    setTimeout(() => {
      introLogo?.classList.add('show-logo');
      scrollToTopForce();
    }, 300);

    // Etapa 3: Fade in: carregamento (1400ms)
    setTimeout(() => {
      introProgressContainer?.classList.add('show-loader');
      if (introProgressBar) {
        introProgressBar.style.width = '100%';
      }
      scrollToTopForce();
    }, 1400);

    // Etapa 4: Some fade: carregamento (4600ms)
    setTimeout(() => {
      introProgressContainer?.classList.remove('show-loader');
      introProgressContainer?.classList.add('hide-loader');
    }, 4600);

    // Etapa 5: Fade out: rodape.png (5300ms)
    setTimeout(() => {
      introLogo?.classList.remove('show-logo');
      introLogo?.classList.add('hide-logo');
    }, 5300);

    // Etapa 6: Fade out: Bege (6200ms)
    setTimeout(() => {
      introOverlay.classList.add('hide-overlay');
    }, 6200);

    // Conclusão e Abertura da Home com animações leves (7300ms - +1s que anterior)
    setTimeout(() => {
      introOverlay.style.display = 'none';
      document.documentElement.classList.remove('intro-active');
      document.body.classList.remove('intro-active');
      document.body.classList.add('site-loaded');
      scrollToTopForce();
      if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur();
      }

      setTimeout(scrollToTopForce, 50);
      setTimeout(scrollToTopForce, 150);

      // Inicializa escuta de rolagem para animação dos quadros/textos
      initScrollReveal();
    }, 7300);
  };

  // Garante topo também no carregamento completo de recursos (iframes, imagens)
  window.addEventListener('load', scrollToTopForce);

  // ==========================================================================
  // SCROLL REVEAL ANIMATIONS (SURGIMENTOS LATERAIS & FADE-IN SUAVES)
  // ==========================================================================
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay');
          if (delay) {
            el.style.transitionDelay = `${delay}ms`;
          }
          el.classList.add('is-revealed');
          observer.unobserve(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  };

  runIntroAnimation();

  // 2. Efeito de Header e Elementos Flutuantes no Scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Exibir botão de Agendar Consulta flutuante a partir da 2ª página
    if (whatsappFloat) {
      const scrollThreshold = heroSection ? (heroSection.offsetHeight * 0.5) : 300;
      if (window.scrollY > scrollThreshold) {
        whatsappFloat.classList.add('show');
      } else {
        whatsappFloat.classList.remove('show');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Executa na inicialização

  // 3. Menu Oculto (Abre ao clicar nas linhas e transforma as linhas em X)
  const openMenu = () => {
    mobileOverlay?.classList.add('open');
    mobileDrawer?.classList.add('open');
    menuToggleBtn?.classList.add('is-active');
    menuToggleBtn?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileOverlay?.classList.remove('open');
    mobileDrawer?.classList.remove('open');
    menuToggleBtn?.classList.remove('is-active');
    menuToggleBtn?.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    if (mobileDrawer?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', toggleMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }

  // Fechar menu ao clicar em qualquer link do drawer (links, logo, botão do whatsapp)
  const drawerLinks = mobileDrawer ? mobileDrawer.querySelectorAll('a') : [];
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fechar menu ao apertar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      closeMenu();
    }
  });

  // 4. Destaque do Link Ativo na Navegação com IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Atualiza links desktop
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Atualiza links mobile
        mobileNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // 5. Accordion da Seção de Perguntas Frequentes (FAQ)
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      const isActive = faqItem.classList.contains('active');

      // Fecha todos os outros itens
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-button')?.setAttribute('aria-expanded', 'false');
      });

      // Se o item clicado não estava ativo, abre ele
      if (!isActive) {
        faqItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 6. Botão Voltar ao Topo
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 7. Rastreamento e feedback visual ao clicar no botão do WhatsApp
  const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Interação WhatsApp registrada para fins de analíticos futuros
    });
  });

  // 8. Proteção contra inspeção e teclas do DevTools (F12, Ctrl+Shift+I, etc.)
  document.addEventListener('keydown', function (e) {
    // Tecla F12 (keyCode 123)
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Atalhos Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S
    if (e.ctrlKey || e.metaKey) {
      if (
        (e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        e.key === 'U' || e.key === 'u' ||
        e.key === 'S' || e.key === 's'
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  });

  // Bloqueio do menu do botão direito (Context Menu)
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });
});
