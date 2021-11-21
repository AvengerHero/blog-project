<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ title }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">
        {{ author }}
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <div>{{ content }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    // images: { type: String, required: false, default: '0' },
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true }
  },
  data: () => {
    return {
      data: []
    }
  }
}
</script>

<style lang="css"></style>
