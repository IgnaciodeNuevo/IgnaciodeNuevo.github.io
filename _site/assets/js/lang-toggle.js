const SELECT_ALL = document.querySelector('.js-lang-all');
const SELECT_SPANISH = document.querySelector('.js-lang-es');
const SELECT_ENGLISH = document.querySelector('.js-lang-en');

let allArticles = document.querySelectorAll('article');
let spanishArticles = document.querySelectorAll('[data-lang="es"]');
let englishArticles = document.querySelectorAll('[data-lang="en"]');

SELECT_ALL.addEventListener('click', () => {
    allArticles.forEach(element => {
        element.classList.remove("is-hidden");
    });
});

SELECT_SPANISH.addEventListener('click', () => {
    spanishArticles.forEach(element => {
        element.classList.remove("is-hidden");
    });

    englishArticles.forEach(element => {
        element.classList.add("is-hidden");
    });
});

SELECT_ENGLISH.addEventListener('click', () => {
    englishArticles.forEach(element => {
        element.classList.remove("is-hidden");
    });

    spanishArticles.forEach(element => {
        element.classList.add("is-hidden");
    });
});
