import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { user } from './user.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        alert,
        authentication,
        user
    }
});
