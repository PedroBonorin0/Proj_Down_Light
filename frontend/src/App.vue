<template>
  <div class="main-div">
    <NavBar v-if="$route.path !== '/login'" />
    <router-view />
    <PageFooter v-if="$route.path !== '/login'" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Roboto&family=Ubuntu:wght@400;700&display=swap");

#app {
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
}

nav {
  padding: 30px;
}
</style>
