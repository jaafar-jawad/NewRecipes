<template>
    <q-page padding >

    <h5 class="titlepage">here is tble of recipes</h5>

    <table>
     <tr>
        <td class="name" >Name kfkfkfkf</td>
        <td>
          <div class="row content-around ">
          <p class="dep col-lg-4 col-md-6 col-12  "> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nesciunt doloribus officiis ipsam distinctio recusandae consequatur suscipit, quidem maiores! Officia earum, voluptatibus explicabo voluptatum et nesciunt accusantium ex laboriosam. Consequuntur. </p>
            <div class="q-pa-md  ">
              <q-uploader
        url="http://localhost:4444/upload"
        color="teal"
        flat
        bordered
        style="max-width: 150px"
        class="col-6 col-md-4"
      />
          </div>

         <q-btn  class="b col-lg-4 col-md-6 col-12" color="secondary" label="EDIT" />
         <q-btn  class="b col-lg-4 col-md-6 col-12"  color="deep-orange" glossy label="Delet" />





        </div>


        </td>
      </tr>


    </table>

    </q-page>

</template>

<script>
export default {

  name :'ListRecipes',

}
</script>

<style scoped>
.titlepage{

  text-align: center;

}

table{
      width: 100%;

}

table td {
    border: 3px solid #ccc;
}
.dep{
  border: 1px solid #ccc;
  margin-top: 10px;
}


.b{

  margin:10px;
  height:20px;
  width: 100px;
}


</style>



