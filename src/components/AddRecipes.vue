<template>
  <q-page padding class="add">



<div class="dilogadd ">
        <q-btn label="Creat" color="secondary" @click="alert = true" />
            <q-dialog v-model="alert">
      <q-card>

        <q-card-section class="q-pt-none ">
          <q-input
              color="teal"
              type="name"
                label=" ADD New Recipes *"
                v-model="name"

              />
          <q-btn   @click="addRecipes" class="zer" color="secondary" label="ADD" />

        </q-card-section>
         <q-card-section class="q-pt-none ">
          <q-input
              color="teal"
              type="name"
                label=" ADD New Recipes *"


              />
          <q-btn    class="zer" color="secondary" label="ADD" />

        </q-card-section>

        <q-card-actions align="right">
          <q-btn class="zer1"  flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>


  </q-page>
</template>

<script>
import { ref } from 'vue';
export default {

  name: 'AddRecipes',
  setup(){

    return{
            alert: ref(false),

    }
  },

      data(){
        return{
          name:'',
          dec:''
          }
        },


  methods:{
    addRecipes(){
    this.$store.dispatch('addRecipes')
    }
  }



}

</script>

<style scoped>

.dilogadd{

  text-align: center;
}

.q-pt-none{

  min-width:500px;
  padding: 15px;

}

.zer{
  margin-top: 10px;
}
.zer1{

  margin-top: 10px;
}



</style>

