// priority: 100

let overworldBiomes
ServerEvents.tags('worldgen/biome', e => {
    overworldBiomes = e.get('minecraft:is_overworld').getObjectIds()
})


/**
 * Get if a player has a specific advancement
 * @param {$MinecraftServer_} server 
 * @param {$Player_} player 
 * @param {string} advancement 
 */
function hasAdvancement(server, player, advancement) {
    const adv = server.advancements.allAdvancements.stream().filter(a => a.id == advancement).findFirst().orElse(null)
    return server.playerList.getPlayerAdvancements(player).getOrStartProgress(adv).isDone()
}


/**
 * Play a sound at the player
 * @param {$MinecraftServer_} server 
 * @param {$Player_} player 
 * @param {string} sound 
 * @param {number} volume 
 * @param {number} pitch 
 */
function playSound(server, player, sound, volume, pitch) {
    if (volume === undefined) volume = 1
    if (pitch === undefined) pitch = 1
    server.runCommandSilent(`execute at ${player.username} run playsound ${sound} player ${player.username} ~ ~ ~ ${volume} ${pitch}`)
}


/**
 * Prevent right-click if players aren't nearby
 * @param {$BlockRightClickedEventJS_} e 
 * @param {string} sound 
 * @param {string} activationItem 
 * @param {number} minPlayers
 * @param {Optional | string} advancement
 */
function antiLoser(e, activationItem, sound, minPlayers, advancement) {
    if (e.player.mainHandItem.getId() != activationItem && e.player.offHandItem.getId() != activationItem) return

    let AABB = e.entity.boundingBox.inflate(150)
    let nearbyPlayers = []
    e.level.getEntitiesWithin(AABB).forEach(entity => {
        if (entity == null || !entity.player) return
        nearbyPlayers.push(entity.username)
    })

    if (nearbyPlayers.length < minPlayers || (advancement != undefined && !hasAdvancement(e.server, e.player, advancement))) {
        e.server.runCommandSilent(`immersivemessages sendcustom ${e.player.username} {anchor:0, background:1, obfuscate:1, size:2, color:"#FF2C00"} 10 You need to have atleast ${minPlayers} friends to summon this boss. loser`)
        playSound(e.server, e.player, sound)
        e.cancel()
    }
}


/** @param {$DataPackEventJS_} e  */
function autoImmersiveEnchanting(e, enchantment, levels) {
    const modId = enchantment.split(':')[0]
    const enchantmentId = enchantment.split(':')[1]

    const enchantmentObj = { levels: {} }
    if (levels == 1) {
        enchantmentObj.levels['1'] = { item: 'minecraft:diamond', amount: 16 }
    } else {
        for (let i = 1; i <= levels; i++) {
            enchantmentObj.levels[`${i}`] = { item: 'minecraft:diamond', amount: 4 * i }
        }
    }
    e.addJson(`immersiveenchanting:enchantment_costs/${modId}/${enchantmentId}`, enchantmentObj)
}