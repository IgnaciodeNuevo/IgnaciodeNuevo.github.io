const navOpenButton = document.querySelector('#js-open-menu');
const navCloseButton = document.querySelector('#js-close-menu');
const navMenu = document.querySelector('#js-nav');
const navLinks = navMenu.querySelectorAll('.link');
const focusableElements = navMenu.querySelectorAll('.link, #js-close-menu');
const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];
const activeClassName = 'is-active';

function initApp() {
    navMenu.addEventListener('keydown', handleKeydown);
    navOpenButton.addEventListener('click', handleClick);
    navCloseButton.addEventListener('click', handleClick);
    disableNavLinks();
}

function removeBodyActiveClass() {
    document.body.classList.remove(activeClassName);
}

function handleKeydown(event) {
    const isEscapePressed = event.key === 'Escape' || event.keyCode === 27;

    if (isEscapePressed) {
        removeBodyActiveClass()
        disableNavLinks();
        navOpenButton.focus();
    }
}

function handleClick() {
    if (document.body.classList.contains(activeClassName)) {
        removeBodyActiveClass()
        disableNavLinks();
        navOpenButton.focus();
    } else {
        document.body.classList.add(activeClassName);
        navOpenButton.setAttribute('aria-label', 'Menu expanded');
        navCloseButton.setAttribute('aria-label', 'Menu expanded');
        navCloseButton.removeAttribute('tabIndex');
        navMenu.removeAttribute('aria-hidden');

        navLinks.forEach(element => {
            element.removeAttribute('tabIndex');
        });

        navLinks[0].focus();
    }
}

function disableNavLinks() {
    navOpenButton.setAttribute('aria-label', 'Menu collapsed');
    navCloseButton.setAttribute('aria-label', 'Menu collapsed');
    navCloseButton.tabIndex = -1;
    navMenu.setAttribute('aria-hidden', 'true');

    navLinks.forEach(element => {
        element.tabIndex = -1;
    });
}

function trapFocus() {
    navMenu.addEventListener('keydown', function (event) {
        const isTabPressed = event.key === 'Tab' || event.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (event.shiftKey) {
            /* Shift + Tab */
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                event.preventDefault();
            }
        } else {
            /* Tab */
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                event.preventDefault();
            }
        }
    });
}

initApp();
trapFocus();

window.matchMedia('(min-width: 48em)').addListener(function () {
    if (document.body.classList.contains(activeClassName)) {
        removeBodyActiveClass()
        disableNavLinks();
    }
});

window.addEventListener('DOMContentLoaded', function () {
    removeBodyActiveClass();
});
