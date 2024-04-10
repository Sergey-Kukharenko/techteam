import { GaButtonExpanded } from '../'
import { VIEW, SIZE } from '../scripts/const'

export { Base } from './base.stories'
export { ComparisonTable } from './comparisonTable.stories'

export default {
    title: 'Design System/Button/Expanded',
    component: GaButtonExpanded,
    args: {
        view: VIEW.MAIN,
        size: SIZE.M,
        text: 'Кнопка',
        icon: '<ga-icon-additional-button-arrow />',
        iconWidth: 15,
        iconHeight: 15,
    },
    argTypes: {
        view: {
            control: { type: 'select' },
            options: Object.values(VIEW),
            table: {
                type: { summary: Object.values(VIEW) },
                defaultValue: { summary: VIEW.MAIN },
            },
        },
        size: {
            control: { type: 'select' },
            options: Object.values(SIZE),
            table: {
                type: { summary: Object.values(SIZE) },
                defaultValue: { summary: SIZE.M },
            },
        },
        icon: {
            control: {
                type: 'text',
            },
            meta_description: 'slot content',
            table: {
                type: {
                    summary: null,
                },
            },
        },
    },
}
