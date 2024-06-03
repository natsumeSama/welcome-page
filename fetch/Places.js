import axios from 'axios';

const urlpartage = "http://192.168.168.90";
const urlhome = "http://192.168.1.70";
const url = urlpartage;

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
        try {
          const response = await axios.get(`${url}:3000/${type}/fav/${id}`, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          return response.data;
        } catch (error) {
          return null; // Return null or any default value in case of error
        }
      });
  
      const results = await Promise.all(promises);
      return results.filter(result => result !== null); // Filter out null results
    } catch (error) {
      return [];
    }
  }
