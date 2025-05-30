// priority: -1

ServerEvents.tags('item', e => {

})

ServerEvents.tags('block', e => {
    coreBlockTags(e)
})

ServerEvents.tags('entity_type', e => {
    coreEntityTags(e)
})

ServerEvents.tags('worldgen/biome', e => {
    coreBiomeTags(e)
})



ServerEvents.recipes(e => {
    coreRecipes(e)

    // Fully removing any recipe tied to items in REMOVALS
    global.REMOVALS.all.forEach(removal => {
        e.remove({ input: removal})
        e.remove({ output: removal})
    })

})




// Must be here for removal logic to work (I think)
ServerEvents.tags('item', e => {
    e.removeAllTagsFrom(global.REMOVALS.getAsArray())
})



ServerEvents.loaded(e => {
    //e.getServer().getLevel().difficulty
})

ServerEvents.highPriorityData(e => {
    coreWorldgen(e)
})

