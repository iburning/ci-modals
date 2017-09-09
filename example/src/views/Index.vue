<template lang="pug">
  div.view-index
    h2.app-title Index

    ci-list
      ci-list-body
        ci-list-cell(title="Modal" extend-icon="chevron_right"
          @click="toUrl('modal')")
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
