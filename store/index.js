export const actions = {
    async nuxtServerInit({ dispatch, store, context , error}) {
            await dispatch('testimonials/getList')}
  }