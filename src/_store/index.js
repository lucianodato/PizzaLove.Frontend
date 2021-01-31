import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { user } from './user.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        }
      })
    ],
    modules: {
        alert,
        authentication,
        user
    }
});
