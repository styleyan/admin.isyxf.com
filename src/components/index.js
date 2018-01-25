import Toast from './toast/toast.vue'
import DialogAddTag from './dialog-add-tag/index.vue'

const components = [
  Toast,
  DialogAddTag,
]

export default {
  install(Vue, opts = {}) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  },
}
