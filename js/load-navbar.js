//Sets the current page's link in the navbar to white
const setActiveNavLink = () => {
    const currentPath = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
    const navLinks = document.querySelectorAll('#mainNav a.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) {
            return;
        }

        const linkPath = new URL(href, window.location.origin).pathname;
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
};

fetch('/nav.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
        setActiveNavLink();
    });