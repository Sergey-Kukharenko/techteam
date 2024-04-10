import * as icons from '@ga/icons'

import SbComparisonTable from '../../../../../.storybook/components/comparison-table'

import { GaButtonExpanded } from '../'
import { VIEW, SIZE } from '../scripts/const'

const Template = (args, { argTypes }) => ({
    components: { GaButtonExpanded, SbComparisonTable, ...icons },
    props: Object.keys(argTypes),
    template: `
        <sb-comparison-table :headers='$props.headers' :rows='$props.rows' :columnWidth='270'>
            <template #cell='{ item }'>
                <ga-button-expanded
                    :view='item.view'
                    :size='item.size'
                    :icon-width='$props.iconWidth'
                    :icon-height='$props.iconHeight'
                    :text='$props.text'
                >
                    <template #icon>
                        ${args.icon}
                    </template>
                </ga-button-expanded>
            </template>
        </sb-comparison-table>
        `,
})

export const ComparisonTable = Template.bind({})
ComparisonTable.args = {
    headers: [{ name: VIEW.MAIN }, { name: VIEW.INVERT, accent: true }, { name: VIEW.LINE }],

    rows: [
        {
            name: 'Default M',
            mods: {
                size: SIZE.M,
            },
            items: [{ view: VIEW.MAIN }, { view: VIEW.INVERT }, { view: VIEW.LINE }],
        },
    ],
}
