// Concat
import { FANTASY_MOVIES, HISTORICAL_EPIC_MOVIES } from "../../constants/movies";

// Concatenamos dos arrays tipados como readonly.
// Usamos el spread operator para crear un nuevo array con los elementos de a y b sin modificar ninguno de los originales.
// Si uno de los dos arrays está vacío, el resultado contendrá únicamente los elementos del otro.
const concat = <T>(a: readonly T[], b: readonly T[]): T[] => {
  return [...a, ...b];
};

// Ejemplos de uso:
console.log("Fantasy movies:", FANTASY_MOVIES, "\n");
console.log("Historical Epic movies:", HISTORICAL_EPIC_MOVIES, "\n");

console.log("Concat:", concat(FANTASY_MOVIES, HISTORICAL_EPIC_MOVIES), "\n");
