(
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting_Bak.json
	dotnet ./Remove/Remove.dll --path=../../../FairyGUICode
	dotnet ./Remove/Remove.dll --path=../../../Gidea-PF-Client/GamePF/src/fgui/Generates
	IObitUnlocker.exe /None "%cd:~0,-25%FairyGUICode"
	dotnet ./ExportFairyGUICode/ExportFairyGUICode.dll --cmd=generatecode --optionSetting=./ExportSetting.json
	IObitUnlocker.exe /None "%cd:~0,-25%FairyGUICode"
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting_Clear.json
	dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./ResPackageConfig.json
)
