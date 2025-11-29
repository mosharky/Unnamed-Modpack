/** @param {$RecipesEventJS_} e */
function recipes_Core(e) {

    // Logs into chests
    Object.keys(global.WOOD_TYPES).forEach(modId => {
        Object.keys(global.WOOD_TYPES[modId]).forEach(woodType => {
            if (!Item.exists(global.WOOD_TYPES[modId][woodType].minecraft.log)) return
            e.shaped(Item.of(global.WOOD_TYPES[modId][woodType].woodworks.chest, 4), [
                'AAA',
                'A A',
                'AAA'],
                { A: global.WOOD_TYPES[modId][woodType].minecraft.log })

            e.shaped(Item.of(global.WOOD_TYPES[modId][woodType].woodworks.trapped_chest, 4), [
                'AAA',
                'ABA',
                'AAA'],
                { A: global.WOOD_TYPES[modId][woodType].minecraft.log,
                  B: 'minecraft:tripwire_hook' })
        })
    })
}