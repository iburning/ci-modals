<template lang="pug">
ci-modal(@click="$emit('click-mask')" @after-enter="onAfterEnter")
  div.ci-toast(@click.stop="")
    slot
      i.ci-toast__icon.material-icons(v-if="type") {{iconName}}
      div.ci-toast__content(v-if="content") {{content}}
</template>

<script>
/**
 * @fileoverview CIToast
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

let timer = null

export default {
  name: 'ci-toast',

  props: {
    title: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    duration: {
      type: [ Number, String ],
      default: 2000
    }
  },

  computed: {
    iconName() {
      const names = {
        success: 'done',
        error: 'error',
        warning: 'warning',
        waiting: 'query_builder'
      }

      return names[this.type]
    }
  },

  watch: {
    duration(val, oldVal) {
      // console.log('CIToast.duration', val, oldVal)
      this.autoClose()
    }
  },

  methods: {
    onAfterEnter() {
      // console.log('CIToast.onAfterEnter', this.duration)
      this.autoClose()
    },

    autoClose() {
      if (this.duration > 0) {
        timer = window.setTimeout(() => {
          this.$emit('close')

          if (timer) {
            window.clearTimeout(timer)
          }
        }, this.duration)
      }
    }
  }
}
</script>
