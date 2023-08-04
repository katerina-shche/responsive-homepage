const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 60) {
        console.log('scrolling')
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled');
    }
});