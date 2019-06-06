<template>
  <div class="people" @click.prevent="selectPeople(people)">
    <b-row>
      <b-col lg="6">
        <img :src="getImageUrl(people)" />
      </b-col>

      <b-col lg="6" class="people-info">
        <p class="people-name">{{people.nome}}</p>
        <p class="people-office">{{people.cargo}}</p>
      </b-col>
    </b-row>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    people: {
      type: Object,
      required: true
    }
  },

  mounted () {

  },

  methods: {
    getImageUrl (people) {
      return require(`../assets/images/${people.foto}`)
    },

    selectPeople (people) {
      this.$store.commit('SELECT_PEOPLE', people)
    }
  }
}
</script>

<style lang="less" scoped>
.people {
  .people-info {
    margin: auto;
    padding: 0;

   p {
     margin-bottom: 0;
   }
  }

  .people-name {
    font-weight: bold;
  }

  .people-office {
    color: #707070;
  }
}
</style>

