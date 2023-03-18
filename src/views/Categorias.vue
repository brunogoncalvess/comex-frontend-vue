<script lang="ts">
import { defineComponent } from 'vue'
import type { Categoria } from '@/models/categoria.js'
import * as categoriaService from '../services/categorias-service.js'

export default defineComponent({
  name: 'Categorias',

  data() {
    return {
      categorias: [] as Categoria[],
      input: ''
    }
  },

  mounted() {
    this.fetchCategorias()
  },

  methods: {
    addCategory() {
      if (!this.input) {
        alert('Insira uma categoria válida.')
        return
      }

      categoriaService.addCategoria({ categoria: this.input })
        .then(resp => {
          if (resp.status === 201) {
            this.categorias = []
            this.input = ''
            this.fetchCategorias()
          }
        })
    },

    removeCategory(id: any) {
      categoriaService.deleteCategory(id)
        .then(_ => {
          this.categorias = []
          this.fetchCategorias()
        })
        .catch(e => {
          console.log('fetchError::', e)
        })
    },

    fetchCategorias() {
      categoriaService.fetchCategorias()
        .then((categorias) => categorias.forEach(c => this.categorias.push(c)))
        .catch(e => {
          console.log("fetchError::", e)
          alert("Não foi possível buscar as categorias.")
        })
    }
  }
})
</script>

<template>
  <section class="container form-group ">

    <h2 style="text-align: center" class="mt-4">Nova Categoria</h2>

    <form class="d-flex my-4" @submit.prevent="addCategory">
      <input v-model="input" type="text" class="form-control col-xs-2">
      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="h4">#</th>
          <th scope="col" class="h4">Nome</th>
          <th scope="col" class="h4">Açoes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.id }}</td>
          <td>{{ categoria.categoria }}</td>
          <td><button class="btn btn-danger" @click="removeCategory(categoria.id)">Deletar</button></td>
        </tr>
      </tbody>
    </table>  


  </section>
</template>
