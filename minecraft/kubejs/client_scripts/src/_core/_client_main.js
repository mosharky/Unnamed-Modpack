ItemEvents.tooltip(e => {
    e.add(global.REMOVALS.getAsArray(), Text.red('DISABLED. Report to momo if you obtained this.').append(Text.darkGray('\nThis item is supposed to be replaced; ignore if found in a menu').italic()))
})

JEIEvents.information(e => {
    e.addItem('kubejs:ravager_hide', 'Obtained by killing a Ravager.')
    e.addItem('miners_delight:silverfish_eggs', 'Obtained by killing a Silverfish with a knife.')
    e.addItem('scguns:niter_dust', 'Can be collected by a Vent Collector in Geothermal Vents generated in deep oceans.\n\nOccasionally can found in caves.')

    // From GenerikB's modpack
    event.addItem('alexscaves:sea_glass_shards', [
        'Obtained by placing the correct offering at the Abyssal Altar. However, receiving this gift from The Old Ones is not guaranteed, as their methods are shrouded in ancient mystery and unpredictability.',
    ])

    event.addItem('alexscaves:marine_snow', [
        'Can be obtained by feeding Muck, Clay Balls, or Mud to a Sea Pig.',
    ])

    event.addItem('alexscaves:pearl', [
        'Occasionally dropped when harvesting Mussels in the Abyssal Depths dimension, or rarely produced by feeding a Sea Pig.\n',
        'The Deep Ones show a keen interest in these for trading purposes.',
    ])

    event.addItem('alexscaves:telecore', [
        'Drops from Teletors, found in the Magnetic Caves dimension.',
    ])

    event.addItem('alexscaves:heart_of_iron', [
        'Drops from Magnetrons, found in the Magnetic Caves dimension.',
    ])

    event.addItem('alexscaves:ferrouslime_ball', [
        'Drops from Ferrouslimes, found in the Magnetic Caves dimension.',
    ])

    event.addItem('alexscaves:notor_gizmo', [
        'Drops from Notors, found in the Magnetic Caves dimension.',
    ])

    event.addItem('alexscaves:heavyweight', [
        'Drops from Boundroids, found in the Magnetic Caves dimension.',
    ])

    event.addItem('alexscaves:guano', [
        'Found in piles on the ground in the Forlorn Hollows dimension.',
    ])

    event.addItem('alexscaves:enigmatic_engine', [
        'The Enigmatic Engine is a unique item that cannot be crafted. It is found exclusively within the belly of the Hullbreaker, a formidable monster that roams the depths of the Abyssal Chasm dimension.',
    ])

    event.addItem('alexscaves:sweet_tooth',
        ['Drops after defeating the Gum Worm, a formidable monster that burrows beneath the surface of the Candy Cavities dimension.']
    )
})

ClientEvents.highPriorityAssets(e => {
    // e.add('emi:index/stacks/example_hidden_stacks.json', {removed: global.REMOVALS.getAsArray()})
    clientData_EMI(e)
    clientData_Quark(e)
})
