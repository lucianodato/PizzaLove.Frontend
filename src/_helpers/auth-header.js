import { store } from '../_store';

export function authHeader() {
    // return authorization header with jwt token stored in persistent state
    let user = store.state.authentication.user;

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}