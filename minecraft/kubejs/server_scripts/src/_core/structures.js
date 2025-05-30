MoreJSEvents.structureLoad(e => {

    // DEBUG ONLY: Log when removed blocks appear in a structure
    let illegalBlocks = new Set()
    e.forEachPalettes(palette => {
        palette.forEach(block => {
            if (global.REMOVALS.getBlocks().has(block.getId())) {
                illegalBlocks.add({structure: e.getId(), block: block.getId()})
            }
        })
    })
    illegalBlocks.forEach(entry => {
        console.warn(`Structure: ${entry.structure}, contains illegal block: ${entry.block}`)
    })
})