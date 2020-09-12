import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

//make sure all the state is in shim and typed correctly and gets warn when using wrong type!
declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    animals: Array<object>
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}