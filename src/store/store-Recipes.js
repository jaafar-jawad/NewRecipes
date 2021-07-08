
const state ={

  Recipes:[

    {
      nam:''

    }
    ,

    {
      desc:''
    }
  ]

}

const mutations ={


 // addRecipes:(state , nam)=>{
    //state.Recipes.push(state.nam)
    addRecipes:(state,nam)=>{
      console.log('heelo')

    }

 // }

}

const actions ={
  addRecipes({commit},nam){
    commit('addRecipes',nam)

  }

}

const getters ={

  }



export default {
namespaceed : true,
  state,
  mutations,
  actions,
  getters
}

