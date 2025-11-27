STRUCTURE_BLOCK_SWAPPER.set('environmental:log_cabin', new Map([
    ['minecraft:chest', 'windswept:pine_chest']
]))

/** @param {$DataPackEventJS_} e  */
function worldgen_Environmental(e) {
    // Disable Marsh and Pine biome
    e.addJson('environmental:blueprint/modded_biome_slices/marsh', disableBiomeSliceJson)
    e.addJson('environmental:blueprint/modded_biome_slices/pine_barrens', disableBiomeSliceJson)

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

    // Replace pine tree with windswept pine tree
    registerFeature(e, CONFIGURED, 'environmental:pine_bees_0002', getFeatureJson('windswept', CONFIGURED, 'windswept:pine_bees'))

    addFeatures(e, [
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:dwarf_spruce'),
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:dwarf_spruce_thicket'),
    ], '#kubejs:has_feature/environmental_dwarf_spruce',
        'vegetal_decoration',
        'add_feature/environmental_dwarf_spruce'
    )

    addFeatures(e, [
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:patch_cup_lichen'),
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:patch_cup_lichen_small')
    ], '#kubejs:has_feature/environmental_cup_lichen',
        'vegetal_decoration',
        'add_feature/environmental_cup_lichen'
    )
}