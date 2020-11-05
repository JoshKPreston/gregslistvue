<template>
  <div class="Cars">
    <div class="row">
      <CarComponent  v-for="c in cars" :key="c._id" :car="c"/>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { carService } from '../services/CarService'
import { AppState } from '../AppState'
import CarComponent from '../components/CarComponent'
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
  components: { CarComponent }
}
</script>

<style lang="scss" scoped>

</style>
