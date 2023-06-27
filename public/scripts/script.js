window.addEventListener('scroll', function () {
    const header = document.querySelector('#main-header');
    if (window.scrollY > 0) {
        header.classList.add('size');
        header.style.background = 'linear-gradient(to bottom right, #25282F, #798293)';
    } else {
        header.style.background = 'transparent';
        header.classList.remove('size');
    }
});
