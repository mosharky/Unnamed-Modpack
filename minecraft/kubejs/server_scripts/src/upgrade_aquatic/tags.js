/** @param {$TagEventJS_} e */
function upgradeAquaticBiomeTags(e) {
    e.add('upgrade_aquatic:has_feature/beachgrass', 'natures_spirit:tropical_shores')
    e.remove('upgrade_aquatic:has_feature/beachgrass', '#minecraft:is_river')
}