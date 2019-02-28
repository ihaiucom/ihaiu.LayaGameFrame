(
	svn update ../Config/LangOut
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting.json
)