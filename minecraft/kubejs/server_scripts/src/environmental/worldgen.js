/** @param {$DataPackEventJS_} e  */
function environmentalWorldgen(e) {
    // Disable Marsh biome
    // e.addJson('environmental:blueprint/modded_biome_slices/marsh', disableJson)

    // Disable biome modifiers
    removeBiomeModifier(e, 'environmental:add_feature/cattails')
    removeBiomeModifier(e, 'environmental:remove_feature/swamp_oak')  // not sure if this is even needed

    removeBiomeModifier(e, 'environmental:add_feature/flower_forest_vegetation') 
    addFeatures(e, 'environmental:patch_delphiniums', 'minecraft:flower_forest', 'vegetal_decoration')

    removeBiomeModifier(e, 'environmental:add_feature/swamp_vegetation')
    addFeatures(e, 'environmental:patch_duckweed_swamp', [
        'minecraft:swamp',
        'natures_spirit:marsh'
    ], 'vegetal_decoration', 'swamp_vegetation')
}