(
svn update ../../arts/fspriteassets
dotnet ./Copy/Copy.dll --setting=./CopyFSpriteAssets.json
rem dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./FSpriteResPackageConfig.json
)