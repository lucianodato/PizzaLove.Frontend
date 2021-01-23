// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SignUpPage from '../signup/SignUpPage.vue'
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);


const store = new Vuex.Store({
  state: {
    user: {
      status: {
        signedIn: false
      }
    },
  },
});


test('Mounting SignUpPage component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(SignUpPage, {localVue, store})

  // Assert the rendered text of the component
  expect(wrapper.find('div').exists()).toBe(true)
})
