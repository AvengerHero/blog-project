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
            <v-carousel-item v-for="(slide, i) in 4" :key="i">
              <v-img
                src="https://api.lorem.space/image/movie"
                contain
                width="100%"
                height="100%"
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in articleData" :key="i" cols="3">
          <CardVue
            :title="item.title"
            :author="item.author"
            :content="item.content"
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
      articleData: []

    }
  },
  created () {
    this.initailData()
  },
  methods: {
    async initailData () {
      this.articleData = await this.$axios.$get('/api/article/index')
    }
  }
}
</script>

<style scoped></style>
