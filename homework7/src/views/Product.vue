<template>

  <div v-if="loading">Loading....</div>
  <div v-else> 

    <p>{{ product.title }} <br /></p>

    <div class="productAlone">

      <img :src="product.image" /> <br />

      <div class="info">

        <h2><h3 id="price">Price: </h3>{{ product.price }} €<br /></h2>
        <h2><h3 id="description">Description: </h3>{{ product.description }} <br /></h2>
        <h2><h3 id="category">Category: </h3>{{product.category}} <br /></h2>
        <h2><h3 id="rating">Rating: </h3>{{product.rating}} <br /></h2>

        <br />

        <h3>Client review</h3>

        <br />

        <div v-if="!submitted">

          <form>

            <label for="name">Name</label>
            <input v-model="name" type="text"/>

            <br />
            <br />

            <label for="selectRate">Rating</label>
            <select v-model="selectRate" name="selectRate">

              <option disabled value="">Please select one</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>

            </select>

            <br />
            <br />

            <label for="review">Review</label>
            <input v-model="text" type="text"/>
            <br />
            <br />

            <input type="submit" value="Sent form"/>

            <br />
            <br />

          </form>

        </div>

        <div v-else>
          <p>Name : {{ name }}</p>
          <p>Rating : {{ selectRate }}</p>
          <p>Review : {{ text }}</p>
        </div>

      </div>

    </div>
    <router-link to="/products/:id"> <h4>Go back to the list</h4> </router-link>

  </div>

</template>

<script>
export default {
  name: "Product",
  props: ["id"],

  data() {
    return {
      loading: true,
      product: {},
      name: "Name",
      text: "Text",
      selectRate: "...",
    };
  },
  mounted() {
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        this.product = jsonRes;
        this.loading = false;
      });
  },
  formSubmitted() {
    this.submitted = true;}
};
</script>

<style scoped>
p{
  color: black;
  font-size: 35px;
  text-decoration: underline;
}
h2{
  font-size: 20px;
}
.productAlone{
  padding: 3%;
  margin: 5%;
}

img{
  width: 45%;
  height: 45%;
  margin-bottom: 5%;
}

button{
  width: 5%;
  height: 5%;
}

.info{
  border: 4px solid rgb(72, 107, 153);
}

h3{
  color: gray;
  text-decoration: underline;
}
label{
  padding-right: 1%;
}
</style>