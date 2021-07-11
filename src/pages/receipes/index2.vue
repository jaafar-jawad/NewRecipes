<template>
  <div class="new page">

     
    <!--------------------------table--------------------------->
    <div  class="q-pa-md">
          <addform />
      <q-table v-for="(item ,index) in allRecipes" :key="index"   :rows="allRecipes" />

    </div>
  </div>
</template>

<script>
import addform from "components/recepis/addform.vue";
import { mapGetters } from 'vuex';
export default {
  name: "NewPage",

  components: {
    addform,
  },

  data() {
    return {
      rows: [
        {
          name: "title",
          description: "description",


        },
      ],
    };
  },
    computed:{
      ...mapGetters(['allRecipes'])
    }
};
</script>
