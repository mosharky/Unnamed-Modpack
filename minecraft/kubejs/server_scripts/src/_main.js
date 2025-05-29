// priority: -1

ServerEvents.tags('item', e => {

})

ServerEvents.tags('block', e => {
    blockTags(e)
})

ServerEvents.tags('entity_type', e => {
    entityTags(e)
})

ServerEvents.tags('worldgen/biome', e => {
    biomeTags(e)
})



ServerEvents.recipes(e => {
    // replacing

    // fully remove everything in fullRemovals
    global.fullRemovals.forEach(removal => {
        e.remove({ input: removal})
        e.remove({ output: removal})
    })

    // adding
})




// Must be here for fullRemovals logic to work
ServerEvents.tags('item', e => {
    e.removeAllTagsFrom(global.fullRemovals)
})



ServerEvents.loaded(e => {
    //e.getServer().getLevel().difficulty
})