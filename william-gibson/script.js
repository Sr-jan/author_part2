// WILLIAM GIBSON

// Header animations
var headingLeft = document.querySelector('.heading-left')
var headingRight = document.querySelector('.heading-right')

function flip(el, timer) {  
  setTimeout(function() {
    el.classList.toggle('flip')
    flip(el, timer)
  }, timer)
}

function x(el, timer, text) {
  setTimeout(function() {
    var num = Math.floor(Math.random() * text.length)
    var temp = ['0', '1', '_']
    var res = text.replace(text[num], '_')
    el.textContent = res
    x(el, timer, text)
  }, timer)
}

flip(headingRight, 6000)
x(headingLeft, 1000, 'WILLIAM')
x(headingRight, 1500, 'GIBSON')



// offscreen nav

var menu = document.querySelector('.menu-toggle')
var body = document.querySelector('body')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {
  body.classList.toggle('nav-active')
}