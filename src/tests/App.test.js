// Import the `mount()` method from Vue Test Utils
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '../app/App.vue'

const localVue = createLocalVue();

test('Mounting Alert Component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(App, {localVue})

  // Assert the rendered text of the component
  expect(wrapper.findComponent({name: 'Alert'}).exists()).toBe(true)
})
