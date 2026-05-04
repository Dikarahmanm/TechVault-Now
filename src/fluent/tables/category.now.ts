import '@servicenow/sdk/global'
import { BooleanColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_2015976_techva_0_category = Table({
    name: 'x_2015976_techva_0_category',
    label: 'TechVault Category',
    schema: {
        name: StringColumn({
            label: 'Category Name',
            maxLength: 100,
            mandatory: true,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
