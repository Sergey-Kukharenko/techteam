const COMPARE_OPERATION = {
  UP: 'up',
  DOWN: 'down',
  EQUAL: 'equal',
}

const OPERATION_BP_ASSERT = {
  '+': COMPARE_OPERATION.UP,
  '-': COMPARE_OPERATION.DOWN,
  '=': COMPARE_OPERATION.EQUAL,
}

const OPERATION_BP_ASSERT_KEYS = Object.keys(OPERATION_BP_ASSERT)

const clearBreakpointName = (bp) => {
  if (!bp) {
    return null
  }

  const lastChar = bp.slice(-1)

  return OPERATION_BP_ASSERT_KEYS.includes(lastChar) ? bp.slice(0, -1) : bp
}

/**
 * Ищет подходящее значение в массиве array для числа value
 * getAppropriateValue([0,375,540,600,768,1024], 767) => 600
 * getAppropriateValue([0,375,540,600,768,1024], 100) => 0
 *
 * @param {array} array Массив значения
 * @param {number} value число, для которого нужно найти подходящую значение
 * @returns {number} подходящее значение для числа
 */
const getAppropriateValue = (array, value) => {
  return array.reduce((prev, current) => (value >= current ? current : prev))
}

export class MediaQuery {
  constructor(breakpoints) {
    this.breakpoints = breakpoints
    this.breakpointsKeys = Object.keys(breakpoints)
    this.breakpointsValues = Object.values(breakpoints)
  }

  /**
   * Сравнивает индексы брейкпоинта страницы и брейкпоинта-утверждения
   *
   * @param {string} breakpointAssert брейкпоинт-утверждение
   * @param {string} breakpointWindow брейкпоинт страницы
   * @returns {boolean} результат сравнения индексов брейкпоинта
   *                    страницы с брейкпоинтом-утверждением
   */
  isTruthyMediaQuery(breakpointAssert, breakpointWindow) {
    const operationBreakpointAssert =
      this._getOperationBreakpointAssert(breakpointAssert)

    const indexBreakpointAssert = this._getBreakpointIndex(breakpointAssert)
    const indexBreakpointWindow = this._getBreakpointIndex(breakpointWindow)

    switch (operationBreakpointAssert) {
      case COMPARE_OPERATION.UP:
        return indexBreakpointWindow >= indexBreakpointAssert

      case COMPARE_OPERATION.DOWN:
        return indexBreakpointWindow <= indexBreakpointAssert

      default:
        return indexBreakpointWindow === indexBreakpointAssert
    }
  }

  /**
   * Возвращает имя брейкпоинта для переданной ширины
   *
   * @param {number} width ширина
   * @returns {string} имя брейкпоинта для переданной ширины
   */
  findBreakpointName(width) {
    // Нашли ближайшую полходящую ширину брейкпойнта
    const nearestBreakpointWidth = getAppropriateValue(
      this.breakpointsValues,
      width
    )

    // Нашли индекс этой ширины в массиве ширин
    const breakpointIndex = this.breakpointsValues.indexOf(
      nearestBreakpointWidth
    )

    // Вернули имя брейкпоинта
    return this.breakpointsKeys[breakpointIndex]
  }

  /**
   * Извлекает из строки брейкпоинта-утверждения операцию сравнения
   * "desktop+" => "+" => "up"
   * "tablet-" => "-" => "down"
   * "mobile=" => "=" => "equal"
   *
   * @param {string} breakpoint имя брейкпоинта-утверждения
   * @returns {string} название операции сравнения
   */
  _getOperationBreakpointAssert(breakpoint) {
    const lastChar = breakpoint.slice(-1)

    return OPERATION_BP_ASSERT[lastChar]
  }

  /**
   * Очищает название брейкпоинта и затем возвращает его индекс
   *
   * @param {string} breakpoint имя брейкпоинта
   * @returns {number} индекс брейкпоинта
   */
  _getBreakpointIndex(breakpoint) {
    const clearedName = clearBreakpointName(breakpoint)

    return this.breakpointsKeys.indexOf(clearedName)
  }
}
