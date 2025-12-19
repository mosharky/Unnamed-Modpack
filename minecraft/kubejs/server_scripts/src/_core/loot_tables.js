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
        .randomChance(0.3)
        .addLoot('kubejs:ravager_hide')
    e.addEntityLootModifier('goety:ravager')
        .randomChance(0.3)
        .addLoot('kubejs:ravager_hide')
    e.addEntityLootModifier('goety:trampler')
        .randomChance(0.3)
        .addLoot('kubejs:ravager_hide')
}