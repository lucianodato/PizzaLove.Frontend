// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Alert from '../app/Alert.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const mockActions = {
  "alert/clear": jest.fn()
}

const store = new Vuex.Store({
  state: {
    alert: {}
  },
  actions: mockActions
});


test('Mounting Alert Component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(Alert, {localVue, store})

  // Assert the rendered text of the component
  expect(wrapper.find('div').exists()).toBe(true)
})
