import Vue from 'vue'
import { HasError, AlertError, AlertSuccess } from 'vform/components/bootstrap5'

// Components that are registered globally.
[
    HasError,
    AlertError,
    AlertSuccess
].forEach(Component => {
    Vue.component(Component.name, Component)
})
