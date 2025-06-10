/** @param {$DataPackEventJS_} e  */
function coreWorldgen(e) {

    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#kubejs:all_biomes', 'fluid_springs')
}


let removedBlocks = global.REMOVALS.getBlocks()
/** @param {$StructureLoadEventJS_} e  */
function coreStructures(e) {
    console.log(`Structure: ${e.getId()} has loaded!`)
    e.forEachPalettes(palette => {
        palette.forEach(block => {
            // Have to use `${block.getId()}` because of a Rhino bug
            if (removedBlocks.has(`${block.getId()}`)) {
                console.log(`Structure: '${e.getId()}' contains illegal block: '${block.getId()}'`)
            }

            // Copycat NBT: {Item:{Count:1b,id:"create:industrial_iron_block"},Material:{Name:"create:industrial_iron_block"},id:"create:copycat"}
            if (block.getId() == 'create:copycat_panel' || block.getId() == 'create:copycat_step') {
                let blockToSwap = block.getNbt().getCompound('Item').getString('id')
                if (removedBlocks.has(`${blockToSwap}`) && global.BLOCKSWAP_CONFIG.swapper[blockToSwap] != undefined) {
                    block.setNbt(NBT.toTagCompound({
                        Item: { Count: 1, id: global.BLOCKSWAP_CONFIG.swapper[blockToSwap] },
                        Material: { Name: global.BLOCKSWAP_CONFIG.swapper[blockToSwap] },
                        id: 'create:copycat'
                    }))
                }
            }
        })
    })
}