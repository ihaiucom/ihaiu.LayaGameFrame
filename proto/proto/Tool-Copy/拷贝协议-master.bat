(
	rem svn update ../AntFrame

	cd ../../
	git pull origin master
	cd ./proto/Tool-Copy
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting.json
)