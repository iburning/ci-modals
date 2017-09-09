<template lang="pug">
  div.view-index
    h2.app-title Index

    ci-list
      ci-list-body
        ci-list-cell(title="Modals" extend-icon="chevron_right"
          @click="toUrl('modals')")
        ci-list-cell(title="Toast" extend-icon="chevron_right"
          @click="toUrl('toast')")
</template>

<script>
export default {
  name: 'view-index',

  methods: {
    toUrl(url) {
      // console.log('toUrl', url)
      this.$router.push(url)
    }
  }
}
</script>
