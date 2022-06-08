<template>
  <h1>What Seatpost</h1>

  <main id="main-content">
    <MeasurementsForm/>
    <ResultsList/>
  </main>
</template>

<script>
import MeasurementsForm from './components/MeasurementsForm.vue'
import ResultsList from './components/ResultsList.vue'

export default {
  name: 'App',
  components: {
    MeasurementsForm,
    ResultsList
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main-content {
  display: flex;
  align-content: stretch;
}
</style>
