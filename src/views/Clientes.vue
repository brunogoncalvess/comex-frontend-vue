<template>
  <section class="container cliente mt-4 mb-4">
    <form action="" class="cliente__form" @submit.prevent="handleAdicionaCliente">
      <div class="cliente__input-container">
        <label for="nome" class="cliente__label form-label">Nome:</label>
        <input
          type="text"
          id="nome"
          class="cliente__input validate form-control"
          required
          minlength="2"
          v-model="dados.nome"
        />
        <span style="display: none" class="cliente__error">Erro</span>
      </div>

      <div class="cliente__input-container">
        <label for="sobrenome" class="cliente__label form-label"
          >Sobrenome:</label
        >
        <input
          type="text"
          id="sobrenome"
          class="cliente__input validate form-control"
          required
          minlength="2"
          v-model="dados.sobrenome"
        />
        <span style="display: none" class="cliente__error">Erro</span>
      </div>

      <div class="cliente__input-container">
        <label for="cpf" class="cliente__label form-label">CPF:</label>
        <input
          type="text"
          id="cpf"
          class="cliente__input validate form-control"
          required
          v-model="dados.cpf"
        />
        <span style="display: none" class="cliente__error">Erro</span>
      </div>

      <div class="cliente__input-container">
        <label for="telefone" class="cliente__label form-label"
          >DD + Telefone:</label
        >
        <input
          type="numer"
          id="telefone"
          class="cliente__input validate form-control"
          placeholder="(xx) xxxx-xxxx"
          v-model="dados.telefone"
        />

        <span style="display: none" class="cliente__error">Erro</span>
      </div>

      <form class="cliente__input-container" @submit.prevent="buscaCEP">
        <label for="cep" class="cliente__label form-label cep"
          >Buscar endereço por CEP:</label
        >
        <div class="cliente__input-cep d-flex">
          <input
            type="text"
            id="cep"
            class="cliente__input form-control rounded-end-0"
            v-model="cep"
          />
          <button
            type="submit"
            class="cliente__input-cep-btn btn btn-primary rounded-start-0"
          >
            Buscar
          </button>
        </div>
      </form>

      <fieldset class="cliente__fieldset">
        <legend class="cliente__legend">Endereço</legend>
        <div class="cliente__input-container">
          <label for="logradouro" class="cliente__label form-label"
            >Logradouro:</label
          >
          <input
            type="text"
            id="logradouro"
            class="cliente__input validate form-control"
            required
            v-model="endereco.logradouro"
          />
          <span style="display: none" class="cliente__error">Erro</span>
        </div>

        <div class="cliente__input-container">
          <label for="numero" class="cliente__label form-label">Número:</label>
          <input
            type="text"
            id="numero"
            class="cliente__input validate form-control"
            required
            v-model="endereco.numero"
          />
          <span style="display: none" class="cliente__error">Erro</span>
        </div>

        <div class="cliente__input-container">
          <label for="bairro" class="cliente__label form-label">Bairro:</label>
          <input
            type="text"
            id="bairro"
            class="cliente__input validate form-control"
            required
            v-model="endereco.bairro"
          />
          <span style="display: none" class="cliente__error">Erro</span>
        </div>

        <div class="cliente__input-container">
          <label for="cidade" class="cliente__label form-label form-label"
            >Cidade:</label
          >
          <input
            type="text"
            id="cidade"
            class="cliente__input validate form-control"
            required
            v-model="endereco.cidade"
          />
          <span style="display: none" class="cliente__error">Erro</span>
        </div>
      </fieldset>

      <button class="cliente__btn btn btn-primary btn-lg mt-4">Salvar</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { Endereco } from "../models/clientes.js";
import { criaCliente } from "../models/clientes.js";
import { salvaCliente } from '../services/clientes-service.js'
import { buscaViaCEP } from '../services/clientes-service.js'

const endereco = reactive({
  logradouro: "",
  bairro: "",
  cidade: "",
  numero: "",
});

const dados = reactive({
  nome: "",
  sobrenome: "",
  cpf: "",
  telefone: "",
  endereco: endereco,
});

const cep = ref("")

const buscaCEP = () => {
buscaViaCEP(cep.value)
  .then(resp => resp.json())
  .then(data => {
    endereco.logradouro = data.logradouro
    endereco.bairro = data.bairro
    endereco.cidade = data.localidade

    cep.value = ""

    const numeroInput = document.querySelector('#numero') as HTMLElement
    numeroInput.focus()
  })
}

const handleAdicionaCliente = () => {
  salvaCliente(criaCliente(dados))
    .then(resp => {
      console.log(resp.status)

      dados.nome = dados.sobrenome = dados.telefone = dados.cpf = endereco.logradouro = endereco.bairro = endereco.cidade = endereco.numero = ""

      const nomeInput = document.querySelector('#nome') as HTMLElement
      nomeInput.focus()
    })
    .catch(e => {
      alert(`Algo deu errado. Não foi possível adicionar o cliente ${dados.nome} - ${dados.cpf}`)
      console.log('fetchErr::', e)
    })
}

</script>

