ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).isBlock()) e.renameBlock(id, name)
        else if (!Item.of(id).isBlock()) e.renameItem(id, name)
    }

    // Rope unification
    rename('farmersdelight:rope', 'Fisherman\'s Rope')
    rename('quark:rope', 'Rigid Rope')

    // Nature's Spirit
    rename('natures_spirit:lavender', 'Lavender Bush')
    rename('natures_spirit:bluebell', 'Bluebell Bush')
    rename('natures_spirit:foxglove', 'Purple Foxglove')
    rename('natures_spirit:hibiscus', 'Lonely Hibiscus')
    rename('natures_spirit:lotus_flower', 'Aquatic Lotus Flower')
    rename('natures_spirit:lotus_stem', 'Aquatic Lotus Stem')

    // Even Better Nether
    rename('evenbetternether:barrel_cactus', 'Warped Barrel Cactus')

    // Collector's Reap
    e.add('collectorsreap', 'item.collectorsreap.dragon_fruit_seeds', 'Pink Dragon Fruit Seeds')

    // Darker Depths
    rename('darkerdepths:ash_block', 'Darkslate Ash Block')
    rename('darkerdepths:ash', 'Darkslate Ash')
})