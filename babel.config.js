module.exports = {
    'presets': [
        ['@babel/preset-env', {
            'modules': false,
            'targets': {
                'browsers': ['> 1%', 'last 2 versions', 'not ie <= 8']
            },
            'useBuiltIns': 'usage'
        }]
    ],
    'plugins': [
        'transform-vue-jsx',
        ['@babel/plugin-proposal-object-rest-spread', {'loose': true, 'useBuiltIns': true}]
    ],
    'env': {
        'test': {
            'presets': ['@babel/preset-env'],
            'plugins': ['transform-vue-jsx']
        }
    }
};
