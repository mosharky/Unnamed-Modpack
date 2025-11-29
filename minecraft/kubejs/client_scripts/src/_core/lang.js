ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).isBlock()) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }

    // Rope unification
    rename('farmersdelight:rope', 'Fisherman\'s Rope')
    rename('quark:rope', 'Rigid Rope')
    
    // Nature's Spirit
    rename('natures_spirit:bluebell', 'Bluebell Bush')
})