<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #8fa8ff">
    <div class="container-fluid container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img src="../assets/primaria.svg" alt="" class="comex-logo">
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-light" aria-current="page" href="#">Promoçoes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Categorias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Contato</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Pesquisar..." aria-label="Search">
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
        </form>
        <button class="btn">
          <i class="bi bi-cart-fill" style=""></i>
        </button>
        <button class="btn">
          <i class="bi bi-person"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BarraNavegacao',
  
})
</script>

<style scoped>
  .comex-logo {
    filter: invert(100%) sepia(0%) saturate(7479%) hue-rotate(82deg) brightness(106%) contrast(100%)
  }
  .bi {
    font-size: 1.5rem;
    color: #fff
  }
</style>