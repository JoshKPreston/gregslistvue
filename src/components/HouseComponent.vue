
// bathrooms: 1
// bedrooms: 2
// description: "A really great place."
// imgUrl: "https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
// levels: 3
// price: 2004000
// year: 1999
// __v: 0
// _id: "5f4ec18d9d87ed001709821d"

<template>
  <div class="HouseComponent col-3 card">
    <img class="img-fluid" :src="house.imgUrl" alt="">
    <h6>{{ house.year }}</h6>
    <h6>{{ house.bedrooms }}</h6>
    <h6>{{ house.bathrooms }}</h6>
    <h6>{{ house.levels }}</h6>
    <h6>{{ house.description }}</h6>
    <h6>{{ house.price }}</h6>
  </div>
</template>

<script>
export default {
  name: 'HouseComponent',
  props: ['house']
}
</script>

<style lang="scss" scoped>

</style>
