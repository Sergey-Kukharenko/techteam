import { detectWindowHoverMedia } from "./detectWindowHoverMedia";
import { bindWindowResizeListeners } from './bindWindowResizeListeners';
import { bindWindowScrollListener } from './bindWindowScrollListener';
import { bindKeyboardAndPointerListeners } from "./bindKeyboardAndPointerListeners";

export const initClient = async () => {
  // /**
  //  * Метод инициализации пользователя
  //  */
  // const initUser = async () => {
  //   await useAuthService().init()
  // }

  /**
   * Метод проверки поддержки media (hover)
   */
  const detectHoverMedia = () => {
    detectWindowHoverMedia()
  }

  /**
   * Метод инициализации слушателя события `orientationchange` и `resize`
   */
  const initWindowResizeListener = () => {
    bindWindowResizeListeners()
  }

  /**
   * Метод инициализации слушателя события `scroll`
   */
  const initWindowScrollListener = () => {
    bindWindowScrollListener()
  }

  /**
   * Метод инициализации слушателей для событий
   * keyboard, mousedown, mouseup, click, keydown, focusin
   */
  const initKeyboardAndPointerListener = () => {
    bindKeyboardAndPointerListeners()
  }

  const initCurrentBreakpoint = () => {
    const storeWindow = useWindowStore()

    storeWindow.setCurrentBreakpoint()
  }

  const init = async () => {
    try {
      // await initUser()

      initWindowResizeListener()
      initWindowScrollListener()
      initKeyboardAndPointerListener()
      detectHoverMedia()
      initCurrentBreakpoint()

    } catch (error) {
      showError('')
      console.error('Ошибка инициализации клиента', error)
    }
  }

  await init()
}
