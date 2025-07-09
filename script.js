// Translations object
const translations = {
    pt: {
        // Navigation
        home: "Home",
        services: "Serviços",
        spaces: "Espaços",
        about: "Sobre",
        contact: "Contacto",

        // Hero Section
        heroTitle: "Impulsione o Seu Negócio com Espaços Profissionais",
        heroSubtitle: "Oferecemos toda a estrutura operacional e administrativa para o sucesso do seu negócio",
        scheduleVisit: "Agende uma Visita",
        knowServices: "Conheça Nossos Serviços",

        // Services Section
        ourServices: "Nossos Serviços",
        officeSpaces: "Espaços de Escritório",
        officesDesc: "Escritórios modernos e totalmente equipados para suas necessidades profissionais.",
        virtualOffices: "Escritórios Virtuais",
        virtualDesc: "Solução prática para empreendedores que não necessitam de espaço físico.",
        coworking: "Coworking",
        coworkingDesc: "Ambiente dinâmico e estimulante para profissionais independentes.",
        learnMore: "Saiba Mais",

        // About Section
        aboutTitle: "Sobre a TransOffice",
        aboutDesc: "No coração do Porto, oferecemos soluções completas para empresas que buscam crescimento e profissionalismo. Nossa estrutura moderna e equipa dedicada garantem o suporte necessário para o sucesso do seu negócio.",
        location: "Localização Privilegiada",
        infrastructure: "Infraestrutura Completa",
        support: "Suporte Profissional",

        // Testimonials Section
        testimonials: "O Que Dizem Sobre Nós",
        seeMoreReviews: "Veja mais avaliações no Google",
        seeReviews: "Ver Avaliações",
        
        // Testimonial Content
        testimonial1: "Excelente estrutura e atendimento profissional. Recomendo!",
        client1Name: "João Silva",
        client1Position: "Empresário",
        
        testimonial2: "Trabalho com eles há 4 anos e sempre fui bem recebido. Instalações impecáveis!",
        client2Name: "Maria Santos",
        client2Position: "Consultora",
        
        testimonial3: "O espaço de coworking é fantástico. Ambiente profissional e networking excelente.",
        client3Name: "Pedro Costa",
        client3Position: "Freelancer",
        
        testimonial4: "Serviços de escritório virtual de qualidade superior. Muito satisfeita!",
        client4Name: "Ana Rodrigues",
        client4Position: "Advogada",

        // Contact Section
        contactUs: "Entre em Contacto",
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        message: "Mensagem",
        send: "Enviar Mensagem",

        // Footer
        rights: "&copy; 2024 TransOffice. Todos os direitos reservados.",

        // Form validation messages
        fillRequired: "Por favor, preencha todos os campos obrigatórios.",
        validEmail: "Por favor, insira um email válido.",
        messageSent: "Mensagem enviada com sucesso! Entraremos em contacto em breve."
    },
    en: {
        // Navigation
        home: "Home",
        services: "Services",
        spaces: "Spaces",
        about: "About",
        contact: "Contact",

        // Hero Section
        heroTitle: "Boost Your Business with Professional Spaces",
        heroSubtitle: "We offer all the operational and administrative structure for your business success",
        scheduleVisit: "Schedule a Visit",
        knowServices: "Discover Our Services",

        // Services Section
        ourServices: "Our Services",
        officeSpaces: "Office Spaces",
        officesDesc: "Modern and fully equipped offices for your professional needs.",
        virtualOffices: "Virtual Offices",
        virtualDesc: "Practical solution for entrepreneurs who don't need physical space.",
        coworking: "Coworking",
        coworkingDesc: "Dynamic and stimulating environment for independent professionals.",
        learnMore: "Learn More",

        // About Section
        aboutTitle: "About TransOffice",
        aboutDesc: "In the heart of Porto, we offer complete solutions for companies seeking growth and professionalism. Our modern structure and dedicated team ensure the necessary support for your business success.",
        location: "Prime Location",
        infrastructure: "Complete Infrastructure",
        support: "Professional Support",

        // Testimonials Section
        testimonials: "What People Say About Us",
        seeMoreReviews: "See more reviews on Google",
        seeReviews: "See Reviews",
        
        // Testimonial Content
        testimonial1: "Excellent structure and professional service. I recommend it!",
        client1Name: "John Silva",
        client1Position: "Entrepreneur",
        
        testimonial2: "I've been working with them for 4 years and have always been well received. Impeccable facilities!",
        client2Name: "Maria Santos",
        client2Position: "Consultant",
        
        testimonial3: "The coworking space is fantastic. Professional environment and excellent networking.",
        client3Name: "Pedro Costa",
        client3Position: "Freelancer",
        
        testimonial4: "Superior quality virtual office services. Very satisfied!",
        client4Name: "Ana Rodrigues",
        client4Position: "Lawyer",

        // Contact Section
        contactUs: "Contact Us",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send Message",

        // Footer
        rights: "&copy; 2024 TransOffice. All rights reserved.",

        // Form validation messages
        fillRequired: "Please fill in all required fields.",
        validEmail: "Please enter a valid email.",
        messageSent: "Message sent successfully! We will contact you soon."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Language Toggle
    let currentLang = 'pt';
    const languageToggle = document.getElementById('languageToggle');
    
    function toggleLanguage() {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        languageToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';
        updateContent();
    }

    function updateContent() {
        // Update text content for elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang][key]) {
                if (key === 'rights') {
                    element.innerHTML = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });

        // Update placeholders for form elements
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[currentLang][key]) {
                element.placeholder = translations[currentLang][key];
            }
        });
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        // Set initial button text and update content on page load
        languageToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';
        updateContent();
    }

    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinksElements = document.querySelectorAll('a[href^="#"]');
    navLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'white';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Fade In Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements and observe them
    const animateElements = document.querySelectorAll('.service-card, .about-content, .testimonial, .contact-grid');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Contact Form Handling
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const name = this.querySelector('input[type="text"]').value;
                const email = this.querySelector('input[type="email"]').value;
                const phone = this.querySelector('input[type="tel"]').value;
                const message = this.querySelector('textarea').value;
                
                // Basic validation
                if (!name || !email || !message) {
                    showNotification(translations[currentLang].fillRequired, 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification(translations[currentLang].validEmail, 'error');
                    return;
                }
                
                // Simulate form submission
                showNotification(translations[currentLang].messageSent, 'success');
                this.reset();
            });
        }
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
        `;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Testimonials Carousel with Navigation
    let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    function showSlide(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current testimonial and activate corresponding dot
        if (testimonials[index]) {
            testimonials[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        showSlide(currentSlide);
    }
    
    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-rotate testimonials every 6 seconds
    let autoSlideInterval = setInterval(nextSlide, 6000);
    
    // Pause auto-rotation when user interacts with carousel
    const carouselContainer = document.querySelector('.testimonials-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 6000);
        });
    }
    
    // Initialize first slide
    showSlide(0);

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Add CSS for mobile menu toggle
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #1e3a5f;
            flex-direction: column;
            padding: 1rem 0;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-links a {
            padding: 0.5rem 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);
