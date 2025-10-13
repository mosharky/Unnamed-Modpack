// priority: -1

ServerEvents.tags('item', e => {
    e.removeAllTagsFrom(global.REMOVALS.getAsArray())
})

ServerEvents.tags('block', e => {
    coreBlockTags(e)
})

ServerEvents.tags('entity_type', e => {
    coreEntityTags(e)
})

ServerEvents.tags('worldgen/biome', e => {
    coreBiomeTags(e)
    upgradeAquaticBiomeTags(e)
})


ServerEvents.recipes(e => {
    coreRecipes(e)
    everycompRecipes(e)

    // Fully removing any recipe tied to items in REMOVALS
    global.REMOVALS.all.forEach(removal => {
        e.remove({ input: removal})
        e.remove({ output: removal})
    })

})


ServerEvents.loaded(e => {
    //e.getServer().getLevel().difficulty
})

ServerEvents.highPriorityData(e => {
    coreWorldgen(e)
    atmosphericWorldgen(e)
    autumnityWorldgen(e)
    environmentalWorldgen(e)
    immersiveWeatheringWorldgen(e)
    naturesSpiritWorldgen(e)
})


MoreJSEvents.structureLoad(e => {
    coreStructures(e)
    naturesSpiritStructures(e)
})