<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FDB0BA;">
    <div class="container-fluid">
      <router-link to="/admin/products" class="navbar-brand logo-title"> COSMOS </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex">
        </div>
      </div>
      <router-link to="/login" class="btn btn-outline-danger">後台登入</router-link>
    </div>
  </nav>
</template>
