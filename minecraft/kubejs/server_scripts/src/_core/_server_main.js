// priority: -1

ServerEvents.tags('item', e => {
    itemTags_Core(e)
})

ServerEvents.tags('block', e => {
    blockTags_Core(e)
})

ServerEvents.tags('entity_type', e => {
    entityTags_Core(e)
    entityTags_Environmental(e)
    entityTags_Atmospheric(e)
})

ServerEvents.tags('worldgen/biome', e => {
    biomeTags_Core(e)
    biomeTags_Atmospheric(e)
    biomeTags_Autumnity(e)
    biomeTags_CavernsAndChasms(e)
    biomeTags_CollectorsReap(e)
    biomeTags_Environmental(e)
    biomeTags_Galosphere(e)
    biomeTags_ImmersiveWeathering(e)
    biomeTags_MyNethersDelight(e)
    biomeTags_NaturesSpirit(e)
    biomeTags_UpgradeAquatic(e)
    biomeTags_Windswept(e)
})


ServerEvents.recipes(e => {
    recipes_Core(e)
    recipes_Everycomp(e)
    recipes_FarmersDelight(e)
    recipes_Quark(e)
    recipes_Supplementaries(e)
    recipes_Windswept(e)
    recipes_ImmersiveWeathering(e)

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
    worldgen_Core(e)
    worldgen_Atmospheric(e)
    worldgen_Autumnity(e)
    worldgen_CavernsAndChasms(e)
    worldgen_Environmental(e)
    worldgen_EvenBetterNether(e)
    worldgen_Galosphere(e)
    worldgen_Idas(e)
    worldgen_ImmersiveWeathering(e)
    worldgen_MyNethersDelight(e)
    worldgen_NaturesSpirit(e)
    worldgen_Oreganized(e)
    worldgen_SnowySpirit(e)
    worldgen_Windswept(e)
})

LootJS.modifiers(e => {
    // Replacements
    const all = e.addLootTableModifier(/.*/)
    lootReplacements_Core(all)
    
    lootTables_Core(e)
})

MoreJSEvents.structureLoad(e => {
    structures_Core(e)
})


// DEBUGGING
ItemEvents.rightClicked(e => {
    if (e.getItem().getId() == 'minecraft:stone_axe') {
        
    }
})