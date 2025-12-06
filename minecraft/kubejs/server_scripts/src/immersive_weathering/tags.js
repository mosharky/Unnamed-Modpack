/** @param {$TagEventJS_} e */
function biomeTags_ImmersiveWeathering(e) {
    e.removeAll('immersive_weathering:has_permafrost')
    e.add('immersive_weathering:has_permafrost', [
        'minecraft:frozen_river',
        'minecraft:snowy_plains',
        'minecraft:snowy_beach',
        'minecraft:snowy_taiga',
        'minecraft:grove',
        'minecraft:snowy_slopes',
        'minecraft:jagged_peaks',
        'minecraft:frozen_peaks',
        'minecraft:ice_spikes',
        'windswept:snowy_chestnut_forest',
        'windswept:snowy_pine_barrens',
        'natures_spirit:tundra',
        'natures_spirit:snowcapped_red_peaks',
        'natures_spirit:boreal_taiga',
        'natures_spirit:snowy_fir_forest',
        'environmental:snowy_pine_barrens',
        'environmental:snowy_old_growth_pine_barrens',
    ])
    e.add('kubejs:has_feature/permafrost_cliff', '#immersive_weathering:has_permafrost')
}