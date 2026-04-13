// ---------- Navigation ----------
if (window.location.hash) {
  $(".wrapper").removeClass("active");
  $(window.location.hash).addClass("active");
  animateSection(window.location.hash.slice(1));
}

// ---------- Preloader ----------
$(window).on("load", function () {
  $(".preloader")
    .addClass("preloaded")
    .delay(1000 * 0.8)
    .fadeOut();
});

$(function () {
  ("use strict");
  
  console.log('Main.js loaded and ready!');

  // ---------- Gsap Plugins ----------
  gsap.registerPlugin(ScrollTrigger);

  // ---------- Menu Button ----------
  $(".menu-btn").click(function (e) {
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
  });

  // ---------- Custom Cursor ----------
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  if (isTouchDevice()) {
    $(".cursor").hide();
  } else {
    $(window).on("mousemove", function (e) {
      setTimeout(() => {
        $(".cursor-pointer").css("left", e.clientX + "px");
        $(".cursor-pointer").css("top", e.clientY + "px");
      }, 0);
      setTimeout(() => {
        $(".cursor").css("left", e.clientX + "px");
        $(".cursor").css("top", e.clientY + "px");
      }, 60);
    });
    const hoverElements = $(".sec-title, a, .menu-btn, .filter");
    hoverElements.mouseenter(function () {
      $(".cursor").addClass("active");
      $(".cursor-pointer").addClass("active");
    });
    hoverElements.mouseleave(function () {
      $(".cursor").removeClass("active");
      $(".cursor-pointer").removeClass("active");
    });
  }

  // ---------- Nav Link ----------
  $(".nav-link").click(function (e) {
    if ($(this.hash).hasClass("active")) {
      $(".menu-btn").click();
      return;
    }

    $("html, body").scrollTop(0);

    gsap.fromTo(".overlay-effect", 1, { x: "-150%", y: "-30%" }, { x: "0%", y: "-30%" });
    setTimeout(() => {
      $(".wrapper").removeClass("active");
      $(this.hash).addClass("active");

      gsap.fromTo(".overlay-effect", 1, { x: "0%", y: "-30%" }, { x: "150%", y: "-30%" });

      !$(this).hasClass("clicked") && animateSection(this.hash.slice(1));
      $(this).addClass("clicked");
    }, 1000);

    $(".menu-btn").click();
  });

  // ---------- Navigation Function ----------
  let isTransitioning = false;
  
  // Función para navegar a una sección específica
  function navigateToSection(targetSection) {
    console.log('navigateToSection called with:', targetSection);
    
    if (isTransitioning) {
      console.log('Already transitioning, ignoring navigation request');
      return;
    }
    
    console.log('Starting navigation to:', targetSection);
    isTransitioning = true;
    
    $("html, body").scrollTop(0);
    
    gsap.fromTo(".overlay-effect", 1, { x: "-150%", y: "-30%" }, { x: "0%", y: "-30%" });
    
    setTimeout(() => {
      $(".wrapper").removeClass("active");
      $("#" + targetSection).addClass("active");
      
      gsap.fromTo(".overlay-effect", 1, { x: "0%", y: "-30%" }, { x: "150%", y: "-30%" });
      
      animateSection(targetSection);
      
      // Resetear el estado después de la transición
      setTimeout(() => {
        isTransitioning = false;
        lastScrollTop = 0;
      }, 1500);
    }, 1000);
  }

  // ---------- Next Section Buttons ----------
  $(".next-btn").click(function (e) {
    e.preventDefault();
    
    const targetSection = this.hash.slice(1);
    
    if ($("#" + targetSection).hasClass("active")) {
      return;
    }

    navigateToSection(targetSection);
  });

  // ---------- Auto Scroll Navigation ----------
  let lastScrollTop = 0;
  const scrollThreshold = 30; // Píxeles de scroll necesarios para activar la navegación

  // Mapeo de secciones en orden
  const sectionOrder = ['hero', 'about', 'vision', 'trajectory', 'ideas', 'testimonial', 'resume', 'contact'];
  
  console.log('Auto scroll navigation initialized');
  
  // Usar wheel event con mejor control de sensibilidad
  let wheelTimeout;
  let isWheelNavigation = false;
  let wheelAccumulation = 0;
  const wheelThreshold = 150; // Aumentar umbral para ser menos sensible
  
  $(window).on('wheel', function(e) {
    if (isTransitioning || isWheelNavigation) {
      return;
    }
    
    const deltaY = e.originalEvent.deltaY;
    wheelAccumulation += Math.abs(deltaY);
    
    console.log('Wheel - Delta:', deltaY, 'Accumulated:', wheelAccumulation);
    
    // Limpiar timeout anterior
    clearTimeout(wheelTimeout);
    
    // Solo proceder si se acumula suficiente wheel movement
    if (wheelAccumulation > wheelThreshold) {
      // Verificar si la sección actual tiene scroll interno
      const activeWrapper = $('.wrapper.active');
      const sectionHeight = activeWrapper[0].scrollHeight;
      const windowHeight = $(window).height();
      const hasInternalScroll = sectionHeight > windowHeight;
      
      console.log('Section info:', {
        sectionHeight,
        windowHeight,
        hasInternalScroll,
        scrollTop: activeWrapper.scrollTop()
      });
      
      // Si hay scroll interno, verificar si estamos en los extremos
      if (hasInternalScroll) {
        const scrollTop = $(document).scrollTop() || $(window).scrollTop();
        const isAtTop = scrollTop <= 10;
        const isAtBottom = scrollTop >= (sectionHeight - windowHeight - 10);
        
        console.log('Scroll position:', { scrollTop, isAtTop, isAtBottom });
        
        // Solo navegar si estamos en los extremos y el wheel va en la dirección correcta
        if (!((deltaY > 0 && isAtBottom) || (deltaY < 0 && isAtTop))) {
          wheelAccumulation = 0;
          return;
        }
      }
      
      // Proceder con navegación
      const currentSection = $('.wrapper.active').attr('id');
      const currentIndex = sectionOrder.indexOf(currentSection);
      
      let targetSection = null;
      
      if (deltaY > 0 && currentIndex < sectionOrder.length - 1) {
        // Scroll hacia abajo
        targetSection = sectionOrder[currentIndex + 1];
      } else if (deltaY < 0 && currentIndex > 0) {
        // Scroll hacia arriba
        targetSection = sectionOrder[currentIndex - 1];
      }
      
      if (targetSection) {
        console.log('Navegando con wheel a:', targetSection);
        e.preventDefault();
        isWheelNavigation = true;
        wheelAccumulation = 0;
        
        navigateToSection(targetSection);
        
        // Resetear flag después de la navegación
        setTimeout(() => {
          isWheelNavigation = false;
        }, 2000);
      }
    }
    
    // Resetear acumulación después de un tiempo sin activity
    wheelTimeout = setTimeout(() => {
      wheelAccumulation = 0;
    }, 200);
  });
  
  // Test adicional cada 10 segundos
  setInterval(function() {
    console.log('Sección activa:', $('.wrapper.active').attr('id'));
  }, 10000);

  // ---------- Testimonial Slider ----------
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      992: { items: 2 },
    },
  });

  // ---------- Portfolio Isotope ----------

  let $container = $(".portfolio-container");
  $container.isotope({
    itemSelector: ".portfolio-item",
    transitionDuration: "0.3s",
    percentPosition: true,
    resize: false,
  });
