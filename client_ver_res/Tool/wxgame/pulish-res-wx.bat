(
	dotnet ../Copy/Copy.dll --setting=./CopySetting.json
	dotnet ../ihaiu.ResourceVersionPackage/ResourceVersionPackage.dll --optionSetting=./ResourceVersionPackage.json --cmd=UpdateManifest
)