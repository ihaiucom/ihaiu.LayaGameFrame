/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core-3a5ae995.js");
loadLib("libs/laya.webgl-e5e7fed7.js");
loadLib("libs/laya.filter-98774710.js");
// loadLib("libs/laya.ui-f0d62faa.js");
// loadLib("libs/laya.physics3D-dd56273f.js");
// loadLib("libs/laya.d3-cacf7986.js");
loadLib("libs/laya.html-1c0c6e90.js");
loadLib("libs/laya.ani-8ea9e73a.js");

loadLib("libs/AntFrame/Util/awaiter-867a7a6e.js")
loadLib("libs/AntFrame/Net/pako-cc8c61df.js")
loadLib("libs/AntFrame/Net/protobuf-67397d7b.js")
loadLib("libs/AntFrame/Net/proto-26679d03.js")
loadLib("libs/AntFrame/Net/net-c35bb1f9.js")
loadLib("libs/AntFrame/Net/netproto-a5ef74a8.js")

// fgui
//loadLib("libs/fairygui/rawinflate.min.js")
loadLib("libs/fairygui/fairygui-d9de8ef9.js")
// loadLib("libs/fairygui/fairygui.min-c3dbecad.js")

// 扩展
// loadLib("libs/game/awaiter-867a7a6e.js")
loadLib("libs/game/Binding-840e57af.js")
loadLib("libs/game/EngineExtend-d642f569.js")
loadLib("libs/game/StringExtend-bbc69abd.js")
loadLib("libs/game/Fun-15662148.js")
loadLib("libs/game/StringHelper-db7cc26b.js")
loadLib("js/VersionConfig-859e59ad.js")
//-----libs-end-------

loadLib("js/bundle-0e035823.js");
