/** @param {$DataPackEventJS_} e  */
function naturesSpiritWorldgen(e) {
    removeFeatures(e, 'natures_spirit:patch_beach_grass', 'natures_spirit:tropical_shores', 'vegetal_decoration')

    // Changing maple trees to use Autumnity's maple logs
    // https://github.com/Team-Hibiscus/NatureSpiritForge/blob/1.20.1/src/main/resources/data/natures_spirit/worldgen/configured_feature/orange_maple_tree.json
    const mapleColors = ['orange', 'yellow', 'red'].forEach(color => {
        let treeFeatureJson = getFeatureJson('natures_spirit', CONFIGURED, `natures_spirit:${color}_maple_tree`)
        treeFeatureJson.config.trunk_provider.state.Name = 'autumnity:maple_log'
        // treeFeature.config.decorators = []
        registerFeature(e, CONFIGURED, `natures_spirit:${color}_maple_tree`, treeFeatureJson)
        // Adding NS maple trees to vanilla biomes, same as Autumnity did
        addFeatures(e, spottedPlacedFeature(e, `natures_spirit:${color}_maple_tree`, `natures_spirit:${color}_maple_sapling`), `#kubejs:has_feature/spotted_maple_tree/${color}`, 'vegetal_decoration')
    })

    // Replacing Autumnity's green maple with a new one using NS maple tree type
    // Configured feature:
    const mapleConfigured = getFeatureJson('natures_spirit', CONFIGURED, 'natures_spirit:orange_maple_tree')
    mapleConfigured.config.decorators = []
    mapleConfigured.config.trunk_provider.state.Name = 'autumnity:maple_log'
    mapleConfigured.config.foliage_provider.state.Name = 'autumnity:maple_leaves'
    registerFeature(e, CONFIGURED, 'autumnity:maple_tree', mapleConfigured)
    // Placed feature:
    const maplePlaced = getFeatureJson('natures_spirit', PLACED, 'natures_spirit:orange_maple_checked')
    maplePlaced.feature = 'autumnity:maple_tree'
    maplePlaced.placement[0].predicate.state.Name = 'autumnity:maple_sapling'
    registerFeature(e, PLACED, 'kubejs:maple_tree_checked', maplePlaced)
    // Replacing minecraft:fancy_oak_checked with kubejs:maple_tree
    const mapleSpawnConfigured = getFeatureJson('natures_spirit', CONFIGURED, 'natures_spirit:maple_spawn')
    mapleSpawnConfigured.config.features[3] = 'kubejs:maple_tree_checked'
    registerFeature(e, CONFIGURED, 'natures_spirit:maple_spawn', mapleSpawnConfigured)
    // Sparse tree placement
    addFeatures(e,
        registerFeature(e, PLACED, 'kubejs:sparse_maple_tree', {
            feature: 'autumnity:maple_tree',
            placement: [
                {
                    type: 'minecraft:count',
                    count: {
                        type: 'minecraft:weighted_list',
                        distribution: [
                            { data: 1, weight: 9 },
                            { data: 2, weight: 1 }
                        ]
                    }
                },
                { type: 'minecraft:in_square' },
                { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
                { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
                { type: 'minecraft:biome' },
                wouldSurvive('autumnity:maple_sapling')
            ]
        }),
        '#kubejs:has_feature/sparse_maple_tree',
        'vegetal_decoration'
    )

    // Autumnity pumpkins in NS biomes
    addFeatures(e,
        copyPasteFeature(e, 'autumnity', PLACED, 'autumnity:patch_pumpkin_pumpkin_fields'),
        ['natures_spirit:golden_wilds', 'natures_spirit:maple_woodlands', 'natures_spirit:marigold_meadows'],
        'vegetal_decoration'
    )

    // https://github.com/Team-Hibiscus/NatureSpiritForge/blob/1.20.1/src/main/java/net/hibiscus/naturespirit/world/NSSurfaceRules.java
    // Replacing pink sand with 'atmospheric:red_arid_sand' as a surface rule
    // Lithostitched surface rules apply before any other surface rule, so this is applied before NS gets to apply its own surface rules
    /*
    public static final SurfaceRules.ConditionSource ON_FLOOR = stoneDepthCheck(0, false, CaveSurface.FLOOR);
    public static final SurfaceRules.ConditionSource UNDER_FLOOR = stoneDepthCheck(0, true, CaveSurface.FLOOR);
    public static final SurfaceRules.ConditionSource DEEP_UNDER_FLOOR = stoneDepthCheck(0, true, 6, CaveSurface.FLOOR);
    public static final SurfaceRules.ConditionSource VERY_DEEP_UNDER_FLOOR = stoneDepthCheck(0, true, 30, CaveSurface.FLOOR);
    public static final SurfaceRules.ConditionSource ON_CEILING = stoneDepthCheck(0, false, CaveSurface.CEILING);
    public static final SurfaceRules.ConditionSource UNDER_CEILING = stoneDepthCheck(0, true, CaveSurface.CEILING);
    */
    e.addJson('kubejs:lithostitched/worldgen_modifier/add_surface_rule/replace_pink_sand', {
        type: 'lithostitched:add_surface_rule',
        levels: [
            'minecraft:overworld'
        ],
        surface_rule: {
            type: 'minecraft:sequence',
            sequence: [
                {
                    type: 'minecraft:condition',
                    if_true: { type: 'minecraft:above_preliminary_surface' },
                    then_run: {
                        type: 'minecraft:sequence',
                        sequence: [
                            {
                                type: 'minecraft:condition',
                                if_true: {  // ON_FLOOR
                                    type: 'minecraft:stone_depth',
                                    add_surface_depth: false,
                                    offset: 0,
                                    secondary_depth_range: 0,
                                    surface_type: 'floor'
                                },
                                then_run: {
                                    type: 'minecraft:condition',
                                    if_true: {
                                        type: 'minecraft:biome',
                                        biome_is: [
                                            'natures_spirit:arid_highlands',
                                        ]
                                    },
                                    then_run: {
                                        type: 'minecraft:sequence',
                                        sequence: [
                                            {  // This rule is needed to prevent pink sand everywhere
                                                type: 'minecraft:condition',
                                                if_true: {
                                                    type: 'minecraft:y_above',
                                                    add_stone_depth: false,
                                                    anchor: { absolute: 256 },
                                                    surface_depth_multiplier: 0
                                                },
                                                then_run: {
                                                    type: 'minecraft:block',
                                                    result_state: { Name: 'natures_spirit:chert' }
                                                }
                                            },
                                            {
                                                type: 'minecraft:condition',
                                                if_true: {
                                                    type: 'minecraft:y_above',
                                                    add_stone_depth: true,
                                                    anchor: { absolute: 70 },
                                                    surface_depth_multiplier: 1
                                                },
                                                then_run: {
                                                    type: 'minecraft:sequence',
                                                    sequence: [
                                                        {
                                                            type: 'minecraft:condition',
                                                            if_true: {
                                                                type: 'minecraft:noise_threshold',
                                                                min_threshold: 0.5454,
                                                                max_threshold: 0.909,
                                                                noise: 'minecraft:surface'
                                                            },
                                                            then_run: {
                                                                type: 'minecraft:block',
                                                                result_state: { Name: 'natures_spirit:sandy_soil' }
                                                            }
                                                        },
                                                        {
                                                            type: 'minecraft:bandlands'
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                type: 'minecraft:condition',
                                                if_true: {  // materialCondition5
                                                    type: 'minecraft:water',
                                                    add_stone_depth: false,
                                                    offset: -1,
                                                    surface_depth_multiplier: 0
                                                },
                                                then_run: {
                                                    type: 'minecraft:sequence',
                                                    sequence: [
                                                        {  // This rule is needed to prevent pink sand everywhere
                                                            type: 'minecraft:condition',
                                                            if_true: {  // ON_CEILING
                                                                type: 'minecraft:stone_depth',
                                                                add_surface_depth: false,
                                                                offset: 0,
                                                                secondary_depth_range: 0,
                                                                surface_type: 'ceiling'
                                                            },
                                                            then_run: {
                                                                type: 'minecraft:block',
                                                                result_state: { Name: 'natures_spirit:chert' }
                                                            }
                                                        },
                                                        {
                                                            type: 'minecraft:block',
                                                            result_state: { Name: 'atmospheric:red_arid_sand' }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                type: 'minecraft:condition',
                                if_true: {  // belowWater
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
                                            if_true: {  // UNDER_FLOOR
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
                                                                    if_true: {  // ON_CEILING
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
                                                                        if_true: {  // ON_CEILING
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
                                                ]
                                            },
                                            then_run: {
                                                type: 'minecraft:condition',
                                                if_true: {  // DEEP_UNDER_FLOOR
                                                    type: 'minecraft:stone_depth',
                                                    add_surface_depth: true,
                                                    offset: 0,
                                                    secondary_depth_range: 6,
                                                    surface_type: 'floor'
                                                },
                                                then_run: {
                                                    type: 'minecraft:block',
                                                    result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                                }
                                            }
                                        },
                                        {
                                            type: 'minecraft:condition',
                                            if_true: {
                                                type: 'minecraft:biome',
                                                biome_is: [
                                                    'natures_spirit:drylands'
                                                ]
                                            },
                                            then_run: {
                                                type: 'minecraft:condition',
                                                if_true: {  // VERY_DEEP_UNDER_FLOOR
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
            ]
        }
    })
}


/** @param {$StructureLoadEventJS_} e  */
function naturesSpiritStructures(e) {
    // TODO: Replace vanilla chests with everycomp chests
}