/** @param {$DataPackEventJS_} e  */
function worldgen_Autumnity(e) {

    // Disable all Autumnity biomes
    e.addJson('autumnity:blueprint/modded_biome_slices/autumn', disableBiomeSliceJson)

    // Remove Autumnity trees from vanilla worldgen
    removeBiomeModifier(e, 'autumnity:add_feature/maple_tree')
    removeBiomeModifier(e, 'autumnity:add_feature/spotted_maple_tree/orange')
    removeBiomeModifier(e, 'autumnity:add_feature/spotted_maple_tree/red')
    removeBiomeModifier(e, 'autumnity:add_feature/spotted_maple_tree/yellow')
}
