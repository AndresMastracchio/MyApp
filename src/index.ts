rotulo1.innerHTML = "Ingrese un número: ";
rotulo2.innerHTML = "Ingrese un número: ";
rotulo3.innerHTML =
  "Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ";

let btnEnviar = document.getElementById("btnEnviar");

//let i: number, linea: string;
//let numero1: number = Number(dato1.value);
//let numero2: number = Number(dato2.value);
//let opcionMenu: number = Number(dato3.value);

btnEnviar.addEventListener("click", () => {
  let i: number, linea: string;
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let opcionMenu: number = Number(dato3.value);

  if (opcionMenu === 1) {
    linea = "-";
    for (i = 0; i <= 40; i++) {
      linea = linea + "-";
    }
    console.log(linea);
    console.log("el resultado es: ", numero1 + numero2);
    linea = "-";
    for (i = 0; i <= 40; i++) {
      linea = linea + "-";
    }
    console.log(linea);
  } else if (opcionMenu === 2) {
    linea = "-";
    for (i = 0; i <= 40; i++) {
      linea = linea + "-";
    }
    console.log(linea);
    console.log("el resultado es: ", numero1 - numero2);
    linea = "-";
    for (i = 0; i <= 40; i++) {
      linea = linea + "-";
    }
    console.log(linea);
  }
});
