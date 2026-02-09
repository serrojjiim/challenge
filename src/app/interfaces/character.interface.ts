export interface Location {
  name: string;
}
export interface Origin {
  name: string;
  url: string;
}
export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
  readonly id: number;
  readonly name: string;
  readonly image: string;
  readonly species: string;
  readonly status: CharacterStatus;
  readonly gender: CharacterGender;
  readonly location: Location;
  readonly origin: Origin;
}

export interface CharacterResponse {
  readonly info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  readonly results: Character[];
}