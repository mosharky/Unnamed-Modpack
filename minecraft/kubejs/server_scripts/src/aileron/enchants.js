/** @param {$DataPackEventJS_} e  */
function enchants_Aileron(e) {
    e.addJson('immersiveenchanting:enchantment_costs/aileron/smokestack', {
        levels: {
            '1': { item: 'embers:copper_charger', amount: 1 },
            '2': { item: 'minecraft:echo_shard', amount: 1 },
            '3': { item: 'create_new_age:overcharged_diamond', amount: 8 },
        }
    })

    e.addJson('immersiveenchanting:enchantment_costs/aileron/cloudskipper', {
        levels: {
            '1': { item: 'minecraft:phantom_membrane', amount: 8 },
            '2': { item: 'alexsmobs:tarantula_hawk_wing', amount: 1 },
            '3': { item: 'quark:bottled_cloud', amount: 1 },
        }
    })
}