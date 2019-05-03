const selectAllButton = document.querySelector('.js-lang-all');
const selectSpanishButton = document.querySelector('.js-lang-es');
const selectEnglishButton = document.querySelector('.js-lang-en');

const allArticles = document.querySelectorAll('article');
const spanishArticles = document.querySelectorAll("[data-lang='es']");
const englishArticles = document.querySelectorAll("[data-lang='en']");

const hiddenClassName = 'is-hidden';

// Declared in offcanvas.js => const activeClassName = 'is-active';

const selectButtonToBeActive = (buttonToAddActiveClass, firstButtonToRemoveActiveClass, secondButtonToRemoveActiveClass) => {
    buttonToAddActiveClass.classList.add(activeClassName);

    firstButtonToRemoveActiveClass.classList.remove(activeClassName);
    secondButtonToRemoveActiveClass.classList.remove(activeClassName);
};

const toggleArticlesHiddenClassName = (articlesToShow, articlesToHide) => {
    articlesToShow.forEach(article => {
        article.classList.remove(hiddenClassName);
    });

    articlesToHide.forEach(article => {
        article.classList.add(hiddenClassName);
    });
}

selectAllButton.addEventListener('click', () => {
    selectButtonToBeActive(selectAllButton, selectEnglishButton, selectSpanishButton);

    allArticles.forEach(article => {
        article.classList.remove(hiddenClassName);
    });
});

selectSpanishButton.addEventListener('click', () => {
    selectButtonToBeActive(selectSpanishButton, selectEnglishButton, selectAllButton);
    toggleArticlesHiddenClassName(spanishArticles, englishArticles);
});

selectEnglishButton.addEventListener('click', () => {
    selectButtonToBeActive(selectEnglishButton, selectSpanishButton, selectAllButton);
    toggleArticlesHiddenClassName(englishArticles, spanishArticles);
});
