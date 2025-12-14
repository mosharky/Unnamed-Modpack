/** @param {$RecipesEventJS_} e */
function recipes_Embers(e) {
    e.remove({id: /embers:.*plate_hammering/})

    e.recipes.create.pressing('embers:lead_plate', 'oreganized:lead_ingot')
    e.recipes.create.pressing('embers:silver_plate', 'galosphere:silver_ingot')
    e.recipes.create.pressing('embers:dawnstone_plate', 'embers:dawnstone_ingot')
}