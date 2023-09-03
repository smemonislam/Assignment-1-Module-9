<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const post = ref({})
const route = useRoute()
const isNull = ref(false)

onMounted(async () => {
  const URL = `https://basic-blog.teamrabbil.com/api/post-details/${route.params.id}`
  await axios
    .get(URL)
    .then((res) => {
      if (res.data.postDetails != null) {
        post.value = res.data.postDetails
      } else {
        isNull.value = true
      }
    })
    .catch((err) => console.log(err))
})
</script>
<template>
  <div class="p-40 bg-red-100/50 rounded-3xl" v-if="isNull">
    <div class="flex items-center justify-center max-w-3xl mx-auto bg-red-500/30 h-72 rounded-2xl">
      <div class="text-3xl font-bold text-center text-red-500">
        <h2>দুঃখিত বিস্তারিত তথ্য পাওয়া যায়নি</h2>
        <router-link
          to="/"
          class="inline-flex items-center justify-between gap-2 px-5 py-3 mt-10 rounded-xl hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>

          নীড় পাতায় ফিরে যান
        </router-link>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4" v-else>
    <div class="col-span-10">
      <div class="">
        <img :src="post.img" class="rounded-t-lg" :alt="post.title" />
        <div class="space-y-8">
          <h1 class="py-3 font-bold text-4xl">{{ post.title }}</h1>
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <a
          href="#"
          aria-current="true"
          class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
        >
          Profile
        </a>
        <a
          href="#"
          class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Settings
        </a>
        <a
          href="#"
          class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Messages
        </a>
        <a
          href="#"
          class="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Download
        </a>
      </div>
    </div>
  </div>
</template>
