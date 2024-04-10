import {HoverDetector} from "@ga/shared-browser";

export const detectWindowHoverMedia = () => {
    const storeApp = useAppStore()
    const hoverDetector = new HoverDetector()

    if (!hoverDetector.isSupportHover) {
        // если @media (hover) не поддерживается, то предполагаем,
        // что это старый десктопный браузер и разрешаем :hover
        storeApp.setWithHover({ value: true })

        return
    }

    const hoverMedia = window.matchMedia('(hover: hover)')

    hoverMedia.addListener((event) =>
        storeApp.setWithHover({ value: event.matches })
    )

    storeApp.setWithHover({ value: hoverMedia.matches })
}
