/** @param {$LootActionsBuilderJS_} all */
function coreLootReplacements(all) {
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
function coreLootTables(e) {

}