
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ItemCard } from './ItemCard';
import type { Person, Film, Planet } from '@/types/swapi';

const meta: Meta<typeof ItemCard> = {
  title: 'UI/ItemCard',
  component: ItemCard,
  tags: ['autodocs'],
  argTypes: {
    item: { control: false },
    category: {
      control: 'select',
      options: ['people', 'films', 'planets', 'species', 'starships', 'vehicles'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ItemCard>;


const mockPerson: Person = {
  name: 'Luke Skywalker',
  birth_year: '19BBY',
  gender: 'male',
  height: '172',
  mass: '77',
  eye_color: 'blue',
  hair_color: 'blond',
  skin_color: 'fair',
  homeworld: '',
  films: [],
  species: [],
  starships: [],
  vehicles: [],
  url: '',
  created: '',
  edited: '',
};

const mockFilm: Film = {
  title: 'A New Hope',
  episode_id: 4,
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1977-05-25',
  opening_crawl: 'It is a period of civil war...',
  species: [],
  starships: [],
  vehicles: [],
  characters: [],
  planets: [],
  url: '',
  created: '',
  edited: '',
};

const mockPlanet: Planet = {
    name: 'Tatooine',
    diameter: '10465',
    climate: 'arid',
    terrain: 'desert',
    population: '200000',
    gravity: '1 standard',
    orbital_period: '304',
    rotation_period: '',
    surface_water: '',
    residents: [],
    films: [],
    url: '',
    created: '',
    edited: '',
}


export const PersonStory: Story = {
  name: 'Person', 
  args: {
    item: mockPerson,
    category: 'people',
  },
};

export const FilmStory: Story = {
  name: 'Film',
  args: {
    item: mockFilm,
    category: 'films',
  },
};

export const PlanetStory: Story = {
  name: 'Planet',
  args: {
    item: mockPlanet,
    category: 'planets',
  },
};