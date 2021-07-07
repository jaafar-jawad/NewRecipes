<template>
  <q-page class="reg" padding>
    <!-- content -->

    <h5 class="titlepage">welcome to Registration page</h5>
  <!------------------------ her is and form for registraion--------------------------------->


     <q-form

      class="q-gutter-md "
    >


    <h5>Pleas Enter your information</h5>
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
          <q-input
             color="teal"

            filled

            type="email"
            label=" Enter Your email *"
            hint="email "

          />


          <q-input
                     color="teal"

            filled
            type="password"
            label="Enter Your Passord *"

          />


          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
    </q-form>





  </q-page>
</template>

<script>
export default {
   name: 'Registration',
}
</script>


<style  scoped>


.titlepage{

  text-align: center;
  margin-top: 100px;
  font-family:cursive ;
}


.q-gutter-md{

max-width: 500px ;
  text-align: center;
  margin: 0 auto ;
  margin-top: 100px;
  border: 2px solid rgb(153, 151, 151);
  border-radius: 10px;
  padding: 20px;

}
</style>
