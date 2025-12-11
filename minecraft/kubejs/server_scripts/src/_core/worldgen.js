/** @param {$DataPackEventJS_} e  */
function worldgen_Core(e) {
    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#minecraft:is_overworld', FLUID_SPRINGS)

    addFeatures(e, registerCliff(e, 'minecraft:andesite'), '#kubejs:has_feature/andesite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:granite'), '#kubejs:has_feature/granite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:stone'), '#kubejs:has_feature/stone_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:terracotta'), '#kubejs:has_feature/terracotta_cliff', RAW_GENERATION)
    removeFeatures(e, [
        'minecraft:ore_granite_lower',
        'minecraft:ore_granite_upper',
        'minecraft:ore_andesite_lower',
        'minecraft:ore_andesite_upper',
    ], '#minecraft:is_overworld', UNDERGROUND_ORES)
}
