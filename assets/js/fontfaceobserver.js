// https://github.com/bramstein/fontfaceobserver
const FontFaceObserver = require('fontfaceobserver');

(function() {
    let htmlDocument = document.documentElement;
    const brandoRegularSansSubset = new FontFaceObserver('Brando Regular Sans Subset');
    const brandoRegularSans = new FontFaceObserver('Brando Regular Sans');
    const guardianEgyptianSubset = new FontFaceObserver('Guardian Bold Egyptian Subset');
    const guardianEgyptian = new FontFaceObserver('Guardian Bold Egyptian');
    const input = new FontFaceObserver('Input');

    Promise.all([brandoRegularSansSubset.load(), guardianEgyptianSubset.load(), input.load()])
        .then(function() {
            htmlDocument.classList.add('fonts-loaded');
            console.log('Fonts loaded');
        })
        .catch(function() {
            htmlDocument.classList.remove('fonts-loaded');
        });

    const fontLoaded = 'fonts-loaded';
    localStorage.setItem(fontLoaded, true);

    // This would be the IIFE that checks loacalStorage
    if (!window.localStorage.length) {
        console.log('No font stored!');
    }
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem([i]) == true) {
            htmlDocument.classList.add('fonts-loaded');
        }
    }
})();

