import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'http://localhost:8080';

// Ajuste na função para receber apenas o ID
const deleteData = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/carros/${id}`);
}

export function useDeleteFoodData() {
    const queryClient = useQueryClient();

    const deleteMutation = useMutation((id: number) => deleteData(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data']);
        }
    });

    const deleteFood = async (id: number): Promise<void> => {
        try {
            await deleteMutation.mutateAsync(id);
        } catch (error) {
            console.error("Erro ao deletar o carro:", error);
        }
    };

    return {
        mutate: deleteFood,
        isSuccess: deleteMutation.isSuccess,
        isLoading: deleteMutation.isLoading,
    };
}