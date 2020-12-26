const iconHam = document.querySelector(".icon-ham");
const iconClose = document.querySelector(".icon-close");
const headerUl = document.querySelector(".header_ul");

document.addEventListener('keyup', (event)=> {
    if(event.keyCode === 13){
            toggleNav();
    }
});

function toggleNav(){

    iconHam.classList.toggle("icon-ham__hide");
    iconClose.classList.toggle("icon-close__show");
    headerUl.classList.toggle("icon-close__show");
    console.log(headerUl);
}