(
	svn update ../../gamepf_art/Animation/Sk
	dotnet ./Copy/Copy.dll --setting=./Plan_CopySpine_ShangJingBo.json
	svn update ../../gamepf_art/FairySprite
	dotnet ./Copy/Copy.dll --setting=./Plan_CopyFSprite_ShangJingBo.json
)