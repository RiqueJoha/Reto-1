const inputNombre= document.querySelector ("#Nombre");
const pResultado1= document.querySelector("#resultado1");
const pResultado2= document.querySelector("#resultado2");
const pResultado3= document.querySelector("#resultado3");
const pResultado4= document.querySelector("#resultado4");
const pResultado5= document.querySelector("#resultado5");
const inputUsuEdad=document.querySelector ("#Edad");
const inputUsuMail=document.querySelector ("#Email");
const inputUsuDni=document.querySelector ("#Dni");
const inputUsuReg=document.querySelector ("#usuario-registrado");
const inputContraseniaReg=document.querySelector ("#contrasenia-registrada");
const imagen=document.querySelector ("#imagen");
const titulo=document.querySelector ("#titulo");
const cuerpoPagina=document.querySelector ("body");


const LIMITE_EDAD=16;
const COLOR_FONDO= "Gray";
const COLOR_TEXT= "white";
const FUENTE_TEXT="monospace";
const IMG_1="https://www.bing.com/images/search?view=detailV2&ccid=iwajZfrc&id=72DD5CBEADB613D6121CCC42B4BD0C198990934A&thid=OIP.iwajZfrcpLCePyTTMKRdtAAAAA&mediaurl=https%3A%2F%2Fwww.lffl.org%2Fwp-content%2Fuploads%2F2013%2F05%2Fwinlinux.jpg&exph=174&expw=300&q=logo+sistemas&simid=608015005635385223&form=IRPRST&ck=DCA625456C7C7F6C18CF16FB10DE61B8&selectedindex=4&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8b06a365fadca4b09e3f24d330a45db4%3Frik%3DSpOQiRkMvbRCzA%26pid%3DImgRaw%26r%3D0&pivotparams=insightsToken%3Dccid_XMJi4gKr*cp_3AECD0173A86E904DFF2BB3BF90CE971*mid_BA2B2510C731CF6F4029036BC653B7B2EF3D977B*simid_608002180857869601*thid_OIP.XMJi4gKrMuHbjOcKLOSTzAHaE0&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0";
const IMG_OK_2= "https://www.snsmarketing.es/blog/wp-content/uploads/2015/11/experiencia-de-usuario.jpg";
const IMG_ERROR_2="https://th.bing.com/th/id/OIP.cUZCfbTCroNUaUloX46nhwHaHa?pid=ImgDet&rs=1";
const COLOR_TITULO= "yellow";
const TAM_IMG= "50PX"


let nombreRecibido="def usuario";
let edadRecibida= "def edad";
let mailRecibido= "def mail";
let dniRecibido= "def dni";
let usuarioRegistrado= "Noah_07";
let contraseniaRegistrada= "Mayo21.";


function verificar(colorFondo,colorText,fuenteText,imagenprincipal,colortitulo,tamimg,imgresultado){
/* console.log (inputusuario.value);} */
nombreRecibido=inputNombre.value;
edadRecibida=inputUsuEdad.value;
mailRecibido=inputUsuMail.value;
dniRecibido=inputUsuDni.value;
usuarioRegistrado=inputUsuReg.value;
contraseniaRegistrada=inputContraseniaReg.value;
cuerpoPagina.style.background=colorFondo;
cuerpoPagina.style.color=colorText;
cuerpoPagina.style.fontFamily=fuenteText;
imagen.src=imagenprincipal;
titulo.style.color=colortitulo;
imagen.style.width=tamimg;
imagen.src=imgresultado;

    if ((nombreRecibido == inputNombre.value) && (edadRecibida == inputUsuEdad.value) && (mailRecibido == inputUsuMail.value) && (dniRecibido == inputUsuDni.value) && (edadRecibida >= LIMITE_EDAD)&& (usuarioRegistrado==inputUsuReg.value)&&(contraseniaRegistrada==inputContraseniaReg.value))
 {
    pResultado1.innerHTML= ("Hola " + nombreRecibido);
    pResultado2.innerHTML=("Verificamos que tu edad es: " + edadRecibida + " años (usuario mayor edad)");
    pResultado3.innerHTML=("Mail: " + mailRecibido);
    pResultado4.innerHTML=("Dni:"+ dniRecibido);
    pResultado5.innerHTML=("Usuario Habilitado");
    verificar (COLOR_FONDO,COLOR_TEXT,FUENTE_TEXT,IMG_1,COLOR_TITULO,TAM_IMG,IMG_OK_2);
} else{
    pResultado1.innerHTML= ("Hola " + nombreRecibido);
    pResultado2.innerHTML=("Verificamos que tu edad es: " + edadRecibida + " años (usuario menor edad)");
    pResultado3.innerHTML=("Mail: " + mailRecibido);
    pResultado4.innerHTML=("Dni:"+ dniRecibido);
    pResultado5.innerHTML=("Usuario No Habilitado (Datos Incorectos)");
    }
    verificar(COLOR_FONDO,COLOR_TEXT,FUENTE_TEXT,IMG_1,COLOR_TITULO,TAM_IMG,IMG_ERROR_2);
}
