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
        console.error("Erreur lors de la récupération des données :", error); // Vous pouvez choisir de lancer l'erreur pour la gérer dans le composant appelant
    }
}

export async function search(type,name) {
    try {
        const response = await axios.get(`${url}:3000/${type}/search/${name}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);// Vous pouvez choisir de lancer l'erreur pour la gérer dans le composant appelant
    }
}

export async function favorite(type, ids) {
    try {
        const promises = ids.map(async id => {
            const response = await axios.get(`${url}:3000/${type}/fav/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        });

        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        
    }
}

