(
	svn update ../../gamepf_art/Animation/Sk
	dotnet ./Copy/Copy.dll --setting=./Plan_CopySpine_ShangJingBo.json
	svn update ../../arts_res/fspriteassets
	dotnet ./Copy/Copy.dll --setting=./Plan_CopyFSprite_ShangJingBo.json
)