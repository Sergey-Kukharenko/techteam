import { getScrollTop } from "@ga/shared-browser";

export  const bindWindowScrollListener = () => {
    const storeApp = useAppStore()

    const onScroll = () => {
        const scrollTop = getScrollTop()

        storeApp.setScrollTop({ scrollTop })
    }

    window.addEventListener('scroll', onScroll)

    onScroll()
}
