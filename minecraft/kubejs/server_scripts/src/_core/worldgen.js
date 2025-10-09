/** @param {$DataPackEventJS_} e  */
function coreWorldgen(e) {

    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#kubejs:all_biomes', 'fluid_springs')
}


let removedBlocks = global.REMOVALS.getBlocks()
/** @param {$StructureLoadEventJS_} e  */
function coreStructures(e) {
    // Have to use `${block.getId()}` because of a Rhino bug
    if (global.DEBUG_MODE) console.log(`Structure: ${e.getId()} is loading..`)

    /* Copycat NBT:
    {
        Item: {Count: 1b, id: "create:industrial_iron_block"},
        Material: {Name: "create:industrial_iron_block"},
        id: "create:copycat"
    }

    Flower Box NBT:
    {
        Items: [
            {Slot: 0b, id: "quark:lavender_blossom_sapling", Count: 1b}, 
            {Slot: 1b, id: "minecraft:oxeye_daisy", Count: 1b}, 
            {Slot: 2b, id: "minecraft:torchflower", Count: 1b}
        ], 
        id: "supplementaries:flower_box"
    } */

    e.forEachPalettes(palette => {
        palette.forEach(block => {
            let blockToSwap, blockToSwapWith
            let flowerBoxPlants = []

            // First pass: get the block that needs to get swapped
            switch (block.getId()) {
                case 'create:copycat_panel': case 'create:copycat_step': blockToSwap = block.getNbt().Item.id; break;
                case 'minecraft:jigsaw': blockToSwap = block.getNbt().final_state; break;
                case 'supplementaries:flower_box': flowerBoxPlants = block.getNbt().Items; break;
                default: blockToSwap = block.getId()
            }

            // Get the mapped block to swap with
            blockToSwapWith = global.SWAPPER.get(`${blockToSwap}`)
            if (blockToSwapWith == undefined) blockToSwapWith = global.BLOCKSWAP_CONFIG.swapper[blockToSwap]

            flowerBoxPlants.forEach(plant => {
                if (global.SWAPPER.get(`${plant.id}`) != undefined) {
                    plant.id = global.SWAPPER.get(`${plant.id}`)
                }
            })

            // Second pass: perform the swapping
            if (blockToSwapWith != undefined || flowerBoxPlants.length > 0) {
                switch (block.getId()) {
                    case 'create:copycat_panel': case 'create:copycat_step': {
                        let nbt = block.getNbt()
                        nbt.Item.id = blockToSwapWith
                        nbt.Material.Name = blockToSwapWith
                        break
                    }
                    case 'minecraft:jigsaw': block.getNbt().final_state = blockToSwapWith; break
                    case 'supplementaries:flower_box': {
                        // Test with /locate structure idas:tinkers_citadel
                        block.getNbt().Items = flowerBoxPlants
                        break
                    }
                    default: block.setBlock(blockToSwapWith, block.properties)
                }
            } else if (global.DEBUG_MODE && removedBlocks.has(`${blockToSwap}`)) {
                console.log(`Structure: '${e.getId()}' contains unswapped block: '${blockToSwap}'`)
            } else if (global.DEBUG_MODE && block.getNbt() != null && !block.getNbt().isEmpty()) {
                removedBlocks.forEach(removal => {
                    if (block.getNbt().toString().includes(removal)) {
                        console.log(`Structure: '${e.getId()}' contains unswapped removal '${removal}' in block: '${block.getId()}' with NBT: ${JSON.stringify(block.getNbt())}`)
                    }
                })
            }

        })
    })

    if (global.DEBUG_MODE) console.log(`Structure: ${e.getId()} has loaded!`)
}