<template>
  <div class="Form flex">
    <q-btn label="add new receipes" color="lime" @click="addreceipes" />
    <q-dialog v-model="dialog" persistent>
      <q-card style="width:300px">
        <q-card-section class="flex column items-center">
          <q-input  v-model="recepies.name" label="Name" />
          <q-input  v-model="recepies.description" label="Description" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn  @click="addToRecipesI"   flat label="Confirm" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import v1 from 'uuid'
import { mapActions } from 'vuex';


export default {

  name: "addform",

  data() {
    return {
      recepies:{},
      dialog: false,
    };
  },

  methods: {
    addreceipes() {
      this.dialog = true;
    },

    ...mapActions(["addToRecipes"]),

          addToRecipesI(){

            this.addToRecipes({
              id: v1(),
              title:this.recepies.name,
              dec:this.recepies.description
            });
          }

  },
};
</script>
