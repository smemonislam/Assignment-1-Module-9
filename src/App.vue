<script setup>
import AppHeader from './components/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <main>
    <div class="max-w-screen-xl mx-auto my-10">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped></style>
