module.exports = function fixLaurelBug(mod) {
    mod.hook('S_LOAD_ACHIEVEMENT_LIST', 2, e => {
        for (let item of e.history) {
            if (item.season < 9) {
                item.seasonStartTime = 0n
            }
        }
        return true;
    })
}