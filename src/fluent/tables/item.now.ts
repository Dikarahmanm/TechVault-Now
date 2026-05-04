import '@servicenow/sdk/global'
import { BooleanColumn, ChoiceColumn, IntegerColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_2015976_techva_0_item = Table({
    name: 'x_2015976_techva_0_item',
    label: 'TechVault Catalog Item',
    schema: {
        name: StringColumn({
            label: 'Item Name',
            maxLength: 255,
            mandatory: true,
        }),
        category: ReferenceColumn({
            label: 'Category',
            referenceTable: 'x_2015976_techva_0_category',
            mandatory: true,
        }),
        item_type: ChoiceColumn({
            label: 'Item Type',
            mandatory: true,
            choices: {
                hardware: 'Hardware',
                software: 'Software',
                service: 'Service',
            },
        }),
        short_description: StringColumn({
            label: 'Short Description',
            maxLength: 255,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 4000,
        }),
        approval_required: BooleanColumn({
            label: 'Approval Required',
            default: true,
        }),
        fulfillment_sla: IntegerColumn({
            label: 'Fulfillment SLA (days)',
        }),
        availability_check: BooleanColumn({
            label: 'Availability Check',
            default: false,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
