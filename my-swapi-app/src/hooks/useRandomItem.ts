import { useQuery } from "@tanstack/react-query";
import { getCategoryItems } from "../services/swapi";


/**
 * Hook genérico para pegar um item randômico de uma categoria da SWAPI
 * @param category - Categoria da API (ex: "people", "films", "planets", ...)
 * @returns item randômico da categoria + função para refetch
 */

export function useRandomItem<T>(category: string) {
    return useQuery<T, Error>({
        queryKey: [category],
        queryFn: async () => {
            const items = await getCategoryItems<T>(category);
            return items[Math.floor(Math.random() * items.length)];
        },
        refetchOnWindowFocus: false,
    });
}