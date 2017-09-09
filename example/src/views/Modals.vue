<template lang="pug">
  div.view-modals
    h2.app-title Modals

    ci-list
      ci-list-cell(title="Show Alert" extend-icon="chevron_right"
        @click="isShowAlert = true")

      ci-list-cell(title="Show Confirm" extend-icon="chevron_right"
        @click="isShowConfirm = true")

      ci-list-cell(title="Show Dialog" extend-icon="chevron_right"
        @click="isShowDialog = true")

      ci-list-cell(title="Show Modal" extend-icon="chevron_right"
        @click="isShowModal = true")

    ci-dialog(v-if="isShowAlert"
      title="Alert Title"
      content="Hello CafeInit"
      @click-mask="isShowAlert = false"
      @ok="isShowAlert = false")

    ci-dialog(v-if="isShowConfirm"
      title="Confirm Title"
      content="Hello CafeInit?"
      cancelText="Cancel"
      @cancel="isShowConfirm = false"
      @ok="isShowConfirm = false")

    ci-dialog(v-if="isShowDialog"
      @ok="isShowDialog = false")
      div Custom HTML Content

    ci-modal(v-if="isShowModal" @click="isShowModal = false") CIModal
</template>

<script>
export default {
  name: 'view-modals',

  data() {
    return {
      isShowAlert: false,
      isShowConfirm: false,
      isShowDialog: false,
      isShowModal: false
    }
  },

  methods: {
    // ...
  }
}
</script>
