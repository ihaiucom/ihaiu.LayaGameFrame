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
loadLib("libs/laya.filter.js");
// loadLib("libs/laya.ui.js");
// loadLib("libs/laya.physics3D.js");
// loadLib("libs/laya.d3.js");
loadLib("libs/laya.html.js");
loadLib("libs/laya.ani.js");

loadLib("libs/AntFrame/Util/awaiter.js")
loadLib("libs/AntFrame/Net/pako.js")
loadLib("libs/AntFrame/Net/protobuf.js")
loadLib("libs/AntFrame/Net/proto.js")
loadLib("libs/AntFrame/Net/net.js")
loadLib("libs/AntFrame/Net/netproto.js")

// fgui
//loadLib("libs/fairygui/rawinflate.min.js")
loadLib("libs/fairygui/fairygui.js")
// loadLib("libs/fairygui/fairygui.min.js")

// 扩展
// loadLib("libs/game/awaiter.js")
loadLib("libs/game/Binding.js")
loadLib("libs/game/EngineExtend.js")
loadLib("libs/game/StringExtend.js")
loadLib("libs/game/Fun.js")
loadLib("libs/game/StringHelper.js")
loadLib("js/VersionConfig.js")
//-----libs-end-------

loadLib("js/bundle.js");


