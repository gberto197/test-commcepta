<template>
  <div class="people" @click.prevent="selectPeople(people)">
    <b-row>
      <b-col lg="6">
        <img class="people-photo" :src="getImageUrl(people)" />
      </b-col>

      <b-col lg="6" class="people-info">
        <p class="people-name">{{people.nome}}</p>
        <p class="people-office" :class="{'is-selected-people' : isSelectedPeople(people)}">{{people.cargo}}</p>
      </b-col>
    </b-row>
    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    people: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState({
      selectedPeople: state => state.people
    })
  },

  mounted () {

  },

  methods: {
    getImageUrl (people) {
      return require(`../assets/images/${people.foto}`)
    },

    selectPeople (people) {
      this.$store.commit('SELECT_PEOPLE', people)
    },
    
    isSelectedPeople (people) {
      return people === this.selectedPeople
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

  .people-photo {
    border-radius: 100%;
  }

  .is-selected-people {
    color: white;
  }
}
</style>

