<template>
  <q-page class="reg" padding>
    <!-- content -->

    <h5 class="titlepage">welcome to Registration page</h5>
  <!------------------------ her is and form for registraion--------------------------------->


     <q-form

      class="q-gutter-md "
      @submit.prevent="hundle"

    >


    <h5>Pleas Enter your information</h5>
          <q-input
            color="teal"
            type="name"
            label="First name *"
            hint=" first Name "
            v-model="first"
            lazy-rules
            filled
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
           color="teal"
          type="name"
            filled
            label=" Enter Your Last name *"
            hint="Last name"
            v-model="Last"
            lazy-rules

          />
          <q-input
             color="teal"
            filled
            type="email"
            label=" Enter Your email *"
            hint="email "
            v-model="email"

          />


          <q-input
             color="teal"
            filled
            type="password"
            label="Enter Your Passord *"
            v-model="pass"


          />


          <div class="end" >
            <q-btn  label="Submit" type="submit" color="teal"/>
             <span class="material-icons">
                face
             </span>
          </div>

    </q-form>





  </q-page>
</template>

<script>

export default {
   name: 'Registration',






        data(){
          return{

            first:"",
            Last:"",
            email:"",
            pass:"",

          }
        },
        methods:{

          hundle(){
            const data={
               first:this.first,
            Last:this.Last,
            email:this.email,
            pass:this.pass
            };
          console.log(data)

          }


        }





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
span.material-icons {

  background-color: rgb(5, 131, 110);
  color: #ccc;
  font-size: 50px;
  border-radius: 50px;

}

.end {
  padding: 20px;
}


</style>
