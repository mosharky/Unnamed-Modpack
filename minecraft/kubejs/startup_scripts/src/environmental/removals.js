function environmentalRemovals() {
    global.REMOVALS.add([
        // TODO: Remove woods from compat stuff (Supplementaries, everycomp, etc)
        /environmental:.*willow.*/,
        /environmental:.*wisteria.*/,
        'environmental:cattail',
        'environmental:cattail_fluff',
        'environmental:cattail_fluff_block',
        /environmental:.*leaf_pile.*/,
    ])

    global.BLOCKSWAP_CONFIG.swapper.set('environmental:cheerful_plum_leaf_pile', 'immersive_weathering:environmental/cheerful_plum_leaf_pile')
    global.BLOCKSWAP_CONFIG.swapper.set('environmental:moody_plum_leaf_pile', 'immersive_weathering:environmental/moody_plum_leaf_pile')
    global.BLOCKSWAP_CONFIG.swapper.set('environmental:plum_leaf_pile', 'immersive_weathering:environmental/plum_leaf_pile')
}