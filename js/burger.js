document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header'),
        body = document.querySelector('body'),
        burger = document.querySelector('.burger'),
        burgerMenuList = document.querySelector('.nav__list');

    body.addEventListener('click', (e) => {
        if (header.classList.contains('active')) {
            if (e.target != burgerMenuList) {
                removeClass(header, 'active');
                removeClass(body, 'overflow');
            }
        } else if (!header.classList.contains('active')) {
            if (e.target == burger || e.target.offsetParent == burger) {
                addClass(header, 'active');
                addClass(body, 'overflow');
            }
        }
    });



    // window.addEventListener('touchend', (e) => {
    //     console.log('next is touch end');
    //     console.log(e.changedTouches[0].screenX);
    // })





    //functions
    function addClass(element, className) {
        element.classList.add(className);
    }
    function removeClass(element, className) {
        element.classList.remove(className);
    }


    // function getTouchStartPos() {
    //     window.addEventListener('touchstart', (e) => {
    //         const touchStartX = e.changedTouches[0].screenX;
    //         return touchStartX;
    //     });
    // }

    // function getTouchEndPos() {
    //     window.addEventListener('touchend', (e) => {
    //         const touchEndX = e.changedTouches[0].screenX;
    //         return touchEndX;
    //     });
    // }
});