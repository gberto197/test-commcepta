<template>
  <div class="header">
    <div class="nav-bar">
      <b-container>
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-brand href="#">
            <img :src="require(`@/assets/images/logo.png`)" alt>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav class="links-navbar">
                <b-nav-item href="#" class="item-navbar">EMPRESA</b-nav-item>
                <b-nav-item href="#" class="item-navbar">SERVIÇO</b-nav-item>
                <b-nav-item href="#" class="item-navbar">CONTATO</b-nav-item>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
    <!-- <div style="background-color:red;">
      <b-nav v-for="item in menuItems" :key="item.id">
        <b-nav-item>{{item.label}}</b-nav-item>
      </b-nav>
    </div>-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  .nav-bar {
    background-image: linear-gradient(to right, #4dd2d1, #0a2531);
    margin-bottom: 2rem;
  }

  .links-navbar {
    font-weight: bold;
  }

  .item-navbar {
    a {
      color: white;
    }
  }
}
</style>

