<template>
  <div class="q-pa-md">
    <div class="flex">
      <q-btn color="secondary" label="Add new receipe" @click="addReceipes" />
    </div>
    <q-table :rows="rows"  />
   <q-dialog v-model="dialog" persistent>
      <q-card style="width: 400px">
        <q-card-section class="flex column items-center">
          <q-input v-model="receipe.name" label="Name" />
          <q-input v-model="receipe.description" label="Description" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Confirm"
            @click="confirmReceipe()"
            color="primary"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    addReceipes() {
      // add dialog
      console.log("here");
      this.dialog = true;
    },
    confirmReceipe() {

      this.rows.push(this.receipe);
      this.receipe = {};
    },
    editReceie(idx) {
      this.receipe = this.row[idx];
    }
  },
  data() {
    return {
      receipe: {},
      dialog: false,
      rows: [
        {
          name: 'test',
          description: 'test',
        }
      ],

    };
  },
};
</script>
