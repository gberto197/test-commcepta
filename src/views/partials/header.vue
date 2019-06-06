<template>
  <div class="header">
    <div>
      <b-nav class="nav-bar">
        <b-nav-item>EMPRESA</b-nav-item>
        <b-nav-item>SERVIÇO</b-nav-item>
        <b-nav-item>CONTATO</b-nav-item>
      </b-nav>
    </div>
    <!-- <div style="background-color:red;">
      <b-nav v-for="item in menuItems" :key="item.id">
        <b-nav-item>{{item.label}}</b-nav-item>
      </b-nav>
    </div> -->
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less" scoped>
.header {
  .nav-bar {
    background-image: linear-gradient(to right, #4DD2D1, #0A2531);
  }
}
</style>

