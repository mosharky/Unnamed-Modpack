/** @param {$RecipesEventJS_} e */
function recipes_Core(e) {
    e.replaceInput({ not: { id: 'woodworks:trapped_chest' } }, 'minecraft:chest', '#forge:chests/wooden')

    e.remove({ id: 'minecraft:lodestone' })

    // Logs into chests
    Object.keys(global.WOOD_TYPES).forEach(modId => {
        Object.keys(global.WOOD_TYPES[modId]).forEach(woodType => {
            if (global.WOOD_TYPES[modId][woodType].minecraft.log != undefined) return
            if (global.WOOD_TYPES[modId][woodType].woodworks.chest != undefined) return
            if (global.WOOD_TYPES[modId][woodType].woodworks.trapped_chest != undefined) return

            e.shaped(Item.of(global.WOOD_TYPES[modId][woodType].woodworks.chest, 4), [
                'AAA',
                'A A',
                'AAA'],
                { A: global.WOOD_TYPES[modId][woodType].minecraft.log })

            e.shaped(Item.of(global.WOOD_TYPES[modId][woodType].woodworks.trapped_chest, 4), [
                'AAA',
                'ABA',
                'AAA'],
                {
                    A: global.WOOD_TYPES[modId][woodType].minecraft.log,
                    B: 'minecraft:tripwire_hook'
                })
        })
    })

    e.shaped('backpacked:backpack', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: 'kubejs:ravager_hide',
        B: '#c:string',
        C: '#forge:ingots/iron',
        D: 'minecraft:rabbit_hide'
    }).id('backpacked:backpack')
}