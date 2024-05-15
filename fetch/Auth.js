import axios from 'axios';

export function SignUp(username, email, password) {
    const data = { username, email, password };
    axios.post("http://192.168.43.24:3000/auth/signup", data, {
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
    axios.post("http://192.168.43.24:3000/auth/login", data, {
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
