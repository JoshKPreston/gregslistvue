<template>
  <div class="Jerbs">
    <div class="row">
      <JerbComponent  v-for="j in jerbs" :key="j._id" :jerb="j"/>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { jerbService } from '../services/JerbService'
import JerbComponent from '../components/JerbComponent'
import { AppState } from '../AppState'
export default {
  name: 'Jerbs',
  setup () {
    onMounted(() => {
      jerbService.getAll()
    })
    return {
      jerbs: computed(() => AppState.jerbs)
    }
  },
  components: { JerbComponent }
}
</script>

<style lang="scss" scoped>

</style>
