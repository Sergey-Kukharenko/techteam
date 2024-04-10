/**
 * Блокирует браузерную навигацию
 *
 * @param {boolean} isTurnOn - блокировать браузерную навигацию
 * @param {Function} fn - коллбэк при нажатии на стрелки навигации
 * @return {undefined}
 */

function navigationBlocking(isTurnOn, fn) {
  if (isTurnOn) {
    window.history.pushState(null, null, null)
    window.onpopstate = () => {
      window.history.pushState(null, null, null)
      fn()
    }
  } else {
    window.onpopstate = null
    history.back()
  }
}

export { navigationBlocking }
