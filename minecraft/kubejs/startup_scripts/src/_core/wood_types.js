function constructWoodTypes() {
    if (global.DEBUG_MODE) console.log('Constructing wood types..')
    Object.keys(woodTypesToConstruct).forEach(mod => {
        global.WOOD_TYPES[mod] = {}
        global.DISABLED_WOOD_TYPES[mod] = {}

        Object.keys(woodTypesToConstruct[mod]).forEach(woodType => {
            if (woodTypesToConstruct[mod][woodType]) {
                global.WOOD_TYPES[mod][woodType] = {}
            } else {
                global.DISABLED_WOOD_TYPES[mod][woodType] = {}
            }

            let logSuffix = '_log', woodSuffix = '_wood', barkSuffix = '_bark'
            switch (woodType) {
                case 'warped': case 'crimson': logSuffix = '_stem'; woodSuffix = '_hyphae'; barkSuffix = '_scales'; break
                case 'poise': logSuffix = '_stem'; break
                case 'driftwood': woodSuffix = ''; break
                case 'grimwood': woodSuffix = ''; break
                case 'rosewood': woodSuffix = ''; break
            }

            let woodworksCompatId               = `everycomp:abnww/${mod}/`
            let quarkCompatId                   = `everycomp:q/${mod}/`
            let verticalSlabCompatId            = `v_slab_compat:${mod}/`
            let createCompatId                  = `everycomp:c/${mod}/`
            let farmersDelightCompatId          = `everycomp:fd/${mod}/`
            let suppSquaredCompatId             = `suppsquared:${mod}/`
            let supplementariesCompatId         = `supplementaries:${mod}/`
            let immersiveWeatheringCompatId     = `immersive_weathering:${mod}/`

            switch (mod) {
                case 'minecraft': {
                    woodworksCompatId             = 'woodworks:'
                    quarkCompatId                 = 'quark:'
                    verticalSlabCompatId          = 'quark:'
                    createCompatId                = 'create:'
                    farmersDelightCompatId        = 'farmersdelight:'
                    suppSquaredCompatId           = 'suppsquared:'
                    supplementariesCompatId       = 'supplementaries:'
                    immersiveWeatheringCompatId   = 'immersive_weathering:'
                    break
                }
                case 'quark': {
                    quarkCompatId = 'quark:'
                    break
                }
                // Abnormals mods have native compat with woodworks and farmers delight
                case 'autumnity': case 'atmospheric': case 'upgrade_aquatic': case 'environmental': case 'endergetic': case 'caverns_and_chasms': {
                    woodworksCompatId = mod + ':'
                    farmersDelightCompatId = 'abnormals_delight:'
                    break
                }
            }

            const woodTypeObj = {
                minecraft: {
                    log:                    mod + ':' + woodType + logSuffix,
                    wood:                   mod + ':' + woodType + woodSuffix,
                    stripped_log:           mod + ':stripped_' + woodType + logSuffix,
                    stripped_wood:          mod + ':stripped_' + woodType + woodSuffix,
                    planks:                 mod + ':' + woodType + '_planks',
                    stairs:                 mod + ':' + woodType + '_stairs',
                    slab:                   mod + ':' + woodType + '_slab',
                    fence:                  mod + ':' + woodType + '_fence',
                    fence_gate:             mod + ':' + woodType + '_fence_gate',
                    door:                   mod + ':' + woodType + '_door',
                    trapdoor:               mod + ':' + woodType + '_trapdoor',
                    pressure_plate:         mod + ':' + woodType + '_pressure_plate',
                    button:                 mod + ':' + woodType + '_button',
                    sign:                   mod + ':' + woodType + '_sign',
                    hanging_sign:           mod + ':' + woodType + '_hanging_sign',
                    boat:                   mod + ':' + woodType + '_boat',
                    chest_boat:             mod + ':' + woodType + '_chest_boat',
                },
                woodworks: {
                    chest:                  woodworksCompatId + woodType + '_chest',
                    trapped_chest:          woodworksCompatId + 'trapped_' + woodType + '_chest',
                    boards:                 woodworksCompatId + woodType + '_boards',
                    ladder:                 woodworksCompatId + woodType + '_ladder',
                    beehive:                woodworksCompatId + woodType + '_beehive',
                    bookshelf:              woodworksCompatId + woodType + '_bookshelf',
                    chiseled_bookshelf:     woodworksCompatId + 'chiseled_' + woodType + '_bookshelf',
                },
                quark: {
                    vertical_slab:          verticalSlabCompatId + woodType + '_vertical_slab',
                    vertical_planks:        quarkCompatId + 'vertical_' + woodType + '_planks',
                    post:                   quarkCompatId + woodType + '_post',
                    stripped_post:          quarkCompatId + 'stripped_' + woodType + '_post',
                    hollow_log:             quarkCompatId + 'hollow_' + woodType + logSuffix,
                    ladder:                 quarkCompatId + woodType + '_ladder',  // TEMPORARY; deleted later
                    chest:                  quarkCompatId + woodType + '_chest',  // TEMPORARY; deleted later
                    trapped_chest:          quarkCompatId + woodType + '_trapped_chest',  // TEMPORARY; deleted later
                    bookshelf:              quarkCompatId + woodType + '_bookshelf',  // TEMPORARY; deleted later
                },
                create: {
                    window:                 createCompatId + woodType + '_window',
                    window_pane:            createCompatId + woodType + '_window_pane',
                },
                farmersdelight: {
                    cabinet:                farmersDelightCompatId + woodType + '_cabinet',
                },
                supplementaries: {
                    sign_post:              supplementariesCompatId + 'sign_post_' + woodType,
                    item_shelf:             suppSquaredCompatId + 'item_shelf_' + woodType,
                },
                immersive_weathering: {
                    bark:                   immersiveWeatheringCompatId + woodType + barkSuffix
                },
            }


            // Adjusting for edge cases
            switch (woodType) {
                case 'oak': {
                    woodTypeObj.woodworks.ladder                = 'minecraft:ladder'
                    woodTypeObj.woodworks.beehive               = 'minecraft:beehive'
                    woodTypeObj.woodworks.bookshelf             = 'minecraft:bookshelf'
                    woodTypeObj.woodworks.chiseled_bookshelf    = 'minecraft:chiseled_bookshelf'
                    woodTypeObj.supplementaries.item_shelf      = 'supplementaries:item_shelf'
                    break
                }
                case 'bamboo': {
                    woodTypeObj.minecraft.boat          = 'minecraft:bamboo_raft'
                    woodTypeObj.minecraft.chest_boat    = 'minecraft:bamboo_chest_raft'
                    break
                }
                case 'crimson': case 'warped': {
                    woodTypeObj.minecraft.boat          = undefined
                    woodTypeObj.minecraft.chest_boat    = undefined
                    break
                }
                case 'poise': {
                    woodTypeObj.minecraft.boat          = undefined
                    woodTypeObj.minecraft.chest_boat    = undefined
                    woodTypeObj.quark.hollow_log        = 'everycomp:q/endergetic/hollow_poise_log'  // bruh
                    break
                }
                case 'joshua': {
                    woodTypeObj.minecraft.wood          = undefined
                    woodTypeObj.minecraft.stripped_wood = undefined
                    woodTypeObj.quark.post              = undefined
                    woodTypeObj.quark.stripped_post     = undefined
                    break
                }
            }


            switch (mod) {
                case 'quark': {
                    // WHY
                    woodTypeObj.minecraft.slab          = mod + ':' + woodType + '_planks_slab'
                    woodTypeObj.minecraft.stairs        = mod + ':' + woodType + '_planks_stairs'
                    woodTypeObj.quark.vertical_slab     = mod + ':' + woodType + '_planks_vertical_slab'
                    break
                }
            }

            const removals = [
                'ladder',
                'chest',
                'trapped_chest',
                'bookshelf',
            ].forEach(removal => {
                global.REMOVALS.add(woodTypeObj.quark[removal])
                delete woodTypeObj.quark[removal]  // Remove from woodTypeObj
            })

            // Finalization
            if (woodTypesToConstruct[mod][woodType]) {
                global.WOOD_TYPES[mod][woodType] = woodTypeObj
            } else {
                global.DISABLED_WOOD_TYPES[mod][woodType] = woodTypeObj
                global.REMOVALS.add(woodTypeObj)
            }


            // Debug
            Object.entries(Object.entries(woodTypeObj)).forEach(([key, value]) => {
                if (value != undefined && !Item.exists(value)) {
                    if (global.DEBUG_MODE) console.warn(`DOESN'T EXIST: ${key} = ${value}`)
                }
            })

            if (global.DEBUG_MODE) console.log(`Constructed ${mod}:${woodType}`)
        })
    })
    if (global.DEBUG_MODE) console.log('Finished constructing wood types!')
}