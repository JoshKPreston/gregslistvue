<template>
  <div class="Houses">
    <HouseComponent />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { houseService } from '../services/HouseService'
import HouseComponent from '../components/HouseComponent'
export default {
  name: 'Houses',
  setup () {
    onMounted(() => {
      houseService.getAll()
    })
    return {}
  },
  components: { HouseComponent }
}
</script>

<style lang="scss" scoped>

</style>
