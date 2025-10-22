ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).isBlock()) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }

    // rename('miners_delight:copper_pot', 'Ceramic Pot')
})