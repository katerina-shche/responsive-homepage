const nav = document.querySelector('nav');
const mobileNav = document.querySelector('nav.mobile-nav');
const handleScroll = () => {
    if(window.scrollY > 60) {
        nav.classList.add('scrolled');
        mobileNav.classList.add('scrolled');

    } else {
        nav.classList.remove('scrolled');
        mobileNav.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleScroll);


