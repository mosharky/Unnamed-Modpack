/** @param {$DataPackEventJS_} e  */
function enchants_Soulbound(e) {
    e.addJson('immersiveenchanting:enchantment_costs/soulbound/soulbound', {
        levels: {
            '1': { item: 'alexsmobs:soul_heart', amount: 1 },
        }
    })
}