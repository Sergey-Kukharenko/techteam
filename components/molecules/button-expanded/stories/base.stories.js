import * as icons from '@ga/icons'

import { GaButtonExpanded } from '../'

const Template = (args, { argTypes }) => ({
    components: { GaButtonExpanded, ...icons },
    props: Object.keys(argTypes),
    template: `
        <ga-button-expanded v-bind='$props'>
            <template #icon>
                ${args.icon}
            </template>
        </ga-button-expanded>
        `,
})

export const Base = Template.bind({})
Base.args = {}
