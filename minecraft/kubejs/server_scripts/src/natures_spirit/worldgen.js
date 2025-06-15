/** @param {$DataPackEventJS_} e  */
function naturesSpiritWorldgen(e) {
    removeFeatures(e, 'natures_spirit:patch_beach_grass', 'natures_spirit:tropical_shores', 'vegetal_decoration')

    // Changing maple trees to use Autumnity's maple logs
    https://github.com/Team-Hibiscus/NatureSpiritForge/blob/1.20.1/src/main/resources/data/natures_spirit/worldgen/configured_feature/orange_maple_tree.json
    const NSMapleTrees = [
        'natures_spirit:orange_maple_tree',
        'natures_spirit:yellow_maple_tree',
        'natures_spirit:red_maple_tree',
    ].forEach(treeId => {
        let treeFeature = getFeatureJson('natures_spirit', CONFIGURED, treeId)
        treeFeature.config.trunk_provider.state.Name = 'autumnity:maple_log'
        registerFeature(e, CONFIGURED, treeId, treeFeature)
    })


    // https://github.com/Team-Hibiscus/NatureSpiritForge/blob/1.20.1/src/main/java/net/hibiscus/naturespirit/world/NSSurfaceRules.java
    // Replacing pink sand with 'atmospheric:red_arid_sand' as a surface rule
    // Lithostitched surface rules apply before any other surface rule, so this is applied before NS gets to apply its own surface rules
    e.addJson('kubejs:lithostitched/worldgen_modifier/add_surface_rule/replace_pink_sand', {
        type: 'lithostitched:add_surface_rule',
        levels: [
            'minecraft:overworld'
        ],
        surface_rule: {
            type: 'minecraft:condition',
            if_true: { type: 'minecraft:above_preliminary_surface' },
            then_run: {
                type: 'minecraft:sequence',
                sequence: [
                    {
                        type: 'minecraft:condition',
                        if_true: {
                            type: 'minecraft:water',
                            add_stone_depth: true,
                            offset: -6,
                            surface_depth_multiplier: -1
                        },
                        then_run: {
                            type: 'minecraft:sequence',
                            sequence: [
                                {
                                    type: 'minecraft:condition',
                                    if_true: {
                                        type: 'minecraft:stone_depth',
                                        add_surface_depth: true,
                                        offset: 0,
                                        secondary_depth_range: 0,
                                        surface_type: 'floor'
                                    },
                                    then_run: {
                                        type: 'minecraft:sequence',
                                        sequence: [
                                            {
                                                type: 'minecraft:condition',
                                                if_true: {
                                                    type: 'minecraft:biome',
                                                    biome_is: [
                                                        'natures_spirit:tropical_shores',
                                                        'natures_spirit:drylands'
                                                    ]
                                                },
                                                then_run: {
                                                    type: 'minecraft:sequence',
                                                    sequence: [
                                                        {
                                                            type: 'minecraft:condition',
                                                            if_true: {
                                                                type: 'minecraft:stone_depth',
                                                                add_surface_depth: false,
                                                                offset: 0,
                                                                secondary_depth_range: 0,
                                                                surface_type: 'ceiling'
                                                            },
                                                            then_run: {
                                                                type: 'minecraft:block',
                                                                result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                                            }
                                                        },
                                                        {
                                                            type: 'minecraft:block',
                                                            result_state: { Name: 'atmospheric:red_arid_sand' }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                type: 'minecraft:condition',
                                                if_true: {
                                                    type: 'minecraft:biome',
                                                    biome_is: [
                                                        'natures_spirit:wooded_drylands'
                                                    ]
                                                },
                                                then_run: {
                                                    type: 'minecraft:condition',
                                                    if_true: {
                                                        type: 'minecraft:noise_threshold',
                                                        min_threshold: -0.5454,
                                                        max_threshold: 0.0454,
                                                        noise: 'minecraft:surface'
                                                    },
                                                    then_run: {
                                                        type: 'minecraft:sequence',
                                                        sequence: [
                                                            {
                                                                type: 'minecraft:condition',
                                                                if_true: {
                                                                    type: 'minecraft:stone_depth',
                                                                    add_surface_depth: false,
                                                                    offset: 0,
                                                                    secondary_depth_range: 0,
                                                                    surface_type: 'ceiling'
                                                                },
                                                                then_run: {
                                                                    type: 'minecraft:block',
                                                                    result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                                                }
                                                            },
                                                            {
                                                                type: 'minecraft:block',
                                                                result_state: { Name: 'natures_spirit:sandy_soil' }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    type: 'minecraft:condition',
                                    if_true: {
                                        type: 'minecraft:biome',
                                        biome_is: [
                                            'natures_spirit:tropical_shores',
                                            'natures_spirit:drylands'
                                        ]
                                    },
                                    then_run: {
                                        type: 'minecraft:condition',
                                        if_true: {
                                            type: 'minecraft:stone_depth',
                                            add_surface_depth: true,
                                            offset: 0,
                                            secondary_depth_range: 30,
                                            surface_type: 'floor'
                                        },
                                        then_run: {
                                            type: 'minecraft:block',
                                            result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    })
}


/** @param {$StructureLoadEventJS_} e  */
function naturesSpiritStructures(e) {
    // TODO: Replace vanilla chests with everycomp chests
}