/** @param {$LootModificationEventJS_} e */
function coreLootTables(e) {
    e.addLootTableModifier(/.*/)
        .replaceLoot('quark:crab_leg', 'minecraft:cod', true)
}