import { Person, Film, Planet, Species, Starship, Vehicle } from "@/types/swapi";

export interface Category {
  id: string;
  name: string;
  path: string;
  description: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'people',
    name: 'Personagens',
    path: '/people',
    description: 'Explore personagens icônicos da galáxia',
    icon: '👤'
  },
  {
    id: 'films',
    name: 'Filmes',
    path: '/films',
    description: 'Descubra os filmes da saga Star Wars',
    icon: '🎬'
  },
  {
    id: 'planets',
    name: 'Planetas',
    path: '/planets',
    description: 'Viaje pelos planetas da galáxia',
    icon: '🪐'
  },
  {
    id: 'species',
    name: 'Espécies',
    path: '/species',
    description: 'Conheça as diversas espécies do universo',
    icon: '👽'
  },
  {
    id: 'starships',
    name: 'Naves',
    path: '/starships',
    description: 'Explore as naves espaciais mais famosas',
    icon: '🚀'
  },
  {
    id: 'vehicles',
    name: 'Veículos',
    path: '/vehicles',
    description: 'Descubra os veículos utilizados na saga',
    icon: '🚗'
  }
];

export type CategoryType = Person | Film | Planet | Species | Starship | Vehicle;
