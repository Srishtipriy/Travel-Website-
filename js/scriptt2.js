document.addEventListener('DOMContentLoaded', function() {
    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.search-bar-container');
    let header = document.querySelector('.header');
    let navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll("[data-section]");
    let lastScrollTop = 0;

    function handleScroll() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (window.innerWidth < 740) {
            if (st > lastScrollTop) {
                // Downscroll
                navbar.style.top = '-70px';
            } else {
                // Upscroll
                navbar.style.top = '0';
            }
        } else {
            navbar.style.top = '0'; // Reset position for larger screens
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }

    function scrollReveal() {
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
                sections[i].classList.add("active");
            }
        }
    }

    window.onscroll = () => {
        searchBtn.classList.remove('fa-times');
        searchBar.classList.remove('active');

        handleScroll();
        scrollReveal();
    };

    searchBtn.addEventListener('click', () => {
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
    });

    const btns = document.querySelectorAll('.vid-btn');
    const videoContainer = document.getElementById('video-slider');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const src = btn.getAttribute('data-src');
            if (src) {
                videoContainer.src = src;
                videoContainer.play();
            }
        });
    });

    scrollReveal(); // Initial call to reveal sections on load
    handleScroll(); // Initial call to set navbar position
});
