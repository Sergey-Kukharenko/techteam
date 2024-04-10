import { FocusDetector } from "@ga/shared-browser";

export const bindKeyboardAndPointerListeners = () => {
    const storeApp = useAppStore()
    const focusDetector = new FocusDetector()

    const onPointerEvent = () => {
        focusDetector.pointerInteraction = true

        focusDetector.resetPointerInteractionTimeout()
    }

    const onKeyboardEvent = () => {
        focusDetector.pointerInteraction = false

        focusDetector.unsetPointerInteractionTimeout()
    }

    const onFocusIn = () => {
        const source = focusDetector.getFocusSource()

        storeApp.setFocusSource({ value: source })

        storeApp.setWithFocusKeyboard({
            value: !focusDetector.pointerInteraction,
        })
    }

    const html = document.documentElement

    html.addEventListener('mousedown', onPointerEvent, false)
    html.addEventListener('mouseup', onPointerEvent, false)
    html.addEventListener('click', onPointerEvent, false)

    html.addEventListener('keydown', onKeyboardEvent, false)

    html.addEventListener('focusin', onFocusIn, false)

    onFocusIn()
}
