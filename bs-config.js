module.exports = {
    "port": 8080,
    server: {
        baseDir: './dist',
        middleware: {
            1: require('connect-history-api-fallback')({ index: '/index.html', verbose: true })
        }
    }
};