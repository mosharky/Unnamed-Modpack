function removals_Atmospheric() {
    global.REMOVALS.add([
        // TODO: Remove woods from compat stuff (Supplementaries, everycomp, etc)
        /atmospheric:.*aspen.*/,
        /atmospheric:.*leaf_pile.*/,
        /atmospheric:.*travertine.*/,
    ])
}