function naturesSpiritRemovals() {
    global.REMOVALS.add([
        'natures_spirit:beach_grass',
        'natures_spirit:tall_beach_grass',
        /natures_spirit:.*pink_sand.*/,
    ])


    // The rest of the pink sand blocks should be swapped from structures if needed
    global.SWAPPER.set('natures_spirit:pink_sandstone', 'atmospheric:red_arid_sandstone')
    global.SWAPPER.set('natures_spirit:pink_sand', 'atmospheric:red_arid_sand')
    global.SWAPPER.set('natures_spirit:pink_sandstone_wall', 'atmospheric:red_arid_sandstone_wall')
    global.SWAPPER.set('natures_spirit:smooth_pink_sandstone', 'atmospheric:smooth_red_arid_sandstone')
    global.SWAPPER.set('natures_spirit:cut_pink_sandstone', 'atmospheric:cut_red_arid_sandstone')
}