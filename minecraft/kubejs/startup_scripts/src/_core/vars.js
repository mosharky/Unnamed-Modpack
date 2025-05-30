// priority: 100

global.REMOVALS = {
    all: new Set(),
    getAsArray: function() {
        return Array.from(this.all)
    },
    getBlocks: function() {
        let blockSet = new Set()
        this.all.forEach(entry => {
            if (Item.of(entry).isBlock()) blockSet.add(entry)
        })
        return blockSet
    },
    getItems: function() {
        let itemSet = new Set()
        this.all.forEach(entry => {
            if (!Item.of(entry).isBlock()) itemSet.add(entry)
        })
        return itemSet
    }
}

global.COLOURS = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]