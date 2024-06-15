/* Codigo base */
/* const ele = document.getElementById("ele1")

function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
ele.addEventListener("click", pintar); */


/* obtenemos el elemento a modificar */
const ele = document.getElementById('ele1');

/* funcion base llamada "pintar", solo contiene reglas 
no data */
function pintar(evento, color = ''){
    evento.target.style.backgroundColor = color; 
}
/* evento principal con click, se modifica por medio del
argumento declarado previamente (evento), pero ahora 
agregamos al style el color yellow */

/* El evento hace click y modifica el color del div (ele) */
ele.addEventListener('click', (evento) => {
    pintar(evento, 'yellow');
});

/* evento que aplica por defecto el color green al div (ele) 
al momento de que se carga la pagina */
window.addEventListener('load', () => {
    ele.style.backgroundColor = 'green'
});





    