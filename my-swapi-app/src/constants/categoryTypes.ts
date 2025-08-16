import { Film, Planet, Species, Starship, Vehicle, Person } from '@/types/swapi';

export type Category = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles';

export const categoryTypeMap = {
  films: {} as Film,
  people: {} as Person,
  planets: {} as Planet,
  species: {} as Species,
  starships: {} as Starship,
  vehicles: {} as Vehicle,
};
