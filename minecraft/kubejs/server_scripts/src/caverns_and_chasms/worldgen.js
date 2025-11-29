/** @param {$DataPackEventJS_} e  */
function worldgen_CavernsAndChasms(e) {
    // Replace silver ore with galopsphere's silver ore
    const ore_silver = getFeatureJson('caverns_and_chasms', CONFIGURED, 'caverns_and_chasms:ore_silver')
    ore_silver.config.targets.forEach(target => {
        target.state.Name = target.state.Name.replace('caverns_and_chasms', 'galosphere')
    })
    registerFeature(e, CONFIGURED, 'caverns_and_chasms:ore_silver', ore_silver)

    const ore_silver_buried = getFeatureJson('caverns_and_chasms', CONFIGURED, 'caverns_and_chasms:ore_silver_buried')
    ore_silver_buried.config.targets.forEach(target => {
        target.state.Name = target.state.Name.replace('caverns_and_chasms', 'galosphere')
    })
    registerFeature(e, CONFIGURED, 'caverns_and_chasms:ore_silver_buried', ore_silver_buried)
}