
// description: "Vroom Vroom"
// imgUrl: "https://fordauthority.com/wp-content/uploads/2019/10/1965-Mustang-GT-Mod-001.jpg"
// make: "Ecto"
// model: "Onee"
// price: 4690
// year: 1992
// __v: 0
// _id: "5f6247dc84741e0017eeed61"

<template>
  <div class="CarComponent col-3 card">
    <img class="img-fluid" :src="car.imgUrl" alt="">
    <h6>{{ car.year }}</h6>
    <h6>{{ car.make }}</h6>
    <h6>{{ car.model }}</h6>
    <h6>{{ car.description }}</h6>
    <h6>{{ car.price }}</h6>
  </div>
</template>

<script>
export default {
  name: 'CarComponent',
  props: ['car']
}
</script>

<style lang="scss" scoped>

</style>
