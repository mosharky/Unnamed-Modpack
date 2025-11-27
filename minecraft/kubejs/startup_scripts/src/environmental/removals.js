function environmentalRemovals() {
    global.REMOVALS.add([
        /environmental:.*pine.*/,
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

    global.BLOCK_SWAPPER.set('environmental:pine_leaves', 'windswept:pine_leaves')
    global.BLOCK_SWAPPER.set('environmental:pinecone', 'windswept:pine_leaves')
    
    global.ITEM_SWAPPER.set('environmental:pine_sapling', 'windswept:pine_sapling')
    global.ITEM_SWAPPER.set('environmental:pinecone', 'windswept:pinecone_block')

    swapWoodType(global.DISABLED_WOOD_TYPES.environmental.pine, global.WOOD_TYPES.windswept.pine)
}