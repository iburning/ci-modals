<template lang="pug">
transition(name="ci-modal")
  div.ci-modal__mask
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
