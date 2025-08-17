import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider, UseQueryResult } from '@tanstack/react-query';
import { useRandomItem } from '@/hooks/useRandomItem';
import * as swapiService from '@/services/swapi';
import React from 'react';

type MockFilm = { title: string };

describe('useRandomItem', () => {
  const queryClient = new QueryClient();

 
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const mockCategory = 'films';

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('deve retornar um item aleatório da categoria', async () => {
    const mockItems: MockFilm[] = [{ title: 'A New Hope' }, { title: 'The Empire Strikes Back' }];


    vi.spyOn(swapiService, 'getCategoryItems').mockResolvedValue(mockItems);

 
    let result = {} as UseQueryResult<MockFilm, Error>;
    const TestComponent = () => {
      result = useRandomItem<MockFilm>(mockCategory);
      return null;
    };

    render(<TestComponent />, { wrapper: Wrapper });


    await waitFor(() => {
      expect(result.isSuccess).toBe(true);
    });

    expect(mockItems).toContain(result.data);
  });

  it('deve lidar com erro na fetch', async () => {
    vi.spyOn(swapiService, 'getCategoryItems').mockRejectedValue(new Error('API Error'));

    let result = {} as UseQueryResult<MockFilm, Error>;
    const TestComponent = () => {
      result = useRandomItem<MockFilm>(mockCategory);
      return null;
    };

    render(<TestComponent />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(result.isError).toBe(true);
    });

    expect(result.error).toBeInstanceOf(Error);
    expect(result.error?.message).toBe('API Error');
  });
});
