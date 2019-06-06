<template>
  <div class="people" @click.prevent="selectPeople(people)">
    <b-row>
      <b-col col lg="8" md="12" xl="6">
        <img class="people-photo" :src="getImageUrl(people)" />
        <div class="badge">{{people.id}}</div>
      </b-col>

      <b-col class="people-info">
        <p class="people-name">{{people.nome}}</p>
        <p class="people-office" :class="{'is-selected-people' : isSelectedPeople(people)}">{{people.cargo}}</p>
      </b-col>
    </b-row>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

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

  .badge {
    position: absolute;
    font-size: 1rem;
    right: 25px;
    height: 30px;
    width: 30px;
    padding: 7px;
    background-color: #4DD1D3;
    color: #002b50;
    border-radius: 50%;
    font-weight: bold;
  }

  .is-selected-people {
    color: white;
  }

  @media (max-width: 813px) {
    .badge {
     right: 35px;
    }
  }
}
</style>

