<template>
  <section v-if="results">
    <ul>
      <li v-for="dropper in results" :key="dropper">{{ dropper }}</li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ResultsList',
  computed: {
      ...mapState(['routingStyle', 'seatpostDiameter', 'maxExtension', 'maxInsertion']),
    results() {
      if (!this.routingStyle || !this.seatpostDiameter || !this.maxExtension || !this.maxInsertion) {
        return;
      }

      return ['Dropper 1', 'Dropper 2', 'Dropper 3']
    }
  }
}
</script> 