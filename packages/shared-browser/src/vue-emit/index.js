/**
 * Вызывает хендлеры вьюшных событий
 * https://stackoverflow.com/a/40720172
 *
 * @param {VNode} vnode VNode-элемент
 * @param {string} name Название события
 * @param {object} data Событие обработчика
 * @return {undefined}
 */
function vueEmit(vnode, name, data) {
  const handlers =
    (vnode.data && vnode.data.on) ||
    (vnode.componentOptions && vnode.componentOptions.listeners)

  if (handlers && handlers[name]) {
    handlers[name].fns(data)
  }
}

export { vueEmit }
