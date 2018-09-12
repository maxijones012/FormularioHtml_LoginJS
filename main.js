/*<input type="text" id="textConsulta" />
var valor = document.getElementById("texto").value;

<input type="radio" value="si" id="btnGenerar"/> SI

console.log(valor);*/




function verificarSQL() {
    var txtUser = document.getElementById("textUsuario");
    var txtPass = document.getElementById("txtPass").value;
    var txtResultado = document.getElementById("txtResultado");

    //var expresion = /'(\s)*[;]*(AND|OR|SELECT|INTO|DROP|TABLE|COUNT)/


    // var expresion = /^[A-Z]{4}\S[0-9]+$/; //si se cumple si devuelve VERDADERO
    //var iny1 = /\s/;

    var iny5 = /INSERT\s+INTO/;
    var iny6 = /(DROP\s+TABLE)/;
    var iny3 = /SELECT\s+COUNT([*])/;

    /*
     */
    // var expresion = /(SELECT|INSERT|(DROP\s+TABLE)|((AND|OR)\s=))/;
    //   var expresion = /( [']&((INSERT\s+INTO) | (DROP\s+TABLE) | (SELECT\s+COUNT([*])\s FROM)) )/;

    var res1 = iny5.test(txtPass);
    var res2 = iny3.test(txtPass);
    var res3 = iny6.test(txtPass);




    if (!res1) { //ESTO NO SE CAMBIA
        alert("USUARIO Y CONTRASEÑA CORRECTOS");
        /*
                var newElemt = document.createElement("h2");
                var newContent = document.createTextNode("USUARIO Y CONTRASEÑA CORRECTOS" + "\n" + "User: " + txtUser.value + "\n" + "Pass: " + txtPass.value);
                newElemt.appendChild(newContent);
                document.getElementById("txtResultado").appendChild(newElemt);
                var c = document.getElementById("txtResultado");
                c.innerHTML("hola");
        */

    } else {
        alert("ERROR EN LA CONSULTA");
    }
    // document.write(resultado);
}