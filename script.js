document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Nav Bar Shrink on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Motion Animations (Fade/Slide in)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it's visible so it doesn't animate out and in again
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // 3. Hero Video Play/Pause Toggle
    const heroVideo = document.getElementById('hero-video');
    const videoToggleBtn = document.getElementById('video-toggle');
    
    if (heroVideo && videoToggleBtn) {
        videoToggleBtn.addEventListener('click', () => {
            if (heroVideo.paused) {
                heroVideo.play();
                videoToggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                videoToggleBtn.setAttribute('aria-label', 'Pause Video');
            } else {
                heroVideo.pause();
                videoToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                videoToggleBtn.setAttribute('aria-label', 'Play Video');
            }
        });
    }
    // 4. Typewriter Effect for Hero Role
    const roleEl = document.querySelector('.hero-role');
    if (roleEl) {
        const text = roleEl.innerText;
        roleEl.innerText = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                roleEl.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 500); // delay start
    }
});
