<template>
  <div id="app">
    <NavBarComponent />
    <SideBarComponent />
    <b-button v-b-modal.meu-modal>Abrir Modal</b-button>
    <b-modal size="lg" id="meu-modal" title="BootstrapVue"> Olá </b-modal>
    <div class="mb-4 d-flex justify-content-center">
      <b-avatar  badge badge-variant="info"></b-avatar>
    </div>

    <b-alert show dismissible fade>Dismissible Alert!</b-alert>
    <!-- <b-modal centered id="meu-modal" title="BootstrapVue"> Olá </b-modal> -->
    <!-- <b-modal id="meu-modal" title="BootstrapVue" 
        header-bg-variant="dark"
        header-text-variant="light"
        body-bg-variant="light"
        body-text-variant="dark"
        footer-bg-variant="warning"
        footer-text-variant="dark"
        >
        <b-container fluid>
          Exemplo de modal com cores
        </b-container>

        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="float-left">Modal footer Content</div>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="show=false"
              >close</b-button>
          </div>
        </template>
    </b-modal> -->

    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent";
import SideBarComponent from "./components/SideBarComponent";
export default {
  components: {
    NavBarComponent,
    SideBarComponent,
  },
};
</script>

<style scoped>
</style>
