/**
 * FitLife | Main JavaScript (Consolidated for local compatibility)
 * This file contains all modular logic: Menu, Slider, Calculator, Validator, Observer.
 */

// --- 1. Mobile Menu Logic ---
function initMenu() {
    const hamburger = document.getElementById('hamburger');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav__overlay .nav__link');

    if (!hamburger || !navOverlay) return;

    function toggleMenu() {
        const isActive = hamburger.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close on escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });
}

// --- 2. Slider Logic ---
function initSlider() {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
}

// --- 3. Calculator Logic ---
function initCalc() {
    const directionEl = document.getElementById('direction');
    const subTypeEl = document.getElementById('subType');
    const sessionsEl = document.getElementById('sessions');
    const display = document.getElementById('totalPrice');

    if (!directionEl || !subTypeEl || !sessionsEl || !display) return;

    function calculatePrice() {
        const directionPrice = parseFloat(directionEl.value);
        const multiplier = parseFloat(subTypeEl.value);
        const sessions = parseInt(sessionsEl.value);
        
        const basePerSession = directionPrice / 8;
        const total = basePerSession * sessions * multiplier;
        
        display.innerText = `${Math.round(total).toLocaleString()} сум`;
        
        display.style.transition = 'transform 0.2s ease';
        display.style.transform = 'scale(1.05)';
        setTimeout(() => {
            display.style.transform = 'scale(1)';
        }, 200);
    }

    [directionEl, subTypeEl, sessionsEl].forEach(input => {
        input.addEventListener('input', calculatePrice);
    });

    calculatePrice();
}

// --- 4. Form Validation Logic ---
function initValidator() {
    const form = document.getElementById('signupForm');
    if (!form) return;

    const fields = {
        name: {
            el: document.getElementById('fullName'),
            group: document.getElementById('nameGroup'),
            validate: (val) => val.trim().length >= 5
        },
        phone: {
            el: document.getElementById('phone'),
            group: document.getElementById('phoneGroup'),
            validate: (val) => /^\+998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/.test(val) || val.length >= 7
        },
        email: {
            el: document.getElementById('email'),
            group: document.getElementById('emailGroup'),
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
        },
        time: {
            group: document.getElementById('timeGroup'),
            validate: () => {
                const radios = document.getElementsByName('time');
                return Array.from(radios).some(r => r.checked);
            }
        }
    };

    function showError(fieldKey, show) {
        const field = fields[fieldKey];
        if (show) {
            field.group.classList.add('has-error');
        } else {
            field.group.classList.remove('has-error');
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        Object.keys(fields).forEach(key => {
            const field = fields[key];
            const isValid = field.validate(field.el ? field.el.value : null);
            showError(key, !isValid);
            if (!isValid) isFormValid = false;
        });

        if (isFormValid) {
            form.classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
            document.querySelector('.form-subtitle')?.classList.add('hidden');
        }
    });

    Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (field.el) {
            field.el.addEventListener('input', () => {
                if (field.group.classList.contains('has-error')) {
                    const isValid = field.validate(field.el.value);
                    showError(key, !isValid);
                }
            });
        }
    });
}

// --- 5. Scroll Animations Logic ---
function initObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.remove('is-hidden');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        el.classList.add('is-hidden');
        observer.observe(el);
    });
}

// --- 6. Initialization ---
function initApp() {
    initMenu();
    initSlider();
    initCalc();
    initValidator();
    initObserver();
    console.log('FitLife | Application Initialized');
}

// Ensure execution after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
