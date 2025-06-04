global.REMOVALS.all
    .add('natures_spirit:beach_grass')
    .add('natures_spirit:tall_beach_grass')
    .add(/natures_spirit:.*pink_sand.*/)


// The rest of the pink sand blocks should be swapped from structures if needed
BLOCKSWAP_CONFIG.swapper.set('natures_spirit:pink_sandstone', 'atmospheric:red_arid_sandstone')
BLOCKSWAP_CONFIG.swapper.set('natures_spirit:pink_sand', 'atmospheric:red_arid_sand')