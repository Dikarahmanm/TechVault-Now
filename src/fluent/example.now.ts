import '@servicenow/sdk/global'
import { BusinessRule, ClientScript, ScriptInclude } from '@servicenow/sdk/core'
import {
    autoNumber,
    setOpenedAt,
    routeToApproval,
    validateQuantity,
    mandateJustification,
    setClosedAt,
    logApprovalAction,
} from '../server/script'

// ── BUSINESS RULES ────────────────────────────────────────────

BusinessRule({
    $id: Now.ID['br_auto_number'],
    name: 'TVR Auto Number',
    table: 'x_2015976_techva_0_request',
    when: 'before',
    action: ['insert'],
    order: 100,
    active: true,
    script: autoNumber,
})

BusinessRule({
    $id: Now.ID['br_set_opened_at'],
    name: 'TVR Set Opened At',
    table: 'x_2015976_techva_0_request',
    when: 'before',
    action: ['insert'],
    order: 101,
    active: true,
    script: setOpenedAt,
})

BusinessRule({
    $id: Now.ID['br_route_approval'],
    name: 'TVR Route to Approval',
    table: 'x_2015976_techva_0_request',
    when: 'after',
    action: ['update'],
    order: 100,
    active: true,
    script: routeToApproval,
})

BusinessRule({
    $id: Now.ID['br_validate_quantity'],
    name: 'TVR Validate Quantity',
    table: 'x_2015976_techva_0_request',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: validateQuantity,
})

BusinessRule({
    $id: Now.ID['br_mandate_justification'],
    name: 'TVR Mandate Justification',
    table: 'x_2015976_techva_0_request',
    when: 'before',
    action: ['insert', 'update'],
    order: 101,
    active: true,
    script: mandateJustification,
})

BusinessRule({
    $id: Now.ID['br_set_closed_at'],
    name: 'TVR Set Closed At',
    table: 'x_2015976_techva_0_request',
    when: 'before',
    action: ['update'],
    order: 100,
    active: true,
    script: setClosedAt,
})

BusinessRule({
    $id: Now.ID['br_log_approval'],
    name: 'TVR Log Approval Action',
    table: 'x_2015976_techva_0_request',
    when: 'after',
    action: ['update'],
    order: 100,
    active: true,
    script: logApprovalAction,
})

// ── CLIENT SCRIPTS ────────────────────────────────────────────

ClientScript({
    $id: Now.ID['cs_role_visibility'],
    name: 'TVR onLoad Role Visibility',
    table: 'x_2015976_techva_0_request',
    type: 'onLoad',
    ui_type: 'all',
    active: true,
    applies_extended: false,
    global: false,
    isolate_script: false,
    messages: '',
    description: 'Hide manager approval and comments fields for requester-only users',
    script: script`function onLoad() {
        var isRequesterOnly = g_user.hasRole('x_2015976_techva_0.requester')
            && !g_user.hasRole('x_2015976_techva_0.manager')
            && !g_user.hasRole('x_2015976_techva_0.fulfiller')
            && !g_user.hasRole('x_2015976_techva_0.admin')

        if (isRequesterOnly) {
            g_form.setDisplay('manager_approval', false)
            g_form.setDisplay('manager_comments', false)
        }
    }`,
})

ClientScript({
    $id: Now.ID['cs_toggle_quantity'],
    name: 'TVR onChange Toggle Quantity',
    table: 'x_2015976_techva_0_request',
    type: 'onChange',
    field: 'item',
    ui_type: 'all',
    active: true,
    applies_extended: false,
    global: false,
    isolate_script: false,
    messages: '',
    description: 'Show quantity field only when selected item is hardware type',
    script: script`function onChange(control, oldValue, newValue, isLoading) {
        if (isLoading || !newValue) {
            g_form.setDisplay('quantity', false)
            g_form.setMandatory('quantity', false)
            return
        }

        var ga = new GlideAjax('TechVaultInventoryUtil')
        ga.addParam('sysparm_name', 'getItemType')
        ga.addParam('sysparm_item_id', newValue)
        ga.getXMLAnswer(function(answer) {
            var isHardware = (answer === 'hardware')
            g_form.setDisplay('quantity', isHardware)
            g_form.setMandatory('quantity', isHardware)
            if (!isHardware) {
                g_form.setValue('quantity', '')
            }
        })
    }`,
})

