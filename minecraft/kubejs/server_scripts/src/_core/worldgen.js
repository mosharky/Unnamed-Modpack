/** @param {$DataPackEventJS_} e  */
function coreWorldgen(e) {

    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#kubejs:all_biomes', 'fluid_springs')
}


let removedBlocks = global.REMOVALS.getBlocks()
/** @param {$StructureLoadEventJS_} e  */
function coreStructures(e) {
    if (global.DEBUG_MODE) console.log(`Structure: ${e.getId()} has loaded!`)
    e.forEachPalettes(palette => {
        palette.forEach(block => {
            // Have to use `${block.getId()}` because of a Rhino bug
            if (removedBlocks.has(`${block.getId()}`) && global.SWAPPER.get(`${block.getId()}`) == undefined) {
                if (global.DEBUG_MODE) console.log(`Structure: '${e.getId()}' contains illegal block: '${block.getId()}'`)
            }

            // Copycat NBT: {Item:{Count:1b,id:"create:industrial_iron_block"},Material:{Name:"create:industrial_iron_block"},id:"create:copycat"}
            // Replacing the block in copycat blocks
            if (block.getId() == 'create:copycat_panel' || block.getId() == 'create:copycat_step') {
                let blockToSwap = block.getNbt().getCompound('Item').getString('id')
                if (global.SWAPPER.get(`${blockToSwap}`) != undefined) {
                    block.setNbt(NBT.toTagCompound({
                        Item: { Count: 1, id: global.BLOCKSWAP_CONFIG.swapper[blockToSwap] },
                        Material: { Name: global.BLOCKSWAP_CONFIG.swapper[blockToSwap] },
                        id: 'create:copycat'
                    }))
                }
            }
            // Replacing the final block in Jigsaw blocks
            else if (block.getId() == 'minecraft:jigsaw') {
                let blockToSwap = block.getNbt().getString('final_state')
                if (global.SWAPPER.get(`${blockToSwap}`) != undefined) {
                    let newNbt = block.getNbt()
                    newNbt.putString('final_state', global.SWAPPER.get(`${blockToSwap}`))
                    block.setNbt(newNbt)
                }
            }
            else if (global.SWAPPER.get(`${block.getId()}`) != undefined) {
                block.setBlock(global.SWAPPER.get(`${block.getId()}`), block.properties)
            }
        })
    })
}