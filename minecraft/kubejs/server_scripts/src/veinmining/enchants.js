/** @param {$DataPackEventJS_} e  */
function enchants_VeinMining(e) {
    e.addJson('immersiveenchanting:enchantment_costs/veinmining/vein_mining', {
        levels: {
            '1': { item: 'miners_delight:silverfish_eggs', amount: 16 },
        }
    })
}