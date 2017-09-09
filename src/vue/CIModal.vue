<template lang="pug">
transition(name="ci-modal" @after-enter="$emit('after-enter')")
  div.ci-modal__mask(@click="$emit('click')")
    div.ci-modal__content
      slot
</template>

<script>
/**
 * @fileoverview CIModal
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

export default {
  name: 'ci-modal'
}
</script>
