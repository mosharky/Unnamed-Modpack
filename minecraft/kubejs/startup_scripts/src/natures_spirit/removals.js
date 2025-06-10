function naturesSpiritRemovals() {
    global.REMOVALS.add([
        'natures_spirit:beach_grass',
        'natures_spirit:tall_beach_grass',
        /natures_spirit:.*pink_sand.*/,
    ])


    // The rest of the pink sand blocks should be swapped from structures if needed
    // global.BLOCKSWAP_CONFIG.swapper.set('natures_spirit:pink_sandstone', 'atmospheric:red_arid_sandstone')
    // global.BLOCKSWAP_CONFIG.swapper.set('natures_spirit:pink_sand', 'atmospheric:red_arid_sand')
}