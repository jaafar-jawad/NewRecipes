<template>
  <q-page>
    <!-- content -->

       <q-parallax
      src="../assets/tnager.jpg"
    >

    <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, eum. Incidunt molestias suscipit doloremque sed repellendus, quibusdam minima? Delectus rerum minima reprehenderit quisquam ex et explicabo sit saepe assumenda labore?</p>
    </q-parallax>




    <h4 class="PageTitel">welcom to newe recipes page</h4>
    <h5 class="PageTitel">Here you can Add new Recipes enjo</h5>

             <div  class="q-pa-md" >
          <addform />
      <q-table v-for="(item ,index) in allRecipes" :key="index"   :rows="allRecipes"
  />
    <button  >delet</button>





    </div>


            <!--------------------------------------------->
            <div class="footer " >
              <div class="insid">
              <span class="material-icons">
              facebook
              </span>
              <span class="material-icons">
              linked_camera
              </span>
              <span class="material-icons">
              settings_phone
              </span>
              <span class="material-icons">
                mail_outline
                </span>
              </div>


            </div>


  </q-page>
</template>

<script>
import addform from "components/recepis/addform.vue";
import { mapGetters } from 'vuex';

export default {
       name: 'NewRecipes',
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
    }




</script>


<style  scoped>



main.q-page.q-layout-padding.add {
      min-height: 100px !important;

}

.PageTitel{

  text-align: center;
  margin-top: 70px;
  font-family: cursive;

}


.text{

  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: cursive;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  height: 200px;
}
.footer{

  height: 200px;
  background-color: rgb(65, 63, 61);

}
.insid{
  text-align: center;
}

span.material-icons {
    color: cornsilk;
    font-size: 30px;
    padding: 10px;
      margin-top: 70px;

}


span.material-icons:hover{
color: teal;
font-size: 100px;
}
.q-pa-md{
  margin-bottom: 0;
  background-color:rgb(23, 77, 77) ;
  text-align: center;
  margin: 0 auto;
}
</style>
