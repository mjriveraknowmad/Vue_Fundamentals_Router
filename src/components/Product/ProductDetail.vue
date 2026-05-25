<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <h1>Product Detail</h1>
    <p>Here is the detail of the product with ID: {{ productId }}</p>
    <p v-if="categoryId">Category ID: {{ categoryId }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps({
  productId: String,
  categoryId: String,
}) // gracias al uso de props: true en la ruta, podemos acceder a los params como props

// const route = useRoute()
// console.log('Product ID:', route.params.productId)
// console.log('Category ID:', route.params.categoryId)
</script>
