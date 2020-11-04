<template>
  <div class="Cars">
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { carService } from '../services/CarService'
export default {
  name: 'Cars',
  setup () {
    onMounted(() => {
      carService.getAllCars()
    })
    return {}
  },
  components: { }
}
</script>

<style lang="scss" scoped>

</style>
