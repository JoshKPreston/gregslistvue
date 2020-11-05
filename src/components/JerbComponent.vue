
// company: "Panda Express"
// description: "Eat customers and print money."
// hours: 40
// jobTitle: "EvilDoer"
// rate: 40
// __v: 0
// _id: "5f62871d84741e0017eeed94"

<template>
  <div class="JerbComponent col-3 card">
    <h6>{{ jerb.jobTitle }}</h6>
    <h6>{{ jerb.company }}</h6>
    <h6>{{ jerb.description }}</h6>
    <h6>{{ jerb.hours }}</h6>
    <h6>{{ jerb.rate }}</h6>
  </div>
</template>

<script>
export default {
  name: 'JerbComponent',
  props: ['jerb']
}
</script>

<style lang="scss" scoped>

</style>
