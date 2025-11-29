function removals_CavernsAndChasms() {
    global.REMOVALS.add([
        /caverns_and_chasms:silver_(?!shovel|pickaxe|axe|hoe|sword|bars).*/,
        /caverns_and_chasms:(raw|deepslate)_silver.*/,
    ])

    global.ITEM_SWAPPER.set('caverns_and_chasms:silver_ingot', 'galosphere:silver_ingot')
    global.ITEM_SWAPPER.set('caverns_and_chasms:silver_nugget', 'galosphere:silver_nugget')
    global.ITEM_SWAPPER.set('caverns_and_chasms:silver_horse_armor', 'galosphere:sterling_horse_armor')
}