// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HomePage from '../home/HomePage.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const mockActions = {
  "user/getUser": jest.fn()
}

const store = new Vuex.Store({
    state: {
        user: {
            user: {}
        },
        authentication: {
            user: {},
            status: {
                loggingIn: false
            }
        },
    },
    actions: mockActions
});

const router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login'
    }
  ]
});


test('Mounting HomePage Component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(HomePage, {localVue, router, store})

  // Assert the rendered text of the component
  expect(wrapper.find('div').exists()).toBe(true)
})
