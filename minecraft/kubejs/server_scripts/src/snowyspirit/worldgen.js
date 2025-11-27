STRUCTURE_BLOCK_SWAPPER.set('snowyspirit:gingerbread_house', new Map([
    ['minecraft:dark_oak_planks', 'natures_spirit:fir_planks'],
    ['minecraft:dark_oak_slab', 'natures_spirit:fir_slab'],
    ['minecraft:dark_oak_stairs', 'natures_spirit:fir_stairs'],
    ['minecraft:polished_diorite', 'minecraft:bricks'],
    ['minecraft:polished_diorite_stairs', 'minecraft:brick_stairs'],
    ['minecraft:diorite_wall', 'sootychimneys:dirty_brick_chimney'],
    ['minecraft:spruce_stairs', 'everycomp:af/windswept/pine_table'],
    ['minecraft:bricks', 'create:layered_calcite'],
    ['minecraft:brick_stairs', 'create:cut_calcite_brick_stairs'],
]))

/** @param {$DataPackEventJS_} e  */
function snowySpiritWorldgen(e) {
    removeBiomeModifier(e, 'snowyspirit:ginger')
    removeBiomeModifier(e, 'snowyspirit:ginger_dense')
}