import React from 'react';
import { Person, Film, Planet, Species, Starship, Vehicle } from '@/types/swapi';
import { ItemCardProps } from './ItemCard.types';
import { 
  ItemTitle, 
  AttributeGrid, 
  AttributeItem, 
  AttributeLabel, 
  AttributeValue 
} from './ItemCard.styles';
import { CategoryType } from '@/constants/categories';
import { Card, Typography } from '@/components/shared';

export const ItemCard: React.FC<ItemCardProps> = ({ item, category }) => {
  const renderPersonAttributes = (person: Person) => (
    <AttributeGrid>
      <AttributeItem>
        <AttributeLabel>Nascimento</AttributeLabel>
        <AttributeValue>{person.birth_year}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Gênero</AttributeLabel>
        <AttributeValue>{person.gender}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Altura</AttributeLabel>
        <AttributeValue>{person.height} cm</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Massa</AttributeLabel>
        <AttributeValue>{person.mass} kg</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Cor dos Olhos</AttributeLabel>
        <AttributeValue>{person.eye_color}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Cor do Cabelo</AttributeLabel>
        <AttributeValue>{person.hair_color}</AttributeValue>
      </AttributeItem>
    </AttributeGrid>
  );

  const renderFilmAttributes = (film: Film) => (
    <AttributeGrid>
      <AttributeItem>
        <AttributeLabel>Episódio</AttributeLabel>
        <AttributeValue>Episódio {film.episode_id}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Diretor</AttributeLabel>
        <AttributeValue>{film.director}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Produtor</AttributeLabel>
        <AttributeValue>{film.producer}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Lançamento</AttributeLabel>
        <AttributeValue>{new Date(film.release_date).toLocaleDateString('pt-BR')}</AttributeValue>
      </AttributeItem>
    </AttributeGrid>
  );

  const renderPlanetAttributes = (planet: Planet) => (
    <AttributeGrid>
      <AttributeItem>
        <AttributeLabel>Diâmetro</AttributeLabel>
        <AttributeValue>{planet.diameter} km</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Clima</AttributeLabel>
        <AttributeValue>{planet.climate}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Terreno</AttributeLabel>
        <AttributeValue>{planet.terrain}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>População</AttributeLabel>
        <AttributeValue>{planet.population}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Gravidade</AttributeLabel>
        <AttributeValue>{planet.gravity}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Período Orbital</AttributeLabel>
        <AttributeValue>{planet.orbital_period} dias</AttributeValue>
      </AttributeItem>
    </AttributeGrid>
  );

  const renderSpeciesAttributes = (species: Species) => (
    <AttributeGrid>
      <AttributeItem>
        <AttributeLabel>Classificação</AttributeLabel>
        <AttributeValue>{species.classification}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Designação</AttributeLabel>
        <AttributeValue>{species.designation}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Altura Média</AttributeLabel>
        <AttributeValue>{species.average_height} cm</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Expectativa de Vida</AttributeLabel>
        <AttributeValue>{species.average_lifespan} anos</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Linguagem</AttributeLabel>
        <AttributeValue>{species.language}</AttributeValue>
      </AttributeItem>
    </AttributeGrid>
  );

  const renderStarshipAttributes = (starship: Starship) => (
    <AttributeGrid>
      <AttributeItem>
        <AttributeLabel>Modelo</AttributeLabel>
        <AttributeValue>{starship.model}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Classe</AttributeLabel>
        <AttributeValue>{starship.starship_class}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Fabricante</AttributeLabel>
        <AttributeValue>{starship.manufacturer}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Custo</AttributeLabel>
        <AttributeValue>{starship.cost_in_credits} créditos</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Comprimento</AttributeLabel>
        <AttributeValue>{starship.length} metros</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Tripulação</AttributeLabel>
        <AttributeValue>{starship.crew}</AttributeValue>
      </AttributeItem>
    </AttributeGrid>
  );

  const renderVehicleAttributes = (vehicle: Vehicle) => (
    <AttributeGrid>
      <AttributeItem>
        <AttributeLabel>Modelo</AttributeLabel>
        <AttributeValue>{vehicle.model}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Classe</AttributeLabel>
        <AttributeValue>{vehicle.vehicle_class}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Fabricante</AttributeLabel>
        <AttributeValue>{vehicle.manufacturer}</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Custo</AttributeLabel>
        <AttributeValue>{vehicle.cost_in_credits} créditos</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Comprimento</AttributeLabel>
        <AttributeValue>{vehicle.length} metros</AttributeValue>
      </AttributeItem>
      <AttributeItem>
        <AttributeLabel>Velocidade Máxima</AttributeLabel>
        <AttributeValue>{vehicle.max_atmosphering_speed} km/h</AttributeValue>
      </AttributeItem>
    </AttributeGrid>
  );

  const getItemName = (item: CategoryType): string => {
    if ('name' in item) return item.name;
    if ('title' in item) return (item as Film).title;
    return 'Item desconhecido';
  };

  const renderAttributes = () => {
    switch (category) {
      case 'people':
        return renderPersonAttributes(item as Person);
      case 'films':
        return renderFilmAttributes(item as Film);
      case 'planets':
        return renderPlanetAttributes(item as Planet);
      case 'species':
        return renderSpeciesAttributes(item as Species);
      case 'starships':
        return renderStarshipAttributes(item as Starship);
      case 'vehicles':
        return renderVehicleAttributes(item as Vehicle);
      default:
        return null;
    }
  };

  return (
    <Card elevation={3} padding="32px">
      <ItemTitle>{getItemName(item)}</ItemTitle>
      {category === 'films' ? (
        <Typography.Body color="#666" style={{ marginBottom: '16px', fontStyle: 'italic' }}>
          {(item as Film).opening_crawl.slice(0, 200)}...
        </Typography.Body>
      ) : null}
      {renderAttributes()}
    </Card>
  );
};