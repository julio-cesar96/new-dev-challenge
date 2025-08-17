// 📁 Estrutura de pastas recomendada para Next.js App Router:
/*
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── people/
│   │   └── page.tsx               # Category page
│   ├── films/
│   │   └── page.tsx
│   ├── planets/
│   │   └── page.tsx
│   ├── species/
│   │   └── page.tsx
│   ├── starships/
│   │   └── page.tsx
│   ├── vehicles/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── shared/                     # Componentes base (Button, Card, etc.)
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Typography/
│   │   ├── Container/
│   │   ├── Stack/
│   │   ├── Loader/
│   │   └── index.ts
│   ├── ui/                        # Componentes específicos da aplicação
│   │   ├── CategoryCard/
│   │   ├── ItemCard/
│   │   └── index.ts
│   └── index.ts
├── constants/
│   ├── swapi.ts
│   └── categories.ts
├── hooks/
│   └── useRandomItem.ts
├── services/
│   └── swapi.ts
├── types/
│   └── swapi.ts
└── tokens/
    └── tokens.ts
*/

// ===============================================

// src/constants/categories.ts
import { Person, Film, Planet, Species, Starship, Vehicle } from '@/types/swapi';

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

// ===============================================

// src/components/shared/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Typography } from './Typography';
export { Container } from './Container';
export { Stack } from './Stack';
export { Loader } from './Loader';

export type { ButtonProps } from './Button';
export type { CardProps } from './Card';
export type { TypographyProps } from './Typography';
export type { ContainerProps } from './Container';
export type { StackProps } from './Stack';
export type { LoaderProps } from './Loader';

// ===============================================

// src/components/ui/CategoryCard/CategoryCard.types.ts
import { Category } from '@/constants/categories';

export interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

// src/components/ui/CategoryCard/CategoryCard.styles.ts
import styled from 'styled-components';
import { colors } from '@/tokens/tokens';

export const CategoryCardContainer = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10);
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    border-color: ${colors.primary};
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }
`;

export const IconContainer = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 16px;
`;

export const CategoryName = styled.h3`
  color: ${colors.primary};
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CategoryDescription = styled.p`
  color: ${colors.gray[600]};
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

// src/components/ui/CategoryCard/CategoryCard.tsx
import React from 'react';
import { Card } from '@/components/shared';
import { CategoryCardProps } from './CategoryCard.types';
import { 
  CategoryCardContainer, 
  IconContainer, 
  CategoryName, 
  CategoryDescription 
} from './CategoryCard.styles';

export const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  onClick 
}) => {
  return (
    <CategoryCardContainer onClick={() => onClick(category)}>
      <Card elevation={2} padding="24px">
        <IconContainer>
          {category.icon}
        </IconContainer>
        <CategoryName>{category.name}</CategoryName>
        <CategoryDescription>{category.description}</CategoryDescription>
      </Card>
    </CategoryCardContainer>
  );
};

// src/components/ui/CategoryCard/index.ts
export { CategoryCard } from './CategoryCard';
export type { CategoryCardProps } from './CategoryCard.types';

// ===============================================

// src/components/ui/ItemCard/ItemCard.types.ts
import { CategoryType } from '@/constants/categories';

export interface ItemCardProps {
  item: CategoryType;
  category: string;
}

// src/components/ui/ItemCard/ItemCard.styles.ts
import styled from 'styled-components';
import { colors } from '@/tokens/tokens';

export const ItemTitle = styled.h2`
  color: ${colors.primary};
  margin: 0 0 16px 0;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const AttributeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 16px;
`;

export const AttributeItem = styled.div`
  background: ${colors.gray[50]};
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid ${colors.primary};
`;

export const AttributeLabel = styled.span`
  font-weight: 600;
  color: ${colors.gray[700]};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const AttributeValue = styled.div`
  color: ${colors.gray[900]};
  font-size: 1rem;
  margin-top: 4px;
