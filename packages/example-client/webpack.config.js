/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('dist')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    // Entry definitions
    .addEntry('index', './src/index.tsx')

    .createSharedEntry('js/vendor', './src/vendor.ts')

    .addStyleEntry('style', './src/Styles/main.scss')

    // Loader configuration
    .enableSassLoader()
    .enableTypeScriptLoader()
    .enableReactPreset()
;

const webpackConfig = Encore.getWebpackConfig();
module.exports = webpackConfig;