import axios from 'axios';

const urlpartage = "http://192.168.43.24";
const urlhome = "http://192.168.1.70";
const url = urlhome;

export function SignUp(username, email, password) {
    const data = { username, email, password };

    axios.post(url + ":3000/auth/signup", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export function LogIn(email, password) {
    const data = { email, password };
    return axios.post(url + ":3000/auth/login", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        const { userName } = response.data;
        return userName;
    })
    .catch(error => {
        console.log(error);
        throw error; // Propagate the error so it can be handled by the caller
    });
}

export async function user(email) {
    try {
        const response = await axios.get(`${url}:3000/auth/${email}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error); // Vous pouvez choisir de lancer l'erreur pour la gérer dans le composant appelant
    }
}

export async function addfav(email,fav) {
    try {
        const response = await axios.post(`${url}:3000/auth/${email}/${fav}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error); // Vous pouvez choisir de lancer l'erreur pour la gérer dans le composant appelant
    }
}

export async function suppfav(email,fav) {
    try {
        const response = await axios.delete(`${url}:3000/auth/${email}/${fav}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error); // Vous pouvez choisir de lancer l'erreur pour la gérer dans le composant appelant
    }
}




