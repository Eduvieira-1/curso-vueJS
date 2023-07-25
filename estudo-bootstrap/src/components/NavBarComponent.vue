<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="black">
    <b-navbar-brand href="#" class="ms-3"><b-button variant="dark" size="sm" v-b-toggle.sidebar-no-header><b-icon icon="list"></b-icon></b-button></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Sobre</b-nav-item>
        <b-nav-item href="#">Contato</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto me-5">
        <b-nav-form>
              <b-form-input size="sm" class="mt-2" placeholder="Search"></b-form-input>
            </b-nav-form>
            <b-button size="sm" class="my-1 mt-2 ms-2" type="submit">Search</b-button>
        
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scpoed>
</style>
