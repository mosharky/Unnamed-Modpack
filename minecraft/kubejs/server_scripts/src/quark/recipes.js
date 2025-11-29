/** @param {$RecipesEventJS_} e */
function recipes_Quark(e) {
    e.remove('quark:building/crafting/rope')
    
    e.stonecutting('quark:rope', 'supplementaries:rope')
}