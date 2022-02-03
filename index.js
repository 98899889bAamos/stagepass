

/*====SHOW Left MENU====*/
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu');
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*====REMOVE MENU MOBILE====*/
const navLink = document.querySelectorAll('.nav-container-right')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====End of Show Left MENU====*/


/*start of the right menu bar*/
const showMenu2 = (toggleId,navId) =>{
  const toggle2 = document.getElementById(toggleId),
  nav2 = document.getElementById(navId)

  if(toggle2 && nav2){
      toggle2.addEventListener('click', ()=>{
          nav2.classList.toggle('show-menu')
      })
  }
}
showMenu2('nav-toggle2','nav-menu')

/*====REMOVE MENU MOBILE====*/
const navLink2 = document.querySelectorAll('.top-header')

function linkAction2(){
  const navMenu2 = document.getElementById('nav-menu2')
  navMenu2.classList.remove('show-menu2')
}
navLink2.forEach(n => n.addEventListener('click', linkAction2))

/*End of right menu bar*/



/*hero slider*/

const myslide = document.querySelectorAll('.myslide'),
  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
counter += 1;
slidefun(counter);
}
function plusSlides(n) {
counter += n;
slidefun(counter);
resetTimer();
}
function currentSlide(n) {
counter = n;
slidefun(counter);
resetTimer();
}
function resetTimer() {
clearInterval(timer);
timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

let i;
for(i = 0;i<myslide.length;i++){
  myslide[i].style.display = "none";
}
for(i = 0;i<dot.length;i++) {
  dot[i].className = dot[i].className.replace(' active', '');
}
if(n > myslide.length){
   counter = 1;
   }
if(n < 1){
   counter = myslide.length;
   }
myslide[counter - 1].style.display = "block";
dot[counter - 1].className += " active";
}

/*end of hero slider*/



/*capability slider*/

let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
  sliderImages[i].style.display = "none";
}
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
  current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
  current = -1;
}
slideRight();
});

startSlide();

/*end of capability slider*/



/*fade in fade out effects*/
function scrollAppear(){
  var introText = document.querySelector('.intro-text');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;
    
  if(introPosition < screenPosition){
    introText.classList.add('header-solution-appear');
  }
}
  window.addEventListener('scroll', scrollAppear);
/*End of fade in fade out effects*/



