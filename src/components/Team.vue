<template>
  <div class="team">
    Team component!
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {

  computed: {
    ...mapState({
      team: state => state.team
    })
  },

  mounted () {
    this.$nextTick(() => {
      this['getTeam']()
        .then((res) => this.$store.commit('LOAD_TEAM', res.data))
    })
  },

  methods: {
    ...mapActions(['getTeam'])
  }
}
</script>
