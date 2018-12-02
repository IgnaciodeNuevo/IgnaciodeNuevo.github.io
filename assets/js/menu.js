(function() {
    const escapeCode = 27;
    const navOpenButton = document.querySelector('#js-open-menu');
    const navCloseButton = document.querySelector('#js-close-menu');
    const navMenu = document.querySelector('#js-nav');
    const navLinks = navMenu.getElementsByTagName('a');

    function initApp() {
        navMenu.addEventListener('keydown', handleKeydown);
        navOpenButton.addEventListener('click', handleClick);
        navCloseButton.addEventListener('click', handleClick);
        disableNavLinks();
    }

    function handleKeydown(event) {
        if (event.keyCode === escapeCode) {
            document.body.classList.remove('is-active');
            disableNavLinks();
            navOpenButton.focus();
        }
    }

    function handleClick() {
        if (document.body.classList.contains('is-active')) {
            document.body.classList.remove('is-active');
            disableNavLinks();
        } else {
            document.body.classList.add('is-active');
            enableNavLinks();
            navLinks[1].focus();
        }
    }

    function enableNavLinks() {
        navOpenButton.setAttribute('aria-label', 'Menu expanded');
        navCloseButton.setAttribute('aria-label', 'Menu expanded');
        navCloseButton.removeAttribute('tabIndex');
        navMenu.removeAttribute('aria-hidden');
        for (let i = 0; i < navLinks.length; ++i) {
            navLinks[i].removeAttribute('tabIndex');
        }
    }

    function disableNavLinks() {
        navOpenButton.setAttribute('aria-label', 'Menu collapsed');
        navCloseButton.setAttribute('aria-label', 'Menu collapsed');
        navCloseButton.tabIndex = -1;
        navMenu.setAttribute('aria-hidden', 'true');
        for (let i = 0; i < navLinks.length; ++i) {
            navLinks[i].tabIndex = -1;
        }
    }

    initApp();
})();
