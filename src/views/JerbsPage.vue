<template>
  <div class="Jerbs">
    <JerbComponent />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { jerbService } from '../services/JerbService'
import JerbComponent from '../components/JerbComponent'
export default {
  name: 'Jerbs',
  setup () {
    onMounted(() => {
      jerbService.getAll()
    })
    return {}
  },
  components: { JerbComponent }
}
</script>

<style lang="scss" scoped>

</style>
