/** @param {DataPackEventJS_} e  */
function coreWorldgen(e) {

    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#kubejs:all_biomes', 'fluid_springs')
    
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
}