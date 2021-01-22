import { userService } from '../_services';

export const user = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getUser({ commit }, { id }) {
            commit('getUserRequest');

            userService.getUser(id)
                .then(
                    user => commit('getUserSuccess', user),
                    error => commit('getUserFailure', error)
                );
        },
        updatePizzaLoveForUser({ commit },{ id, pizzaLove }) {
            userService.updatePizzaLoveUser(id, pizzaLove)
            .then(
                updatePizzaLove => commit('updatePizzaLoveForUserSuccess', pizzaLove),
                error => commit('updatePizzaLoveForUserFailure', error)
            );
        }
    },
    mutations: {
        getUserRequest(state) {
            state.all = { loading: true };
        },
        getUserSuccess(state, user) {
            state.all = { user: user };
        },
        getUserFailure(state, error) {
            state.all = { error };
        },
        updatePizzaLoveForUserSuccess(state, pizzaLove) {
            state.all = { user: {...state.all.user, pizzaLove : pizzaLove }};
        },
        updatePizzaLoveForUserFailure(state, error) {
            state.all = { error };
        }
    }
}
