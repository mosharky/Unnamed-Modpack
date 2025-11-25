/** @param {$DataPackEventJS_} e  */
function windsweptWorldgen(e) {
    // Disable Lavendar and Tundra biomes
    e.addJson('windswept:blueprint/modded_biome_slices/lavender', disableBiomeSliceJson)
    e.addJson('windswept:blueprint/modded_biome_slices/tundra', disableBiomeSliceJson)
}