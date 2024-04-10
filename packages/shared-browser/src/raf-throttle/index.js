/**
 * Возвращает обертку, которая предотвращает запуск функции раньше, чем браузер готов к отрисовке следующего фрейма
 * https://stackoverflow.com/a/44779316
 *
 * @param {function} fn callback
 * @returns {function} throttle-обертка
 */
function rafThrottle(fn) {
  let isRunning
  let context
  let argsSaved

  const run = function () {
    isRunning = false
    fn.apply(context, argsSaved)
  }

  return function throttled(...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    context = this
    argsSaved = args

    if (isRunning) {
      return
    }

    isRunning = true
    requestAnimationFrame(run)
  }
}

export { rafThrottle }
