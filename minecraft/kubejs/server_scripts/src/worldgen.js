/*
Avoid using biome modifiers to add vanilla placed features to biomes, 
as this may cause a feature cycle violation (the game will crash if two biomes 
have the same two features in their feature lists but in different orders). 

Placed features can be referenced in biome jsons or added via biome modifiers, but should not be used in both.

Avoid adding the same placed feature with more than one biome modifier, as this can cause feature cycle violations.

for adding to all biomes:
    'biomes': {
        'type': 'forge:any'
    }

Steps (in order): 
- raw_generation
- lakes
- local_modifications
- underground_structures
- surface_structures
- strongholds
- underground_ores
- underground_decoration
- fluid_springs
- vegetal_decoration
- top_layer_modification
*/


/**
 * @param {TagEvent.Biome} e
 */
function biomeTags(e) {
    e.add('kubejs:all_biomes', /.*/)


    // fabric + forge compat (just for nature's spirit so far)
    // e.add('forge:is_desert', '#c:desert')
    // e.add('forge:desert', '#c:desert')
    // e.add('forge:is_plains', '#c:plains')
    // e.add('forge:plains', '#c:plains')
    // e.add('forge:floral', '#c:floral')
    // e.add('forge:snowy', '#c:snowy')
    // e.add('forge:is_snowy', '#c:snowy')
    // e.add('forge:swamp', '#c:swamp')
    // e.add('forge:is_swamp', '#c:swamp')

    /*

    // natures spirit missed this?
    e.add('minecraft:is_savanna', [
        'natures_spirit:oak_savanna'
    ])

    e.add('immersive_weathering:has_sandy_dirt', [
        'natures_spirit:woody_highlands',
        'natures_spirit:xeric_plains',
        'natures_spirit:wooded_drylands',
    ])

    e.add('immersive_weathering:has_silt', [
        'minecraft:mangrove_swamp',
        'natures_spirit:marsh',
    ])

    e.remove('immersive_weathering:has_permafrost', '#minecraft:is_taiga')
    e.add('immersive_weathering:has_permafrost', [
        'minecraft:frozen_peaks',
        'minecraft:jagged_peaks',
        'minecraft:snowy_taiga',
        'minecraft:snowy_slopes',
        'minecraft:snowy_plains',
        'minecraft:snowy_beach',
        'minecraft:ice_spikes',
        'minecraft:grove',
    ])

    // biomes which will get less change in colour
    e.add('sereneseasons:lesser_color_change_biomes', [
        'natures_spirit:wisteria_forest'
    ])

    // biomes with only wet/dry seasons
    e.add('sereneseasons:tropical_biomes', [
        '#forge:is_hot/overworld',
        '#forge:is_dry/overworld',
        '#forge:is_desert',
        '#c:desert',
        '#minecraft:is_savanna',
        '#minecraft:is_jungle',
        '#natures_spirit:is_tropical_woods',
        '#natures_spirit:is_wetland', // these all seem to be tropical
        '#natures_spirit:is_scorched',
        'natures_spirit:wooded_drylands'
    ])

    // biomes with a lot of cattails
    e.add('kubejs:common_cattails', [
        '#forge:swamp',
        '#minecraft:is_jungle',
        '#minecraft:is_river',
        // for ponds
        'minecraft:forest',
        'minecraft:windswept_forest',
        'minecraft:flower_forest',
        'minecraft:dark_forest',
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest'
    ])


    // structures
    e.removeAll('minecraft:has_structure/igloo')
    e.removeAll('minecraft:has_structure/ruined_portal_desert')
    e.removeAll('minecraft:has_structure/ruined_portal_jungle')
    e.removeAll('minecraft:has_structure/ruined_portal_mountain')
    e.removeAll('minecraft:has_structure/ruined_portal_nether')
    e.removeAll('minecraft:has_structure/ruined_portal_ocean')
    e.removeAll('minecraft:has_structure/ruined_portal_standard')
    e.removeAll('minecraft:has_structure/ruined_portal_swamp')
    // e.removeAll('minecraft:has_structure/village_desert')
    // e.removeAll('minecraft:has_structure/village_plains')
    // e.removeAll('minecraft:has_structure/village_savanna')
    // e.removeAll('minecraft:has_structure/village_snowy')
    // e.removeAll('minecraft:has_structure/village_taiga')
    e.removeAll('minecraft:has_structure/swamp_hut')
    e.removeAll('minecraft:has_structure/ocean_monument')


    // console.log(e.get('kubejs:all_biomes').getObjectIds())
    // e.get('kubejs:all_biomes').getObjectIds().forEach(b => console.log(b))
    */
}

