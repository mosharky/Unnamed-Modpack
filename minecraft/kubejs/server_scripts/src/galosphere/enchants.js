/** @param {$DataPackEventJS_} e  */
function enchants_Galosphere(e) {
    e.addJson('immersiveenchanting:enchantment_costs/galosphere/enfeeble', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
        }
    })

    e.addJson('immersiveenchanting:enchantment_costs/galosphere/sustain', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })

    e.addJson('immersiveenchanting:enchantment_costs/galosphere/rupture', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })
}