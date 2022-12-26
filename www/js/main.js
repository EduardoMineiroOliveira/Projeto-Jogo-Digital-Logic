//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

window.onload = function() {
Graphics._switchFullScreen();    
SceneManager.run(Scene_Boot);
};
