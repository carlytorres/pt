<template>

    <transition name="modal-animation">
        <div v-show="mostrar" class="modal">
            <transition name="modal.animation-inner">
                <div v-show="mostrar" class="modal-inner">
                    <slot/>
                    <div v-if="heroeM">
                        <div class="row-6">
                            <img :src="getPicture(heroeM.thumbnail)" class="card-img-top" :alt="`imagen-${heroeM.name}`">

                            <div class="row-6 mt-3">
                                <input class="card-title" v-model="heroeM.name" >
                            
                                <textarea v-model="heroeM.description"></textarea>
                                <button @click="close(heroeM)" type="button" class="btn btn-danger mt-3">Editar</button> 

                            </div>
                        </div>

                    </div>
                </div>
            </transition>
         </div>
    </transition>
   
</template>


<script>

import getPicture from '../helpers/getPicture' 

export default {
    
    props: ['mostrar','heroeM'],

    setup( props, { emit }){

        const close = (heroeM) => {
            emit('close',heroeM)
        }

        return {
            getPicture,
            close,
        }
    }
 
}
</script>

<style lang=scss scoped>

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(255 , 255, 255,0.7);

    .modal-inner {
        position: relative;
        max-width: 100vh;
        width: 100%;
        box-shadow: #fff;
        /* padding: 64px 16px; */
    }
}

img {
    width: 200px;
    position: center;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

textarea {
    font-size: 20px;
    width: 100%;

    &:focus {
        outline: none;
    }
}
</style>
