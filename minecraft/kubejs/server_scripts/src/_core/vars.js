// priority: 100

/*
// disabled Geocluster ores
// https://github.com/mrsterner/Geocluster/tree/1.20.1-fabric/src/main/resources/data/geocluster/deposits
const disabledGeoclusterOres = [
    'aluminium',
    // 'ancient_debris',
    // 'coal',
    // 'coal_extra',
    // 'copper',
    // 'diamond',
    // 'emerald',
    // 'emerald_extra',
    // 'gold',
    // 'gold_nether',
    // 'iron',
    // 'iron_marchy',
    'iron_nickel',
    // 'lapis',
    'lead_silver',
    'platinum',
    // 'quartz',
    // 'quartz_nether',
    // 'redstone',
    'tin',
    'titanium',
    'uranium',
    'zinc',
]
*/

let overworldBiomes
ServerEvents.tags('worldgen/biome', e => {
    overworldBiomes = e.get('minecraft:is_overworld').getObjectIds()
})

