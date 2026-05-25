<template>
  <div>
    <h1>Product Detail</h1>
    <p>Here is the detail of the product with ID: {{ route.params.productId }}</p>
    <p v-if="route.params.categoryId">Category ID: {{ route.params.categoryId }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('Product ID:', route.params.productId)
</script>
