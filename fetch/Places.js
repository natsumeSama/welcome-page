import axios from 'axios';

const urlpartage = "http://192.168.43.24";
const urlhome = "http://192.168.1.70";
const url = urlhome;

export async function trouver(type,v) {
    try {
        const response = await axios.get(`${url}:3000/${type}/${v}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        throw error; // Vous pouvez choisir de lancer l'erreur pour la gérer dans le composant appelant
    }
}
