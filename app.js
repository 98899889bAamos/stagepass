let thumbnaily = document.getElementsByClassName('thumbnaily');
let slidery = document.getElementById('slidery');

let buttonRighty = document.getElementById('righty-slide');
let buttonLefty = document.getElementById('lefty-slide');

buttonLefty.addEventListener('click', function(){
    slidery.scrollLeft -= 125;
})

buttonRighty.addEventListener('click', function(){
    slidery.scrollLeft += 125;
})


