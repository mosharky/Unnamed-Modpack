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
}