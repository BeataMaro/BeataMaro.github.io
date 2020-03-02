//Loading animation Count down

// document.addEventListener('DOMContentLoaded', () => {

//     let preloader = document.querySelector('.preloader');
//     let loader = document.querySelector('.loader');
//     let element = document.querySelector('.counter');

//     let count = 0;
//     let loadingFunction = setInterval(() => {

//         if (count < 101) {
//             document.body.style.position = "fixed";

//             element.textContent = `${count}%`;
//             loader.style.width = `${count}%`;
//             count++
//         } else {
//             clearInterval(loadingFunction)
//             document.body.style.position = "relative";
//             fadeOut(preloader)
//         }

//     }, 10);

//     function fadeOut(element) {

//         element.style.opacity = 1;

//         (function fade() {
//             if ((element.style.opacity -= 0.1) < 0) {
//                 element.style.display = 'none';

//             } else {
//                 requestAnimationFrame(fade);
//             }


//         })();
//     }
// });

/***/

const hamburger = document.getElementById('hamburger'),
    menu = document.getElementById('menu'),
    sectionAbout = document.getElementById('about');

let menuBtns = menu.getElementsByClassName("menu__item");

//Add/remove class 'open' of body section when hamburger button is clicked


hamburger.onclick = () => document.body.classList.toggle('open');


// Loop through the buttons and add the active class to the current / clicked button
for (var i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].classList.remove('active');
        }

        // Add the active class to the current/clicked button
        this.classList.add('active');

        //Add text content of clicked button as a body class

        if (this.classList.contains('active')) {
            let txtContent = this.textContent;
            txtContent = txtContent.replace(' ', '');
            document.body.className = `open ${txtContent}`
        }

    });
}