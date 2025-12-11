// priority: 100

let overworldBiomes
ServerEvents.tags('worldgen/biome', e => {
    overworldBiomes = e.get('minecraft:is_overworld').getObjectIds()
})

