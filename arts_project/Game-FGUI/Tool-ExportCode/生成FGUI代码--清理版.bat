(
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting_Bak.json
	dotnet ./Remove/Remove.dll --path=../../../_gen/FairyGUICode
	dotnet ./Remove/Remove.dll --path=../../../client/Game/src/fgui/Generates
	IObitUnlocker.exe /None "%cd:~0,-30%_gen\FairyGUICode"
	dotnet ./ExportFairyGUICode/ExportFairyGUICode.dll --cmd=generatecode --optionSetting=./ExportSetting.json
	IObitUnlocker.exe /None "%cd:~0,-30%_gen\FairyGUICode"
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting_Clear.json
	dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./ResPackageConfig.json
)
