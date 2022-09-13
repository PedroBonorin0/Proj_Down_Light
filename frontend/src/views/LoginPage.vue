<template>
  <div class="login">
    <div
      class="container bg-body shadow d-flex flex-column align-items-center rounded-4"
    >
      <img
        src="@/assets/logo.png"
        alt="Logo Down Light"
        width="200"
        class="mb-2"
      />
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input
            class="form-control bg-light"
            type="email"
            placeholder="E-mail"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control bg-light"
            type="password"
            placeholder="Senha"
            v-model="password"
          />
        </div>
        <div class="d-flex justify-content-center mb-3">
          <button type="submit" class="btn btn-primary">Entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    handleLogin() {
      console.log({ email: this.email, password: this.password });
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #5d8ba4;
}

.container {
  background: #fff;
  width: 300px;
}

form {
  width: 90%;
}
</style>
