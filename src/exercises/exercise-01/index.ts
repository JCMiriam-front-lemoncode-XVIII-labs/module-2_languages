// Array operations
import { SCI_FI_MOVIES } from "../../constants/movies";

// Extraemos el primer elemento de un array tipado como readonly.
// Lo guardamos en la variable first y devolvemos su resultado.
// Si el array está vacío, first será undefined.
const head = <T>(array: readonly T[]): T | undefined => {
  const [first] = array;
  return first;
};

// Extraemos todos los elementos salvo el primero de un array tipado como readonly.
// Ignoramos la primera posición y guardamos el resto en la variable rest mediante rest operator.
// Si el array está vacío o solo tiene un elemento, rest será un array vacío.
const tail = <T>(array: readonly T[]): T[] => {
  const [, ...rest] = array;
  return rest;
};

// Devolvemos todos los elementos menos el último de un array tipado como readonly.
// Usamos el método slice de Array.prototype para crear un nuevo array sin modificar el original.
// Si el array está vacío o solo tiene un elemento, el resultado será un array vacío.
const init = <T>(array: readonly T[]): T[] => {
  return array.slice(0, -1);
};

// Extraemos el último elemento de un array tipado como readonly.
// Hacemos una copia superficial del array y devolvemos el valor de su última posición.
// Si el array está vacío, el resultado será undefined.
const last = <T>(array: readonly T[]): T | undefined => {
  const [...elements] = array;
  return elements[elements.length - 1];
};

// Ejemplos de uso:
console.log("Movies:", SCI_FI_MOVIES, "\n");

console.log("Head:", head(SCI_FI_MOVIES), "\n");
console.log("Tail:", tail(SCI_FI_MOVIES), "\n");
console.log("Init:", init(SCI_FI_MOVIES), "\n");
console.log("Last:", last(SCI_FI_MOVIES));
