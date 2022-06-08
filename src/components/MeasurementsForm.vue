<template>
  <section class="measurements-form-container">
    <h2>Enter Dropperpost Measurements</h2>
    <section>
      <h3>Routing Style</h3>
      <select name="routing-style" v-model="routingStyle">
        <option value="internal">Internal</option>
        <option value="external">External</option>
      </select>
    </section>
  
    <section>
      <h3>Seatpost Diameter</h3>
      <select name="seatpost-diameter" v-model.number="seatpostDiameter">
        <option value="27.2">27.2</option>
        <option value="30.9">30.9</option>
        <option value="31.6">31.6</option>
        <option value="34.9">34.9</option>
      </select>
    </section>
  
    <section>
      <h3>Max Extension</h3>
      <p>In millimeters, measure the distance from the top of your seat collar to the center of the saddle rails. Be sure to take this measurement when your saddle is fully extended, aka the height you have it set at when seated and pedaling up a hill.</p>
      <input type="number" name="maxExtension" v-model="maxExtension"> mm
    </section>
  
    <section>
      <h3>Max Insertion</h3>
      <p>In millimeters, measure the distance from top of you seat collar down to any obstruction that would limit how far into the frame you could insert the post.</p>
      <input type="number" name="maxInsertion" v-model="maxInsertion"> mm
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapState(['routingStyle', 'seatpostDiameter', 'maxExtension', 'maxInsertion']),
      routingStyle: {
        get () {
          return this.routingStyle
        },
        set (value) {
          this.setRoutingStyle(value)
        }
      },
      seatpostDiameter: {
        get () {
          return this.seatpostDiameter
        },
        set (value) {
          this.setSeatpostDiameter(value)
        }
      },
      maxExtension: {
        get () {
          return this.maxExtension
        },
        set (value) {
          this.setMaxExtension(value)
        }
      },
      maxInsertion: {
        get () {
          return this.maxInsertion
        },
        set (value) {
          this.setMaxInsertion(value)
        }
      }
    },
    methods: {
      ...mapMutations(['setRoutingStyle', 'setSeatpostDiameter', 'setMaxExtension', 'setMaxInsertion'])
    }
  }
</script>

<style lang="scss" scoped>
  .measurements-form-container {
    transition: flex 0.5s linear;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>