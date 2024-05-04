let isOpen = false; //esto nos dice si esta abierto o cerrado el menu. aqui de normal esta cerrado
function handlerEvents(){

    let boton = document.getElementById('botonMenu'); //tomamos el boton por la id
    boton.addEventListener('click', handlerMenu) //esto es cuando hagas click ejecuta esta funcion
    }

    function handlerMenu(){

       let lista = document.getElementById('lista'); //tomamos la lista entera

       let icono = document.getElementById('iconoBoton');//tomamos  el boton

       if (isOpen == false) {

        lista.style.display = 'block'; //aqui le digo cuando este diferente a cerrado lo abrimos y ponemos la x

        icono.className = 'fa-solid fa-xmark';

        isOpen = true;

       } else {

        lista.style.display = ''; //y aqui cuando vuelva a su estado inicial se cierra y vuelve a la burguer

        icono.className = 'fa-solid fa-bars';

        isOpen = false;
       }

    }

    // section carousel (aqui ya hemos dado la funcion flecha y la uso)

    const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   


window.onload = handlerEvents; 