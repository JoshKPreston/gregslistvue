
<template>
  <div class="HouseComponent">
    state.houses
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'HouseComponent',
  setup () {
    const state = reactive({
      houses: computed(() => AppState.houses)
    })

    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
