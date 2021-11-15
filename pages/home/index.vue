<template>
  <v-flex>
    <v-container>
      <v-row>
        <v-col>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
            >
              <v-img src="https://api.lorem.space/image/movie" contain width="100%" height="100%" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in 4" :key="i">
          <CardVue
            title="test"
            author="parinya"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, a minima. Officia adipisci modi impedit dolores perferendis vero nulla atque sit sapiente odio, nam qui illo omnis repudiandae dolorum. Tempore?
"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-flex>
</template>

<script>
import CardVue from '~/components/Card.vue'

export default {
  components: {
    CardVue
  },
  data: () => {
    return {
      data: [],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ]
    }
  },
  created () {
    this.initalData()
  },
  methods: {
    async  initalData () {
      this.data = await this.$axios.$get('/api/article/index')
      console.log('data : ', this.data)
    }
  }
}
</script>

<style scoped>
</style>
