// Clone Merge
import { MALENIA } from "../../constants/bosses";

// Clonamos un objeto tipado de forma genérica.
// Usamos el spread operator para crear un nuevo objeto con las mismas propiedades sin modificar el original.
const clone = <T extends object>(source: T): T => {
  return { ...source };
};

// Combinamos dos objetos tipados de forma genérica.
// Usamos el spread operator para crear un nuevo objeto con las propiedades de target y source sin modificar los originales.
// Si existen propiedades con el mismo nombre en ambos objetos, las de source sobrescriben a las de target.
const merge = <S extends object, T extends object>(
  source: S,
  target: T,
): T & S => {
  return { ...target, ...source };
};

// Ejemplos de uso:
const clonedMalenia = clone(MALENIA);

const upgradedMalenia = merge(
  {
    health: 22000,
    damage: 1100,
    phaseCount: 3,
  },
  MALENIA,
);

console.log("Original boss:", MALENIA);
console.log("Cloned boss:", clonedMalenia);
console.log("Upgraded boss:", upgradedMalenia);
