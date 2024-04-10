/**
 * Возвращает количество пикселей, прокрученных от верха страницы
 *
 * @returns {number} количество пикселей, прокрученных от верха страницы
 */

function getScrollTop() {
  const maxScrollTop =
    (document.body.scrollHeight || document.documentElement.scrollHeight) -
    window.innerHeight

  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop

  if (scrollTop < 0) {
    scrollTop = 0
  } else if (scrollTop > maxScrollTop) {
    scrollTop = maxScrollTop
  }

  return scrollTop
}

export { getScrollTop }
