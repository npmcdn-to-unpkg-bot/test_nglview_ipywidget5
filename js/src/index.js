// Entry point for the notebook bundle containing custom model definitions.
//
// Setup notebook base URL
//
// Some static assets may be required by the custom widget javascript. The base
// url for the notebook is not known at build time and is therefore computed
// dynamically.
__webpack_public_path__ = document.querySelector('body').getAttribute('data-base-url') + 'nbextensions/nglview/';

// Export widget models and views, and the npm package version number.

module.exports = {};

var loadedModules = [
    require("./widget_ngl"),
    require("./chroma.min"),
    require("./embed"),
    require("./extension"),
    require("./mmtf-decode"),
    require("./msgpack-decode"),
    require("./ngl"),
    require("./pako_inflate.min"),
    require("./promise.min"),
    require("./signals.min"),
    require("./sprintf.min"),
    require("./svd.min"),
    require("./three.custom.min"),
    require("./TypedFastBitSet"),
]

for (var i in loadedModules) {
    if (loadedModules.hasOwnProperty(i)) {
        var loadedModule = loadedModules[i];
        for (var target_name in loadedModule) {
            if (loadedModule.hasOwnProperty(target_name)) {
                module.exports[target_name] = loadedModule[target_name];
            }
        }
    }
}

module.exports['version'] = require('../package.json').version;
