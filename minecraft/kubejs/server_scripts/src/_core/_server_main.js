// priority: -1

ServerEvents.tags('item', e => {
    e.removeAllTagsFrom(global.REMOVALS.getAsArray())
    coreItemTags(e)
})

ServerEvents.tags('block', e => {
    coreBlockTags(e)
})

ServerEvents.tags('entity_type', e => {
    coreEntityTags(e)
})

ServerEvents.tags('worldgen/biome', e => {
    coreBiomeTags(e)
    naturesSpiritBiomeTags(e)
    upgradeAquaticBiomeTags(e)
    windsweptBiomeTags(e)
})


ServerEvents.recipes(e => {
    coreRecipes(e)
    everycompRecipes(e)
    windsweptRecipes(e)

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
    idasWorldgen(e)
    immersiveWeatheringWorldgen(e)
    naturesSpiritWorldgen(e)
    windsweptWorldgen(e)
})

LootJS.modifiers(e => {
    // Replacements
    const all = e.addLootTableModifier(/.*/)
    coreLootReplacements(all)
    
    coreLootTables(e)
})

MoreJSEvents.structureLoad(e => {
    coreStructures(e)
})


// DEBUGGING
ItemEvents.rightClicked(e => {
    if (e.getItem().getId() == 'minecraft:stone_axe') {
        
    }
})