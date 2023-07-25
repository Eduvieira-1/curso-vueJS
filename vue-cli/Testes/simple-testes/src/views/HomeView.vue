<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>

  </div>
  <img src="../assets/logo.png" alt="">
    <li v-for="product in products" :key="product.id">
      {{ product.nome }}
      <img :src="product.image" alt="">
    </li>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data(){
    return{
          id: 1,
          products: [
            { id: 1, nome: "Tijolos", image: '../assets/logo.png'},
            { id: 2, nome: "Telhas"},
            { id: 3, nome: "Cimento"}
          ],
    }
  }
}
</script>
