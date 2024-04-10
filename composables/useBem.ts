/*
 * Добавляет в компонент метод, чтобы использовать его в шаблонах.
 * Метод использует `bem-cn-lite` – генератор имен классов по методологии БЭМ.
 * Применение - const b = useBem('name-class')
 * Документация: https://github.com/mistakster/bem-cn-lite#readme
 */

import { useCssModule } from "vue";
import block from 'bem-cn-lite'
import { kebabCase } from 'lodash-es'

interface Modifications {
  [name: string]: string | boolean | undefined
}

// Описание интерфейса для отображения подсказок при использовании b()
export interface IGetBemClass {
  (
    elementName: string,
    modifiers: Modifications | null,
    mixin?: string | string[] | undefined
  ): string
  (elementName: string, mixin?: string | string[] | undefined): string
  (elementName: string, modifiers: Modifications): string
  (mods: Modifications | null, mixin?: string | string[] | undefined): string
  (elementName: string): string
  (mods: Modifications | null): string
  (): string
}

// Переводит классы по бэм в классы css модулей
const getCssModuleClass = function (
  style: { [key: string]: string },
  names: string
) {
  // Получаем массив классов
  const nameArr = names.split(' ')

  // Если в строке один класс сразу получаем новое имя
  if (nameArr.length > 1) {
    // Получаем модульные классы
    return nameArr
      .reduce((result: string[], name: string) => {
        // Проверяем есть ли нужный класс в css модулях
        if (name in style) {
          result.push(style[name])
        } else {
          result.push(name)
        }

        return result
      }, [])
      .join(' ')
  }

  if (names in style) {
    return style[names]
  }

  return names
}

export const useBem = (blockName?: string) => {
  const componentName = kebabCase(
    blockName ||
      // @ts-ignore
      (getCurrentInstance()?.type.name as string) ||
      // @ts-ignore
      (getCurrentInstance()?.type.__name as string)
  )

  // кешируем вызов функции block
  const cacheFuncBlock = block(componentName)

  const applyFunc = () => {
    const getBemClass: IGetBemClass = (...args: any[]) => {
      const style = useCssModule()
      const classNames = cacheFuncBlock(...(args as []))

      return getCssModuleClass(style, classNames)
    }

    return getBemClass
  }

  return applyFunc()
}

export default useBem
