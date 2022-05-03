// Resolver el área de un cuadrado ingresando por pantalla en 2 inputs los valores
// para mostrar el resultado por consola

//rotulo1.innerHtml = "Ingresar la base: ";
//rotulo2.innerHtml = "Ingresar la altura: ";

let btnEnviar = document.getElementById("btnEnviar");
let datoBase = document.getElementById("base");
let datoAltura = document.getElementById("altura");

btnEnviar.addEventListener("click", () => {
  let area: number = Number(datoBase.value) * Number(datoAltura.value);
  console.log("Resultado del área:", area);
});
