<template>

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">Marvel</a>
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