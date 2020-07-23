export const state = () => ({
    list: {}
  })
  
  export const mutations = {
    setList(state, data) {
      state.list = data
    }
  }
  
  export const getters = {
  
  }
  
  export const actions = {
    async getList({commit , context}, params) {
      import('~/data/testimonials.json').then((data) => {
        
            commit('setList', data.result.reviews)
        }).catch(error => {
            console.log(error)
            console.log('error store testimonials getList')
        })
    }
  }  