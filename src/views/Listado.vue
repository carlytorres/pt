<template>

<Navbar @buscar="buscar"/> 

  <h1 v-if="isLoading" class="center">Cargando personajes</h1>
  <h2 v-else>Listado de personajes</h2>
  
  <div class="row row-cols-1 row-cols-md-2 g-4" ref="scrollComponent" >
    <div class="col" v-for="personaje in personajes" :key="personaje.id">
    <Personaje :personaje="personaje" @click="showModal(personaje)"/>
  </div>
  </div>

  <EditarPersonaje :heroeM="heroeM" :mostrar='mostrar' @close='showModal'>
  </EditarPersonaje>
</template>

<script>

import { defineAsyncComponent, onMounted, onUnmounted, ref, watch } from "vue";

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

h1{
  margin: 6% 0;
}
/* 
.home{
  background-color: rgba(0, 176, 234, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
} */

</style>


<!-- antes
<template>

  <div class="row row-cols-1 row-cols-md-2 g-4" ref="scrollComponent">
    <div class="col" v-for="personaje in personajes" :key="personaje.id">
    <Personaje :personaje="personaje" />
  </div>
  </div>

   <div v-else> <span>No hay personajes</span></div> 
</template>

<script>
import { defineAsyncComponent, onMounted, onUnmounted, ref, watch } from "vue";
import usePersonajes from "@/composables/usePersonajes";

export default {
  components: {
    // Navbar: defineAsyncComponent( () => import('@/components/Navbar.vue') ),
    Personaje: defineAsyncComponent(() => import("@/components/Personaje.vue")),
  },

  // props:{
  //   personaje: String
  // },

  setup() {
    const scrollComponent = ref(null);

    const { isLoading, getPersonajes, personajes } = usePersonajes();

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

    return {
      isLoading,
      getPersonajes,
      personajes,
      // getPicture: ({ path, extension }) => path.concat(".", extension),
      scrollComponent,
    };
  },
};
</script>

<style scoped>
</style>
-->