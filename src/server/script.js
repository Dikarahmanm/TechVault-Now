import { gs, GlideRecord } from '@servicenow/glide'

// BR-01: Auto-generate request number TVR + 7-digit zero-padded sequence (starts at 1001)
export function autoNumber(current, previous) {
    var gr = new GlideRecord('x_2015976_techva_0_request')
    gr.query()
    var count = gr.getRowCount() + 1001
    var padded = String(count).padStart(7, '0')
    current.setValue('number', 'TVR' + padded)
}

// BR-02: Set opened_at on first insert, never overwrite
export function setOpenedAt(current, previous) {
    if (!current.getValue('opened_at')) {
        current.setValue('opened_at', gs.nowDateTime())
    }
}

// BR-03: Fire event when state transitions TO pending (3 = Waiting)
export function routeToApproval(current, previous) {
    var prevState = previous.getValue('state')
    var currState = current.getValue('state')
    // Task state: 3 = Waiting (mirip pending_approval)
    if (currState == 3 && prevState != 3) {
        gs.eventQueue('x_2015976_techva_0.request.pending_approval', current, '', '')
    }
}

// BR-04: Validate quantity is 1–5 for hardware items
export function validateQuantity(current, previous) {
    var itemRef = current.getValue('item')
    if (!itemRef) return

    var item = new GlideRecord('x_2015976_techva_0_item')
    if (item.get(itemRef) && item.getValue('item_type') === 'hardware') {
        var qty = current.getValue('quantity')

        // Skip validation if quantity is empty/not set
        if (!qty || qty === '') {
            return
        }

        var qtyNum = parseInt(qty)
        if (isNaN(qtyNum) || qtyNum < 1) {
            current.setAbortAction(true)
            gs.addErrorMessage('Quantity must be at least 1 for hardware items.')
        } else if (qtyNum > 5) {
            current.setAbortAction(true)
            gs.addErrorMessage('Quantity cannot exceed 5 per hardware request.')
        }
    }
}

// BR-05: Require business_justification for Software Access category
export function mandateJustification(current, previous) {
    var itemRef = current.getValue('item')
    if (!itemRef) return

    var item = new GlideRecord('x_2015976_techva_0_item')
    if (item.get(itemRef)) {
        var catRef = item.getValue('category')
        var cat = new GlideRecord('x_2015976_techva_0_category')
        if (cat.get(catRef) && cat.getValue('name') === 'Software Access') {
            if (!current.getValue('business_justification')) {
                current.setAbortAction(true)
                gs.addErrorMessage('Business justification is required for Software Access requests.')
            }
        }
    }
}

// BR-06: Set closed_at when state transitions TO Complete (4)
export function setClosedAt(current, previous) {
    var currState = current.getValue('state')
    var prevState = previous.getValue('state')
    // Task state: 4 = Complete (mirip fulfilled)
    if (currState == 4 && prevState != 4) {
        current.setValue('closed_at', gs.nowDateTime())
    }
}

// BR-07: Log manager_approval decision to approval_log when field changes
export function logApprovalAction(current, previous) {
    var currAppr = current.getValue('manager_approval')
    var prevAppr = previous.getValue('manager_approval')
    if (currAppr === prevAppr) return

    var log = new GlideRecord('x_2015976_techva_0_approval_log')
    log.initialize()
    log.setValue('request', current.getValue('sys_id'))
    log.setValue('actor', gs.getUserID())
    log.setValue('decision', currAppr)
    log.setValue('comments', current.getValue('manager_comments'))
    log.setValue('timestamp', gs.nowDateTime())
    log.insert()
}
