// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginPage from '../login/LoginPage.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const mockActions = {
  "authentication/logout": jest.fn()
}

const store = new Vuex.Store({
  state: {},
  actions: mockActions
});

const router = new VueRouter({
  routes: [
    {
      name: 'signup',
      path: '/signup'
    }
  ]
});


test('Mounting LoginPage Component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(LoginPage, {localVue, router, store})

  // Assert the rendered text of the component
  expect(wrapper.find('div').exists()).toBe(true)
})
