<template>
  <div class="Houses">
    <div class="row">
      <HouseComponent  v-for="h in houses" :key="h._id" :house="h"/>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { houseService } from '../services/HouseService'
import HouseComponent from '../components/HouseComponent'
import { AppState } from '../AppState'
export default {
  name: 'Houses',
  setup () {
    onMounted(() => {
      houseService.getAll()
    })
    return {
      houses: computed(() => AppState.houses)
    }
  },
  components: { HouseComponent }
}
</script>

<style lang="scss" scoped>

</style>
