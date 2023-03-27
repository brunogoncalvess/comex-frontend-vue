<template>
  <section class="container produto mt-4 mb-4">
    <form action="" class="produto__form" @submit.prevent="handleSalvaProduto">
      <div class="produto__input-container">
        <label for="nome" class="produto__label form-label" >Nome</label>
        <input type="text" id="nome" class="produto__input form-control" v-model="produto.nome" />
      </div>

      <div class="produto__input-container">
        <label for="preco" class="produto__label form-label">Preco</label>
        <input type="number" id="preco" class="produto__input form-control" v-model="produto.preco" />
      </div>

      <div class="produto__input-container">
        <label for="estoque" class="produto__label form-label">Estoque</label>
        <input type="number" id="estoque" class="produto__input form-control" v-model="produto.estoque" />
      </div>

      <div class="d-flex text-area-select-container">
        <div class="produto__input-container">
          <label for="descricao" class="produto__label form-label"
            >Descricao</label
          >
          <textarea
            id="descricao"
            cols="50"
            rows="5"
            class="produto__textarea form-control"
            v-model="produto.descricao"
          ></textarea>
        </div>

        <div class="produto__input-container">
          <label for="categorias" class="produto__label form-label"
            >Categoria</label
          >
          <select id="categoria" class="produto__select form-control">
            <option value=""></option>
            <option
              v-for="categoria in categorias"
              :key="categoria.id"
              :value="categoria.categoria"
            >
              {{ categoria.categoria }}
            </option>
          </select>
        </div>
      </div>

      <button type="submit" class="produto__btn btn btn-lg btn-primary mt-4">
        Salvar
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { criaProduto } from "@/models/produto";
import type { Categoria } from "@/models/categoria";
import { fetchCategorias } from "@/services/categorias-service.js";
import { salvaProduto } from "@/services/produtos-service";

const produto = reactive({
  nome: "",
  descricao: "",
  preco: 0,
  estoque: 0,
  categoria: "",
});

const categorias = ref([] as Categoria[]);

onMounted(() => {
  fetchCategorias().then((data) =>
    data.forEach((cat) => categorias.value.push(cat))
  );
});

const handleSalvaProduto = () => {
  salvaProduto(criaProduto(produto))
    .then(resp => {
      console.log(resp.status)

      produto.nome = produto.descricao = produto.categoria = ''
      produto.preco = produto.estoque = 0

      const nomeInput = document.querySelector('#nome') as HTMLElement
      nomeInput.focus()
    })
};
</script>

<style scoped>
.text-area-select-container {
  gap: 1rem;
}
</style>