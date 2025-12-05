/** @param {$TagEventJS_} e */
function itemTags_Core(e) {
    e.removeAllTagsFrom(global.REMOVALS.getAsArray())
}

/** @param {$TagEventJS_} e */
function blockTags_Core(e) {
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
function entityTags_Core(e) {
    // e.add('kubejs:surface_mod_entities', /.*surface:.*/)
}


/** @param {$TagEventJS_} e */
function biomeTags_Core(e) {
    e.add('kubejs:has_feature/sparse_maple_tree', [
        'minecraft:forest',
        'minecraft:windswept_forest',
        'minecraft:flower_forest'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/orange', [
        'minecraft:dark_forest',
        'windswept:chestnut_forest',
        'windswept:snowy_chestnut_forest'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/red', [
        'minecraft:taiga',
        'minecraft:windswept_forest',
        'windswept:pine_barrens',
        'windswept:snowy_pine_barrens'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/yellow', [
        'minecraft:forest'
    ])
    e.add('kubejs:has_feature/andesite_cliff', [
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'natures_spirit:coniferous_covert',
        'natures_spirit:heather_fields',
    ])
    e.add('kubejs:has_feature/granite_cliff', [
        'natures_spirit:golden_wilds',
        'natures_spirit:maple_woodlands',
        'natures_spirit:marigold_meadows',
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest',
    ])
}