<template>

  <div class="card h-100">

      <div class="card-body">

        <img :src="getPicture(personaje.thumbnail)" class="card-img-top" :alt="`imagen-${personaje.name}`"><br>
        <h3 class="card-title">{{ personaje.name }}</h3>
        <p class="card-text my-2">{{ personaje.description }}</p>
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