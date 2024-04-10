const POINTER_INTERACTION_DELAY = 500

const FOCUS_SOURCE = {
  POINTER: 'pointer',
  KEYBOARD: 'keyboard',
}

class FocusDetector {
  /**
   *  Инициализируем приватные поля класса
   */
  constructor() {
    this._pointerInteraction = null
    this.pointerInteractionTimeout = null

    this.defaultFocusSource = FOCUS_SOURCE.KEYBOARD
  }

  /**
   * Устанавливает тайм-аут взаимодействия источника фокуса pointer
   *
   * @return {undefined}
   */
  setPointerInteractionTimeout() {
    this.pointerInteractionTimeout = setTimeout(() => {
      this.pointerInteraction = false
    }, POINTER_INTERACTION_DELAY)
  }

  /**
   * Очищает тайм-аут взаимодействия источника фокуса pointer
   *
   * @return {undefined}
   */
  unsetPointerInteractionTimeout() {
    this.pointerInteractionTimeout = clearTimeout(
      this.pointerInteractionTimeout
    )
  }

  /**
   * Перезапускает тайм-аут взаимодействия источника фокуса pointer
   *
   * @return {undefined}
   */
  resetPointerInteractionTimeout() {
    this.unsetPointerInteractionTimeout()
    this.setPointerInteractionTimeout()
  }

  /**
   * Возвращает название текущего источника фокуса (null | keyboard | pointer)
   *
   * @returns {string|null} название текущего источника фокуса
   */
  getFocusSource() {
    if (this.pointerInteraction === null) {
      return null
    }

    return this.pointerInteraction
      ? FOCUS_SOURCE.POINTER
      : FOCUS_SOURCE.KEYBOARD
  }

  /**
   * Возвращает значение праватного поля _pointerInteraction
   *
   * @return {boolean|null} значение праватного поля _pointerInteraction
   */
  get pointerInteraction() {
    return this._pointerInteraction
  }

  /**
   * Устанавливает значение праватного поля _pointerInteraction
   *
   * @returns {undefined}
   */
  set pointerInteraction(value) {
    this._pointerInteraction = value
  }
}

export { FocusDetector }
