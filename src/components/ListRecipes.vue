<template>
    <q-page padding class="list">

<p>lorem ipsum</p>

<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-header
      hide-bottom
    />
  </div>
</template>


  </q-page>

</template>

<script>
export default {

  name :'ListRecipes',

}
</script>

<style scoped>
.list{
  margin-top: 10px;
}



</style>

