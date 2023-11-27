import axios from "axios"

const API_URL = 'http://localhost:8080';

const fetchData = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/carros/${id}`);
        return response.data;   
    } catch (error) {
        // Trate os erros adequadamente, como lançar ou retornar um erro para ser tratado externamente.
        console.error('Erro ao buscar os dados:', error);
        throw new Error('Erro ao buscar os dados');
    }
}

// Agora você pode chamar a função fetchData com o ID fornecido pelo usuário
const userID = 123; // Aqui você teria o ID fornecido pelo usuário

fetchData(userID)
    .then(data => {
        // Faça algo com os dados obtidos, por exemplo:
        console.log('Dados obtidos:', data);
    })
    .catch(error => {
        // Trate o erro caso ocorra
        console.error('Erro ao buscar os dados:', error);
    });