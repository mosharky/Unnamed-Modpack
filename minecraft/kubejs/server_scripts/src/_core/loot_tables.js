/** @param {$LootActionsBuilderJS_} all */
function lootReplacements_Core(all) {
    global.BLOCK_SWAPPER.forEach((value, key) => {
        if (Item.exists(key) && Item.exists(value)) {
            all.replaceLoot(key, value, true)
        }
    })
    
    global.ITEM_SWAPPER.forEach((value, key) => {
        all.replaceLoot(key, value, true)
    })
}

/** @param {$LootModificationEventJS_} e */
function lootTables_Core(e) {
    e.addEntityLootModifier('minecraft:ravager')
        .addLoot('kubejs:ravager_hide')
}