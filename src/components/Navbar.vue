<template>

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand d-none d-sm-block">
       <img src="../assets/marvel-icon.png" alt="imagen marvel" width="80" height="34">
    </a>
    <form class="d-flex">
      <input class="form-control me-2"
            type="search"
            placeholder="Buscar personaje"
            aria-label="Search" v-model="nombre" @input="buscar(nombre)">
          <button class="btn btn-outline-danger" type="button" @click="buscar(nombre)">Search</button>
    </form>
    </div>
</nav>

</template>

<script>

import { ref } from 'vue'

export default {

  setup(props, {emit} ){

    const nombre = ref()

    const buscar = (nombre) => {
      emit('buscar',nombre)
  
    }

    return {
            nombre,
            buscar
    }
  }

}

</script>

<style scoped>
nav{
  position: sticky;
  left:0;         
  top:0;          
  width:100vw;
  z-index:200;  
}

form{
  margin-right: 2%;
}
</style>