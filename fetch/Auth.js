import axios from 'axios';

const urlpartage="http://192.168.43.24";
const urlhome="http://192.168.1.70";
const url=urlhome;
export function SignUp(username, email, password) {
    const data = { username, email, password };

    axios.post(url+":3000/auth/signup", data, {
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

export function LogIn(email,password) {
    const data = { email, password };
    axios.post(url+":3000/auth/login", data, {
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
