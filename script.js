console.log('background color change on click')

const container = document.querySelector('.container')
const body = document.querySelector('body')

container.addEventListener('click', changeBackground)
// container.addEventListener('mouseover', changeBackground)

function changeBackground(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);

    var bgColor = "rgb(" + x + "," + y + "," + x + ")"
    console.log(bgColor)
    document.body.style.background=bgColor;
}

// random background color channged

// random_bg_color();