/** @param {DataPackEventJS_} e  */
function autumnityWorldgen(e) {

    // Disable all Autumnity biomes
    e.addJson('autumnity:blueprint/modded_biome_slices/autumn', disableJson)
}
