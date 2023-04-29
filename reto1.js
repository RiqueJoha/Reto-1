const inputNombre= document.querySelector ("#Nombre");
const pResultado1=document.querySelector ("#Resultado1");
const cuerpopagina=document.querySelector ("body");
const inputEdad= document.querySelector ("#Edad");
const inputEmail= document.querySelector ("#Email");
const inputDni= document.querySelector ("#Dni");
const pResultado2=document.querySelector ("#Resultado2");
const pResultado3=document.querySelector ("#Resultado3");
const pResultado4=document.querySelector ("#Resultado4");
const pResultado5=document.querySelector ("#Resultado5");
const pResultado6=document.querySelector ("#Resultado6");
const imagen1=document.querySelector ("#imagen1");
const titulo1=document.querySelector ("#titulo1");
const titulo2=document.querySelector ("#titulo2");
const inputclave=document.querySelector ("#clave1");

const imagen2=document.querySelector ("#imagen2");
const imagen3=document.querySelector ("#imagen3");

let nombreRecibido= "def nombre";
let edadRecibida="def edad";
let emailrecibido="def mail";
let dniRecibido="def dni";
let usuarioingresado="usu def";
let claveingresada="clave def";

const EDAD_LIMITE=16;
const COLOR_FONDO="pink";
const COLOR_TEXT="black";
const IMG_1= "https://conceptodefinicion.de/wp-content/uploads/2011/05/Sistema_Operativo-2-1.jpg";
const TIPO_TXT="monospace";
const COLOR_TITULO="blue";
const USUARIO_1="Noah_07";
const CLAVE_1= "Lunes20.";
const IMG_2="https://www.snsmarketing.es/blog/wp-content/uploads/2015/11/experiencia-de-usuario.jpg";
const IMG_3="https://lh3.googleusercontent.com/-YJcKA-uPQoU/AAAAAAAAAAI/AAAAAAAAEAU/dg86xdvGx3c/photo.jpg";

function verificar1() {

    nombreRecibido=inputNombre.value;
    edadRecibida=inputEdad.value;
    emailrecibido=inputEmail.value;
    dniRecibido=inputDni.value;
    imagen1.src=IMG_1;
    pResultado1.innerHTML=("¡Hola! " + nombreRecibido);
    pResultado2.innerHTML=("Verificamos que:");
    pResultado3.innerHTML=("Tu email es:" + emailrecibido);
    pResultado4.innerHTML=("Tu Dni:"+ dniRecibido);
    cuerpopagina.style.background=COLOR_FONDO;
    cuerpopagina.style.color=COLOR_TEXT;
    cuerpopagina.style.fontFamily=TIPO_TXT;
    titulo1.style.color=COLOR_TITULO;
    titulo2.style.color=COLOR_TITULO;
    claveingresada=inputclave.value;
   

if ((edadRecibida >= EDAD_LIMITE)) {
    pResultado5.innerHTML=("Tu edad:" + edadRecibida + " años (Usuario mayor de edad)");
    
} else {
    pResultado5.innerHTML=("Tu edad:" + edadRecibida + " años (Usuario menor de edad)");

}}


function verificar2() {
    claveingresada=inputclave.value;

if ((claveingresada==CLAVE_1)) {
    imagen1.src=IMG_2;
    pResultado6.innerHTML=("Clave correcta");

} else {
    imagen1.src=IMG_3;
    pResultado6.innerHTML=("Clave incorrecta");
    pResultado6.style.color="red"
}}