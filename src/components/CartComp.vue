<template>
  <div>
    <h2>Hello world cart</h2>
  </div>
  <!-- <div class="card-background" :class="{show:active}" @click="$emit('close-product-drawer')"/>
<div class="drawer" :show="{show:active}">
    <div class="drawer-close" @click="$emit('close-product-drawer')">×</div> -->
  <div class="product-details" v-if="selectedProduct">
    <img
      class="card-img-top"
      :src="selectedProduct.productImageURL"
      alt="product image"
    />
    <div class="card-body">
      <h5 class="card-title">Name: {{ selectedProduct.productName }}</h5>
      <p class="card-text">Price: Rs {{ selectedProduct.productPrice }}</p>
      <p class="card-text">Details: {{ selectedProduct.productDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedProduct"],

  data() {
    return {};
  },
};
</script>

<style></style>