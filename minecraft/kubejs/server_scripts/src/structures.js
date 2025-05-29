MoreJSEvents.structureLoad(e => {
    // Log when removed blocks appear in a structure

    /*
    // replace hexerei willow with nature's spirit willow
    if (e.id.includes('hexerei')) {
        e.forEachPalettes(palette => {
            palette.forEach(block => {
                if (block.getId().includes('willow') && block.getId().includes('hexerei')) {
                    if (block.hasNbt()) { console.warn(`BLOCK HAS NBT: ${block.getId()}\n\nWITH NBT:\n${block.nbt}`) }
                    switch (block.getId()) {
                        default: console.warn('COULD NOT REPLACE: ' + block.getId()); break;
                        case 'hexerei:willow_log': block.setBlock('natures_spirit:willow_log', block.properties); break;
                        case 'hexerei:willow_planks': block.setBlock('natures_spirit:willow_planks'); break;
                        case 'hexerei:willow_leaves': block.setBlock('natures_spirit:willow_leaves'); break;
                        case 'hexerei:willow_sapling': block.setBlock('natures_spirit:willow_sapling'); break;
                        case 'hexerei:willow_stairs': block.setBlock('natures_spirit:willow_stairs', block.properties); break;
                        case 'hexerei:willow_slab': block.setBlock('natures_spirit:willow_slab', block.properties); break;
                        case 'hexerei:willow_fence': block.setBlock('natures_spirit:willow_fence', block.properties); break;
                        case 'hexerei:willow_fence_gate': block.setBlock('natures_spirit:willow_fence_gate', block.properties); break;
                        case 'hexerei:willow_door': block.setBlock('natures_spirit:willow_door', block.properties); break;
                        case 'hexerei:willow_trapdoor': block.setBlock('natures_spirit:willow_trapdoor', block.properties); break;
                        case 'hexerei:willow_button': block.setBlock('natures_spirit:willow_button', block.properties); break;
                        case 'hexerei:willow_pressure_plate': block.setBlock('natures_spirit:willow_pressure_plate'); break;
                        case 'hexerei:willow_sign': block.setBlock('natures_spirit:willow_sign', block.properties); break;
                        case 'hexerei:willow_wall_sign': block.setBlock('natures_spirit:willow_wall_sign', block.properties); break;
                        case 'hexerei:willow_hanging_sign': block.setBlock('natures_spirit:willow_hanging_sign', block.properties); break;
                        case 'hexerei:willow_vines': block.setBlock('natures_spirit:willow_vines', block.properties); break;
                        case 'hexerei:willow_wood': block.setBlock('natures_spirit:willow_wood', block.properties); break;
                        case 'hexerei:stripped_willow_wood': block.setBlock('natures_spirit:stripped_willow_wood', block.properties); break;
                        case 'hexerei:stripped_willow_log': block.setBlock('natures_spirit:stripped_willow_log', block.properties); break;
                        case 'hexerei:willow_vines_plant': block.setBlock('natures_spirit:willow_vines_plant', block.properties); break;
                        // polished variants
                        case 'hexerei:polished_willow_sign': block.setBlock('natures_spirit:willow_sign', block.properties); break;
                        case 'hexerei:polished_willow_trapdoor': block.setBlock('natures_spirit:willow_trapdoor', block.properties); break;
                        case 'hexerei:polished_willow_planks': block.setBlock('natures_spirit:willow_planks'); break;
                        case 'hexerei:polished_willow_stairs': block.setBlock('natures_spirit:willow_stairs', block.properties); break;
                        case 'hexerei:polished_willow_fence': block.setBlock('natures_spirit:willow_fence', block.properties); break;
                        case 'hexerei:polished_willow_fence_gate': block.setBlock('natures_spirit:willow_fence_gate', block.properties); break;
                        case 'hexerei:polished_willow_slab': block.setBlock('natures_spirit:willow_slab', block.properties); break;
                        case 'hexerei:polished_willow_button': block.setBlock('natures_spirit:willow_button', block.properties); break;
                        case 'hexerei:polished_willow_pressure_plate': block.setBlock('natures_spirit:willow_pressure_plate', block.properties); break;
                        case 'hexerei:polished_willow_door': block.setBlock('natures_spirit:willow_door', block.properties); break;
                        // stuff nature's spirit doesn't have
                        case 'hexerei:willow_chest': block.setBlock('hexerei:witch_hazel_chest', block.properties); break;
                        case 'hexerei:willow_courier_depot': block.setBlock('hexerei:witch_hazel_courier_depot', block.properties); break;
                        case 'hexerei:willow_broom_stand': block.setBlock('hexerei:witch_hazel_broom_stand', block.properties); break;
                        case 'hexerei:willow_window_pane': block.setBlock('everycomp:c/natures_spirit/willow_window_pane', block.properties); break;
                        case 'hexerei:waxed_willow_window_pane': block.setBlock('everycomp:c/natures_spirit/willow_window_pane', block.properties); break;
                        case 'hexerei:willow_window': block.setBlock('everycomp:c/natures_spirit/willow_window', block.properties); break;
                        case 'hexerei:waxed_willow_window': block.setBlock('everycomp:c/natures_spirit/willow_window', block.properties); break;
                        case 'hexerei:willow_connected': block.setBlock('natures_spirit:willow_planks', block.properties); break;
                        case 'hexerei:polished_willow_connected': block.setBlock('natures_spirit:willow_planks', block.properties); break;
                        case 'hexerei:polished_willow_pillar': block.setBlock('natures_spirit:willow_planks', block.properties); break;
                        case 'hexerei:polished_willow_layered': block.setBlock('natures_spirit:willow_planks', block.properties); break;
                        case 'hexerei:waxed_polished_willow_connected': block.setBlock('natures_spirit:willow_planks', block.properties); break;
                        case 'hexerei:waxed_polished_willow_pillar': block.setBlock('natures_spirit:willow_planks', block.properties); break;
                        case 'hexerei:waxed_polished_willow_layered': block.setBlock('natures_spirit:willow_planks', block.properties); break;
                        case 'hexerei:willow_altar': block.setBlock('hexerei:witch_hazel_altar', block.properties); break;
                        case 'hexerei:willow_woodcutter': block.setBlock('hexerei:witch_hazel_woodcutter', block.properties); break;
                        case 'hexerei:willow_drying_rack': block.setBlock('hexerei:witch_hazel_drying_rack', block.properties); break;
                    }
                }
            })
        })
    }
    */
})