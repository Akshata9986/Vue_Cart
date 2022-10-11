<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">VueCart</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link"
            >Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">Cart</router-link>
        </li>
        <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>

        <li class="nav-item" v-if="this.$store.state.isAuthenticated">
          <button class="btn btn-primary" @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      alert("logged out");
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.nav-link {
  cursor: pointer;
}
</style>