module.exports = function SkillResets(mod) {
    mod.hook('S_CREST_MESSAGE', 2, ({type, skill}) => {
        if (type === 6) {
            mod.send('S_DUNGEON_EVENT_MESSAGE', 2, {
                message: `<img src="img://skill__0__${mod.game.me.templateId}__${skill}" width="36" height="36" vspace="-20"/><font size="24" color="${mod.settings.reset_font_color}">&nbsp;Reset</font>`,
                type: 22,
                chat: false,
                channel: 0,
            })

            if (!mod.settings.show_system_reset_message)
                return false
        }
    })
}
