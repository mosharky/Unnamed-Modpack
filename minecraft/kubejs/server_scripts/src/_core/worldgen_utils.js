// priority: 1
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
 * @param {$DataPackEventJS_} event - highPriorityData event
 * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
 * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
 * @param {String} step - The generation step
 * @param {Optional | String} id - Modifier ID
 */
function removeFeatures(event, features, biomes, step, id) {
    if (typeof features == 'string') features = [features]
    let obj = {
        type: 'lithostitched:remove_features',
        biomes: biomes,
        features: features,
        step: step
    }
    id == undefined
        ? event.addJson(`kubejs:lithostitched/worldgen_modifier/remove_feature/${nameProcess(features)}`, obj)
        : event.addJson(`kubejs:lithostitched/worldgen_modifier/${id}`, obj)
    
}

/**
 * Adds placed features to biomes
 * @param {$DataPackEventJS_} event - highPriorityData event
 * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
 * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
 * @param {String} step - The generation step
 * @param {Optional | String} id - Modifier ID
 */
function addFeatures(event, features, biomes, step, id) {
    if (typeof features == 'string') features = [features]
    let obj = {
        type: 'lithostitched:add_features',
        biomes: biomes,
        features: features,
        step: step
    }
    id == undefined
        ? event.addJson(`kubejs:lithostitched/worldgen_modifier/add_feature/${nameProcess(features)}`, obj)
        : event.addJson(`kubejs:lithostitched/worldgen_modifier/${id}`, obj)
}

/**
 * Copies a placed feature JSON from kubejs/_mod_data
 * @param {$DataPackEventJS_} event - highPriorityData event
 * @param {String} modId - Which mods' jar this feature is found in
 * @param {String} featureType - 'placed' or 'configured'
 * @param {String} featureId - Feature ID (i.e.: 'minecraft:oak_tree)
 * @returns {String} Copied Feature ID
 */
function copyPasteFeature(event, modId, featureType, featureId) {
    let copiedFeatureName = 'copied_' + featureId.replace(':', '_')
    event.addJson(`kubejs:worldgen/${featureType}_feature/${copiedFeatureName}`, getFeatureJson(modId, featureType, featureId))
    return `kubejs:${copiedFeatureName}`
}

/**
 * Registers a feature in location featureId
 * @param {$DataPackEventJS_} event - highPriorityData event
 * @param {String} type - CONFIGURED or PLACED
 * @param {String} featureId - Feature ID (i.e. `minecraft:oak_tree`)
 * @param {Object} featureJson - Feature JSON object
 */
function registerFeature(event, type, featureId, featureJson) {
    let replaceIdSplit = featureId.split(':')
    event.addJson(`${replaceIdSplit[0]}:worldgen/${type}_feature/${replaceIdSplit[1]}`, featureJson)
}

/**
 * Remove a forge biome modifier
 * @param {$DataPackEventJS_} event - highPriorityData event
 * @param {String} modifier - mod id + modifier name (ex: 'eidolon:silver_ore')
 */
function removeBiomeModifier(event, modifier) {
    let namespace = modifier.split(':')[0]
    let filename = modifier.split(':')[1]
    event.addJson(`${namespace}:forge/biome_modifier/${filename}.json`, { type: 'forge:none' })
}


/**
 * Remove entity spawns from biomes
 * @param {$DataPackEventJS_} event - highPriorityData event
 * @param {String | Array.<String>} mobs - An entity ID, or entity type tag, or an array of entities
 * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
 * @param {Optional | String} id - Modifier ID
 */
function removeSpawns(event, mobs, biomes) {
    let obj = {
        type: 'lithostitched:remove_biome_spawns',
        biomes: biomes,
        mobs: mobs
    }
    id == undefined
        ? event.addJson(`kubejs:lithostitched/worldgen_modifier/remove_spawn/${nameProcess(mobs)}`, obj)
        : event.addJson(`kubejs:lithostitched/worldgen_modifier/${id}`, obj)
}

/**
 * Get feature JSON object by type
 * @param {String} modId - Which mods' jar this feature is found in
 * @param {String} featureType - 'placed' or 'configured'
 * @param {String} featureId - Feature ID (i.e.: 'minecraft:oak_tree)
 * @returns {Object} Feature JSON
 */
function getFeatureJson(modId, featureType, featureId) {
    let featureSplit = featureId.split(':')
    let namespace = featureSplit[0]
    let featureName = featureSplit[1]
    return global.readJsonFileFromMod('data', modId, `${namespace}:worldgen/${featureType}_feature/${featureName}.json`)
}
