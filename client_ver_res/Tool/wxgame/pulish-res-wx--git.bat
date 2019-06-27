(
	dotnet ../Copy/Copy.dll --setting=./CopySetting.json
	dotnet ../ihaiu.ResourceVersionPackage/ResourceVersionPackage.dll --optionSetting=./ResourceVersionPackage.json --cmd=UpdateManifest
	cd ../../
	git add .
	git commit -am "v01.00.00.34"
	git push
	cd ./Tool/wxgame
)