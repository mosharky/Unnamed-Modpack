/** @param {$RecipesEventJS_} e */
function recipes_FarmersDelight(e) {
    e.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope')
    e.replaceOutput({}, 'farmersdelight:rope', 'supplementaries:rope')

    e.stonecutting('farmersdelight:rope', 'supplementaries:rope')
}