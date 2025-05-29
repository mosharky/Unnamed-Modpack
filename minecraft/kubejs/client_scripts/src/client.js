REIEvents.hide('item', e => {
    // e.hide(global.fullRemovals)
})

ItemEvents.tooltip(e => {
    e.add(global.fullRemovals, Text.red('DISABLED. If encountered, please contact a developer'))
})

JEIEvents.hideItems(e => {
    
})