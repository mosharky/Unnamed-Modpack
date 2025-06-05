function quarkRemovals() {
    global.REMOVALS.add([
        /quark:(.*chest.*|.*ladder.*|.*bookshelf.*|.*leaf_carpet.*)/,
        /quark:.*thatch.*/,
        // TODO: Remove woods from compat stuff (Supplementaries, everycomp, etc)
        /quark:.*blossom.*/,
        /quark:.*ancient(?!_tome).*/,
        /quark:.*azalea(?!_hedge).*/,
        /quark:.*permafrost.*/,
        'quark:gold_bars',
        'quark:crate',
        'quark:chute'
    ])
}