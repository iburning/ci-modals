<template lang="pug">
  div.view-modal
    h2.app-title Modal

    ci-list
      ci-list-cell(title="Show Modal" extend-icon="chevron_right"
        @click="isShowModal = true")

    ci-modal(v-if="isShowModal") CIModal
</template>

<script>
export default {
  name: 'view-modal',

  data() {
    return {
      isShowModal: false
    }
  },

  methods: {
    // ...
  }
}
</script>
