dotnet ./ExportFairyGUICode/ExportFairyGUICode.dll --cmd=generatecode --optionSetting=./ExportSetting.json
dotnet ./Copy/Copy.dll --setting=./CopyClientSetting.json
dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./ResPackageConfig.json