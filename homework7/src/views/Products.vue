<template>
  <div>
    <h1>List of products:</h1>

    <div v-if="loading">loading...</div>

    <div class="products" v-for="product in products" :key="product.id">
      <center><img :src="product.image" /></center>
      <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <h2>{{ product.title }}</h2>
      </router-link>
      <h2>Price : {{product.price}} €</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      loading: true,
      products: [],
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((jsonRes) => {
        console.table(jsonRes);
        this.products = jsonRes;
        this.loading = false;
      });
  },
};
</script>

<style scoped>
.products {
  border: 7px solid black;
  margin: 10%;
  padding: 50px;
}

h1{
  font-size: 3rem;
  text-decoration: underline;
}

h2{
  margin: 60px;
  font-size: 25px;
}

img{
  width: 50%;
  height: 60%;
}
</style>