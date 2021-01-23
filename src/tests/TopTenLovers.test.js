// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TopTenLovers from '../login/TopTenLovers.vue'
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const mockActions = {
  "user/getTopTenLovers": jest.fn()
}

const store = new Vuex.Store({
  state: {
    user: {
      topTenLovers: []
    },
  },
  actions: mockActions
});


test('Mounting TopTenLovers Component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(TopTenLovers, {localVue, store})

  // Assert the rendered text of the component
  expect(wrapper.find('div').exists()).toBe(true)
})
