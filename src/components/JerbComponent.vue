
<template>
  <div class="JerbComponent">
    state.jerbs
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'JerbComponent',
  setup () {
    const state = reactive({
      jerbs: computed(() => AppState.jerbs)
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
