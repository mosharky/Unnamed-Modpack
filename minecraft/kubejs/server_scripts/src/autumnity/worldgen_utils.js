// priority: 1

/**
 * - Requires Autumnity (source: https://github.dev/team-abnormals/autumnity/tree/1.20.x/src/generated/resources/data/autumnity)
 * - Get a spotted placed feature JSON object
 * @param {$DataPackEventJS_} event - highPriorityData event
 * @param {String} featureId - ID of the configured feature to be placed
 * @returns {String} Placed feature ID
 */
function spottedPlacedFeature(event, featureId) {
    let placedFeatureId = `kubejs:spotted_${featureId.split(':')[1]}_placed`
    registerFeature(event, PLACED, placedFeatureId, {
        feature: featureId,
        placement: [
            {
                type: 'autumnity:better_noise_based_count',
                noise: 'autumnity:spotted_maples',
                noise_offset: -0.4000000059604645,
                noise_to_count_ratio: 12
            },
            {
                type: 'minecraft:in_square'
            },
            {
                type: 'minecraft:surface_water_depth_filter',
                max_water_depth: 0
            },
            {
                type: 'minecraft:heightmap',
                heightmap: 'OCEAN_FLOOR'
            },
            {
                type: 'minecraft:biome'
            }
        ]
    })

    return placedFeatureId
}