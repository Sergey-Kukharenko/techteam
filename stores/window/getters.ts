import { mediaQueryInstance } from './state'

export default {
  getIsTruthyMediaQuery: (state) => (breakpointAssert) => {
    return mediaQueryInstance.isTruthyMediaQuery(
      breakpointAssert,
      state.currentBreakpoint
    )
  },

  getCurrentBreakpointName: () => (width) => {
    return mediaQueryInstance.findBreakpointName(width)
  },
}
