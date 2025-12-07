STRUCTURE_BLOCK_SWAPPER.set(/(minecraft|savage_and_ravage):(pillager_outpost|woodland_mansion).*/, new Map([
    ['minecraft:chest', 'woodworks:dark_oak_chest'],
    ['minecraft:trapped_chest', 'woodworks:dark_oak_trapped_chest'],
]))

STRUCTURE_BLOCK_SWAPPER.set(/minecraft:shipwreck.*/, new Map([
    ['minecraft:chest', 'woodworks:oak_chest'],
    ['minecraft:trapped_chest', 'woodworks:oak_chest'],
]))

STRUCTURE_BLOCK_SWAPPER.set(/minecraft:bastion.*/, new Map([
    ['minecraft:chest', 'woodworks:crimson_chest'],
    ['minecraft:trapped_chest', 'woodworks:crimson_chest'],
]))

/** @param {$DataPackEventJS_} e  */
function worldgen_Core(e) {
    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#minecraft:is_overworld', FLUID_SPRINGS)

    addFeatures(e, registerCliff(e, 'minecraft:andesite'), '#kubejs:has_feature/andesite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:granite'), '#kubejs:has_feature/granite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:stone'), '#kubejs:has_feature/stone_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:terracotta'), '#kubejs:has_feature/terracotta_cliff', RAW_GENERATION)
    removeFeatures(e, [
        'minecraft:ore_granite_lower',
        'minecraft:ore_granite_upper',
        'minecraft:ore_andesite_lower',
        'minecraft:ore_andesite_upper',
    ], '#minecraft:is_overworld', UNDERGROUND_ORES)
}



