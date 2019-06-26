(
svn update ../../arts_res/fspriteassets
dotnet ./Copy/Copy.dll --setting=./CopyFSprite.json
dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./FSpriteResPackageConfig.json
)