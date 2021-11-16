<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="data.title"
      label="Title"
      :rules="titleRules"
      outlined
      required
    />
    <v-text-field
      v-model="data.author"
      label="Author"
      :rules="authorRules"
      outlined
      required
    />
    <v-text-field
      v-model="data.content"
      label="Content"
      :rules="contentRules"
      outlined
      required
    />
    <!-- <v-content
      v-model="content"
      label="Item"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      outlined
      required
    /> -->
    <!-- <v-checkbox
      v-model="checkbox"
      label="Do you agree?"
      :rules="[v => !!v || 'You must agree to continue!']"
      required
    /> -->

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      save
    </v-btn>
    <v-btn @click="clear">
      cancel
    </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  title: 'FormInput',
  data: () => ({
    valid: true,
    data: {
      title: '',
      author: '',
      content: ''
    },
    titleRules: [v => !!v || 'title is required'],
    authorRules: [v => !!v || 'author is required'],
    contentRules: [v => !!v || 'content is required']
    // items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    // checkbox: false
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/article/create', this.data)
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
