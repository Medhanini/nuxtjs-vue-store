<template>
  <div>
    {{ reviews }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Testimonials',
    props: {
        params: {
          type: Object
        }
    },
    computed: {
        ...mapState({
            reviews: state => state.testimonials.list
        })
    },
    data: () => ({
        title: "Testimonials",
      }
    ),
    created () {
        // this.getDataAsync()
    },
    methods: {
        async getDataAsync() {
            // import('~/data/testimonials.json').then(data => {
            //     // do something
            //     this.reviews = data.result.reviews
            //     console.log(this.reviews)
            // }) 
            // await this.$axios.get(
            //     'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJQc8hbUiarQ0R4H-Uc3WW1OY&key=AIzaSyCVeIkJL0QqHjiBNyQIyrFgAD758VeSkBs'
            // ).then((response) => {
            //    this.reviews = response.data.reviews
            // }).catch(error => {
            //     console.log(error)
            //     console.log('error store Testimonials.vue')
            // })
        }
    }
}
</script>
