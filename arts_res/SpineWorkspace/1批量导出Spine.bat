@ECHO OFF
(
	dotnet Tool-Spine/SpineSkin.dll --cmd=generate --setting=./SpineSkinSetting.json
	exportspine.bat
	dotnet Tool-Spine/SpineSkin.dll --cmd=rename --setting=./SpineSkinSetting.json
)