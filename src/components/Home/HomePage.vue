<template>
  <div>Home Page</div>
  <button @click="router.push({ name: 'contact' })">Go to Contact</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
