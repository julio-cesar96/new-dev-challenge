import { BASE_URL } from "@/constants/swapi";
import { ApiResponse } from "@/types/swapi";

/**
 * Função genérica para buscar itens de qualquer categoria da SWAPI
 * @param category - categoria da API (ex: "people", "films", "planets", ...)
 * @returns Promise com array de itens tipados
 */

export async function getCategoryItems<T>(category: string): Promise<T[]> {
    const response = await fetch(`${BASE_URL}${category}/`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar ${category}: ${response.statusText}`);
    }

    const data: ApiResponse<T> = await response.json();
    return data.results;
}