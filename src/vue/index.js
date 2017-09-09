/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

import CIModal from './CIModal.vue'

const components = [
  CIModal
]

const CIModals = {
  name: 'CIModals',
  version: '1.0.0',
  plugin: plugin,

  CIModal
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
