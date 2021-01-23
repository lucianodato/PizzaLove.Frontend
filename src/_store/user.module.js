import { userService } from '../_services';
import { router } from '../_helpers';

export const user = {
    namespaced: true,
    state: {
        status: {},
        user: null,
        topTenLovers: []
    },
    actions: {
        getUser({ commit }, { id }) {
            commit('getUserRequest');

            userService.getUser(id)
                .then(
                    user => commit('getUserSuccess', user),
                    error => dispatch('alert/error', error, { root: true })
                );
        },
        getTopTenLovers({ dispatch, commit }) {
            userService.getTopTenLovers()
                .then(
                    topTenLovers => commit('getTopTenLoverSuccess', topTenLovers),
                    error => dispatch('alert/error', error, { root: true })
                );
        },
        updatePizzaLoveForUser({ dispatch, commit },{ id, pizzaLove }) {
            userService.updatePizzaLoveUser(id, pizzaLove)
            .then(
                updatePizzaLove => commit('updatePizzaLoveForUserSuccess', pizzaLove),
                error => dispatch('alert/error', error, { root: true })
            );
        },
        signUp({ dispatch, commit },{ username, password, firstName, lastName }) {
            commit('signUpRequest');

            userService.signUp(username, password, firstName, lastName)
            .then(
                signUp => {
                    commit('signUpSuccess');
                    router.push('/').catch(error => { });
                },
                error => {
                    commit('signUpFailure');
                    dispatch('alert/error', error, { root: true });
                }
            );
        }
    },
    mutations: {
        getUserRequest(state) {
            state.status = { loading: true };
            state.user = state.user;
            state.topTenLovers = state.topTenLovers;
        },
        getUserSuccess(state, user) {
            state.status = { loading: false};
            state.user = user;
            state.topTenLovers = state.topTenLovers;
        },
        getTopTenLoverSuccess(state, topTenLovers) {
            state.status = { loading: true};
            state.user = state.user;
            state.topTenLovers = topTenLovers;
        },
        updatePizzaLoveForUserSuccess(state, pizzaLove) {
            state.status = { loading: false};
            state.user = { ...state.user, pizzaLove : pizzaLove };
            state.topTenLovers = state.topTenLovers;
        },
        signUpSuccess(state) {
            state.status = { signedIn: true };
            state.user = state.user;
            state.topTenLovers = state.topTenLovers;
        },
        signUpRequest(state) {
            state.status = { signedIn: true };
            state.user = state.user;
            state.topTenLovers = state.topTenLovers;
        },
        signUpFailure(state) {
            state.status = { signedIn: false };
            state.user = state.user;
            state.topTenLovers = state.topTenLovers;
        }
    }
}
