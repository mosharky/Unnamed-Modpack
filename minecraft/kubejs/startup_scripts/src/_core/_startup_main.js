// priority: -1

// Because not all KubeJS methods support regex
global.REMOVALS.all.forEach(entry => {
    if (entry instanceof RegExp) {
        Ingredient.of(entry).itemIds.forEach(itemId => global.REMOVALS.add(itemId))
        global.REMOVALS.all.delete(entry)
    }
})

// Changing blockswap config with KubeJS!
processBlockswapConfig()

// console.log(Ingredient.of('*').itemIds)

console.log('REMOVALS:')
console.log(global.REMOVALS.getAsArray())
