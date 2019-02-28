(
	dotnet ./Copy/Copy.dll --setting=./Release-CopyProto.json
	unthink run
	dotnet ./Copy/Copy.dll --setting=./Release-CopyClient.json
	dotnet ./ExportProto/ExportProto.dll --optionSetting=./Release-ExportProtoSetting.json
)