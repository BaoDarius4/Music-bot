module.exports = {
    app: {
        px: '!',
        token: 'OTA2MzkyODQwODAyODAzNzE0.YYX-HQ.2lDYLRnWqaEC0QbPG_rEe-syh_8',
        playing: 'by Bảo ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
