/*<input type="text" id="textConsulta" />
var valor = document.getElementById("texto").value;

<input type="radio" value="si" id="btnGenerar"/> SI

console.log(valor);*/




function verificarSQL() {
    var txtUser = document.getElementById("textUsuario");
    var txtPass = document.getElementById("txtPass").value;
    var txtResultado = document.getElementById("txtResultado");


    var res = /[']/.test(txtPass);
    var res2 = /AND(\s|\w)+NULL/.test(txtPass);
    var res3 = /SELECT\s+COUNT[(][*][)]\s+(FROM)?/.test(txtPass);
    var res5 = /INSERT\s+INTO/.test(txtPass);
    var res6 = /(DROP\s+TABLE)/.test(txtPass);
    var res4 = /(OR(\s+|\w)+LIKE)/.test(txtPass);


    //  var res7 = /([0-9][=][0-9])/.test(txtPass);


    if ((!res) & ((!res3) | (!res5) | (!res6) | (!res2) | (!res4))) { //ESTO NO SE CAMBIA

        alert("USUARIO Y CONTRASEÑA CORRECTOS");
        /*
        var newElemt = document.createElement("h2");
        var newContent = document.createTextNode(" " + res4);
        newElemt.appendChild(newContent);
        document.getElementById("txtResultado").appendChild(newElemt);
     */

    } else {
        alert("ERROR EN LA CONSULTA");
        /*
        var newElemt = document.createElement("h2");
        var newContent = document.createTextNode("" + res4);
        newElemt.appendChild(newContent);
        document.getElementById("txtResultado").appendChild(newElemt);
 */
    }
    // document.write(resultado);
}