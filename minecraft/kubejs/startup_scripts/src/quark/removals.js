function removals_Quark() {
    global.REMOVALS.add([
        /quark:.*(dirt_bricks|chest|ladder|bookshelf|leaf_carpet|thatch|blossom|permafrost).*/,
        /quark:.*(crab|foxhound|shiba|toretoise|wraith).*/,
        /quark:.*ancient(?!_tome|_fruit).*/,
        /quark:.*azalea(?!_hedge).*/,
        'quark:gold_bars',
        'quark:crate',
        'quark:chute',
    ])

    global.ITEM_SWAPPER.set('quark:crab_leg', 'minecraft:cod')
    global.ITEM_SWAPPER.set('quark:crab_shell', 'minecraft:cod')

    // IDAS structures need these swapped out
    global.BLOCK_SWAPPER.set('quark:gold_bars', 'caverns_and_chasms:golden_bars')
    global.BLOCK_SWAPPER.set('quark:crate', 'minecraft:barrel')
    global.BLOCK_SWAPPER.set('quark:iron_ladder', 'create:andesite_ladder')
    global.BLOCK_SWAPPER.set('quark:permafrost', 'immersive_weathering:permafrost')
    global.BLOCK_SWAPPER.set('quark:permafrost_wall', 'stonezone:c/quark/cut_permafrost_wall')
    global.BLOCK_SWAPPER.set('quark:spruce_leaf_carpet', 'immersive_weathering:spruce_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:birch_leaf_carpet', 'immersive_weathering:birch_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:cherry_leaf_carpet', 'immersive_weathering:cherry_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:mangrove_leaf_carpet', 'immersive_weathering:mangrove_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:azalea_leaf_carpet', 'immersive_weathering:azalea_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:jungle_leaf_carpet', 'immersive_weathering:jungle_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:oak_leaf_carpet', 'immersive_weathering:oak_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:flowering_azalea_leaf_carpet', 'immersive_weathering:flowering_azalea_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:dark_oak_leaf_carpet', 'immersive_weathering:dark_oak_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:acacia_leaf_carpet', 'immersive_weathering:acacia_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:crate', 'minecraft:barrel')
    global.BLOCK_SWAPPER.set('quark:nether_brick_trapped_chest', 'woodworks:trapped_crimson_chest')
    global.BLOCK_SWAPPER.set('quark:nether_brick_chest', 'woodworks:crimson_chest')
    global.BLOCK_SWAPPER.set('quark:prismarine_trapped_chest', 'woodworks:trapped_warped_chest')
    global.BLOCK_SWAPPER.set('quark:prismarine_chest', 'woodworks:warped_chest')
    global.BLOCK_SWAPPER.set('quark:chute', 'create:chute')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks', 'environmental:dirt_bricks')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_stairs', 'environmental:dirt_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_slab', 'environmental:dirt_brick_slab')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_wall', 'environmental:dirt_brick_wall')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_vertical_slab', 'v_slab_compat:environmental/dirt_brick_vertical_slab')
    // Entities
    global.ENTITY_SWAPPER.set('quark:wraith', 'caverns_and_chasms:mime')
    global.ENTITY_SWAPPER.set('quark:foxhound', 'quark:forgotten')  // TODO: replace with alex's mobs nether bear?
    global.ENTITY_SWAPPER.set('quark:toretoise', 'quark:forgotten')
    global.ENTITY_SWAPPER.set('quark:shiba', 'minecraft:wolf')
    global.ENTITY_SWAPPER.set('quark:crab', 'minecraft:frog')
    // Carpets
    global.BLOCK_SWAPPER.set('quark:red_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/red_maple_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/orange_maple_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/yellow_maple_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/blue_wisteria_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/purple_wisteria_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:ancient_leaf_carpet', 'immersive_weathering:vanillabackport/pale_oak_leaf_pile')
    // Hedges
    global.BLOCK_SWAPPER.set('quark:red_blossom_hedge', 'everycomp:q/natures_spirit/red_maple_hedge')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_hedge', 'everycomp:q/natures_spirit/orange_maple_hedge')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_hedge', 'everycomp:q/natures_spirit/yellow_maple_hedge')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_hedge', 'everycomp:q/natures_spirit/blue_wisteria_hedge')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_hedge', 'everycomp:q/natures_spirit/purple_wisteria_hedge')
    global.BLOCK_SWAPPER.set('quark:ancient_hedge', 'everycomp:q/vanillabackport/pale_oak_hedge')
    // Saplings
    global.BLOCK_SWAPPER.set('quark:red_blossom_sapling', 'natures_spirit:red_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_sapling', 'natures_spirit:orange_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_sapling', 'natures_spirit:yellow_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_sapling', 'natures_spirit:blue_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_sapling', 'natures_spirit:purple_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:ancient_sapling', 'vanillabackport:pale_oak_sapling')
    // Potted Saplings
    global.BLOCK_SWAPPER.set('quark:potted_red_blossom_sapling', 'natures_spirit:potted_red_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_orange_blossom_sapling', 'natures_spirit:potted_orange_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_yellow_blossom_sapling', 'natures_spirit:potted_yellow_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_blue_blossom_sapling', 'natures_spirit:potted_blue_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_lavender_blossom_sapling', 'natures_spirit:potted_purple_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_ancient_sapling', 'vanillabackport:potted_pale_oak_sapling')
    // Leaves
    global.BLOCK_SWAPPER.set('quark:red_blossom_leaves', 'natures_spirit:red_maple_leaves')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_leaves', 'natures_spirit:orange_maple_leaves')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_leaves', 'natures_spirit:yellow_maple_leaves')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_leaves', 'natures_spirit:blue_wisteria_leaves')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_leaves', 'natures_spirit:purple_wisteria_leaves')
    global.BLOCK_SWAPPER.set('quark:ancient_leaves', 'vanillabackport:pale_oak_leaves')

    // Swap Quark wooden blocks to woodworks variants
    for (const [woodType, woodTypeObj] of Object.entries(global.WOOD_TYPES.minecraft)) {
        global.BLOCK_SWAPPER.set('quark:' + woodType + '_chest', woodTypeObj.woodworks.chest)
        global.BLOCK_SWAPPER.set('quark:' + woodType + '_trapped_chest', woodTypeObj.woodworks.trapped_chest)
        global.BLOCK_SWAPPER.set('quark:' + woodType + '_bookshelf', woodTypeObj.woodworks.bookshelf)
        global.BLOCK_SWAPPER.set('quark:' + woodType + '_ladder', woodTypeObj.woodworks.ladder)
    }

    for (const woodType in woodTypesToConstruct.quark) {
        if (woodTypesToConstruct.quark[woodType]) continue  // Skip enabled wood types
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.chest = 'quark:' + woodType + '_chest'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.trapped_chest = 'quark:' + woodType + '_trapped_chest'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.bookshelf = 'quark:' + woodType + '_bookshelf'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.ladder = 'quark:' + woodType + '_ladder'
    }

    swapWoodType(global.DISABLED_WOOD_TYPES.quark.blossom, global.WOOD_TYPES.environmental.plum)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.azalea, global.WOOD_TYPES.caverns_and_chasms.azalea)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.ancient, global.WOOD_TYPES.vanillabackport.pale_oak)
}