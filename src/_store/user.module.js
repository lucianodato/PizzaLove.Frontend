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
        increasePizzaLove({ commit },{ id }) {
            userService.increasePizzaLoveForUser(id);

            commit('getUserRequest');
            userService.getUser(id)
            .then(
                user => commit('getUserSuccess', user),
                error => commit('getUserFailure', error)
            );
        },
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
        }
    }
}
