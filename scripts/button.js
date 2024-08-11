// var name = "holly";
// let surname = "elms"
// var job = "Designer"
// const full = name + " " + surname

// function calcArea(width, height) {
//     let result = width * height;
//     return result;
// };

// function pressAlert() {
//     let result = width * height;
//     return result;
// };


// function pressAlert() {
//     console.log('Button has been pressed')
// }
// document.getElementById('myButton').addEventListener('click', pressAlert);



// function pressAlert() {
//     console.log('Button has been pressed')
// }


// ('myButton').addEventListener('click', pressAlert);

// const carousel = new bootstrap.Carousel('#myCarousel')

// favorite / like / dislike buttons on blog page
function toggleFavorite () {
    document.getElementById('favoriteBtn').classList.toggle('selected');
    favoriteCounter = document.getElementById('favoriteCount');
    faves = parseInt(favoriteCounter.textContent);
    if (faves == 0) {
        favoriteCounter.textContent = 1;
    } else {
        favoriteCounter.textContent = 0;
    }
    dislikeCounter = document.getElementById('dislikeCount');
    dislikeCounter.textContent = 0;
    likeCounter = document.getElementById('likeCount');
    likeCounter.textContent = 0;
    document.getElementById('likeBtn').classList.remove('selected');
    document.getElementById('dislikeBtn').classList.remove('selected');
}

function toggleLike () {
    document.getElementById('likeBtn').classList.toggle('selected');
    likeCounter = document.getElementById('likeCount');
    likes = parseInt(likeCounter.textContent);
    if (likes == 0) {
        likeCounter.textContent = 1;
    } else {
        likeCounter.textContent = 0;
    }
    favoriteCounter = document.getElementById('favoriteCount');
    favoriteCounter.textContent = 0;
    dislikeCounter = document.getElementById('dislikeCount');
    dislikeCounter.textContent = 0;
    document.getElementById('favoriteBtn').classList.remove('selected');
    document.getElementById('dislikeBtn').classList.remove('selected');
}

function toggleDislike () {
    document.getElementById('dislikeBtn').classList.toggle('selected');
    dislikeCounter = document.getElementById('dislikeCount');
    dises = parseInt(dislikeCounter.textContent);
    if (dises == 0) {
        dislikeCounter.textContent = 1;
    } else {
        dislikeCounter.textContent = 0;
    }
    favoriteCounter = document.getElementById('favoriteCount');
    favoriteCounter.textContent = 0;
    likeCounter = document.getElementById('likeCount');
    likeCounter.textContent = 0;
    document.getElementById('likeBtn').classList.remove('selected');
    document.getElementById('favoriteBtn').classList.remove('selected');
}



