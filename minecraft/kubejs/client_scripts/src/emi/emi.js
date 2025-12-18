/** @param {$GenerateClientAssetsEventJS_} e */
function clientData_EMI(e) {
    e.add('emi:category/properties/emi', {
        'minecraft:crafting':           { order: -1000 },
        'minecraft:smelting':           { order: -950 },
        'minecraft:blasting':           { order: -940 },
        'minecraft:smoking':            { order: -930 },
        'minecraft:campfire_cooking':   { order: -920 },
        'minecraft:stonecutting':       { order: -800 },
        'minecraft:smithing':           { order: -750 },
        'emi:anvil_repairing':          { order: -740 },
        'emi:grinding':                 { order: -730 },
        'minecraft:brewing':            { order: -650 },
        'emi:world_interaction':        { order: -600 },
        'emi:fuel':                     { order: 900 },
        'emi:composting':               { order: 910 },
        'emi:info':                     { order: 950 },
        'emi:tag':                      { order: 1000 }
    })

    // Hide non-max leveled enchantments
    const enchantedBooks = [];
    let totalRemoved = 0;

    Utils.getRegistry("enchantment").entrySet().forEach(entry => {
        const id = entry.key.location();
        const maxLevel = entry.value.getMaxLevel();

        for (let level = 1; level < maxLevel; level++) {
            enchantedBooks.push({
                type: "item",
                id: "minecraft:enchanted_book",
                nbt: `{StoredEnchantments:[{id:"${id}",lvl:${level}s}]}`
            });

            totalRemoved++;
        }
    });

    e.add("emi:index/stacks/enchanted_books", { removed: enchantedBooks });
    console.log(`Removed ${totalRemoved} enchanted book stacks`);

    // TODO: manage more (see: https://github.com/pafeuu/Druidic-Quest-Main/tree/main/kubejs/assets/emi/category/properties)
}