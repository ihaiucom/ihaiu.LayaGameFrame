(
	IObitUnlocker.exe /None "%cd:~0,-11%Config\Client","%cd:~0,-11%Config\Common","%cd:~0,-11%Config\Server","%cd:~0,-11%Config"
	rem svn update ../Config
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting_Bak.json
	dotnet ./Remove/Remove.dll --path=../../_gen/ConfigOut/
	dotnet ./Remove/Remove.dll --path=../../client/Game/bin/res/config/csv
	dotnet ./Remove/Remove.dll --path=../../client/Game/src/Config/ConfigStructs
	dotnet ./Remove/Remove.dll --path=../../client/Game/src/Config/ReaderStructs
	dotnet ./ExportXlsx/ExportXlsx.dll --optionSetting=./ExportXlsxSetting.json
	dotnet ./Copy/Copy.dll --setting=./CopyClientSetting_Clear.json
)