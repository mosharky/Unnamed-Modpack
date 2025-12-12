function removals_Cataclysm() {
    global.REMOVALS.add([
        'cataclysm:pointed_icicle'
    ])

    global.STATE_SWAPPER.push(
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
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'down',
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
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'frustum',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'middle',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'middle',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'base',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'base',
                    vertical_direction: 'down',
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
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'frustum',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'frustum',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'middle',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'middle',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'base',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'cataclysm:pointed_icicle',
                Properties: {
                    thickness: 'base',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            }
        },
    )
}