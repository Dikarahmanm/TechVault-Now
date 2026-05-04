import '@servicenow/sdk/global'
import { BooleanColumn, ChoiceColumn, DateTimeColumn, IntegerColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_2015976_techva_0_request = Table({
    name: 'x_2015976_techva_0_request',
    label: 'TechVault Request',
    extends: 'task',
    autoNumber: {
        prefix: 'TVR',
        number: 1001,
        numberOfDigits: 7,
    },
    schema: {
        requested_by: ReferenceColumn({
            label: 'Requested By',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        item: ReferenceColumn({
            label: 'Catalog Item',
            referenceTable: 'x_2015976_techva_0_item',
            mandatory: true,
        }),
        quantity: IntegerColumn({
            label: 'Quantity',
        }),
        business_justification: StringColumn({
            label: 'Business Justification',
            maxLength: 2000,
        }),
        manager_approval: ChoiceColumn({
            label: 'Manager Approval',
            default: 'pending',
            choices: {
                pending: 'Pending',
                approved: 'Approved',
                rejected: 'Rejected',
            },
        }),
        manager_comments: StringColumn({
            label: 'Manager Comments',
            maxLength: 1000,
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        fulfillment_notes: StringColumn({
            label: 'Fulfillment Notes',
            maxLength: 2000,
        }),
        availability_checked: BooleanColumn({
            label: 'Availability Checked',
            default: false,
        }),
        availability_status: StringColumn({
            label: 'Availability Status',
            maxLength: 500,
        }),
        opened_at: DateTimeColumn({
            label: 'Opened At',
        }),
        closed_at: DateTimeColumn({
            label: 'Closed At',
        }),
    },
})
