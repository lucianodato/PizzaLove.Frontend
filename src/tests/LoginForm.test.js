// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginForm from '../login/LoginForm.vue'
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
      authentication: {
          status: {
              loggingIn: false
          }
      }
  }
});


test('Mounting LoginForm Component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(LoginForm, {localVue, store})

  // Assert the rendered text of the component
  expect(wrapper.find('div').exists()).toBe(true)
})
