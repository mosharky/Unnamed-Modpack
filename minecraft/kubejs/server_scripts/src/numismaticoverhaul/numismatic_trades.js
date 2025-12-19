/** @param {$DataPackEventJS_} e  */
function numismaticTrades_Core(e) {
    const wanderingTraderJson = {
        profession: 'wandering_trader', trades: {
            novice: [
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:cabbage_seeds', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:tomato_seeds', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:onion', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:rice', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('miners_delight:cave_carrot', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('supplementaries:flax_seeds', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 2999, sell: Item.of('supplementaries:sack', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 1800, sell: Item.of('supplementaries:globe', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 2600, sell: Item.of('supplementaries:globe_sepia', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 800, sell: Item.of('quark:seed_pouch', 1).toJson(), max_uses: 8, villager_experience: 5 },
            ],
            apprentice: [
                // TODO: replace with ancient book
                { type: 'numismaticoverhaul:enchant_item', base_price: 3000, allow_treasure: true, level: 60, item: { item: 'book' }, max_uses: 5, villager_experience: 15 },
                { type: SELL_STACK, price: 2000, sell: { item: 'backpacked:backpack', count: 1 }, max_uses: 1, villager_experience: 5 },
            ]
        }
    }

    const whitelist = [
        /atmospheric:.*/,
        /natures_spirit:.*/,
        /environmental:.*/,
        /upgrade_aquatic:.*/,
        /neapolitan:.*/,
        /autumnity:.*/,
        /windswept:.*/,
    ]
    let flowers = Ingredient.of('#minecraft:flowers').getItemIds().toArray().filter(flower => whitelist.some(regex => regex.test(flower)))
    // flowers.push()  // push strings if needed
    flowers.forEach(flower => wanderingTraderJson.trades.novice.push({ type: SELL_STACK, price: 120, sell: Item.of(flower, 1).toJson(), max_uses: 12, villager_experience: 5 }))

    let saplings = Ingredient.of('#minecraft:saplings').getItemIds().toArray().filter(sapling => whitelist.some(regex => regex.test(sapling)))
    saplings.push('malum:runewood_sapling', 'malum:azure_runewood_sapling')  // push strings if needed
    saplings.forEach(sapling => wanderingTraderJson.trades.novice.push({ type: SELL_STACK, price: 1600, sell: Item.of(sapling, 1).toJson(), max_uses: 8, villager_experience: 5 }))

    e.addJson('kubejs:villager_trades/wandering_trader', wanderingTraderJson)
}