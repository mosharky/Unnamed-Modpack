function removals_ScGuns() {
    global.REMOVALS.add([
        'scguns:sulfur_dust',
        'scguns:sulfur_chunk',
        'scguns:sulfur_block',
        'scguns:sulfur_vent',
        /scguns:.*sulfur_ore.*/
    ])

    global.ITEM_SWAPPER.set('scguns:sulfur_dust', 'alexscaves:sulfur_dust')
    global.ITEM_SWAPPER.set('scguns:sulfur_chunk', 'alexscaves:sulfur_dust')
}