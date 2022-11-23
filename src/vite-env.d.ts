import { Store } from 'vuex'
import { Route } from 'vue-router'
import {Iquery, Itour} from "./ts/intefaces";

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface State {
    tours: {
      queryParams: Iquery
      tours: Itour
    },
    options: {
      navLeft: Itour[],
      navRight: Itour[]
    }
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare module 'vue' {
  interface ComponentCustomOptions {
    beforeRouteEnter?(to: Route, from: Route, next: () => void): void
  }
}
