module.exports = {
    printWidth: 100,
    parser: 'babel',
    singleQuote: true,
    semi: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,
    overrides: [
        {
            files: ['*.css', '*.cssm'],
            options: {
                printWidth: 80,
                parser: 'css',
                singleQuote: true,
                semi: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
            },
        },
    ],
};
