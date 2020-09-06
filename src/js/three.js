/* three.js Debe contener una función que invoque las funciones presentes en one y two.
Debe retornar sus resultados en un objeto con la siguiente estructura:
Donde resultOne y resultTwo son los resultados de ambas funciones.
Se debe trabajar con formato ES6 +. */
import resultOne from "./one";
import resultTwo from "./two";

export default function callingFunctionsOneTwo() {
    return {
        status: "ok",
        one: resultOne(),
        two: resultTwo(),
    };
}