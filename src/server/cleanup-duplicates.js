/**
 * TechVault Cleanup Duplicate Data
 *
 * This script removes duplicate Categories and Items
 * Keeps the FIRST record (oldest sys_id), deletes the rest
 */

gs.info('========== CLEANING DUPLICATES ==========');
gs.info('');

// ========== CLEANUP CATEGORIES ==========
gs.info('Checking for duplicate Categories...');

var catDuplicates = 0;
var catGr = new GlideRecord('x_2015976_techva_0_category');
catGr.orderBy('sys_created_on'); // Process oldest first
catGr.query();

var catSeen = {};
while (catGr.next()) {
    var name = catGr.getValue('name');

    if (catSeen[name]) {
        // This is a duplicate - delete it
        gs.info('✗ Deleting duplicate category: ' + name + ' (' + catGr.getUniqueValue() + ')');
        catGr.deleteRecord();
        catDuplicates++;
    } else {
        // First time seeing this name - keep it
        gs.info('✓ Keeping category: ' + name + ' (' + catGr.getUniqueValue() + ')');
        catSeen[name] = true;
    }
}

gs.info('Categories deleted: ' + catDuplicates);
gs.info('');

// ========== CLEANUP ITEMS ==========
gs.info('Checking for duplicate Items...');

var itemDuplicates = 0;
var itemGr = new GlideRecord('x_2015976_techva_0_item');
itemGr.orderBy('sys_created_on'); // Process oldest first
itemGr.query();

var itemSeen = {};
while (itemGr.next()) {
    var name = itemGr.getValue('name');

    if (itemSeen[name]) {
        // This is a duplicate - delete it
        gs.info('✗ Deleting duplicate item: ' + name + ' (' + itemGr.getUniqueValue() + ')');
        itemGr.deleteRecord();
        itemDuplicates++;
    } else {
        // First time seeing this name - keep it
        gs.info('✓ Keeping item: ' + name + ' [' + itemGr.getValue('item_type') + '] (' + itemGr.getUniqueValue() + ')');
        itemSeen[name] = true;
    }
}

gs.info('Items deleted: ' + itemDuplicates);
gs.info('');

// ========== SUMMARY ==========
gs.info('========== CLEANUP COMPLETE ==========');
gs.info('Total categories deleted: ' + catDuplicates);
gs.info('Total items deleted: ' + itemDuplicates);
gs.info('');
gs.info('Remaining records:');
var catCount = new GlideRecord('x_2015976_techva_0_category');
catCount.query();
gs.info('- Categories: ' + catCount.getRowCount());

var itemCount = new GlideRecord('x_2015976_techva_0_item');
itemCount.query();
gs.info('- Items: ' + itemCount.getRowCount());
gs.info('=========================================');
