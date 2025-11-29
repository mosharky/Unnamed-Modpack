/** @param {$TagEventJS_} e */
function biomeTags_Environmental(e) {
    e.add('environmental:has_structure/log_cabin', '#windswept:is_pine_barrens')

    e.add('kubejs:has_feature/environmental_dwarf_spruce', '#windswept:is_pine_barrens')

    e.add('environmental:has_feature/birds_of_paradise', [
        '#natures_spirit:is_tropical_woods'
    ])

    e.add('environmental:has_feature/cup_lichen', [
        '#windswept:is_pine_barrens',
        '#natures_spirit:is_alpine',
    ])

    e.add('environmental:has_feature/dwarf_spruce_sparse', [
        '#natures_spirit:is_alpine'
    ])

    e.add('environmental:has_feature/hibiscus', [
        '#natures_spirit:is_tropical_woods',
        'natures_spirit:floral_ridges',
        'minecraft:flower_forest'
    ])

    e.add('environmental:has_feature/tasselflower', [
        '#natures_spirit:is_xeric',
        'natures_spirit:oak_savanna'
    ])

    e.add('environmental:has_feature/violet', [
        'minecraft:forest',
        'minecraft:flower_forest',
        'minecraft:birch_forest',
        'minecraft:meadow',
        'minecraft:cherry_grove',
        '#natures_spirit:is_autumn',
        '#natures_spirit:is_alpine',
        'natures_spirit:wisteria_forest',
        'natures_spirit:floral_ridges',
        'natures_spirit:heather_fields',
        'natures_spirit:carnation_fields',
        'natures_spirit:lavender_fields',
        'natures_spirit:sugi_forest',
        'natures_spirit:windswept_sugi_forest',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'atmospheric:laurel_forest',
    ])

    e.add('environmental:spawns_chestnut_deer', [
        'windswept:chestnut_forest',
        'windswept:snowy_chestnut_forest',
        '#natures_spirit:is_autumn',
        'natures_spirit:wisteria_forest',
        'natures_spirit:sugi_forest',
        'natures_spirit:windswept_sugi_forest',
        'minecraft:flower_forest',
        'minecraft:birch_forest',
        'minecraft:cherry_grove'
    ])

    e.add('environmental:spawns_gray_deer', [
        '#windswept:is_pine_barrens',
        '#minecraft:is_taiga',
        'minecraft:grove',
        'minecraft:snowy_slopes',
        '#natures_spirit:is_alpine',
        'natures_spirit:boreal_taiga',
        'natures_spirit:fir_forest',
        'natures_spirit:snowy_fir_forest',
    ])

    e.add('environmental:has_spawn/duck', [
        'natures_spirit:bamboo_wetlands',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin'
    ])

    e.add('environmental:has_spawn/muddy_pig', [
        'natures_spirit:bamboo_wetlands',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin'
    ])

    e.add('environmental:has_spawn/reindeer', [
        'windswept:snowy_chestnut_forest',
        'windswept:snowy_pine_barrens',
        '#natures_spirit:is_alpine',
        'natures_spirit:sleeted_slopes',
        'natures_spirit:snowcapped_red_peaks',
        'natures_spirit:snowy_fir_forest',
        'natures_spirit:tundra'
    ])

    e.add('environmental:has_spawn/slabfish', [
        'natures_spirit:bamboo_wetlands',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin'
    ])

    e.add('environmental:has_spawn/tapir', [
        '#atmospheric:is_rainforest',
        '#natures_spirit:is_tropical_woods',
        'natures_spirit:bamboo_wetlands',
        'windswept:flowering_savanna'
    ])

    e.add('environmental:has_spawn/yak', [
        'natures_spirit:alpine_highlands',
        'natures_spirit:sleeted_slopes',
        'natures_spirit:tundra',
    ])

    e.add('environmental:spawns_gray_rabbits', [
        '#windswept:is_pine_barrens',
        '#windswept:is_chestnut_forest',
        'natures_spirit:aspen_forest',
        'natures_spirit:fir_forest',
        'natures_spirit:sugi_forest',
        'natures_spirit:windswept_sugi_forest',
        'natures_spirit:woody_highlands',
        'natures_spirit:shrubland',
        'natures_spirit:shrubby_highlands',
        'natures_spirit:chaparral',
        'natures_spirit:tundra',
    ])

    e.add('environmental:spawns_muddy_rabbits', [
        '#forge:is_swamp'
    ])
}