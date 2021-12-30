<template>

  <div class="card" >

      <div class="card-body">

        <h3 class="card-title">{{ personaje.name }}</h3>
        <img :src="getPicture(personaje.thumbnail)" class="card-img-top" :alt="`imagen-${personaje.name}`"><br>
        <p class="card-text">{{ personaje.description }}</p>
        <small class="text-muted">{{ new Date(personaje.modified).toLocaleDateString() }}</small>
      
      </div>

  </div>
 
 </template>

<script>

import getPicture from '../helpers/getPicture'


export default {
  props:{
    personaje:{}
  },

  setup(){

    return{
       getPicture
    }
  }
}
</script>

<style scoped>

</style>