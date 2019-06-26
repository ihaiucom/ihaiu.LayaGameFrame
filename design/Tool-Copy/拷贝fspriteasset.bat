(
svn update ../../arts_res/fspriteassets
dotnet ./Copy/Copy.dll --setting=./CopyFSpriteAssets.json
rem dotnet ./GenerateFguiResPackageConfig/GenerateFguiResPackageConfig.dll --optionSetting=./FSpriteResPackageConfig.json
)