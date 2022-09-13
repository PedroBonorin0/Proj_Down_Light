<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light px-large-5 px-md-3 px-sm 1"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#"
        ><img src="@/assets/logo.png" alt="Logo" width="75"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a class="nav-link text-primary" href="/">Home</a>
          <a class="nav-link text-primary" href="/carros">Carros</a>
          <a class="nav-link text-primary" href="/servicos">Serviços</a>
          <a class="nav-link text-primary" href="/funcionarios">Funcionários</a>
          <a class="nav-link text-primary" href="/ordens">Ordens</a>
        </div>
      </div>
    </div>
  </nav>
</template>
