/** @param {DataPackEventJS_} e  */
function naturesSpiritWorldgen(e) {
    removeFeatures(e, 'natures_spirit:patch_beach_grass', 'natures_spirit:tropical_shores', 'vegetal_decoration')

    // Changing maple trees to use Autumnity's maple logs
    https://github.dev/Team-Hibiscus/NatureSpiritForge/blob/ac798afa749f8ebb26473435525c2e80d7f2f29e/src/main/resources/data/natures_spirit/worldgen/configured_feature/orange_maple_tree.json
    const NSMapleTrees = [
        'natures_spirit:orange_maple_tree',
        'natures_spirit:yellow_maple_tree',
        'natures_spirit:red_maple_tree',
    ].forEach(treeId => {
        let treeFeature = getFeatureJson('natures_spirit', CONFIGURED, treeId)
        treeFeature.config.trunk_provider.state.Name = 'autumnity:maple_log'
        registerFeature(e, CONFIGURED, treeId, treeFeature)
    })
}
