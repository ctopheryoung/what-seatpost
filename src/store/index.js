import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      routingStyle: null,
      seatpostDiameter: null,
      maxExtension: 0,
      maxInsertion: 0
    }
  },
  mutations: {
    setRoutingStyle (state, routingStlye) {
      state.routingStyle = routingStlye
    },
    setSeatpostDiameter (state, seatpostDiameter) {
      state.seatpostDiameter = seatpostDiameter
    },
    setMaxExtension (state, maxExtension) {
      state.maxExtension = maxExtension
    },
    setMaxInsertion (state, maxInsertion) {
      state.maxInsertion = maxInsertion
    }
  }
})