/** @param {$TagEventJS_} e */
function coreItemTags(e) {

}

/** @param {$TagEventJS_} e */
function coreBlockTags(e) {
    e.add('snowrealmagic:containables', [
        // /geocluster:.*sample/
    ])

    // used for Panda's Falling Trees compat
    e.add('kubejs:extra_tree_blocks_whitelist', [
        /natures_spirit:.*wisteria_vines/
    ])

    // e.add('minecraft:logs', ['natures_spirit:alluaudia', 'natures_spirit:stripped_alluaudia'])
}

/** @param {$TagEventJS_} e */
function coreEntityTags(e) {
    // e.add('kubejs:surface_mod_entities', /.*surface:.*/)
}


/** @param {$TagEventJS_} e */
function coreBiomeTags(e) {
    e.add('kubejs:has_feature/sparse_maple_tree', [
        'minecraft:forest', 
        'minecraft:windswept_forest', 
        'minecraft:flower_forest'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/orange', [
        'minecraft:dark_forest'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/red', [
        'minecraft:taiga', 
        'minecraft:windswept_forest'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/yellow', [
        'minecraft:forest'
    ])
}