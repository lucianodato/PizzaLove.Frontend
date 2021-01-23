// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PizzaLove from '../home/PizzaLove.vue'
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const mockActions = {
  "user/updatePizzaLoveForUser": jest.fn()
}

const store = new Vuex.Store({
  state: {
    user: {
      user: {}
    },
  },
  actions: mockActions
});


test('Mounting PizzaLove Component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(PizzaLove, {localVue, store})

  // Assert the rendered text of the component
  expect(wrapper.find('div').exists()).toBe(true)
})
