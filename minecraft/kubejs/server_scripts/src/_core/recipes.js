/** @param {$RecipesEventJS_} e */
function recipes_Core(e) {
    // Fully removing any recipe tied to items in REMOVALS
    global.REMOVALS.all.forEach(removal => {
        e.remove({ input: removal})
        e.remove({ output: removal})
    })
}