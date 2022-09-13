<template>
  <div class="home d-flex flex-column justify-content-center mx-auto">
    <div class="container bg-body">
      <button type="button" class="btn btn-primary my-2">Ordens</button>
      <button type="button" class="btn btn-primary my-2">Serviços</button>
      <button type="button" class="btn btn-primary my-2">Funcionários</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.container {
  max-width: 200px;
}

.container button {
  width: 100%;
}
</style>
