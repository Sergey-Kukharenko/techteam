export default {
  setWindowResizingState({ value }) {
    this.windowResizing = value
  },

  setWindowSize({ innerWidth, innerHeight }) {
    this.windowSize = { innerWidth, innerHeight }
  },

  setWindowSizeLazy() {
    this.windowSizeLazy = { ...this.windowSize }
  },

  setCurrentBreakpoint() {
    const width = this.windowSize.innerWidth

    this.currentBreakpoint = this.getCurrentBreakpointName(width)
  },
}
