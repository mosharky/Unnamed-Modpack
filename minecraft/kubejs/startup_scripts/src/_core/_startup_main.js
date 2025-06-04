// priority: -1

// Because not all KubeJS methods support regex
global.REMOVALS.all.forEach(entry => {
    if (entry instanceof RegExp) {
        Ingredient.of(entry).itemIds.forEach(itemId => global.REMOVALS.all.add(itemId))
        global.REMOVALS.all.delete(entry)
    }
})

// Changing blockswap config with KubeJS!
processBlockswapConfig()

console.log('REMOVALS:')
console.log(global.REMOVALS.getAsArray())
