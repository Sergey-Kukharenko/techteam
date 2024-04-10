import sourceBreakpoints from '~/styles/export/breakpoints.module.scss'

import { MediaQuery } from './utils/media-query'

// Парсим число из строкового значения брейкпоинта
// "100px" => 100
const breakpoints = Object.fromEntries(
  Object.keys(sourceBreakpoints).map((bp) => [
    bp,
    Number.parseInt(sourceBreakpoints[bp], 10),
  ])
)

const windowSize = {
  innerWidth: 0,
  innerHeight: 0,
}

export const mediaQueryInstance = new MediaQuery(breakpoints)

export default () => {
  return {
    currentBreakpoint: 'mobile',
    breakpoints,

    windowSize,
    windowResizing: false,
    windowSizeLazy: windowSize,
  }
}
