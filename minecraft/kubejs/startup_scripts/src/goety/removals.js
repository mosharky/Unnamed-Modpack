function removals_Goety() {
    global.REMOVALS.add([
        /goety:.*pine.*/,
        'goety:ice_cube',
        /goety:jade_(ore|tiles|block|pillar|stairs|slab)/,
        'goety:jade'
    ])

    global.ITEM_SWAPPER.set('goety:ice_cube', 'neapolitan:ice_cube')
    global.ITEM_SWAPPER.set('goety:jade', 'call_of_yucutan:jade')

    global.BLOCK_SWAPPER.set('goety:jade_tiles', 'call_of_yucutan:jade_tiles')
    global.BLOCK_SWAPPER.set('goety:jade_block', 'call_of_yucutan:jade_block')
    global.BLOCK_SWAPPER.set('goety:jade_pillar', 'call_of_yucutan:polished_jade_block')
    global.BLOCK_SWAPPER.set('goety:jade_stairs', 'call_of_yucutan:jade_stairs')
    global.BLOCK_SWAPPER.set('goety:jade_slab', 'call_of_yucutan:jade_slab')

    swapWoodType(global.DISABLED_WOOD_TYPES.goety.pine, global.WOOD_TYPES.windswept.pine)
}