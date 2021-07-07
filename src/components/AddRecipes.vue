<template>
  <q-page padding>



<div class="dilogadd ">
        <q-btn label="Creat" color="secondary" @click="alert = true" />
            <q-dialog v-model="alert">
      <q-card>

        <q-card-section class="q-pt-none ">
          <q-input
              color="teal"
              type="name"
                label=" ADD New Recipes *"

              />
          <q-btn class="zer" color="secondary" label="ADD" />

        </q-card-section>
         <q-card-section class="q-pt-none ">
          <q-input
              color="teal"
              type="name"
                label=" ADD New Recipes *"

              />
          <q-btn class="zer" color="secondary" label="ADD" />

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
  }

}

</script>

<style scoped>

.dilogadd{

  text-align: center;
  min-height: 10px;
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

