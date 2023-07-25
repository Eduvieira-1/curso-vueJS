<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
    data: function(){
      return{
        titulo: 'Test'
      }
    }
}
</script>

<style>
    #app{
      background-color: chocolate;
      color:  #fff;
    }
</style>