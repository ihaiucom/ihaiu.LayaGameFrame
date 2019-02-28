(
svn update ../../gamepf_art/FairySpriteLower
dotnet ./Copy/Copy.dll --setting=./CopyFSpriteAssets.json
rem dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./FSpriteResPackageConfig.json
)