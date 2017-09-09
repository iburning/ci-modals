/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

import CIDialog from './CIDialog.vue'
import CIModal from './CIModal.vue'
import CIToast from './CIToast.vue'

const components = [
  CIDialog,
  CIModal,
  CIToast
]

const CIModals = {
  name: 'CIModals',
  version: '1.0.0',
  plugin: plugin,

  CIDialog,
  CIModal,
  CIToast
}

if (window.Vue) {
  Vue.use(plugin)
}

window.CIModals = CIModals

export default CIModals

function plugin(Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
