console.log("test");


    var currentPosition = 0;

    var prevImage = function() {
        currentPosition = currentPosition + 500;
        document.getElementById('imageSlider').style
    }

    var nextImage = function() {
        currentPosition = currentPosition - 500;
        document.getElementById('imageSlider').style
    }

    setTimeout(nextImage, 1000)

