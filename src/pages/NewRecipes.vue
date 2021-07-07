<template>
  <q-page padding>
    <!-- content -->

    <h4 class="PageTitel">welcom to newrecipes page</h4>
    <h5 class="PageTitel">Here you can Add new Recipes enjo</h5>

    <AddRecipes/>
    <ListRecipes/>

  </q-page>
</template>

<script>
import AddRecipes from "components/AddRecipes.vue";
import ListRecipes from "components/ListRecipes.vue";
export default {
       name: 'NewRecipes',
       components:{

      AddRecipes,
      ListRecipes,
       }
    }




</script>


<style  scoped>

.PageTitel{

  text-align: center;
  margin-top: 70px;
  font-family: cursive;

}




</style>
