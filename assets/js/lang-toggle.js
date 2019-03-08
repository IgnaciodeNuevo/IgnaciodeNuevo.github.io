const selectAll = document.querySelector('.js-lang-all');
const selectSpanish = document.querySelector('.js-lang-es');
const selectEnglish = document.querySelector('.js-lang-en');

const activeClassName = 'is-active';

let allArticles = document.querySelectorAll('article');
let spanishArticles = document.querySelectorAll("[data-lang='es']");
let englishArticles = document.querySelectorAll("[data-lang='en']");

selectAll.addEventListener('click', () => {
    selectAll.classList.add(activeClassName);

    selectEnglish.classList.remove(activeClassName);
    selectSpanish.classList.remove(activeClassName);

    allArticles.forEach(element => {
        element.classList.remove('is-hidden');
    });
});

selectSpanish.addEventListener('click', () => {
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

selectEnglish.addEventListener('click', () => {
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
