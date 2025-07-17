let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let navbar = document.querySelector('#navbar');



window.addEventListener('scroll', () => {
    // console.log('Scroll event triggered'); 
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click' ,() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// formBtn.addEventListener('click',()=>{
//     loginForm.classList.add('active');

// });

// videoBtn.forEach(btn => {
//      btn.addEventListener('click', () => 
//         { document.querySelector('.controls .active').classList.remove('active'); btn.classList.add('active'); 
//     let src = btn.getAttribute('data-src'); document.querySelector('#video-slider').src = src; }); 
// });


document.addEventListener('DOMContentLoaded', function() {
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
});


