/** @param {$DataPackEventJS_} e  */
function worldgen_Oreganized(e) {
    removeBiomeModifier(e, 'oreganized:overworld_ores')
    addFeatures(e, 'oreganized:lead_ore', '#minecraft:is_overworld', 'underground_ores')
}