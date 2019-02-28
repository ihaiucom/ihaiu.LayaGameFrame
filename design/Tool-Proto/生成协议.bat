(
	dotnet ./Copy/Copy.dll --setting=./CopyProto.json
	unthink run
	dotnet ./Copy/Copy.dll --setting=./CopyClient.json
	dotnet ./ExportProto/ExportProto.dll --optionSetting=./ExportProtoSetting.json
)