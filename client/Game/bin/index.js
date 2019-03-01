/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js");
loadLib("libs/laya.webgl.js");
loadLib("libs/laya.ui.js");
loadLib("libs/laya.physics3D.js");
loadLib("libs/laya.d3.js")
loadLib("libs/laya.html.js")


// fgui
//loadLib("libs/fairygui/rawinflate.min.js")
loadLib("libs/fairygui/fairygui.js")

// 扩展
// loadLib("libs/game/awaiter.js")
// loadLib("libs/game/EngineExtend.js")
loadLib("libs/game/StringExtend.js")
loadLib("libs/game/Fun.js")
loadLib("libs/game/StringHelper.js")
//-----libs-end-------

loadLib("js/bundle.js");
