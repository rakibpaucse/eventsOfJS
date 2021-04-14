var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  
  ready(() => { 
    alert('Content Is Fully Loaded')
  });
//   1

var loginButton = document.querySelector('#login-button')
var form = document.querySelector('.form')
var extras = document.querySelector('.extras')
var wrapper = document.querySelector('.wrapper')

var wrapper = document.querySelector('.wrapper')





loginButton.addEventListener('click' , function (e) {
    e.preventDefault()


    form.classList.add('hideForm');
    form.classList.remove('showForm');
    extras.style.display = 'none';
    wrapper.classList.add('form-success');
})
// 2

function selectMode () {
    var selectMode = document.querySelector('.selectMode').value
    document.getElementById("selectedMode").innerHTML = "You selected: " + selectMode;
}
// 3

loginButton.onauxclick = function() {
    alert('You Clicked Left Button of the mouse!')
}
// 4

var makeLargeHolder = document.querySelector('.makeLargeHolder');
makeLargeHolder.addEventListener('dblclick', function (e) {
    makeLargeHolder.style.display = 'none';
});
// 5

makeLargeHolder.addEventListener("mouseover", function( event ) {
    makeLargeHolder.style.background = "white";
})
// 6

makeLargeHolder.addEventListener('mouseup', e => {
    makeLargeHolder.style.color = "rgb(153, 226, 255)";
})
//7

makeLargeHolder.addEventListener('mousedown', e => {
    makeLargeHolder.style.color = "red";
})
//8


selectedMode.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();

    alert(`You copied :  ${event.clipboardData.getData('text')}`)
});
// 9


var userName = document.querySelector('.userName')
var password = document.querySelector('.password')

userName.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();
    alert(`You pasted:  ${paste}`)
});


// New 

userName.addEventListener('focus' , (e) => {
    e.target.style.background = 'white';
    e.target.style.width = '300px';
    e.target.style.color = '#53e3a6'; 

})

userName.addEventListener('blur' , (e) => {
    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
    e.target.style.width = '250px';
    e.target.style.color = 'white';
})


password.addEventListener('keydown', (e) => {
   let code = e.keyCode || e.which;
    console.log(String.fromCharCode(code));  
});

password.addEventListener('keyup', (e) => {
    let code = e.keyCode || e.which;
     console.log(String.fromCharCode(code));  
});



const zoom = (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
    makeLargeHolder.style.transform = `scale(${scale})`;
}
let scale = 1;
makeLargeHolder.onwheel = zoom



makeLargeHolder.addEventListener('mousemove', e => {
console.log(e.offsetX, e.offsetY);
})

wrapper.addEventListener('mousedown', e => {
    console.log('Mouse Down in ' + e.offsetX, e.offsetY);
})

wrapper.addEventListener('mouseup', e => {
    console.log('Mouse Up in ' + e.offsetX, e.offsetY);
})