`;

// src/components/ui/ItemCard/ItemCard.tsx
import React from 'react';
import { Card, Typography } from '@/components/shared';
import { Person, Film, Planet, Species, Starship, Vehicle } from '@/types/swapi';
import { ItemCardProps } from './ItemCard.types';
import { 
  ItemTitle, 
  AttributeGrid, 
  AttributeItem, 
  AttributeLabel, 
  AttributeValue 
} from './ItemCard.styles';

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
      {category === 'films' && (
        <Typography.Body color="#666" style={{ marginBottom: '16px', fontStyle: 'italic' }}>
          {(item as Film).opening_crawl.slice(0, 200)}...
        </Typography.Body>
      )}
      {renderAttributes()}
    </Card>
  );
};

// src/components/ui/ItemCard/index.ts
export { ItemCard } from './ItemCard';
export type { ItemCardProps } from './ItemCard.types';

// ===============================================

// src/components/ui/index.ts
export { CategoryCard } from './CategoryCard';
export { ItemCard } from './ItemCard';

export type { CategoryCardProps } from './CategoryCard';
export type { ItemCardProps } from './ItemCard';

// ===============================================

// src/components/index.ts (barrel export principal)
// Re-exporta tudo de shared e ui
export * from './shared';
export * from './ui';

// ===============================================

// src/app/page.tsx (Home Page)
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Stack } from '@/components/shared';
import { CategoryCard } from '@/components/ui';
import { CATEGORIES, Category } from '@/constants/categories';

export default function HomePage() {
  const router = useRouter();

  const handleCategoryClick = (category: Category) => {
    router.push(category.path);
  };

  return (
    <Container direction="column" padding="40px 20px">
      <Stack direction="column" gap="48px" align="center">
        <Stack direction="column" gap="16px" align="center">
          <Typography.H1 align="center">
            🌟 Star Wars Universe
          </Typography.H1>
          <Typography.Body align="center" color="#666">
            Explore o universo de Star Wars através de suas categorias
          </Typography.Body>
        </Stack>

        <Container 
          direction="row" 
          gap="24px" 
          wrap={true} 
          justify="center"
          style={{ maxWidth: '1200px' }}
        >
          {CATEGORIES.map((category) => (
            <div key={category.id} style={{ minWidth: '300px', flex: '1 1 300px' }}>
              <CategoryCard 
                category={category} 
                onClick={handleCategoryClick} 
              />
            </div>
          ))}
        </Container>
      </Stack>
    </Container>
  );
}

// ===============================================

// src/app/people/page.tsx (exemplo de categoria)
'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Container, Typography, Stack, Button, Loader } from '@/components/shared';
import { ItemCard } from '@/components/ui';
import { useRandomItem } from '@/hooks/useRandomItem';
import { CATEGORIES } from '@/constants/categories';
import { CategoryType } from '@/constants/categories';

export default function PeoplePage() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Extrai categoria do pathname (/people -> people)
  const category = pathname.slice(1);
  const categoryInfo = CATEGORIES.find(cat => cat.id === category);
  
  const { 
    data: item, 
    isLoading, 
    error, 
    refetch 
  } = useRandomItem<CategoryType>(category);

  const handleNewItem = () => {
    refetch();
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  if (!categoryInfo) {
    return (
      <Container direction="column" align="center" padding="40px">
        <Typography.H2>Categoria não encontrada</Typography.H2>
        <Button onClick={handleBackToHome}>
          Voltar para Home
        </Button>
      </Container>
    );
  }

  return (
    <Container direction="column" padding="40px 20px">
      <Stack direction="column" gap="32px">
        {/* Header */}
        <Stack direction="row" justify="space-between" align="center">
          <Stack direction="column" gap="8px">
            <Typography.H1>
              {categoryInfo.icon} {categoryInfo.name}
            </Typography.H1>
            <Typography.Body color="#666">
              {categoryInfo.description}
            </Typography.Body>
          </Stack>
          <Button variant="secondary" onClick={handleBackToHome}>
            ← Voltar para Home
          </Button>
        </Stack>

        {/* Action Button */}
        <Container justify="center">
          <Button 
            variant="primary" 
            size="large"
            onClick={handleNewItem}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader.Spinner size={20} color="white" />
                <Button.Text>Carregando...</Button.Text>
              </>
            ) : (
              <>
                <Button.Text>🎲 Descobrir {categoryInfo.name}</Button.Text>
              </>
            )}
          </Button>
        </Container>

        {/* Content */}
        <Container justify="center">
          <div style={{ maxWidth: '800px', width: '100%' }}>
            {isLoading && !item && (
              <Container justify="center" padding="80px 0">
                <Loader>
                  <Loader.Spinner size={48} />
                  <Loader.Text>Buscando informações...</Loader.Text>
                </Loader>
              </Container>
            )}

            {error && (
              <Container justify="center" padding="40px">
                <Stack direction="column" align="center" gap="16px">
                  <Typography.Body color="red">
                    Erro ao carregar: {error.message}
                  </Typography.Body>
                  <Button onClick={handleNewItem}>
                    Tentar novamente
                  </Button>
                </Stack>
              </Container>
            )}

            {item && !isLoading && (
              <ItemCard item={item} category={category} />
            )}
          </div>
        </Container>
      </Stack>
    </Container>
  );
}

// ===============================================

// src/app/layout.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutos
        retry: 3,
      },
    },
  }));

  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}

// ===============================================

// Como usar a nova estrutura:

// ✅ Importar componentes compartilhados
import { Button, Card, Typography } from '@/components/shared';

// ✅ Importar componentes específicos da UI
import { CategoryCard, ItemCard } from '@/components/ui';

// ✅ Ou importar tudo de uma vez (graças ao barrel export)
import { Button, CategoryCard, ItemCard } from '@/components';