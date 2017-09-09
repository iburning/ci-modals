<template lang="pug">
ci-modal(@click="$emit('click-mask')")
  div.ci-dialog.ci-dialog_radius(@click.stop="")
    div.ci-dialog__title(v-if="title")
      h3 {{title}}
    div.ci-dialog__content
      slot {{content}}
    div.ci-dialog__actions
      ci-button(v-if="cancelText"
        color="primary" modifier="border flat radius" :text="cancelText"
        @click="$emit('cancel')")
      ci-button(color="primary" modifier="border flat radius" :text="okText"
        @click="$emit('ok')")
</template>

<script>
/**
 * @fileoverview CIDialog
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

export default {
  name: 'ci-dialog',

  props: {
    title: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    cancelText: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: 'Ok'
    }
  }
}
</script>
