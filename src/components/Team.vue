<template>
  <div class="team">
    <b-container>
      <div v-if="people.id">
        <b-container class="container-selected-people" fluid>
          <b-jumbotron class="jumbotron selected-people">
            <b-row>
              <b-col lg="2" class="image-selected-people">
                <img :src="getImageUrl(people)">
              </b-col>
              <!-- /col-lg-2 -->
              <b-col lg="1" class="informations-title">
                <p>NOME:</p>
                <p>CARGO:</p>
                <p>IDADE:</p>
              </b-col>
              <!-- /col-lg-2 -->
              <b-col class="information-data">
                <p>{{people.nome}}</p>
                <p>{{people.cargo}}</p>
                <p>{{people.idade}}</p>
              </b-col>
              <!-- /col-lg-2 -->
            </b-row>
          </b-jumbotron>
        </b-container>
      </div>

      <b-row>
        <b-col sm="6" md="4" v-for="people in team" :key="people.id">
          <b-jumbotron class="jumbotron people" :class="{'is-selected-people' : isSelectedPeople(people)}">
            <People :people="people" @selectPeople="selectPeople(people)"/>
          </b-jumbotron>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import People from "@/components/People.vue";
export default {
  components: {
    People
  },

  computed: {
    ...mapState({
      team: state => state.team,
      people: state => state.people
    })
  },

  mounted() {
    this.$nextTick(() => {
      this["getTeam"]().then(res => this.$store.commit("LOAD_TEAM", res.data));
    });
  },

  methods: {
    ...mapActions(["getTeam"]),

    getImageUrl(people) {
      return require(`../assets/images/${people.foto}`);
    },

    isSelectedPeople (people) {
      return people === this.people
    }
  }
};
</script>

<style lang="less" scoped>
.team {
  .jumbotron {
    background-color: white;
    border-radius: 0px;
    padding: 1rem;

    &.people {
      text-align: center;

      &:hover {
        cursor: pointer;
      }

      &.is-selected-people {
        background-color: #002b50;
        color: white !important;
      }
    }

    &.selected-people {
      text-align: left;
    }
  }

  .container-selected-people {
    padding-left: 0;
    padding-right: 0;
  }

  .informations-title {
      color: #707070;
      text-align: right;
      padding: 0;
    }

    .information-data, .informations-title {
      margin: auto;

      p:last-child {
        margin-bottom: 0;
      }
    }

    .information-data {
      font-weight: bold;
    }

    @media (min-width: 1080px) {
      .people {
        text-align: left;
      }

      .selected-people {
        text-align: center;
      }

    }

    @media (max-width: 813px) {
      .informations-title {
        float: left;
        width: 50%;
      }

      .image-selected-people {
        text-align: center;
        margin-bottom: 1rem;
      }
    }

}
</style>

