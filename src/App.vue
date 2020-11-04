<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cars">Cars</router-link> |
    <router-link to="/houses">Houses</router-link> |
    <router-link to="/jerbs">Jerbs</router-link> |
  </div>
  <router-view/>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  setup () {
    return {
      appState: computed(() => AppState)
    }
  }
}

</script>
