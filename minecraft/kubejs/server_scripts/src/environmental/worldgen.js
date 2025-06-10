/** @param {$DataPackEventJS_} e  */
function environmentalWorldgen(e) {
    // Disable Marsh biome
    // e.addJson('environmental:blueprint/modded_biome_slices/marsh', disableJson)

    // Disable biome modifiers
    removeBiomeModifier(e, 'environmental:add_feature/cattails')
    removeBiomeModifier(e, 'environmental:add_feature/swamp_vegetation')
    removeBiomeModifier(e, 'environmental:remove_feature/swamp_oak')  // not sure if this is even needed

    addFeatures(e, 'environmental:patch_duckweed_swamp', [
        'minecraft:swamp',
        'natures_spirit:marsh'
    ], 'vegetal_decoration', 'swamp_vegetation')
}