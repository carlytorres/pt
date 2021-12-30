<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
      </button>
      <a class="navbar-brand" href="#">
            <!-- <img src="@/assets/marvel-icon.png" alt="Icono marvel" width="80" height="74"> -->
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar personaje"
            aria-label="Search" v-model="nombre" @input="buscar(nombre)"
          />
          <button class="btn btn-outline-danger" type="button" @click="buscar(nombre)">Search</button>
        </form>
      </div>
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