import marvelApi from '@/api/marvelApi'
import { ref } from 'vue'


const usePersonajes = () =>{
    
    const personajes = ref([])
    const isLoading  = ref(false)
    const listado = ref([])

    const getPersonajes = async () =>{ 

    isLoading.value = true

    try {

        const { data } = await marvelApi.get('/characters')

        personajes.value = data.data.results
        listado.value = [ ...personajes.value]
        isLoading.value = false

      // return personajes

    } catch (error) {
            console.log(error);
    }
     
    }

    getPersonajes()


    return{

      getPersonajes,
      isLoading,
      personajes,
      listado
    
    }
}

export default usePersonajes