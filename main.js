// // SEARCH INPUT
let searchIcon = document.getElementsByClassName("search-box_icon")[0];
let searchBox = document.getElementsByClassName("search-box")[0];

function activateSearch() {
    searchBox.classList.toggle("active");
}

searchIcon.addEventListener("click", activateSearch);


function closeSearch(event) {
    if (!searchBox.contains(event.target)) {
        searchBox.classList.remove("active");
    }
}

document.addEventListener("click", closeSearch);


// NOTIFICATION

// const searchIcon = document.querySelector('.search-icon');
// const searchBox = document.querySelector('#search-box');
// const closeIcon = document.querySelector('.close-icon');

// function mostraNascondi() {
//     searchIcon.addEventListener('click', () => {
//         searchBox.classList.add('show');
//     });
//     closeIcon.addEventListener('click', () => {
//         searchBox.classList.remove('show');
//     });
// }

// console.log(searchIcon);