let removedBlocks = global.REMOVALS.getBlocks()
/** @param {$StructureLoadEventJS_} e  */
function structures_Core(e) {
    // Have to use `${block.getId()}` because of a Rhino bug
    if (global.DEBUG_MODE) console.log(`Structure: ${e.getId()} is loading..`)

    // Swap pre-spawned entities
    e.getEntities().forEach(entity => {
        if (global.ENTITY_SWAPPER.get(`${entity.nbt.id}`) != undefined) {
            entity.nbt.id = global.ENTITY_SWAPPER.get(`${entity.nbt.id}`)
        }
    })

    e.forEachPalettes(palette => {
        palette.forEach(block => {
            switch (block.getId()) {
                case 'create:copycat_panel': case 'create:copycat_step': {
                    swapCopycatNbt(e, block); break
                } case 'minecraft:jigsaw': {
                    swapJigsawNbt(e, block); break
                } case 'supplementaries:flower_box': {
                    swapFlowerBoxNbt(e, block); break
                } case 'minecraft:spawner': {
                    swapSpawnerNbt(e, block); break
                } default: swapDefault(e, block)
            }

            // I don't think this works at all
            if (global.DEBUG_MODE && block.getNbt() != null && !block.getNbt().isEmpty()) {
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


/** 
 * @param {$StructureLoadEventJS_} e  
 * @param {string} blockToSwap
 * @returns { {toSwap: string, swapWith: string} | undefined }
*/
function findBlockSwap(e, blockToSwap) {
    let structureSwap, blockToSwapWith
    structureSwap = STRUCTURE_BLOCK_SWAPPER.get(`${e.getId()}`)
    if (structureSwap == undefined) {
        for (const [structure, swapMap] of STRUCTURE_BLOCK_SWAPPER) {
            if (structure instanceof RegExp) {
                if (e.getId().match(structure)) {
                    structureSwap = swapMap
                    break
                }
            }
        }
    }
    if (structureSwap != undefined) blockToSwapWith = structureSwap.get(`${blockToSwap}`)
    if (blockToSwapWith == undefined) blockToSwapWith = global.BLOCK_SWAPPER.get(`${blockToSwap}`)
    if (blockToSwapWith == undefined) blockToSwapWith = global.BLOCKSWAP_CONFIG.swapper[blockToSwap]

    return { toSwap: blockToSwap, swapWith: blockToSwapWith }
}

/** 
 * @param {$StructureLoadEventJS_} e  
 * @param {$StructureTemplate$StructureBlockInfo_} block
*/
function swapDefault(e, block) {
    let swap = findBlockSwap(e, block.getId())
    if (swap.swapWith != undefined) {
        block.setBlock(swap.swapWith, block.properties)
    } else if (global.DEBUG_MODE && removedBlocks.has(`${swap.toSwap}`)) {
        console.log(`Structure: '${e.getId()}' contains unswapped block: '${swap.toSwap}'`)
        // TODO: check if its already swapped in BLOCKSWAP_CONFIG.state_swapper
    }
}

/** 
 * @param {$StructureLoadEventJS_} e  
 * @param {$StructureTemplate$StructureBlockInfo_} block
 * Copycat NBT:
    {
        Item: {Count: 1b, id: "create:industrial_iron_block"},
        Material: {Name: "create:industrial_iron_block"},
        id: "create:copycat"
    }
*/
function swapCopycatNbt(e, block) {
    let swap = findBlockSwap(e, block.getNbt().Item.id)
    if (swap.swapWith != undefined) {
        let nbt = block.getNbt()
        nbt.Item.id = swap.swapWith
        nbt.Material.Name = swap.swapWith
    } else if (global.DEBUG_MODE && removedBlocks.has(`${swap.toSwap}`)) {
        console.log(`Structure: '${e.getId()}' contains unswapped block: '${swap.toSwap}' in '${block.getId()}' NBT`)
    }
}

/** 
 * @param {$StructureLoadEventJS_} e  
 * @param {$StructureTemplate$StructureBlockInfo_} block
*/
function swapJigsawNbt(e, block) {
    let swap = findBlockSwap(e, block.getNbt().final_state)
    if (swap.swapWith != undefined) {
        block.getNbt().final_state = swap.swapWith
    } else if (global.DEBUG_MODE && removedBlocks.has(`${swap.toSwap}`)) {
        console.log(`Structure: '${e.getId()}' contains unswapped block: '${swap.toSwap}' in '${block.getId()}' NBT`)
    }
}

/** 
 * @param {$StructureLoadEventJS_} e  
 * @param {$StructureTemplate$StructureBlockInfo_} block
 * Flower Box NBT:
    {
        Items: [
            {Slot: 0b, id: "quark:lavender_blossom_sapling", Count: 1b}, 
            {Slot: 1b, id: "minecraft:oxeye_daisy", Count: 1b}, 
            {Slot: 2b, id: "minecraft:torchflower", Count: 1b}
        ], 
        id: "supplementaries:flower_box"
    } 
*/
function swapFlowerBoxNbt(e, block) {
    let flowerBoxPlants = block.getNbt().Items
    flowerBoxPlants.forEach(plant => {
        let swap = findBlockSwap(e, plant.id)
        if (swap.swapWith != undefined) {
            plant.id = swap.swapWith
        } else if (global.DEBUG_MODE && removedBlocks.has(`${swap.toSwap}`)) {
            console.log(`Structure: '${e.getId()}' contains unswapped block: '${swap.toSwap}' in '${block.getId()}' NBT`)
        }
    })
}

/** 
 * @param {$StructureLoadEventJS_} e  
 * @param {$StructureTemplate$StructureBlockInfo_} block
 * Spawner NBT:
    {
        MaxNearbyEntities: 6s, 
        RequiredPlayerRange: 16s, 
        SpawnCount: 4s, 
        SpawnData: {
            custom_spawn_rules: { block_light_limit: [I; 0, 7] }, 
            entity: {id: "quark:wraith"}
        }, 
        MaxSpawnDelay: 800s, 
        Delay: 153s, 
        x: -1818, 
        ForgeCaps: {}, 
        y: 31, 
        z: -1151, 
        id: "minecraft:mob_spawner", 
        SpawnRange: 4s, 
        MinSpawnDelay: 200s, 
        SpawnPotentials: [
            {
                data: {
                    custom_spawn_rules: { block_light_limit: [I; 0, 7] }, 
                    entity: {id: "quark:wraith"}
                }, 
            weight: 1
            }
        ]
    }
*/
function swapSpawnerNbt(e, block) {
    let entityToSwap = block.getNbt().SpawnData.entity.id
    let entitySwap = global.ENTITY_SWAPPER.get(`${entityToSwap}`)
    if (entitySwap != undefined) {
        let nbt = block.getNbt()
        nbt.SpawnData.entity.id = entitySwap
        nbt.SpawnPotentials.forEach(potential => {
            potential.data.entity.id = entitySwap
        })
    }
}