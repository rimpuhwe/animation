// linking the existing element in html with js using document. querySelector
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

// adding what happens when menu cliclked using arrow function
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}