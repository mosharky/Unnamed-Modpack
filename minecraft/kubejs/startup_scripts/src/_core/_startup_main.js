// priority: -1

function postInit() {
    constructWoodTypes()

    // Adding items to global.REMOVALS and global.BLOCKSWAP_CONFIG
    removals_Atmospheric()
    removals_Autumnity()
    removals_CavernsAndChasms()
    removals_Environmental()
    removals_ImmersiveWeathering()
    removals_NaturesSpirit()
    removals_Oreganized()
    removals_Quark()
    removals_SnowySpirit()
    removals_Windswept()
    removals_Woodworks()

    // Changing blockswap config with KubeJS!
    processBlockswapConfig()
    // Virtual blockwsap (without using the blockswap mod)
    processSwappers()

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
        console.log('Processed RegExp removals!')
        console.log('Final removals set:')
        console.log(global.REMOVALS.getAsArray())
    }
}

// For reloading
if (global.INITIALIZED) postInit()

// postInit because Ingredient needs to wait for mods to load in order to hold anything other than vanilla items
StartupEvents.postInit(e => {
    postInit()
    global.INITIALIZED = true
})