// priority: -1

// postInit because Ingredient needs to wait for mods to load in order to hold anything other than vanilla items
StartupEvents.postInit(e => {
    constructWoodTypes()

    // Adding items to global.REMOVALS and global.BLOCKSWAP_CONFIG
    atmosphericRemovals()
    autumnityRemovals()
    environmentalRemovals()
    immersiveWeatheringRemovals()
    naturesSpiritRemovals()
    quarkRemovals()
    woodworksRemovals()

    // Changing blockswap config with KubeJS!
    processBlockswapConfig()
    // Virtual blockwsap (without using the blockswap mod)
    processSwapper()

    // Because not all KubeJS methods support regex
    if (global.DEBUG_MODE) console.log('Processing RegExp removals..')
    global.REMOVALS.all.forEach(entry => {
        if (entry instanceof RegExp) {
            Ingredient.of(entry).itemIds.forEach(match => {
                if (global.DEBUG_MODE) console.log(`${entry} has matched: ${match}`)
                global.REMOVALS.add(match)
            })
            global.REMOVALS.all.delete(entry)
        }
    })

    if (global.DEBUG_MODE) {
        console.log('Processed RegExp removals!\nFinal removals set:')
        console.log(global.REMOVALS.getAsArray())
    }
})
