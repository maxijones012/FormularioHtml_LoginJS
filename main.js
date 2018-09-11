/*<input type="text" id="textConsulta" />
var valor = document.getElementById("texto").value;

<input type="radio" value="si" id="btnGenerar"/> SI

console.log(valor);*/


function verificar() {



    var textUsuario = String(document.getElementById('texttextUsuario').value);



    //CREO EL NUEVO ELEMENTO
    var nuevoElemento = document.createElement("h2"); //crea un elemento HTML especificado por su tagName


    //--------------------------------------------------------
    //var exp1 = new RegExp("alumno");
    //var exp1 = /([<!]?|[<]?meta|script|)/;
    var exp1 = /(meta|script|alert[(]?|<[!?]|<h[1-5]>)/;
    /*

                    alert[(]?       alert(
                    <[!?]           <!,  <?
                    <h[1-5]>        <h1>, h2, h3, h4 ,h5

    
    
    */
    var rta = exp1.test(textUsuario); //evalua la expresion con una cadena que ingresaste

    if (rta != true) {
        alert("verdadero: su pagina es segura: " + textUsuario);

    } else {
        alert("ERROR: SU PAGINA CONTIENE SCRIPT: " + textUsuario);
        //res.innerHTML = "SU PAGINA ES SEGURA";


    }

}


function verificarSQL() {
    var txtUser = document.getElementById("textUsuario");
    var txtPass = document.getElementById("txtPass");
    var txtRespuesta = document.getElementById("txtResultado");

    //var expresion = /'(\s)*[;]*(AND|OR|SELECT|INTO|DROP|TABLE|COUNT)/;
    var expresion = /'?/;


    var result = expresion.test(txtPass);





    if (!result) {
        alert("USUARIO Y CONTRASEÑA CORRECTOS");

        var newElemt = document.createElement("h2");
        var newContent = document.createTextNode("USUARIO Y CONTRASEÑA CORRECTOS" + "\n" + "User: " + txtUser.value + "\n" + "Pass: " + txtPass.value);
        newElemt.appendChild(newContent);
        document.getElementById("txtResultado").appendChild(newElemt);



    } else {
        alert("ERROR EN LA CONSULTA");
    }

}