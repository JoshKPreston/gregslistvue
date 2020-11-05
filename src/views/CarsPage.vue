<template>
  <div class="Cars" v-for="c in cars" :key="c._id" :carProp="c">
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { carService } from '../services/CarService'
import AppState from '../AppState'
export default {
  name: 'Cars',
  setup () {
    onMounted(() => {
      carService.getAll()
    })
    return {
      cars: computed(() => AppState.cars)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
