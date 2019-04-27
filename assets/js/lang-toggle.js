const selectAll = document.querySelector('.js-lang-all');
const selectSpanish = document.querySelector('.js-lang-es');
const selectEnglish = document.querySelector('.js-lang-en');

const allArticles = document.querySelectorAll('article');
const spanishArticles = document.querySelectorAll("[data-lang='es']");
const englishArticles = document.querySelectorAll("[data-lang='en']");

// Declared in offcanvas.js => const activeClassName = 'is-active';

selectAll.addEventListener('click', (event) => {
    event.preventDefault();

    selectAll.classList.add(activeClassName);

    selectEnglish.classList.remove(activeClassName);
    selectSpanish.classList.remove(activeClassName);

    allArticles.forEach(element => {
        element.classList.remove('is-hidden');
    });
});

selectSpanish.addEventListener('click', (event) => {
    event.preventDefault();

    selectSpanish.classList.add(activeClassName);

    selectEnglish.classList.remove(activeClassName);
    selectAll.classList.remove(activeClassName);

    spanishArticles.forEach(element => {
        element.classList.remove('is-hidden');
    });

    englishArticles.forEach(element => {
        element.classList.add('is-hidden');
    });
});

selectEnglish.addEventListener('click', (event) => {
    event.preventDefault();

    selectEnglish.classList.add(activeClassName);

    selectSpanish.classList.remove(activeClassName);
    selectAll.classList.remove(activeClassName);

    englishArticles.forEach(element => {
        element.classList.remove('is-hidden');
    });

    spanishArticles.forEach(element => {
        element.classList.add('is-hidden');
    });
});
