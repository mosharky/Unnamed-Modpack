// priority: -1

// postInit because Ingredient needs to wait for mods to load in order to hold anything other than vanilla items
StartupEvents.postInit(e => {
    // Adding items to global.REMOVALS and global.BLOCKSWAP_CONFIG
    atmosphericRemovals()
    environmentalRemovals()
    immersiveWeatheringRemovals()
    naturesSpiritRemovals()
    quarkRemovals()

    // Changing blockswap config with KubeJS!
    processBlockswapConfig()

    // Because not all KubeJS methods support regex
    global.REMOVALS.all.forEach(entry => {
        if (entry instanceof RegExp) {
            Ingredient.of(entry).itemIds.forEach(itemId => global.REMOVALS.add(itemId))
            global.REMOVALS.all.delete(entry)
        }
    })


    console.log('REMOVALS:')
    console.log(global.REMOVALS.getAsArray())
})
