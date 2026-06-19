const header = document.getElementById('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    this.innerHTML = isOpen ?
        '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

const demoBtn = document.getElementById('demoBtn');
const demoMessage = document.getElementById('demoMessage');

let clickCount = 0;

demoBtn.addEventListener('click', function () {
    clickCount++;

    this.classList.add('clicked');
    this.innerHTML = '<i class="fas fa-check" style="margin-right: 0.5rem;"></i> Done!';

    demoMessage.textContent = '✅ Interactive demo! (' + clickCount + ' clicks)';
    demoMessage.classList.add('visible');

    setTimeout(() => {
        this.classList.remove('clicked');
        this.innerHTML = '<i class="fas fa-play" style="margin-right: 0.5rem;"></i> Click Me';
        demoMessage.classList.remove('visible');
        setTimeout(() => {
            demoMessage.textContent = '';
        }, 400);
    }, 4000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});