/** @param {$RecipesEventJS_} e */
function recipes_ScGuns(e) {
    e.remove({type: 'scguns:macerating'})
    e.remove({type: 'scguns:powered_macerating'})
    e.remove({type: 'scguns:mechanical_pressing'})
    e.remove({type: 'scguns:powered_mechanical_pressing'})
    e.remove({type: 'scguns:gun_bench', mod: 'scguns'})  // caverns and chasms addon doesn't have create support yet

    e.replaceInput({}, 'scguns:sulfur_dust', '#forge:dusts/sulfur')
    e.replaceInput({}, 'scguns:sulfur_chunk', '#forge:dusts/sulfur')

    e.recipes.create.crushing(['3x scguns:phosphor_dust', Item.of('scguns:phosphor_dust').withChance(0.5)], 'scguns:raw_phosphor')

    e.recipes.create.mixing(['10x scguns:sheol', Item.of('scguns:sheol').withChance(0.5)], [
        '#forge:dusts/sulfur',
        'minecraft:blaze_powder',
        'minecraft:gunpowder',
        'minecraft:glowstone_dust'
    ]).id('scguns:create/sheol_from_mixing')

    e.recipes.create.mixing('8x minecraft:gunpowder', [
        '#forge:dusts/sulfur',
        '#forge:dusts/saltpeter',
        'minecraft:flint',
        'minecraft:charcoal'
    ]).id('scguns:create/gunpowder_from_mixing')

    e.recipes.create.mixing('12x minecraft:gunpowder', [
        '#forge:dusts/sulfur',
        '#forge:dusts/saltpeter',
        'minecraft:flint',
        '#forge:dusts/phosphorus',
    ]).id('scguns:create/heavy_gunpowder_from_mixing')

    e.recipes.create.mixing(['10x scguns:peal', Item.of('scguns:peal_dust').withChance(0.5)], [
        '#forge:dusts/sulfur',
        'minecraft:sculk',
        '#forge:dusts/phosphorus',
        'minecraft:charcoal'
    ]).id('scguns:create/peal_from_mixing')

    e.recipes.create.sequenced_assembly('scguns:gas_grenade_round', 'scguns:large_brass_casing', [
        e.recipes.createDeploying('scguns:unfinished_gas_grenade_round', ['scguns:unfinished_gas_grenade_round', '#forge:dusts/sulfur']),
        e.recipes.createDeploying('scguns:unfinished_gas_grenade_round', ['scguns:unfinished_gas_grenade_round', 'scguns:advanced_bullet_tips']),
        e.recipes.createPressing('scguns:unfinished_gas_grenade_round', 'scguns:unfinished_gas_grenade_round'),
    ]).transitionalItem('scguns:unfinished_gas_grenade_round').id('scguns:create/sequenced_assembly/gas_grenade_round')
}