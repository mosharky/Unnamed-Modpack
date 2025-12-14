/** @param {$DataPackEventJS_} e  */
function enchants_Biomancy(e) {
    e.addJson('immersiveenchanting:enchantment_costs/biomancy/despoil', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })

    e.addJson('immersiveenchanting:enchantment_costs/biomancy/anesthetic', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
        }
    })

    e.addJson('immersiveenchanting:enchantment_costs/biomancy/surgical_precision', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })

    e.addJson('immersiveenchanting:enchantment_costs/biomancy/self_feeding', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 1 },
        }
    })
}