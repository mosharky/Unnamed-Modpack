MoreJSEvents.playerStartTrading(e => {
    // ⚠️ AUTO CONVERTING ⚠️ (an attempt)
    e.forEachOffers((o, i) => {
        let currencyItems = ['numismaticoverhaul:bronze_coin', 'numismaticoverhaul:silver_coin', 'numismaticoverhaul:gold_coin']
        let firstInputId = o.getFirstInput().getId()
        let firstInputCount = o.getFirstInput().getCount()
        let secondInputId = o.getSecondInput().getId()
        let secondInputCount = o.getSecondInput().getCount()
        let outputId = o.getOutput().getId()
        let outputCount = o.getOutput().getCount()
        // numismatic has a rate of 1 Emerald = 125 Bronze: https://github.com/wisp-forest/numismatic-overhaul/blob/84842a2118cc6988047ce3955429a3c67bcc7081/src/main/java/com/glisco/numismaticoverhaul/villagers/data/RemappingTradeWrapper.java#L41
        if (firstInputId == 'minecraft:emerald' && !currencyItems.includes(secondInputId) && !currencyItems.includes(outputId)) {
            // console.log(`TRADING AUTO-CONVERT: Converted ${o.getFirstInput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with output ${outputId} from ${e.getMerchant().getClass().getName()}`)
            o.setFirstInput(currencyItem(firstInputCount * 125))
        }
        if (secondInputId == 'minecraft:emerald' && !currencyItems.includes(outputId) && !currencyItems.includes(firstInputId)) {
            // console.log(`TRADING AUTO-CONVERT: Converted ${o.getOutput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with output ${outputId} from ${e.getMerchant().getClass().getName()}`)
            o.setSecondInput(currencyItem(secondInputCount * 125))
        }
        if (outputId == 'minecraft:emerald' && !currencyItems.includes(secondInputId) && !currencyItems.includes(firstInputId)) {
            // console.log(`TRADING AUTO-CONVERT: Converted ${o.getOutput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with input ${firstInputId} from ${e.getMerchant().getClass().getName()}`)
            o.setOutput(currencyItem(outputCount * 125))
        }
    })
})