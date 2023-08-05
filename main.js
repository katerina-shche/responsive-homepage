const nav = document.querySelector('nav');
const handleScroll = (e) => {
    if(window.scrollY > 60) {
        console.log('scrolling')
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleScroll)


