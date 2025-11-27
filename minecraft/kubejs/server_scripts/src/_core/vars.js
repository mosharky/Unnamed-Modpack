// priority: 100

/** 
 * @type {Map<string | RegExp, Map<string>>} 
 * Blocks to swap on a structure-by-structure basis
*/
const STRUCTURE_BLOCK_SWAPPER = new Map()

let overworldBiomes
ServerEvents.tags('worldgen/biome', e => {
    overworldBiomes = e.get('minecraft:is_overworld').getObjectIds()
})

