<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PostView from '../components/PostView.vue'

const posts = ref([])

onMounted(async () => {
  const URL = 'https://basic-blog.teamrabbil.com/api/post-newest'
  await axios
    .get(URL)
    .then((response) => (posts.value = response.data))
    .catch(function (error) {
      // handle error
      console.log(error)
    })
})
</script>
<template>
  <div class="max-w-screen-xl mx-auto grid grid-cols-4 gap-4 my-8">
    <PostView v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
