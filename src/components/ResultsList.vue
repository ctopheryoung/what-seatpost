<template>
  <section>
    <p>Count: {{ count }}</p>
    <p>Local count: {{ localCount }}</p>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ResultsList',
  computed: {
    ...mapState(['count']),
    localCount() {
      return this.count + 2
    }
  }
}
</script> 