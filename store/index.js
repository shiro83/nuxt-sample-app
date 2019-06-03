export const state = () => ({
  counter: 0
})

export const getters = {
  counterPlusOne (state) {
    return state.counter + 1
  }
}

export const mutations = {
  increment (state) {
    state.counter++
  }
}
