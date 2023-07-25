<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      bg-variant="dark"
      text-variant="light"
      backdrop="dark"
    >
      <template #default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
            <b-avatar text="EV" class="avatar mr-3" bg-color="red" size="5rem" badge badge-variant="warning"></b-avatar>
            <h4 id="sidebar-no-header-title">Eduardo Vieira</h4>
            <div class="divider-menu"></div>
          </div>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide"><b-icon icon="bar-chart-fill"></b-icon> Restaurantes</b-nav-item>
              <b-nav-item href="#link-1" @click="hide"><b-icon icon="person"></b-icon>Contatos</b-nav-item>
              <b-nav-item href="#link-2" @click="hide"><b-icon icon="map"></b-icon>Mapa</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide"
            >Fechar</b-button
          >
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scpoed>
.nav-item > .nav-link{
  color: #FFF
}
.nav-item > .nav-link:hover{
  color: #CCC
}

.avatar{
  background-color: #007bff;
}

.divider-menu{
  border: 1px solid #FFF;
  width: 100%;
}
</style>
