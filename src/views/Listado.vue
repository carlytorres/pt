<template>

<Navbar @buscar="buscar"/> 

  <h1 v-if="isLoading" class="center">Cargando personajes</h1>
  <h2 v-else>Listado de personajes</h2>
  
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4" ref="scrollComponent" >
    <div class="col" v-for="personaje in personajes" :key="personaje.id">
      <Personaje :personaje="personaje" @click="showModal(personaje)"/>
    </div>
  </div>

  <EditarPersonaje :heroeM="heroeM" :mostrar='mostrar' @close='showModal'>
  </EditarPersonaje>

</template>

<script>

import { defineAsyncComponent, onMounted, onUnmounted, ref } from "vue";

import usePersonajes from "@/composables/usePersonajes";
import EditarPersonaje from "@/components/EditarPersonaje.vue";


export default {
  components: {
    Navbar: defineAsyncComponent( () => import('@/components/Navbar.vue') ),
    Personaje: defineAsyncComponent(() => import("@/components/Personaje.vue")),
    EditarPersonaje

  },


  setup( props) {

    const mostrar = ref(false)
    const heroeM = ref()

    const showModal = (heroe) => {
      heroe.value = heroeM
      heroeM.value = heroe
      mostrar.value = !mostrar.value
    } 

    const scrollComponent = ref(null);

    const { isLoading, listado, personajes } = usePersonajes();

    const cargarPersonajes = () => {
      let nuevosPersonajes = personajes.value;
      personajes.value.push(...nuevosPersonajes);
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = (e) => {
      let element = scrollComponent.value;

      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        cargarPersonajes();
      }
    };

     const buscar = (nombre) => {
      personajes.value = listado.value.filter(p => p.name.toLowerCase().includes(nombre.toLowerCase()))       
     }
  
    return {
      isLoading,
      cargarPersonajes,
      personajes,
      scrollComponent,
      mostrar,
      showModal,
      heroeM,
      buscar

    };
  },

}

</script>

<style scoped>

  h2{
    margin:7% 0 2% 0;
  }

</style>
