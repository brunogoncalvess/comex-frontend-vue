<template>
  <div class="container mt-4">
    <section class="carousel-container">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-text-container">
            <h1>Confira as Promoções</h1>
            <h2>e monte seu staup</h2>
            <a href="#produtos-mais-vendidos">
              <img src="../assets/images/saiba mais.svg" alt="" />
            </a>
          </div>
          <div class="carousel-item active">
            <img
              src="../assets/images/baner-img.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/baner-img.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/baner-img.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section id="produtos-mais-vendidos">
      <div class="products-title-container">
        <img src="../assets/images/estrela.svg" alt="" />
        <h3 class="products-title">Produtos mais vendidos</h3>
      </div>

      <div class="products-container container mt-4 mb-4">
        <div
          v-for="product in state.producst"
          :key="product.id"
          class="card justify-content-between"
          style="width: 18rem"
        >
          <img
            :src="product.imagem.url"
            class="card-img-top"
            :alt="product.imagem.alt"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.nome }}</h5>
            <p class="card-text">{{ product.descricao }}</p>
            <p class="card-text">
              {{
                (+product.preco).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import * as productService from "@/services/produtos-service.js";

const state = reactive({
  producst: [] as any[],
});

onMounted(() => {
  productService.buscaProdutos().then((products) => {
    products.forEach((p) => state.producst.push(p));
  });
});

</script>

<style scoped>
.carousel-text-container {
  position: absolute;
  width: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
}

.carousel-text-container h1 {
  color: var(--color-blue);
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-family: "Inter", sans-serif;
  font-weight: 800;
}

.carousel-text-container h2 {
  color: var(--color-text);
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 3rem;
}

.products-title-container {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
.products-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-blue);
  text-align: center;
}

.products-container {
  display: flex;
  gap: 2rem;
}
</style>