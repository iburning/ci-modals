<template lang="pug">
  div.view-toast
    h2.app-title Modals

    ci-list
      ci-list-cell(title="Show Success" extend-icon="chevron_right"
        @click="showToast('success', 'Success')")

      ci-list-cell(title="Show Warning" extend-icon="chevron_right"
        @click="showToast('warning', 'Warning')")

      ci-list-cell(title="Show Error" extend-icon="chevron_right"
        @click="showToast('error', 'Error')")

      ci-list-cell(title="Show Waiting" extend-icon="chevron_right"
        @click="showToast('waiting', 'Waiting', -1)")

    ci-toast(v-if="isShowToast"
      :type="toastType"
      :content="toastContent"
      :duration="toastDuration"
      @close="isShowToast = false")
</template>

<script>
export default {
  name: 'view-toast',

  data() {
    return {
      isShowToast: false,
      toastType: '',
      toastContent: ''
    }
  },

  methods: {
    showToast(type, content, duration) {
      this.toastType = type
      this.toastContent = content
      this.toastDuration = duration || 2000
      this.isShowToast = true
    }
  }
}
</script>
