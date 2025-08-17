// src/__tests__/hooks/useRandomItem.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRandomItem } from '@/hooks/useRandomItem';
import * as swapiService from '@/services/swapi';
import React from 'react';

describe('useRandomItem', () => {
  const queryClient = new QueryClient();

  // wrapper para fornecer QueryClient ao hook
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const mockCategory = 'films';

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('deve retornar um item aleatório da categoria', async () => {
    const mockItems = [{ title: 'A New Hope' }, { title: 'The Empire Strikes Back' }];
    
    // mock do service
    vi.spyOn(swapiService, 'getCategoryItems').mockResolvedValue(mockItems);

    // renderizar um componente que usa o hook
    let result: any;
    const TestComponent = () => {
      result = useRandomItem(mockCategory);
      return null;
    };

    render(<TestComponent />, { wrapper: Wrapper });

    // esperar até o hook completar a query
    await waitFor(() => {
      expect(result.isSuccess).toBe(true);
    });

    expect(mockItems).toContain(result.data);
  });

  it('deve lidar com erro na fetch', async () => {
    vi.spyOn(swapiService, 'getCategoryItems').mockRejectedValue(new Error('API Error'));

    let result: any;
    const TestComponent = () => {
      result = useRandomItem(mockCategory);
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
