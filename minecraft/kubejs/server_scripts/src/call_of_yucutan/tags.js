/** @param {$TagEventJS_} e */
function biomeTags_CallOfYucutan(e) {
    e.add('kubejs:has_feature/call_of_yucutan_features', [
        '#minecraft:is_jungle',
        '#natures_spirit:is_tropical_woods',
        '#atmospheric:is_rainforest'
    ])
}

/** @param {$TagEventJS_} e */
function itemTags_CallOfYucutan(e) {
    e.add('forge:gems', 'call_of_yucutan:jade')
    e.add('forge:gems/jade', 'call_of_yucutan:jade')
}