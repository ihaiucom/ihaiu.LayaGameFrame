(
svn update ../../gamepf_art/FairySprite
dotnet ./Copy/Copy.dll --setting=./CopyFSprite.json
dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./FSpriteResPackageConfig.json
)