// CS-01b: onLoad - set initial quantity visibility
ClientScript({
    $id: Now.ID['cs_init_quantity'],
    name: 'TVR onLoad Init Quantity',
    table: 'x_2015976_techva_0_request',
    type: 'onLoad',
    ui_type: 'all',
    active: true,
    applies_extended: false,
    global: false,
    isolate_script: false,
    messages: '',
    description: 'Initialize quantity field visibility based on current item',
    script: script`function onLoad() {
        var itemId = g_form.getValue('item')

        if (!itemId) {
            g_form.setDisplay('quantity', false)
            g_form.setMandatory('quantity', false)
            return
        }

        var ga = new GlideAjax('TechVaultInventoryUtil')
        ga.addParam('sysparm_name', 'getItemType')
        ga.addParam('sysparm_item_id', itemId)
        ga.getXMLAnswer(function(answer) {
            var isHardware = (answer === 'hardware')
            g_form.setDisplay('quantity', isHardware)
            g_form.setMandatory('quantity', isHardware)
            if (!isHardware) {
                g_form.setValue('quantity', '')
            }
        })
    }`,
})

ClientScript({
    $id: Now.ID['cs_bulk_warning'],
    name: 'TVR onChange Bulk Warning',
    table: 'x_2015976_techva_0_request',
    type: 'onChange',
    field: 'quantity',
    ui_type: 'all',
    active: true,
    applies_extended: false,
    global: false,
    isolate_script: false,
    messages: '',
    description: 'Show info message when quantity exceeds 3 items',
    script: script`function onChange(control, oldValue, newValue, isLoading) {
        if (isLoading) return

        g_form.clearMessages()

        var qty = parseInt(newValue)
        if (!isNaN(qty) && qty > 3) {
            g_form.showFieldMsg('quantity', 'Large quantity requests may require additional justification.', 'info')
        }
    }`,
})

ClientScript({
    $id: Now.ID['cs_cancel_confirm'],
    name: 'TVR onSubmit Cancel Confirm',
    table: 'x_2015976_techva_0_request',
    type: 'onSubmit',
    ui_type: 'all',
    active: true,
    applies_extended: false,
    global: false,
    isolate_script: false,
    messages: '',
    description: 'Require confirmation before submitting a request cancellation',
    script: script`function onSubmit() {
        var action = g_form.getActionName()

        if (action === 'cancel_request') {
            var confirmed = confirm('Are you sure you want to cancel this request? This cannot be undone.')
            if (!confirmed) {
                return false
            }
        }

        return true
    }`,
})

ClientScript({
    $id: Now.ID['cs_cell_edit_guard'],
    name: 'TVR onCellEdit State Guard',
    table: 'x_2015976_techva_0_request',
    type: 'onCellEdit',
    field: 'state',
    ui_type: 'all',
    active: true,
    applies_extended: false,
    global: false,
    isolate_script: false,
    messages: '',
    description: 'Block inline list editing of state to fulfilled; require full form',
    script: script`function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
        if (newValue == 4) {  // Task state: 4 = Complete (fulfilled)
            alert('Please open the full record to mark a request as Fulfilled.')
            callback(false)
            return
        }
        callback(true)
    }`,
})

// ── SCRIPT INCLUDE ────────────────────────────────────────────

ScriptInclude({
    $id: Now.ID['si_inventory_util'],
    name: 'TechVaultInventoryUtil',
    description: 'Client-callable Ajax processor. Checks inventory availability via external REST API and provides item type lookup for client scripts.',
    active: true,
    clientCallable: true,
    accessibleFrom: 'package_private',
    script: script`
var TechVaultInventoryUtil = Class.create();
TechVaultInventoryUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    checkAvailability: function() {
        var itemId = this.getParameter('sysparm_item_id');

        if (!itemId) {
            return JSON.stringify({ error: true, message: 'No item ID provided.' });
        }

        // TODO: Replace with actual REST API call when inventory.nexoria.internal is available
        // For now, returning hardcoded values for testing
        return JSON.stringify({
            available: true,
            stock: 10,
            eta: '2-3 business days'
        });

        /* Original API call (commented out until endpoint is ready)
        try {
            var rm = new sn_ws.RESTMessageV2();
            rm.setHttpMethod('GET');
            rm.setEndpoint('https://inventory.nexoria.internal/api/v1/items/' + itemId + '/availability');
            rm.setAuthenticationProfile('bearer_token', 'TechVaultInventoryBearerToken');
            rm.setHttpTimeout(10000);

            var response = rm.execute();
            var statusCode = response.getStatusCode();

            if (response.haveError() || statusCode < 200 || statusCode >= 300) {
                return JSON.stringify({ error: true, message: 'Inventory API error. Status: ' + statusCode });
            }

            var parsed = JSON.parse(response.getBody());
            return JSON.stringify({ available: parsed.available, stock: parsed.stock, eta: parsed.eta });

        } catch (e) {
            return JSON.stringify({ error: true, message: 'Unexpected error: ' + e.message });
        }
        */
    },

    getItemType: function() {
        var itemId = this.getParameter('sysparm_item_id');
        if (!itemId) return '';

        var item = new GlideRecord('x_2015976_techva_0_item');
        if (item.get(itemId)) {
            return item.getValue('item_type');
        }
        return '';
    },

    type: 'TechVaultInventoryUtil'
});
    `,
})
