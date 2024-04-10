export const bindWindowResizeListeners = () => {
    const store = useWindowStore()

    const RESIZING_DELAY = 200

    let resizingTimeout = setTimeout(() => {}, 0)

    const updateWindowSize = () => {
        const { innerWidth, innerHeight } = window

        store.setWindowSize({ innerWidth, innerHeight })
    }

    const setWindowPropertyInnerHeight = () => {
        const propertyName = '--window-inner-height'
        const propertyValue = `${window.innerHeight}px`

        document.documentElement.style.setProperty(propertyName, propertyValue)
    }

    const onResizeFinish = () => {
        store.setWindowResizingState({ value: false })

        store.setWindowSizeLazy()
    }

    const onResizeStart = () => {
        store.setWindowResizingState({ value: true })

        clearTimeout(resizingTimeout)
        resizingTimeout = setTimeout(onResizeFinish, RESIZING_DELAY)
    }

    const onOrientationChange = () => {
        onResizeStart()
        updateWindowSize()
    }

    const onResize = () => {
        onResizeStart()
        updateWindowSize()
        setWindowPropertyInnerHeight()

        store.setCurrentBreakpoint()
    }

    window.addEventListener('orientationchange', onOrientationChange)
    window.addEventListener('resize', onResize)

    onResize()
}
