function quarkRemovals() {
    global.REMOVALS.add([
        /quark:(.*chest.*|.*ladder.*|.*bookshelf.*|.*leaf_carpet.*)/,
        /quark:.*thatch.*/,
        /quark:.*blossom.*/,
        /quark:.*ancient(?!_tome).*/,
        /quark:.*azalea(?!_hedge).*/,
        /quark:.*permafrost.*/,
        'quark:gold_bars',
        'quark:crate',
        'quark:chute',
        /quark:(.*crab.*|.*foxhound.*|.*shiba.*|.*toretoise.*|.*wraith.*)/
    ])

    // IDAS structures need these swapped out
    global.SWAPPER.set('quark:gold_bars', 'caverns_and_chasms:golden_bars')
    global.SWAPPER.set('quark:crate', 'minecraft:barrel')
    global.SWAPPER.set('quark:iron_ladder', 'create:andesite_ladder')
    global.SWAPPER.set('quark:permafrost', 'immersive_weathering:permafrost')
    global.SWAPPER.set('quark:permafrost_wall', 'stonezone:c/quark/cut_permafrost_wall')
    global.SWAPPER.set('quark:spruce_leaf_carpet', 'immersive_weathering:spruce_leaf_pile')
    global.SWAPPER.set('quark:birch_leaf_carpet', 'immersive_weathering:birch_leaf_pile')
    global.SWAPPER.set('quark:cherry_leaf_carpet', 'immersive_weathering:cherry_leaf_pile')
    global.SWAPPER.set('quark:mangrove_leaf_carpet', 'immersive_weathering:mangrove_leaf_pile')
    global.SWAPPER.set('quark:azalea_leaf_carpet', 'immersive_weathering:azalea_leaf_pile')
    global.SWAPPER.set('quark:jungle_leaf_carpet', 'immersive_weathering:jungle_leaf_pile')
    global.SWAPPER.set('quark:oak_leaf_carpet', 'immersive_weathering:oak_leaf_pile')
    global.SWAPPER.set('quark:flowering_azalea_leaf_carpet', 'immersive_weathering:flowering_azalea_leaf_pile')
    global.SWAPPER.set('quark:dark_oak_leaf_carpet', 'immersive_weathering:dark_oak_leaf_pile')
    global.SWAPPER.set('quark:acacia_leaf_carpet', 'immersive_weathering:acacia_leaf_pile')
    global.SWAPPER.set('quark:crate', 'minecraft:barrel')
    global.SWAPPER.set('quark:nether_brick_trapped_chest', 'woodworks:trapped_crimson_chest')
    global.SWAPPER.set('quark:nether_brick_chest', 'woodworks:crimson_chest')
    global.SWAPPER.set('quark:chute', 'create:chute')
    // Carpets
    global.SWAPPER.set('quark:red_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/red_maple_leaf_pile')
    global.SWAPPER.set('quark:orange_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/orange_maple_leaf_pile')
    global.SWAPPER.set('quark:yellow_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/yellow_maple_leaf_pile')
    global.SWAPPER.set('quark:blue_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/blue_wisteria_leaf_pile')
    global.SWAPPER.set('quark:lavender_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/purple_wisteria_leaf_pile')
    global.SWAPPER.set('quark:ancient_leaf_carpet', 'immersive_weathering:vanillabackport/pale_oak_leaf_pile')
    // Hedges
    global.SWAPPER.set('quark:red_blossom_hedge', 'everycomp:q/natures_spirit/red_maple_hedge')
    global.SWAPPER.set('quark:orange_blossom_hedge', 'everycomp:q/natures_spirit/orange_maple_hedge')
    global.SWAPPER.set('quark:yellow_blossom_hedge', 'everycomp:q/natures_spirit/yellow_maple_hedge')
    global.SWAPPER.set('quark:blue_blossom_hedge', 'everycomp:q/natures_spirit/blue_wisteria_hedge')
    global.SWAPPER.set('quark:lavender_blossom_hedge', 'everycomp:q/natures_spirit/purple_wisteria_hedge')
    global.SWAPPER.set('quark:ancient_hedge', 'everycomp:q/vanillabackport/pale_oak_hedge')
    // Saplings
    global.SWAPPER.set('quark:red_blossom_sapling', 'natures_spirit:red_maple_sapling')
    global.SWAPPER.set('quark:orange_blossom_sapling', 'natures_spirit:orange_maple_sapling')
    global.SWAPPER.set('quark:yellow_blossom_sapling', 'natures_spirit:yellow_maple_sapling')
    global.SWAPPER.set('quark:blue_blossom_sapling', 'natures_spirit:blue_wisteria_sapling')
    global.SWAPPER.set('quark:lavender_blossom_sapling', 'natures_spirit:purple_wisteria_sapling')
    global.SWAPPER.set('quark:ancient_sapling', 'vanillabackport:pale_oak_sapling')
    // Potted Saplings
    global.SWAPPER.set('quark:potted_red_blossom_sapling', 'natures_spirit:potted_red_maple_sapling')
    global.SWAPPER.set('quark:potted_orange_blossom_sapling', 'natures_spirit:potted_orange_maple_sapling')
    global.SWAPPER.set('quark:potted_yellow_blossom_sapling', 'natures_spirit:potted_yellow_maple_sapling')
    global.SWAPPER.set('quark:potted_blue_blossom_sapling', 'natures_spirit:potted_blue_wisteria_sapling')
    global.SWAPPER.set('quark:potted_lavender_blossom_sapling', 'natures_spirit:potted_purple_wisteria_sapling')
    global.SWAPPER.set('quark:potted_ancient_sapling', 'vanillabackport:potted_pale_oak_sapling')
    // Leaves
    global.SWAPPER.set('quark:red_blossom_leaves', 'natures_spirit:red_maple_leaves')
    global.SWAPPER.set('quark:orange_blossom_leaves', 'natures_spirit:orange_maple_leaves')
    global.SWAPPER.set('quark:yellow_blossom_leaves', 'natures_spirit:yellow_maple_leaves')
    global.SWAPPER.set('quark:blue_blossom_leaves', 'natures_spirit:blue_wisteria_leaves')
    global.SWAPPER.set('quark:lavender_blossom_leaves', 'natures_spirit:purple_wisteria_leaves')
    global.SWAPPER.set('quark:ancient_leaves', 'vanillabackport:pale_oak_leaves')

    Object.values(global.WOOD_TYPES.minecraft).forEach(woodTypeObj => {
        global.SWAPPER.set(woodTypeObj.quark.chest,         woodTypeObj.woodworks.chest)
        global.SWAPPER.set(woodTypeObj.quark.trapped_chest, woodTypeObj.woodworks.trapped_chest)
        global.SWAPPER.set(woodTypeObj.quark.bookshelf,     woodTypeObj.woodworks.bookshelf)
        global.SWAPPER.set(woodTypeObj.quark.ladder,        woodTypeObj.woodworks.ladder)
    })

    swapWoodType(global.DISABLED_WOOD_TYPES.quark.blossom, global.WOOD_TYPES.environmental.plum)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.azalea,  global.WOOD_TYPES.caverns_and_chasms.azalea)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.ancient, global.WOOD_TYPES.vanillabackport.pale_oak)
}