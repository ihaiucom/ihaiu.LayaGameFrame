(
	dotnet ./Remove/Remove.dll --path=../../_gen/ConfigOut-Release/
	dotnet ./ExportXlsx/ExportXlsx.dll --optionSetting=./Release-ExportXlsxSetting.json
	dotnet ./Copy/Copy.dll --setting=./Release-CopyServerSetting.json
)