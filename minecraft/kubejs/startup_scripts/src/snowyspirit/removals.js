function snowySpiritRemovals() {
    global.REMOVALS.add([
        /snowyspirit:.*ginger(?!bread_golem_spawn_egg).*/,
        /snowyspirit:glow_lights.*/,
        'snowyspirit:wreath',
        'snowyspirit:candy_cane_block',
        'snowyspirit:candy_cane',
    ])

    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread', 'windswept:gingerbread_block')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_door', 'windswept:gingerbread_door')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_trapdoor', 'windswept:gingerbread_trapdoor')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_stairs', 'windswept:gingerbread_brick_stairs')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_slab', 'windswept:gingerbread_brick_slab')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_frosted', 'windswept:glazed_gingerbread_block')
    global.BLOCK_SWAPPER.set('snowyspirit:potted_ginger', 'windswept:potted_wild_ginger')

    global.ITEM_SWAPPER.set('snowyspirit:gingerbread_cookie', 'windswept:gingerbread_cookie')
    global.ITEM_SWAPPER.set('snowyspirit:gingerbread', 'windswept:ginger_root')
}