// priority: 100

// postInit so it wouldn't re-initilize on a reload
StartupEvents.postInit(e => {
    global.REMOVALS = {
        all: new Set(),
        add: function (entry) {
            if (entry instanceof Array) {
                this.all = new Set(this.getAsArray().concat(entry))
            } else {
                this.all.add(entry)
            }
        },
        getAsArray: function () { return Array.from(this.all) },
        getBlocks: function () {
            let blockSet = new Set()
            this.all.forEach(entry => {
                if (Item.of(entry).isBlock()) blockSet.add(entry)
            })
            return blockSet
        },
        getItems: function () {
            let itemSet = new Set()
            this.all.forEach(entry => {
                if (!Item.of(entry).isBlock()) itemSet.add(entry)
            })
            return itemSet
        }
    }
})

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