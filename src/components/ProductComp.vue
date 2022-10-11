<template>
  <cart-comp
    :selectedProduct="selectedProduct"
    :active="active.product_drawer"
  />
  <div class="container">
    <div
      v-for="product in products"
      :key="product.id"
      class="card"
      style="width: 18rem"
    >
      <img
        class="card-img-top"
        :src="product.productImageURL"
        alt="product image"
      />
      <div class="card-body">
        <h5 class="card-title">Name: {{ product.productName }}</h5>
        <p class="card-text">Price: Rs {{ product.productPrice }}</p>
        <p class="card-text">Details: {{ product.productDescription }}</p>
        <button class="btn btn-primary" @click="addFunc(product.id)">
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CartComp from "./CartComp.vue";
export default {
  components: { CartComp },
  data() {
    return {
      products: [
        {
          productDescription: "wooden kushan chair",
          productImageURL:
            "https://images.unsplash.com/photo-1664268336138-388b6e0b9366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          productName: "Chair",
          productPrice: 349,
          id: 1,
        },
        {
          productDescription: "Analog Watch",
          productImageURL:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          productName: "Titan Watch",
          productPrice: 30000,
          id: 2,
        },
        {
          productDescription: "Waterproof Lipstic",
          productImageURL:
            "https://images.unsplash.com/photo-1626895872564-b691b6877b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpcHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          productName: "Sugar Lipstick",
          productPrice: 2000,
          id: 3,
        },
      ],
      active: {
        product_drawer: false,
      },
    };
  },
  methods: {
    addFunc(ID) {
      console.log("productID on clicked product is ", ID);
      let selectedProduct = this.products.find((product) => product.id === ID);
      console.log("selectedProduct", selectedProduct);
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%; /*whatever size you want your container*/
  height: 50rem;
  border: 3px solid teal;
  display: flex; /*Make sure to call this on your container*/
  align-items: stretch; /*stretches all cards same height*/
  justify-content: space-around; /*some space between cards*/
}

.card {
  width: 150px; /*or whatever size card you want*/
  height: 20rem;
}
img {
  width: 300px;
  height: 20rem;
}
</style>