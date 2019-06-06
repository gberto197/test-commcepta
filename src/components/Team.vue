<template>
  <div class="team">
    Team component!
    <div v-for="people in team" :key="people.id">
      <People :people="people">

      </People>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import People from '@/components/People.vue'
export default {
  components: {
    People
  },

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
