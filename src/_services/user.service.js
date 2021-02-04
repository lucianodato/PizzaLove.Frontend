import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    getAll,
    getUser,
    getTopTenLovers,
    updatePizzaLoveUser,
    signUp
};

async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const response = await fetch(`${config.apiUrl}/users/authenticate`, requestOptions);
    const user = await handleResponse(response);
    return user;
}

async function signUp(username, password, firstName, lastName) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password, firstName, lastName})
    };

    const response = await fetch(`${config.apiUrl}/users`, requestOptions);
    return handleResponse(response);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${config.apiUrl}/users`, requestOptions);
    return handleResponse(response);
}

async function getTopTenLovers() {
    const requestOptions = {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    };

    const response = await fetch(`${config.apiUrl}/users/GetTopTenUser`, requestOptions);
    return handleResponse(response);
}

async function getUser(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${config.apiUrl}/users/${id}`, requestOptions);
    return handleResponse(response);
}

async function updatePizzaLoveUser(id, pizzaLove) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 
            'Authorization': authHeader().Authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{"value": pizzaLove, "path": "/pizzaLove", "op": "replace"}])
    };

    const response = await fetch(`${config.apiUrl}/users/${id}`, requestOptions);
    return handleResponse(response);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}