/* two.js Debe contener una función que convierta un objeto en formato JSON a string,
    retornando el objeto o bien una excepción de error si no pudo ser procesado. */

export default function resultTwo() {
    let auto = {
        marca: "Volvo",
        ruedas: 4,
        condicion: "nuevo",
    };
    console.log("Json=>", auto);
    let myJson = JSON.stringify(auto);
    console.log("Json=>", myJson);
    return myJson;

}
//resultTwo();