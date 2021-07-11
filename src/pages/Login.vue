<template>

  <q-page padding class="page">
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
                label="user name *"
                hint=" first Name "
                v-model="user"

              />
              <q-input
              color="teal"
              type="password"
                filled
                label=" Enter Your password *"
                hint="password"
                v-model="pass"

              />

           <q-btn   class="zer" color="secondary" label="Login" />
           <span class="material-icons">
              login
          </span>
      </q-form>

  </q-page>
</template>

<script>
export default {
   name: 'Login',

    data(){
      return{

        user :"",
        pass:""

      }
    },




}
</script>




<style  scope>

.PageTitle{

margin-top:50px;
text-align: center;
font-family: cursive;
}

.q-gutter-md{

max-width: 500px ;
  text-align: center;
  margin: 0 auto ;
  margin-top: 50px;
  border: 2px solid rgb(25, 158, 140);
  border-radius: 10px;
  padding: 15px;
}

span.material-icons {
    font-size: xx-large;
    color: teal;
}


</style>
