<script lang="ts">
import { defineComponent } from 'vue';
import BarraNavegacao from './components/BarraNavegacao.vue';
import Rodape from './components/Rodape.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraNavegacao,
    Rodape
  }
})
</script>

<template>
<BarraNavegacao />
<router-view></router-view>
<Rodape />
</template>

<style scoped>
</style>
