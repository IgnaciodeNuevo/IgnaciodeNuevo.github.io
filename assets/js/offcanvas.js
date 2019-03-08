(function () {
    const ESCAPE_CODE = 27;
    const NAV_OPEN_BUTTON = document.querySelector('#js-open-menu');
    const NAV_CLOSE_BUTTON = document.querySelector('#js-close-menu');
    const NAV_MENU = document.querySelector('#js-nav');
    const NAV_LINKS = NAV_MENU.getElementsByTagName('a');

    function initApp() {
        NAV_MENU.addEventListener('keydown', handleKeydown);
        NAV_OPEN_BUTTON.addEventListener('click', handleClick);
        NAV_CLOSE_BUTTON.addEventListener('click', handleClick);
        disableNavLinks();
    }

    function handleKeydown(event) {
        if (event.keyCode === ESCAPE_CODE) {
            document.body.classList.remove('is-active');
            disableNavLinks();
            NAV_OPEN_BUTTON.focus();
        }
    }

    function handleClick() {
        if (document.body.classList.contains('is-active')) {
            document.body.classList.remove('is-active');
            disableNavLinks();
        } else {
            document.body.classList.add('is-active');
            enableNavLinks();
            NAV_LINKS[0].focus();
        }
    }

    function enableNavLinks() {
        NAV_OPEN_BUTTON.setAttribute('aria-label', 'Menu expanded');
        NAV_CLOSE_BUTTON.setAttribute('aria-label', 'Menu expanded');
        NAV_CLOSE_BUTTON.removeAttribute('tabIndex');
        NAV_MENU.removeAttribute('aria-hidden');
        for (let i = 0; i < NAV_LINKS.length; ++i) {
            NAV_LINKS[i].removeAttribute('tabIndex');
        }
    }

    function disableNavLinks() {
        NAV_OPEN_BUTTON.setAttribute('aria-label', 'Menu collapsed');
        NAV_CLOSE_BUTTON.setAttribute('aria-label', 'Menu collapsed');
        NAV_CLOSE_BUTTON.tabIndex = -1;
        NAV_MENU.setAttribute('aria-hidden', 'true');
        for (let i = 0; i < NAV_LINKS.length; ++i) {
            NAV_LINKS[i].tabIndex = -1;
        }
    }

    initApp();

    window.addEventListener('resize', function () {
        const ACTIVE_CLASS_NAME = 'is-active';
        if (window.innerWidth > 768 && document.body.classList.contains(ACTIVE_CLASS_NAME)) {
            document.body.classList.remove(ACTIVE_CLASS_NAME);
            disableNavLinks();
        }
    });
})();
