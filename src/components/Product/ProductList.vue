<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <h1>Product List</h1>
    <p>Here is the list of products:</p>
    <div v-for="product in products">

      <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>

      <!-- <router-link
        :to="{
          name: 'productDetails',
          params: { productId: product.id, categoryId: 77 },
        }"
      >{{ product.name }}</router-link> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
]
</script>
