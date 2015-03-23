Package.describe({
    summary: 'The Polite Javascript Color Library - makes a random pleasing color',
    version: "1.0.0",
    git: "https://github.com/alexanderson1993/meteor-please.js"
});

Package.on_use(function (api) {

    api.add_files([
        'please-compressed.js',
    ], 'client');

});
