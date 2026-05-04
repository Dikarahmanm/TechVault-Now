import '@servicenow/sdk/global'
import { ChoiceColumn, DateTimeColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_2015976_techva_0_approval_log = Table({
    name: 'x_2015976_techva_0_approval_log',
    label: 'TechVault Approval Log',
    schema: {
        request: ReferenceColumn({
            label: 'Request',
            referenceTable: 'x_2015976_techva_0_request',
            mandatory: true,
        }),
        actor: ReferenceColumn({
            label: 'Actor',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        decision: ChoiceColumn({
            label: 'Decision',
            mandatory: true,
            choices: {
                approved: 'Approved',
                rejected: 'Rejected',
            },
        }),
        comments: StringColumn({
            label: 'Comments',
            maxLength: 1000,
        }),
        timestamp: DateTimeColumn({
            label: 'Timestamp',
            mandatory: true,
        }),
    },
})
