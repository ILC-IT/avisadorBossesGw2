module.exports = {
    apps: [{
        name: 'AvisadorBossesGW2',
        script: './server.js',
        watch: true,
        ignore_watch: [
            'seleccion.json',
            'node_modules'
        ]
    }]
};