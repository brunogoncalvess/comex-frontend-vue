<template>
  <footer>
    <div class="container">
      <img src="../assets/images/primaria.svg" alt="Logo Comex" class="comex-logo" onclick="location.href = location.origin + '/index.html'">
      <div class="footer-social-media">
        <img src="../assets/images/Twitter.svg" alt="Logo Twitter">
        <img src="../assets/images/_Instagram.svg" alt="Logo Instagram">
        <img src="../assets/images/_Linkedin.svg" alt="Logo Linkedin">
      </div>
      <div class="footer-list-container">
        <ul>
          <li>Promoções</li>
          <li>Categorias</li>
          <li>Buscar</li>
        </ul>

        <ul>
          <li>Contato</li>
          <li>Carrinho</li>
          <li>Entrar</li>
        </ul>
      </div>
    </div>
  </footer>

</template>

<script lang="ts" setup>
</script>



<style scoped>
.comex-logo {
  filter: invert(100%) sepia(0%) saturate(7479%) hue-rotate(82deg) brightness(106%) contrast(100%)
}

footer {
  background-color: var(--color-blue)
}

footer .container{
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

footer .logo:nth-child(1) {
  height: 3rem;
}

.footer-social-media {
  display: flex;
  gap: 2rem;
}

.footer-list-container {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
}

footer ul {
  padding: 0;
}

footer ul:nth-child(1) {
  text-align: right;
}

footer ul:nth-child(2) {
  text-align: left;
}

@media screen and (min-width: 768px) {
  footer .container > div:nth-child(3) {
    display: none;
  }
  footer .container {
    flex-direction: row;
    justify-content: space-between;
  }
}

</style>