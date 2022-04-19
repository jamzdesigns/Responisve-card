// INITATE SPLIDESJS SLIDER
splideSlider();
function splideSlider() {
    const splide = new Splide('.splide.one', { // element that works as the slider
        type: 'slide', // type of the carousel
        perPage: 1, // number of images in screen
        arrows: false, // hide the navigation arrows buttons
        pagination: true, // show the navigation dots buttons
    }).mount();

    const splideTwo = new Splide('.splide.two', { // element that works as the slider
        type: 'slide', // type of the carousel
        perPage: 1, // number of images in screen
        arrows: false, // hide the navigation arrows buttons
        pagination: true, // show the navigation dots buttons
    }).mount();
}

// SHOW OR HIDE THE ADITIONAL INFO OF THE CARD ELEMENT
showMoreInfo();
function showMoreInfo() {
    let parents = document.querySelectorAll('.card-data-wrapper'); // get all card-data-wrapper elements
    
    for(let parent of parents) { // iterate over every card-data-wrapper element
        btnShow = parent.querySelector('.btn.more'); // get the btn more element of each card-data-wrapper element
        btnShow.addEventListener('click', function(event) { // add click event to each btn more element
            event.preventDefault(); // prevent the default action of btn more element
            parent.querySelector('.card-info').classList.toggle('collapse'); // remove or add collapse class to card-info element
        });
    }
}