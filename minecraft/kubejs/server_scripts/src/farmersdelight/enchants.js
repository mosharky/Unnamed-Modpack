/** @param {$DataPackEventJS_} e  */
function enchants_FarmersDelight(e) {
    e.addJson('immersiveenchanting:enchantment_costs/farmersdelight/backstabbing', {
        levels: {
            '1': { item: 'minecraft:cactus', amount: 1 },
            '2': { item: 'minecraft:amethyst_shard', amount: 1 },
            '3': { item: 'minecraft:quartz', amount: 64 },
        }
    })
}