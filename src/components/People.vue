<template>
  <div class="people">
    {{people.id}}
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      required: true
    }
  },

  mounted () {
  }
}
</script>
