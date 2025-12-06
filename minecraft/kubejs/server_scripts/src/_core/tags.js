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
    e.add('kubejs:has_feature/stone_cliff', [
        'natures_spirit:blooming_sugi_forest',
        'natures_spirit:boreal_taiga',
        'natures_spirit:fir_forest',
        'natures_spirit:oak_savanna',
        'natures_spirit:prairie',
        'natures_spirit:snowy_fir_forest',
        'natures_spirit:sugi_forest',
        'natures_spirit:tundra',
        'natures_spirit:windswept_sugi_forest',
        'minecraft:cherry_grove',
        'minecraft:grove',
        'minecraft:meadow',
        'minecraft:snowy_slopes',
        'minecraft:windswept_forest',
        'minecraft:windswept_gravelly_hills',
        'minecraft:windswept_hills',
    ])
    e.add('kubejs:has_feature/terracotta_cliff', [
        'natures_spirit:bamboo_wetlands',
        'minecraft:bamboo_jungle',
        'minecraft:jungle',
        'minecraft:sparse_jungle',
    ])
    e.add('kubejs:has_feature/andesite_cliff', [
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'natures_spirit:coniferous_covert',
        'natures_spirit:heather_fields',
        '#windswept:is_pine_barrens',
    ])
    e.add('kubejs:has_feature/granite_cliff', [
        'natures_spirit:golden_wilds',
        'natures_spirit:maple_woodlands',
        'natures_spirit:marigold_meadows',
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest',
        'windswept:chestnut_forest',
    ])
}