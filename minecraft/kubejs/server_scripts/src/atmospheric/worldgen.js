/** @param {$DataPackEventJS_} e  */
function atmosphericWorldgen(e) {
    
    // Disable Aspen Parkland biome
    e.addJson('atmospheric:blueprint/modded_biome_slices/aspen', disableBiomeSliceJson)
}