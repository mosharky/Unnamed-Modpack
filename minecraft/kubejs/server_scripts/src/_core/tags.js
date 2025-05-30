/** @param {$TagEventJS_} e */
function coreItemTags(e) {

}

/** @param {$TagEventJS_} e */
function coreBlockTags(e) {
    e.add('snowrealmagic:containables', [
        // /geocluster:.*sample/
    ])

    // used for Panda's Falling Trees compat
    e.add('kubejs:extra_tree_blocks_whitelist', [
        /natures_spirit:.*wisteria_vines/
    ])

    // e.add('minecraft:logs', ['natures_spirit:alluaudia', 'natures_spirit:stripped_alluaudia'])
}

/** @param {$TagEventJS_} e */
function coreEntityTags(e) {
    // e.add('kubejs:surface_mod_entities', /.*surface:.*/)
}


/** @param {$TagEventJS_} e */
function coreBiomeTags(e) {
    
}