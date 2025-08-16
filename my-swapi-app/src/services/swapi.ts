import { BASE_URL } from "@/constants/swapi";
import { ApiResponse } from "@/types/swapi";


export async function getCategoryItems<T>(category: string): Promise<T[]> {
    const response = await fetch(`${BASE_URL}${category}/`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar ${category}: ${response.statusText}`);
    }

    const data: ApiResponse<T> = await response.json();
    return data.results;
}