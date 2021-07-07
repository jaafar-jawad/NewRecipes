<template>
  <q-layout view="hHh Lpr fFf "> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Recipes
        </q-toolbar-title>
      </q-toolbar>


    </q-header>

    <!-- (Optional) The Footer -->


    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
    <q-tabs>
      <ul>
     <li >
        <q-route-tab
          icon="map"
          to="/Login"
          replace
          label="Login"
        />
    </li>

    <li>
        <q-route-tab
          icon="assignment"
          to="/"
          replace
          label="Registration"
        />
  </li>


    <li>
        <q-route-tab
          icon="assignment"
          to="/NewRecipes"
          replace
          label="NewRecipes"
        />
  </li>

        </ul>
      </q-tabs>

      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">


      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
   name: 'nav',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>




<style scoped>

.q-tabs .q-tab {

    color: rgb(161, 17, 108);
    text-decoration: none;
    list-style-type: none;

}

li  {
 text-decoration: none;
 list-style-type: none;
 padding: 15px;
}

.q-layout__section--marginal {
    background-color: var(--q-secondary);
}
.q-layout {
    min-height: 10px;
}
</style>
