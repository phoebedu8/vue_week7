<template>
  <NavbarUser></NavbarUser>
  <h3 class="text-center">前台頁面建置中...</h3>
  <div class="container-fluid mt-3 position-relative">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavbarUser
  }
}
</script>
