/**
 * @param {TagEvent.Block} e 
 */
function blockTags(e) {
    e.add('snowrealmagic:containables', [
        // /geocluster:.*sample/
    ])

    // used for Panda's Falling Trees compat
    e.add('kubejs:extra_tree_blocks_whitelist', [
        /natures_spirit:.*wisteria_vines/
    ])

    // e.add('minecraft:logs', ['natures_spirit:alluaudia', 'natures_spirit:stripped_alluaudia'])
}


/**
 * @param {TagEvent.EntityType} e 
 */
function entityTags(e) {
    // e.add('kubejs:surface_mod_entities', /.*surface:.*/)
}