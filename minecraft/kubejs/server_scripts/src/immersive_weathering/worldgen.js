/** @param {$DataPackEventJS_} e  */
function worldgen_ImmersiveWeathering(e) {
    removeBiomeModifier(e, 'immersive_weathering:has_loam')
    removeBiomeModifier(e, 'immersive_weathering:has_dune_grass')
    removeBiomeModifier(e, 'immersive_weathering:has_lakebed')
}