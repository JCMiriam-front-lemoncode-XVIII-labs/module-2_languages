import type { Boss } from "./types";

export const MALENIA: Boss = {
  name: "Malenia, Blade of Miquella",
  game: "Elden Ring",
  faction: "Demigod",
  health: 18000,
  damage: 950,
  defense: 700,
  speed: 95,
  magic: 60,
  phaseCount: 2,
  isOptional: true,
};

export const NAMELESS_KING: Boss = {
  name: "Nameless King",
  game: "Dark Souls III",
  faction: "God of War",
  health: 7900,
  damage: 920,
  defense: 650,
  speed: 88,
  magic: 55,
  phaseCount: 2,
  isOptional: true,
};

export const SLAVE_KNIGHT_GAEL: Boss = {
  name: "Slave Knight Gael",
  game: "Dark Souls III",
  faction: "The Ringed City",
  health: 15000,
  damage: 980,
  defense: 720,
  speed: 82,
  magic: 40,
  phaseCount: 3,
  isOptional: false,
};

export const ORPHAN_OF_KOS: Boss = {
  name: "Orphan of Kos",
  game: "Bloodborne",
  faction: "Great One",
  health: 8400,
  damage: 990,
  defense: 580,
  speed: 97,
  magic: 35,
  phaseCount: 2,
  isOptional: false,
};

export const SEPHIROTH: Boss = {
  name: "Sephiroth",
  game: "Final Fantasy VII",
  faction: "One-Winged Angel",
  health: 12000,
  damage: 940,
  defense: 680,
  speed: 84,
  magic: 98,
  phaseCount: 3,
  isOptional: false,
};
