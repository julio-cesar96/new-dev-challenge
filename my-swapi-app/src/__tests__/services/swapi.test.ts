import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getCategoryItems } from '@/services/swapi';

describe('getCategoryItems', () => {
  const categories = ['films', 'people', 'planets', 'starships', 'vehicles', 'species'];

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  categories.forEach(category => {
    it(`deve retornar itens da categoria "${category}" quando fetch for bem-sucedido`, async () => {
      const mockData = {
        results: [{ name: 'mock item' }]
      };

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        } as Response)
      );

      const items = await getCategoryItems(category);
      expect(items).toEqual(mockData.results);
      expect(fetch).toHaveBeenCalledWith(`https://swapi.py4e.com/api/${category}/`);
    });

    it(`deve lançar erro para categoria "${category}" quando fetch falhar`, async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          statusText: 'Not Found',
        } as Response)
      );

      await expect(getCategoryItems(category))
        .rejects.toThrow(`Erro ao buscar ${category}: Not Found`);
    });
  });
});
