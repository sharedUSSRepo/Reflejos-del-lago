import { shallowMount } from '@vue/test-utils'
import LandingPage from '@/components/LandingPage.vue'

describe('LandingPage.vue', () => {
  it('just mounts without blowing up', () => {
    const wrapper = shallowMount(LandingPage, {
      // stub out child components so you don’t need to stub them manually later
      global: {
        stubs: ['ThreeSixtyView','GameModes','Card']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
