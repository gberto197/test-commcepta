<template>
  <div class="header">
    <div class="nav-bar">
      <b-container class="responsive-container">
        <b-navbar toggleable="md" type="dark" class="responsive-navbar">

          <b-navbar-brand href="#">
            <img :src="require(`@/assets/images/logo.png`)" alt="logo">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" type="button" class="custom-toggler"></b-navbar-toggle>

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
    <!-- /nav-bar -->

  </div>
  <!-- /header -->

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
  
  .custom-toggler {
    border-color: rgba(255, 255, 256, 0.5)
  }

  @media (max-width: 768px) {
      .responsive-container {
        margin: 0;
        padding: 0;
      }

      .responsive-navbar {
        padding: 0.5rem;
      }
    }
}
</style>

