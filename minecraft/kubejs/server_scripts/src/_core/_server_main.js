// priority: -1

ServerEvents.tags('item', e => {
    itemTags_Core(e)
})

ServerEvents.tags('block', e => {
    blockTags_Core(e)
    blockTags_SnowRealMagic(e)
})

ServerEvents.tags('entity_type', e => {
    entityTags_Core(e)
    entityTags_Atmospheric(e)
    entityTags_Environmental(e)
    entityTags_Galosphere(e)
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
    biomeTags_Malum(e)
    biomeTags_MyNethersDelight(e)
    biomeTags_NaturesSpirit(e)
    biomeTags_Neapolitan(e)
    biomeTags_UpgradeAquatic(e)
    biomeTags_Windswept(e)
})


ServerEvents.recipes(e => {
    recipes_Core(e)
    recipes_Atmospheric(e)
    recipes_BrewinAndChewin(e)
    recipes_Cataclysm(e)
    recipes_Embers(e)
    recipes_Everycomp(e)
    recipes_FarmersDelight(e)
    recipes_ImmersiveWeathering(e)
    recipes_Quark(e)
    recipes_Supplementaries(e)
    recipes_Windswept(e)

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
    enchants_ImmersiveEnchanting(e)
    enchants_Aileron(e)
    enchants_AlexsMobs(e)
    enchants_Allurement(e)
    enchants_Backpacked(e)
    enchants_Biomancy(e)
    enchants_CallOfYucutan(e)
    enchants_Create(e)
    enchants_Galosphere(e)
    enchants_Goety(e)
    enchants_Malum(e)
    enchants_Supplementaries(e)
    enchants_UnusualEnd(e)
    
    worldgen_Core(e)
    worldgen_Atmospheric(e)
    worldgen_Autumnity(e)
    worldgen_CavernsAndChasms(e)
    worldgen_Environmental(e)
    worldgen_Embers(e)
    // worldgen_EvenBetterNether(e)
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

// DEBUGGING
ItemEvents.rightClicked(e => {
    if (e.getItem().getId() == 'minecraft:stone_axe') {
        
    }
})