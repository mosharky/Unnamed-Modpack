function windsweptRemovals() {
    global.BLOCKSWAP_CONFIG.state_swapper.push([
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'normal',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'frustum',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'top',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'bottom',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'floor',
                    waterlogged: 'false'
                }
            }
        }
    ])

    global.REMOVALS.add([
        'windswept:icicles'
    ])
}