// Añadir desplazamiento suave a la navegación

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ... rest of the existing code ...
  $(".filter-list li").on("click", function (e) {
    e.preventDefault();
    $(".filter-list li.active").removeClass("active");
    $(this).addClass("active");
    let selector = $(this).attr("data-filter");
    if (selector != "*") selector = "[data-filter='" + selector + "']";
    $container.isotope({ filter: selector });
  });
});

function animateSection(section) {
  // ---------- About Section ----------
  switch (section) {
    case "about":
      gsap.from($(".about .sec-image"), {
        x: "-100%",
        duration: 0.6,
        scrollTrigger: {
          trigger: $(".about .sec-image"),
        },
      });
      gsap.from($(".about .sec-content > *"), {
        x: "100%",
        y: "200%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: $(".about .sec-content"),
        },
      });
      // ---------- Service Section ----------
      gsap.from(".service-card", {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".service-container",
        },
      });
      break;

    case "resume":
      // ---------- Resume Section ----------
      $(".timeline-card").each((i, el) => {
        gsap.from(el, {
          x: "-110%",
          opacity: 0,
          duration: 0.6,
          delay: i * 0.25,
          scrollTrigger: {
            trigger: ".resume .sec-content",
          },
        });
      });
      // ---------- Skill Section ----------
      $(".skill-card .value").each((i, valEl) => {
        let val = $(valEl).text();
        let el = $(valEl).parent().next().find("span");

        gsap.to(el, {
          width: val,
          duration: 1,
          delay: i * 0.25,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".skills .sec-content",
          },
        });
      });
      break;

    case "portfolio":
      // ---------- Portfolio Section ----------
      $(".filter-list li.active").click();

      // ---------- Counter Section ----------
      $(".counter").each((i, el) => {
        gsap.from(el, {
          innerText: 0,
          duration: 3,
          snap: {
            innerText: 1,
          },
          scrollTrigger: ".counters",
        });
      });
      break;

    case "blog":
      // ---------- Blog Section ----------
      gsap.from(".blog-card", {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".blog-container",
        },
      });
      break;

    case "contact":
      gsap.from($(".contact .contact-form"), {
        x: "-100%",
        duration: 0.6,
        scrollTrigger: {
          trigger: $(".contact .contact-form"),
        },
      });
      gsap.from($(".contact .detail > *"), {
        x: "100%",
        y: "200%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: $(".contact .detail"),
        },
      });

      break;
  }
}

// ---------- Ajax Mail ----------
$(function () {
  // Get the form.
  var form = $("#contact-form");

  // Get the messages div.
  var formMessages = $(".form-message");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text("Oops! An error occured and your message could not be sent.");
        }
      });
  });
});
