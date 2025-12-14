ItemEvents.tooltip(e => {
    e.add(global.REMOVALS.getAsArray(), Text.red('DISABLED. Let me know how you found it ;)'))
})

JEIEvents.information(e => {
    e.addItem('kubejs:ravager_hide', 'Obtained by killing a Ravager.')
})

ClientEvents.highPriorityAssets(e => {
    clientData_Quark(e)
    EMI_Categories(e)
})
