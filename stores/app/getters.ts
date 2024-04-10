export default {
  getZIndex:
    (state) =>
    ({ id }) => {
      return state.zIndexes[id] || null
    },
}
