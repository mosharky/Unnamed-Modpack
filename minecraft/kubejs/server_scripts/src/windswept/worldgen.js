/** @param {$DataPackEventJS_} e  */
function worldgen_Windswept(e) {
    // Disable Lavendar and Tundra biomes
    e.addJson('windswept:blueprint/modded_biome_slices/lavender', disableBiomeSliceJson)
    e.addJson('windswept:blueprint/modded_biome_slices/tundra', disableBiomeSliceJson)

    addFeatures(e, [
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:lupine'),
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:dry_moss_patch_large'),
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:dry_moss_rock'),
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:holly_bush'),
    ], '#kubejs:has_feature/windswept_tundra',
        VEGETAL_DECORATION,
        'add_feature/windswept_tundra'
    )

    addFeatures(e, [
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:large_white_rose'),
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:lavender')
    ], '#kubejs:has_feature/windswept_lavender',
        VEGETAL_DECORATION,
        'add_feature/windswept_lavender'
    )
}