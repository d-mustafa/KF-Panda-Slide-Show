// Kung Fu Panda Slideshow / Gallery

// Miscellaneous variables
let charactersArray = [`images/po.png`, `images/tigress.png`, `images/viper.png`, `images/crane.png`, `images/mantis.png`, `images/monkey.png`];
let arrayCounter = 0;
let oldrand = 0;
let slideshowActivated = false;
let slideshowInterval;

// HTML Elements
let imgElement = document.getElementById("imgEl");
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let randBtn = document.getElementById('random');
let slideshowBtn = document.getElementById('slideshow');

// Next button
nextBtn.addEventListener('click', nextCharacter);
function nextCharacter() {
    arrayCounter++;
    if(arrayCounter == 6) {
        arrayCounter = 0;
    }
    oldrand = arrayCounter;

    imgElement.src = charactersArray[arrayCounter];
}

// Previous button
prevBtn.addEventListener('click', previousCharacter);
function previousCharacter() {
    arrayCounter--;
    if(arrayCounter == -1) {
        arrayCounter = 5;
    }
    oldrand = arrayCounter;

    imgElement.src = charactersArray[arrayCounter];
}

// Random Button
randBtn.addEventListener('click', randomCharacter);
function randomCharacter() {
    let rand = Math.floor(Math.random() * 6);

    while (oldrand == rand) { // prevents duplicates
        rand = Math.floor(Math.random() * 6);
    }

    oldrand = rand;
    arrayCounter = rand;

    imgElement.src = charactersArray[arrayCounter];
}

// Slideshow Button
slideshowBtn.addEventListener('click', function() {
    console.log("hi")
    if (!slideshowActivated) {
        startSlideshow();
        slideshowBtn.innerHTML = "End The SlideShow";
        console.log("hey")
    } else {
        endSlideshow();
        slideshowBtn.innerHTML = "Start The SlideShow";
        console.log("bye")
    }
});

function startSlideshow() {
    slideshowInterval = setInterval(nextCharacter, 1000);
    slideshowActivated = true;

    nextBtn.disabled = true;
    prevBtn.disabled = true;
    randBtn.disabled = true;
}
function endSlideshow() {
    clearInterval(slideshowInterval);
    slideshowActivated = false;

    nextBtn.disabled = false;
    prevBtn.disabled = false;
    randBtn.disabled = false;
}
