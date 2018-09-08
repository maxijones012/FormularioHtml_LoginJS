/*<input type="text" id="textConsulta" />
var valor = document.getElementById("texto").value;

<input type="radio" value="si" id="btnGenerar"/> SI

console.log(valor);*/


function verificar() {
    var consulta = String(document.getElementById('textConsulta').value);
    var res = document.getElementById("res");
    // document.getElementById('res').value = consulta;

    //CREO EL NUEVO ELEMENTO
    var nuevoElemento = document.createElement("h2"); //crea un elemento HTML especificado por su tagName


    //--------------------------------------------------------
    //var exp1 = new RegExp("alumno");
    //var exp1 = /([<!]?|[<]?meta|script|)/;
    var exp1 = /(meta|script|alert[(]?|<[!?]|<h[1-5]>)/;
    /*

                    alert[(]?       alert(
                    <[!?]           <!,  <?
                    <h[1-5]>        h1, h2, h3, h4 ,h5

    
    
    */
    var rta = exp1.test(consulta);

    if (rta != true) {
        alert("verdadero: su pagina es segura: " + consulta);

    } else {
        alert("ERROR: SU PAGINA CONTIENE SCRIPT: " + consulta);
        //res.innerHTML = "SU PAGINA ES SEGURA";


    }

}