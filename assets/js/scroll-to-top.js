// When the user scrolls down 500px from the top of the document, show the button
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById('topBtn').style.display = 'block';
    } else {
        document.getElementById('topBtn').style.display = 'none';
    }
});
