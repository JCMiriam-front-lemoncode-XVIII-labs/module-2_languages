export interface Boss {
  name: string;
  game: string;
  faction?: string;
  health: number;
  damage: number;
  defense: number;
  speed: number;
  magic: number;
  phaseCount: number;
  isOptional: boolean;
}

export interface Book {
  title: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  isRead: boolean;
}
