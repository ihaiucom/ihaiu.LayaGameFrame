(
	dotnet ./Remove/Remove.dll --path=../../_gen/ConfigOut/
	dotnet ./ExportXlsx/ExportXlsx.dll --optionSetting=./ExportXlsxSetting.json
	dotnet ./Copy/Copy.dll --setting=./CopyServerSetting.json
)