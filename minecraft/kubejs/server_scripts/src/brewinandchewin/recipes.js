/** @param {$RecipesEventJS_} e */
function recipes_BrewinAndChewin(e) {
    e.custom({
        type: 'brewinandchewin:fermenting',
        basefluid: {
            count: 1000,
            fluid: 'brewinandchewin:rice_wine'
        },
        experience: 1,
        fermentingtime: 4800,
        ingredients: [
            { item: 'minecraft:honey_bottle' },
            { tag: 'immersive_weathering:bark' },
            { item: 'minecraft:lily_of_the_valley' },
            { item: 'minecraft:sugar' }
        ],
        recipe_book_tab: 'drinks',
        result: {
            count: 1000,
            fluid: 'brewinandchewin:pale_jane'
        },
        temperature: 4
    }).id('brewinandchewin:fermenting/pale_jane_from_rice_wine')
}