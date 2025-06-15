function constructWoodTypes() {
    if (global.DEBUG_MODE) console.log('Constructing wood types..')
    Object.keys(woodTypesToConstruct).forEach(mod => {
        global.WOOD_TYPES[mod] = {}

        Object.keys(woodTypesToConstruct[mod]).forEach(woodType => {
            global.WOOD_TYPES[mod][woodType] = {}

            let logSuffix = '_log', woodSuffix = '_wood', barkSuffix = '_bark'
            switch (woodType) {
                case 'warped': case 'crimson': logSuffix = '_stem'; woodSuffix = '_hyphae'; barkSuffix = '_scales'; break
                case 'poise': logSuffix = '_stem'; break
                case 'driftwood': woodSuffix = ''; break
                case 'grimwood': woodSuffix = ''; break
                case 'rosewood': woodSuffix = ''; break
            }

            let woodworksCompatId = `everycomp:abnww/${mod}/`
            let quarkCompatId = `everycomp:q/${mod}/`
            let verticalSlabCompatId = `v_slab_compat:${mod}/`
            let createCompatId = `everycomp:c/${mod}/`
            let farmersDelightCompatId = `everycomp:fd/${mod}/`
            let suppSquaredCompatId = `suppsquared:${mod}/`
            let supplementariesCompatId = `supplementaries:${mod}/`
            let immersiveWeatheringCompatId = `immersive_weathering:${mod}/`

            switch (mod) {
                case 'minecraft': {
                    woodworksCompatId = 'woodworks:'
                    quarkCompatId = 'quark:'
                    verticalSlabCompatId = 'quark:'
                    createCompatId = 'create:'
                    farmersDelightCompatId = 'farmersdelight:'
                    suppSquaredCompatId = 'suppsquared:'
                    supplementariesCompatId = 'supplementaries:'
                    immersiveWeatheringCompatId = 'immersive_weathering:'
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
                // Vanilla
                log: mod + ':' + woodType + logSuffix,
                wood: mod + ':' + woodType + woodSuffix,
                stripped_log: mod + ':stripped_' + woodType + logSuffix,
                stripped_wood: mod + ':stripped_' + woodType + woodSuffix,
                planks: mod + ':' + woodType + '_planks',
                stairs: mod + ':' + woodType + '_stairs',
                slab: mod + ':' + woodType + '_slab',
                fence: mod + ':' + woodType + '_fence',
                fence_gate: mod + ':' + woodType + '_fence_gate',
                door: mod + ':' + woodType + '_door',
                trapdoor: mod + ':' + woodType + '_trapdoor',
                pressure_plate: mod + ':' + woodType + '_pressure_plate',
                button: mod + ':' + woodType + '_button',
                sign: mod + ':' + woodType + '_sign',
                hanging_sign: mod + ':' + woodType + '_hanging_sign',
                boat: mod + ':' + woodType + '_boat',
                chest_boat: mod + ':' + woodType + '_chest_boat',
                // Woodworks
                chest: woodworksCompatId + woodType + '_chest',
                trapped_chest: woodworksCompatId + 'trapped_' + woodType + '_chest',
                boards: woodworksCompatId + woodType + '_boards',
                ladder: woodworksCompatId + woodType + '_ladder',
                beehive: woodworksCompatId + woodType + '_beehive',
                bookshelf: woodworksCompatId + woodType + '_bookshelf',
                chiseled_bookshelf: woodworksCompatId + 'chiseled_' + woodType + '_bookshelf',
                // Quark
                vertical_slab: verticalSlabCompatId + woodType + '_vertical_slab',
                vertical_planks: quarkCompatId + 'vertical_' + woodType + '_planks',
                post: quarkCompatId + woodType + '_post',
                stripped_post: quarkCompatId + 'stripped_' + woodType + '_post',
                hollow_log: quarkCompatId + 'hollow_' + woodType + logSuffix,
                quark_ladder: quarkCompatId + woodType + '_ladder',
                quark_chest: quarkCompatId + woodType + '_chest',
                quark_trapped_chest: quarkCompatId + woodType + '_trapped_chest',
                quark_bookshelf: quarkCompatId + woodType + '_bookshelf',
                // Create
                window: createCompatId + woodType + '_window',
                window_pane: createCompatId + woodType + '_window_pane',
                // Farmers Delight
                cabinet: farmersDelightCompatId + woodType + '_cabinet',
                // Supplementaries
                sign_post: supplementariesCompatId + 'sign_post_' + woodType,
                item_shelf: suppSquaredCompatId + 'item_shelf_' + woodType,
                // Immersive Weathering
                bark: immersiveWeatheringCompatId + woodType + barkSuffix
            }


            // Adjusting for edge cases
            switch (woodType) {
                case 'oak': {
                    woodTypeObj.quark_ladder = undefined
                    woodTypeObj.quark_bookshelf = undefined
                    woodTypeObj.ladder = 'minecraft:ladder'
                    woodTypeObj.beehive = 'minecraft:beehive'
                    woodTypeObj.bookshelf = 'minecraft:bookshelf'
                    woodTypeObj.chiseled_bookshelf = 'minecraft:chiseled_bookshelf'
                    woodTypeObj.item_shelf = 'supplementaries:item_shelf'
                    break
                }
                case 'bamboo': {
                    woodTypeObj.boat = 'minecraft:bamboo_raft'
                    woodTypeObj.chest_boat = 'minecraft:bamboo_chest_raft'
                    break
                }
                case 'crimson': case 'warped': {
                    woodTypeObj.boat = undefined
                    woodTypeObj.chest_boat = undefined
                    break
                }
                case 'poise': {
                    woodTypeObj.boat = undefined
                    woodTypeObj.chest_boat = undefined
                    woodTypeObj.hollow_log = 'everycomp:q/endergetic/hollow_poise_log'  // bruh
                    break
                }
                case 'joshua': {
                    woodTypeObj.wood = undefined
                    woodTypeObj.stripped_wood = undefined
                    woodTypeObj.post = undefined
                    woodTypeObj.stripped_post = undefined
                    break
                }
            }

            switch (mod) {
                case 'quark': {
                    woodTypeObj.bookshelf = woodTypeObj.quark_bookshelf
                    woodTypeObj.ladder = woodTypeObj.quark_ladder
                    woodTypeObj.chest = woodTypeObj.quark_chest
                    woodTypeObj.trapped_chest = woodTypeObj.quark_trapped_chest
                    // WHY
                    woodTypeObj.slab = mod + ':' + woodType + '_planks_slab'
                    woodTypeObj.vertical_slab = mod + ':' + woodType + '_planks_vertical_slab'
                    woodTypeObj.stairs = mod + ':' + woodType + '_planks_stairs'
                    break
                }
            }


            if (woodTypesToConstruct[mod][woodType] == true) {
                global.REMOVALS.add([
                    woodTypeObj.quark_ladder,
                    woodTypeObj.quark_chest,
                    woodTypeObj.quark_trapped_chest,
                    woodTypeObj.quark_bookshelf,
                ])

                global.WOOD_TYPES[mod][woodType] = woodTypeObj
            } else {
                global.REMOVALS.add(Object.values(woodTypeObj))
            }


            // Debug
            Object.entries(woodTypeObj).forEach(([key, value]) => {
                if (value != undefined && !Item.exists(value)) {
                    if (global.DEBUG_MODE) console.warn(`DOESN'T EXIST: ${key} = ${value}`)
                }
            })

            if (global.DEBUG_MODE) console.log(`Constructed ${mod}:${woodType}`)
        })
    })
    if (global.DEBUG_MODE) console.log('Finished constructing wood types!')
}