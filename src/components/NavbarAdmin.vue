<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FDB0BA;">
    <div class="container-fluid">
      <router-link to="/admin/products" class="navbar-brand logo-title">COSNOS ｜後台管理系統</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex">
          <router-link to="/admin/products" class="nav-link">產品管理</router-link>
          <router-link to="/admin/orders" class="nav-link ">訂單管理</router-link>
          <router-link to="/admin/coupons" class="nav-link">優惠券管理</router-link>
        </div>
      </div>
      <button @click.prevent="logout" class="btn btn-outline-danger me-2 " type="button">登出</button>
    </div>
  </nav>
</template>
<style>
  .navbar-light .navbar-brand {
    color: #a82d2d;
  }

</style>

<script>
export default {
  inject: ['emitter'],
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api)
        .then((response) => {
          if (response.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}

</script>
