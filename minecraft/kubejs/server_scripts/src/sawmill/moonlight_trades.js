/** @param {$DataPackEventJS_} e  */
function moonlightTrades_Sawmill(e) {
    e.addJson('sawmill:moonlight/villager_trades/carpenter/armor_stand', {
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        offer: { id: 'minecraft:armor_stand', Count: 1 },
        level: 2
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/axe', {
        type: 'simple',
        max_trades: 12,
        price_multiplier: 0.2,
        price: { id: 'minecraft:iron_axe', Count: 1 },
        offer: { id: 'numismaticoverhaul:silver_coin', Count: 2 },
        level: 3
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/boat', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'chest_boat',
        wood_block_amount: 1,
        emeralds: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        level: 4,
        type_dependant: true
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/diamond_axe', {
        type: 'simple',
        max_trades: 12,
        price_multiplier: 0.2,
        price: { id: 'minecraft:diamond_axe', Count: 1 },
        offer: { id: 'numismaticoverhaul:silver_coin', Count: 15 },
        level: 4
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/hanging_sign', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'hanging_sign',
        wood_block_amount: 1,
        emeralds: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        level: 5,
        type_dependant: true
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/hat_stand', {
        global_conditions: [
            { type: 'forge:mod_loaded', modid: 'supplementaries' },
            { type: 'supplementaries:flag', flag: 'hat_stand' }
        ],
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        offer: { id: 'supplementaries:hat_stand', Count: 1 },
        level: 4
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/log', {
        type: 'sawmill:wood_item_to_emerald',
        max_trades: 16,
        wood_block: 'log',
        wood_block_amount: 4,
        emeralds: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        level: 1
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/piston', {
        type: 'simple',
        max_trades: 6,
        price: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        offer: { id: 'minecraft:piston', Count: 3 },
        level: 5
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/planks', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'planks',
        wood_block_amount: 12,
        emeralds: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        level: 3,
        type_dependant: true
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/sapling', {
        type: 'sawmill:wood_item_to_emerald',
        buys: true,
        max_trades: 16,
        wood_block: 'sapling',
        wood_block_amount: 8,
        emeralds: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        level: 3
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/stripping', {
        type: 'sawmill:log_stripping',
        max_trades: 16,
        amount: 4,
        price: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        level: 3
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/torch', {
        type: 'simple',
        max_trades: 16,
        price: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        offer: { id: 'minecraft:torch', Count: 12 },
        level: 1
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/wood', {
        type: 'sawmill:wood_item_to_emerald',
        max_trades: 16,
        wood_block: 'wood',
        wood_block_amount: 4,
        emeralds: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
        level: 2
    })
}