/**
 * TechVault Seed Data Script (DUPLICATE-SAFE)
 *
 * Run this in ServiceNow: System Diagnostics > Fix Scripts
 * Create new Fix Script, paste this code, and Run
 *
 * This script will NOT create duplicates if run multiple times
 */

// ========== CATEGORIES ==========
var categories = [
    { name: 'Hardware', active: true },
    { name: 'Software Access', active: true },
    { name: 'IT Support', active: true },
    { name: 'Workspace Setup', active: true },
];

gs.info('========== TECHVAULT SEED DATA ==========');
gs.info('');
gs.info('Creating TechVault Categories...');

categories.forEach(function(cat) {
    // Check if category already exists
    var checkGr = new GlideRecord('x_2015976_techva_0_category');
    checkGr.addQuery('name', cat.name);
    checkGr.query();

    if (checkGr.hasNext()) {
        gs.info('⊘ Category already exists: ' + cat.name + ' - skipping');
        return; // Skip to next category
    }

    // Create new category
    var gr = new GlideRecord('x_2015976_techva_0_category');
    gr.initialize();
    gr.setValue('name', cat.name);
    gr.setValue('active', cat.active);
    var sysId = gr.insert();

    if (sysId) {
        gs.info('✓ Created category: ' + cat.name + ' (' + sysId + ')');
    } else {
        gs.warn('✗ Failed to create category: ' + cat.name);
    }
});

// ========== HELPER: Get Category by Name ==========
function getCategorySysId(name) {
    var gr = new GlideRecord('x_2015976_techva_0_category');
    gr.addQuery('name', name);
    gr.query();
    if (gr.next()) {
        return gr.getUniqueValue();
    }
    return null;
}

// ========== ITEMS ==========
var items = [
    // HARDWARE
    {
        name: 'Laptop',
        category: 'Hardware',
        item_type: 'hardware',
        short_description: 'Business laptop for daily work',
        description: '<p>High-performance laptop with 16GB RAM, 512GB SSD, and company-standard software image.</p>',
        approval_required: true,
        fulfillment_sla: 5,
        availability_check: true,
        active: true
    },
    {
        name: 'Desktop',
        category: 'Hardware',
        item_type: 'hardware',
        short_description: 'Desktop workstation',
        description: '<p>Powerful desktop computer with dual monitors for office-based employees.</p>',
        approval_required: true,
        fulfillment_sla: 3,
        availability_check: true,
        active: true
    },
    {
        name: 'Monitor',
        category: 'Hardware',
        item_type: 'hardware',
        short_description: 'Additional monitor',
        description: '<p>24-inch or 27-inch monitor for dual-screen setup.</p>',
        approval_required: true,
        fulfillment_sla: 2,
        availability_check: true,
        active: true
    },

    // SOFTWARE ACCESS
    {
        name: 'Microsoft Office',
        category: 'Software Access',
        item_type: 'software',
        short_description: 'Office productivity suite',
        description: '<p>Microsoft Office 365 including Word, Excel, PowerPoint, and Outlook.</p>',
        approval_required: true,
        fulfillment_sla: 1,
        availability_check: false,
        active: true
    },
    {
        name: 'Adobe Creative Suite',
        category: 'Software Access',
        item_type: 'software',
        short_description: 'Design and creative software',
        description: '<p>Adobe Photoshop, Illustrator, InDesign, and other creative tools for design team.</p>',
        approval_required: true,
        fulfillment_sla: 2,
        availability_check: false,
        active: true
    },
    {
        name: 'Slack',
        category: 'Software Access',
        item_type: 'software',
        short_description: 'Team collaboration tool',
        description: '<p>Slack workspace for team communication and collaboration.</p>',
        approval_required: true,
        fulfillment_sla: 1,
        availability_check: false,
        active: true
    },
    {
        name: 'Jira Software',
        category: 'Software Access',
        item_type: 'software',
        short_description: 'Project tracking tool',
        description: '<p>Jira Software license for project management and issue tracking.</p>',
        approval_required: true,
        fulfillment_sla: 1,
        availability_check: false,
        active: true
    },

    // IT SUPPORT
    {
        name: 'Password Reset',
        category: 'IT Support',
        item_type: 'service',
        short_description: 'Reset forgotten password',
        description: '<p>Password reset service for Active Directory accounts.</p>',
        approval_required: false,
        fulfillment_sla: 0.5,
        availability_check: false,
        active: true
    },
    {
        name: 'Network Issue',
        category: 'IT Support',
        item_type: 'service',
        short_description: 'Network connectivity problem',
        description: '<p>Troubleshooting and resolution for network connectivity issues.</p>',
        approval_required: false,
        fulfillment_sla: 1,
        availability_check: false,
        active: true
    },
    {
        name: 'Printer Setup',
        category: 'IT Support',
        item_type: 'service',
        short_description: 'Configure printer access',
        description: '<p>Setup network or local printer on workstation.</p>',
        approval_required: false,
        fulfillment_sla: 0.5,
        availability_check: false,
        active: true
    },

    // WORKSPACE SETUP
    {
        name: 'New Workstation',
        category: 'Workspace Setup',
        item_type: 'service',
        short_description: 'Complete new hire workstation setup',
        description: '<p>Full workstation setup including computer, monitors, peripherals, and software installation.</p>',
        approval_required: true,
        fulfillment_sla: 5,
        availability_check: false,
        active: true
    },
    {
        name: 'Remote Work Kit',
        category: 'Workspace Setup',
        item_type: 'service',
        short_description: 'Home office equipment package',
        description: '<p>Remote work essentials including monitor, keyboard, mouse, and headset.</p>',
        approval_required: true,
        fulfillment_sla: 3,
        availability_check: true,
        active: true
    },
    {
        name: 'Ergonomic Equipment',
        category: 'Workspace Setup',
        item_type: 'service',
        short_description: 'Ergonomic accessories',
        description: '<p>Ergonomic chair, keyboard tray, monitor stand, or other ergonomic accessories.</p>',
        approval_required: true,
        fulfillment_sla: 3,
        availability_check: true,
        active: true
    },
];

