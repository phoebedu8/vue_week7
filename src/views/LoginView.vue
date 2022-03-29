<template>
  <div></div>
  <div class="container-fluid" style="background-color: #FDB0BA;">
    <form class="row justify-content-center align-items-center" style="height: 100vh;" @submit.prevent="signIn">
      <div class="col-10 col-md-4  bg-white p-5 shadow bg-body rounded-3">
        <h1 class="h3 m-3 mb-4 font-weight-normal text-center">後台管理系統</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only mb-2">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.username"
            required autofocus />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only mb-2">Password</label>
          <input type="password" id="inputPassword" class="form-control" v-model="user.password" placeholder="Password"
            required />
        </div>
        <div class="text-end mt-4 ">
          <button class="btn btn-md btn-danger btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {

  data () {
    return {
      isLoading: false,
      user: {}
    }
  },

  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.isLoading = true
      this.$http.post(api, this.user).then((response) => {
        const { token, expired } = response.data
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`
        this.isLoading = false
        this.$router.push('/admin/products')
      })
    }
  }
}
</script>
