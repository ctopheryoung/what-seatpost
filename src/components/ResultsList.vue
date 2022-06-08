<template>
  <section class="results-list-container" :class="{ expanded: results.length}">
    <ul>
      <li v-for="dropper in results" :key="dropper.brand + dropper.model">{{ `${dropper.brand} ${dropper.model} ${dropper.travel}` }}</li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import droppers from '../data/droppers.json'

export default {
  name: 'ResultsList',
  computed: {
    ...mapState(['routingStyle', 'seatpostDiameter', 'maxExtension', 'maxInsertion']),
    results() {
      if (
        !this.routingStyle || 
        !this.seatpostDiameter || 
        !this.maxExtension ||
        !this.maxInsertion
      ) {
        return [];
      }
      
      const totalLength = this.maxInsertion + this.maxExtension

      return droppers.filter(dropper => 
        dropper.routing === this.routingStyle &&
        dropper.diameter === this.seatpostDiameter &&
        dropper.totalLength <= totalLength
      )
    }
  }
}
</script> 

<style lang="scss" scoped>
  .results-list-container {
    transition: flex 0.5s linear;
    flex: 0;

    &.expanded {
      flex: 1;
    }
  }
</style>