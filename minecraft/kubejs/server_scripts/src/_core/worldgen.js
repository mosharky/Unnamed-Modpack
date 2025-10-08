/** @param {$DataPackEventJS_} e  */
function coreWorldgen(e) {

    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#kubejs:all_biomes', 'fluid_springs')
}


let removedBlocks = global.REMOVALS.getBlocks()
/** @param {$StructureLoadEventJS_} e  */
function coreStructures(e) {
    // Have to use `${block.getId()}` because of a Rhino bug
    if (global.DEBUG_MODE) console.log(`Structure: ${e.getId()} is loading..`)

    e.forEachPalettes(palette => {
        palette.forEach(block => {
            let blockToSwap, blockToSwapWith, plantsToSwap

            // First pass: get the block that needs to get swapped
            switch (block.getId()) {
                case 'create:copycat_panel': case 'create:copycat_step': blockToSwap = block.getNbt().Item.id; break;
                case 'minecraft:jigsaw': blockToSwap = block.getNbt().final_state; break;
                case 'supplementaries:flower_box': {
                    plantsToSwap = block.getId() // because it can't be undefined i think
                    block.getNbt().Items.forEach(item => {
                        if (global.SWAPPER.get(`${item}`) != undefined) {
                            item.id = global.SWAPPER.get(`${item}`)
                        }
                    })
                    break
                }
                default: blockToSwap = block.getId()
            }

            // Get the mapped block to swap with
            blockToSwapWith = global.SWAPPER.get(`${blockToSwap}`)
            if (blockToSwapWith == undefined) blockToSwapWith = global.BLOCKSWAP_CONFIG.swapper[blockToSwap]

            // Second pass: perform the swapping
            if (blockToSwapWith != undefined || plantsToSwap != undefined) {
                // Copycat NBT: {Item:{Count:1b,id:"create:industrial_iron_block"},Material:{Name:"create:industrial_iron_block"},id:"create:copycat"}
                // Replacing the block in copycat blocks
                switch (block.getId()) {
                    case 'create:copycat_panel': case 'create:copycat_step': {
                        let nbt = block.getNbt()
                        nbt.Item.id = blockToSwapWith
                        nbt.Material.Name = blockToSwapWith
                        break
                    }
                    case 'minecraft:jigsaw': block.getNbt().final_state = blockToSwapWith; break
                    case 'supplementaries:flower_box': break  // TODO
                    default: block.setBlock(blockToSwapWith, block.properties)
                }
            } else if (global.DEBUG_MODE && removedBlocks.has(`${blockToSwap}`)) {
                console.log(`Structure: '${e.getId()}' contains unswapped block: '${blockToSwap}'`)
            }

        })
    })

    if (global.DEBUG_MODE) console.log(`Structure: ${e.getId()} has loaded!`)
}