gs.info('');
gs.info('Creating TechVault Catalog Items...');

items.forEach(function(item) {
    // Check if item already exists
    var checkGr = new GlideRecord('x_2015976_techva_0_item');
    checkGr.addQuery('name', item.name);
    checkGr.query();

    if (checkGr.hasNext()) {
        gs.info('⊘ Item already exists: ' + item.name + ' - skipping');
        return; // Skip to next item
    }

    // Get category reference
    var catSysId = getCategorySysId(item.category);

    if (!catSysId) {
        gs.warn('✗ Category not found: ' + item.category + ' - skipping item: ' + item.name);
        return;
    }

    // Create new item
    var gr = new GlideRecord('x_2015976_techva_0_item');
    gr.initialize();
    gr.setValue('name', item.name);
    gr.setValue('category', catSysId);
    gr.setValue('item_type', item.item_type);
    gr.setValue('short_description', item.short_description);
    gr.setValue('description', item.description);
    gr.setValue('approval_required', item.approval_required);
    gr.setValue('fulfillment_sla', item.fulfillment_sla);
    gr.setValue('availability_check', item.availability_check);
    gr.setValue('active', item.active);
    var sysId = gr.insert();

    if (sysId) {
        gs.info('✓ Created item: ' + item.name + ' [' + item.item_type + '] (' + sysId + ')');
    } else {
        gs.warn('✗ Failed to create item: ' + item.name);
    }
});

// ========== SUMMARY ==========
gs.info('');
gs.info('========== SEED DATA COMPLETE ==========');

var catCount = new GlideRecord('x_2015976_techva_0_category');
catCount.query();
var totalCats = catCount.getRowCount();

var itemCount = new GlideRecord('x_2015976_techva_0_item');
itemCount.query();
var totalItems = itemCount.getRowCount();

gs.info('Categories: ' + totalCats);
gs.info('Items: ' + totalItems);
gs.info('');
gs.info('Next steps:');
gs.info('1. Navigate to TechVault > Categories to verify');
gs.info('2. Navigate to TechVault > Items to verify');
gs.info('3. Create a test request');
gs.info('==========================================');
