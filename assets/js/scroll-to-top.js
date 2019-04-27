window.addEventListener('scroll', function () {
    // When the user scrolls down 500px from the top of the document, show the button
    const isScrollPast500px = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;
    const topBtn = document.getElementById('topBtn');

    if (isScrollPast500px) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
}, { passive: true });
