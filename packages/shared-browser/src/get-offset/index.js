/**
 * Высчитывает offset элемента относительно документа или указанного родительского элемента.
 * Родительский элемент должен иметь position отличный от static.
 *
 * @param {HTMLElement} $element
 * @param {HTMLElement} $parent
 * @returns {object} offset элемента сверху и слева
 */
function getOffset($element, $parent = null) {
  let top = 0
  let left = 0

  let $elementInternal = $element

  while ($elementInternal && $elementInternal !== $parent) {
    top += parseInt($elementInternal.offsetTop, 10)
    left += parseInt($elementInternal.offsetLeft, 10)

    $elementInternal = $elementInternal.offsetParent
  }

  return { top, left }
}

export { getOffset }