ServerEvents.highPriorityData(e => {

    const PLACED = 'placed'
    const CONFIGURED = 'configured'


    /**
     * Processes string into an ID for a feature
     * @param {String | Array.<String>} input
     * @returns {String}
     */
    function nameProcess(input) {
        let filename = ''
        if (typeof input == 'string') filename = input.replace(':', '_')
        else filename = input[0].replace(':', '_')
        if (filename.includes('#')) filename = filename.slice(1)
        return filename
    }


    /**
     * Stops a placed feature from generating
     * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
     * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
     * @param {String} step - The generation step. Defaults as 'any'
     */
    function removeFeatures(features, biomes, step) {
        /* Without biome modifiers (i.e. Fabric)
        e.addJson(`${feature.split(':')[0]}:worldgen/placed_feature/${feature.split(':')[1]}`, {
            feature: { type: 'no_op', config: {} }, // inline configured "no_op" feature
            placement: [{ type: 'count', count: 0 }]
        })
        */
        // With biome modifiers
        if (typeof features == 'string') features = [features]
        let obj = {
            type: 'lithostitched:remove_features',
            biomes: biomes,
            features: features,
            step: step
        }
        e.addJson(`kubejs:lithostitched/worldgen_modifier/remove_feature_${nameProcess(features)}`, obj)
    }


    /**
     * Remove a forge biome modifier
     * @param {String} modifier - mod id + modifier name (ex: 'eidolon:silver_ore')
     */
    function removeBiomeModifier(modifier) {
        let namespace = modifier.split(':')[0]
        let filename = modifier.split(':')[1]
        e.addJson(`${namespace}:forge/biome_modifier/${filename}.json`, { type: 'forge:none' })
    }


    /**
     * Remove entity spawns from biomes
     * @param {String | Array.<String>} mobs - An entity ID, or entity type tag, or an array of entities
     * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
     */
    function removeBiomeSpawns(mobs, biomes) {
        e.addJson(`kubejs:lithostitched/worldgen_modifier/remove_spawn_${nameProcess(mobs)}`, {
            type: 'lithostitched:remove_biome_spawns',
            biomes: biomes,
            mobs: mobs
        })
    }


    /**
     * Get feature JSON object by type
     * @param {String} type - CONFIGURED or PLACED
     * @param {String} feature - Feature id
     * @returns {Object} Feature JSON
     */
    function getFeatureJson(type, feature) {
        let featureSplit = feature.split(':')
        return JsonIO.read(`kubejs/_mod_data/data/${featureSplit[0]}/worldgen/${type}_feature/${featureSplit[1]}.json`)
    }

    /**
     * Copies a feature JSON from kubejs/_mod_data
     * @param {String} feature - Placed feature ID to copy from kubejs/_mod_data
     * @returns {String} Placed feature ID string
     */
    function copyFeature(feature) {
        let featureReplace = feature.replace(':', '_')
        e.addJson(`kubejs:worldgen/placed_feature/copied_${featureReplace}`, getFeatureJson(PLACED, feature))
        return `kubejs:copied_${featureReplace}`
    }


    /**
     * Adds features to biomes
     * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
     * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
     * @param {String} step - The generation step. Defaults as 'any'
     */
    function addFeatures(features, biomes, step) {
        if (typeof features == 'string') features = [features]
        let obj = {
            type: 'lithostitched:add_features',
            biomes: biomes,
            features: features,
            step: step
        }
        e.addJson(`kubejs:lithostitched/worldgen_modifier/add_feature_${nameProcess(features)}`, obj)
    }


    /**
     * Replace/add feature in location featureToReplace
     * @param {String} type - CONFIGURED or PLACED
     * @param {String} featureToReplace - Feature id
     * @param {Object} featureReplaceWith - Feature JSON object
     */
    function replaceFeature(type, featureToReplace, featureReplaceWith) {
        let replaceIdSplit = featureToReplace.split(':')
        e.addJson(`${replaceIdSplit[0]}:worldgen/${type}_feature/${replaceIdSplit[1]}`, featureReplaceWith)
    }





    removeFeatures(['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#kubejs:all_biomes', 'fluid_springs')

    /*

    // immersive weathering removals
    removeBiomeModifier('immersive_weathering:has_loam')
    removeBiomeModifier('immersive_weathering:has_dune_grass')
    removeBiomeModifier('immersive_weathering:has_lakebed')
    // verdant vibes removals
    removeBiomeModifier('verdantvibes:lying_birch_mushroom')
    removeBiomeModifier('verdantvibes:lying_spruce_mushroom')
    removeBiomeModifier('verdantvibes:birch_ivy')
    removeBiomeModifier('verdantvibes:oak_ivy')

    // cliff stuff
    addFeatures(copyFeature('natures_spirit:granite_cliff'), [
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest',
    ], 'raw_generation')

    let newCliff = (id, block) => {
        // cliff json as a template
        let configuredCliffJson = getFeatureJson(CONFIGURED, 'natures_spirit:andesite_cliff')
        let placedCliffJson = getFeatureJson(PLACED, 'natures_spirit:andesite_cliff')
        // change cliff block and feature id
        configuredCliffJson.config.default.feature.config.to_place.state.Name = block
        placedCliffJson.feature = id
        // create jsons in a new namespace
        replaceFeature(CONFIGURED, id, configuredCliffJson)
        replaceFeature(PLACED, id, placedCliffJson)
        // return id because addFeatures() needs an id
        return id
    }

    addFeatures(newCliff('kubejs:permafrost_cliff', 'immersive_weathering:permafrost'), '#immersive_weathering:has_permafrost', 'raw_generation')
    addFeatures(newCliff('kubejs:sandy_stone_cliff', 'immersive_weathering:sandy_stone'), [
        'minecraft:beach',
        'minecraft:snowy_beach',
    ], 'raw_generation')
    addFeatures(copyFeature('natures_spirit:travertine_cliff'), [
        'natures_spirit:oak_savanna'
    ], 'raw_generation')



    // making oat grass only generate on certain blocks
    let patchSavannaGrass_placed = getFeatureJson(PLACED, 'natures_spirit:patch_savanna_grass')
    patchSavannaGrass_placed.placement.pop()  // because { type: 'minecraft:biome' } should be last
    patchSavannaGrass_placed.placement.push({
        type: 'minecraft:block_predicate_filter',
        predicate: {
            type: 'minecraft:all_of',
            predicates: [
                {
                    type: 'minecraft:matching_blocks',
                    blocks: 'minecraft:air'
                },
                {
                    type: 'minecraft:matching_blocks',
                    offset: [
                        0,
                        -1,
                        0
                    ],
                    blocks: [
                        'minecraft:grass_block',
                        'immersive_weathering:grassy_sandy_dirt'
                    ]
                }
            ]
        }
    })
    patchSavannaGrass_placed.placement.push({ type: 'minecraft:biome' })
    replaceFeature(PLACED, 'natures_spirit:patch_savanna_grass', patchSavannaGrass_placed)

    let sandyDirt_configured = getFeatureJson(CONFIGURED, 'immersive_weathering:sandy_dirt')
    sandyDirt_configured.config.size = 64
    replaceFeature(CONFIGURED, 'immersive_weathering:sandy_dirt', sandyDirt_configured)

    let permafrost_configured = getFeatureJson(CONFIGURED, 'immersive_weathering:permafrost')
    permafrost_configured.config.size = 64
    replaceFeature(CONFIGURED, 'immersive_weathering:permafrost', permafrost_configured)

    // more common verdantvibes cattails
    removeBiomeModifier('verdantvibes:cattails')
    removeBiomeModifier('verdantvibes:cattails_swamp')

    let cattails_placed = getFeatureJson(PLACED, 'natures_spirit:cattails_placed')
    cattails_placed.placement[0] = { type: 'minecraft:count', count: 3 }
    replaceFeature(PLACED, 'kubejs:cattails_common', cattails_placed)
    addFeatures('kubejs:cattails_common', '#kubejs:common_cattails', 'vegetal_decoration')


    // tweak terraforged's swamp surface
    e.addJson('reterraforged:worldgen/configured_feature/swamp_surface', {
        type: 'reterraforged:swamp_surface',
        config: {
            clay_material: { Name: 'immersive_weathering:silt' },
            dirt_material: { Name: 'immersive_weathering:grassy_silt' },
            gravel_material: { Name: 'immersive_weathering:silt' }
        }
    })



    // ORE GENERATION STUFF
    // removing all ores for geocluster
    removeFeatures([
        // vanilla ores
        'ore_ancient_debris_large',
        'ore_coal_lower',
        'ore_coal_upper',
        'ore_copper_large',
        'ore_copper',
        'ore_debris_small',
        'ore_diamond_buried',
        'ore_diamond_large',
        'ore_diamond',
        'ore_emerald',
        'ore_gold_deltas',
        'ore_gold_extra',
        'ore_gold_lower',
        'ore_gold_nether',
        'ore_gold',
        'ore_iron_middle',
        'ore_iron_small',
        'ore_iron_upper',
        'ore_lapis_buried',
        'ore_lapis',
        'ore_quartz_deltas',
        'ore_quartz_nether',
        'ore_redstone_lower',
        'ore_redstone',
        // nature's spirit ores (https://github.com/Team-Hibiscus/NaturesSpirit/tree/1.20.1/src/main/resources/data/natures_spirit/worldgen/placed_feature/ores)
        'natures_spirit:ores/ore_coal_lower',
        'natures_spirit:ores/ore_coal_upper',
        'natures_spirit:ores/ore_copper',
        'natures_spirit:ores/ore_copper_large',
        'natures_spirit:ores/ore_diamond',
        'natures_spirit:ores/ore_diamond_buried',
        'natures_spirit:ores/ore_diamond_large',
        'natures_spirit:ores/ore_diamond_medium',
        'natures_spirit:ores/ore_emerald',
        'natures_spirit:ores/ore_gold',
        'natures_spirit:ores/ore_gold_extra',
        'natures_spirit:ores/ore_gold_lower',
        'natures_spirit:ores/ore_iron_middle',
        'natures_spirit:ores/ore_iron_small',
        'natures_spirit:ores/ore_iron_upper',
        'natures_spirit:ores/ore_lapis',
        'natures_spirit:ores/ore_lapis_buried',
        'natures_spirit:ores/ore_redstone',
        'natures_spirit:ores/ore_redstone_extra',
        'natures_spirit:ores/ore_redstone_lower'
    ], '#kubejs:all_biomes', 'underground_ores')

    // disable geocluster deposits
    disabledGeoclusterOres.forEach(ore => {
        e.addJson(`geocluster:deposits/${ore}`, {
            // im replacing all of them with this JSON because idk if it has a 'forge:none' type
            type: 'geocluster:deposit_dense',
            config: {
                yMin: 48,
                yMax: 65,
                size: 0, // the part where i remove
                biomeTag: '#minecraft:is_overworld',
                blocks: {
                    'default': [
                        { block: 'geocluster:aluminium_ore', chance: 0.0 },
                        { block: null, chance: 0.1 }
                    ],
                    'minecraft:deepslate': [
                        { block: 'geocluster:deepslate_aluminium_ore', chance: 0.0 },
                        { block: null, chance: 0.1 }
                    ]
                },
                samples: [{ block: 'geocluster:aluminium_ore_sample', chance: 0 }],
                generationWeight: 0 // the part where i remove
            }
        })
    })
    */
})