
const state ={

  Recipes:[
    {
      dec:'bla bla bla bla bla',

      title:"cokies",
      id:1 ,
      omag:''

    },

  ],


}

  const getters ={
        allRecipes:(state)=>{

         return state.Recipes
        }

    }
const actions ={
        addToRecipes({commit},title){

        commit("addRecipes", title)
        },
        addToRecipes({commit},dec){

          commit("addRecipes", dec)
          },


   }


      const mutations ={

        savrecepies:(state)=>{
          state.Recipes=Recipes
          localStorage.setItem('save', JSON.stringify(savrecepies))
        },

        addRecipes:(state,title)=>{
          state.Recipes.push(title)
          Recipes.title=""
          console.log(title)
        },
        addRecipes:(state,dec)=>{
          state.Recipes.push(dec)
          console.log(dec)
        }

  };



export default {
namespaceed : true,
  state,
  mutations,
  actions,
  getters
}

