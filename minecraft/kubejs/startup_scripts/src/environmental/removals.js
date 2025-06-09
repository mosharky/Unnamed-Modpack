function environmentalRemovals() {
    global.REMOVALS.add([
        // TODO: Remove woods from compat stuff (Supplementaries, everycomp, etc)
        /environmental:.*willow.*/,
        'environmental:cattail',
        'environmental:cattail_fluff',
        'environmental:cattail_fluff_block',
        /environmental:.*leaf_pile.*/,
    ])
}