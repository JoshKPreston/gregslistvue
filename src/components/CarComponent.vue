
<template>
  <div class="CarComponent">

  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'CarComponent',
  setup () {

    const state = reactive({
      cars: computed(() => AppState.cars)
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
