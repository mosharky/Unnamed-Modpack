STRUCTURE_BLOCK_SWAPPER.set(/atmospheric:arid_garden.*/, new Map([
    ['minecraft:chest', 'atmospheric:laurel_chest']
]))

STRUCTURE_BLOCK_SWAPPER.set('atmospheric:kousa_sanctum', new Map([
    ['minecraft:chest', 'atmospheric:kousa_chest'],
    ['minecraft:trapped_chest', 'atmospheric:trapped_kousa_chest']
]))

/** @param {$DataPackEventJS_} e  */
function worldgen_Atmospheric(e) {

    // Disable Aspen Parkland biome
    e.addJson('atmospheric:blueprint/modded_biome_slices/aspen', disableBiomeSliceJson)

    addFeatures(e,
        [
            copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:crustose'),
            copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:fallen_crustose_log'),
            copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:single_agave'),
            copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_agave_large'),
            copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_golden_growths'),
        ], '#kubejs:has_feature/atmospheric_aspen_parkland_foliage',
        'vegetal_decoration'
    )
    addFeatures(e,
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_arid_sprouts'),
        '#kubejs:has_feature/atmospheric_patch_arid_sprouts',
        'vegetal_decoration'
    )
    addFeatures(e,
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_yucca_flower'),
        '#kubejs:has_feature/atmospheric_patch_yucca_flower',
        'vegetal_decoration'
    )
    addFeatures(e,
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_aloe_vera'),
        '#kubejs:has_feature/atmospheric_patch_aloe_vera',
        'vegetal_decoration'
    )
    addFeatures(e,
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_barrel_cactus_dunes'),
        '#kubejs:has_feature/atmospheric_patch_barrel_cactus_dunes',
        'vegetal_decoration'
    )
    addFeatures(e,
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_agave_large'),
        '#kubejs:has_feature/atmospheric_patch_agave_large',
        'vegetal_decoration'
    )
}