<template>
  <q-page padding>
    <!-- content -->


          <h5 class="PageTitle">welcome to Login Page page</h5>
    <!------------------------------- here Login form ------------------------>


      <q-form

          class="q-gutter-md "
        >


        <h5>Pleas Enter your Email and Password</h5>
              <q-input
                color="teal"
                type="name"
                label="First name *"
                hint=" first Name "

              />
              <q-input
              color="teal"
              type="name"
                filled
                label=" Enter Your Last name *"
                hint="Last name"

              />

      </q-form>

  </q-page>
</template>

<script>
export default {
   name: 'Login',
}
</script>




<style  scope>

.PageTitle{

margin-top:70px;
text-align: center;
font-family: cursive;
}

.q-gutter-md{

max-width: 500px ;
  text-align: center;
  margin: 0 auto ;
  margin-top: 100px;
  border: 2px solid rgb(153, 151, 151);
  border-radius: 10px;
  padding: 15px;
}

</style>
