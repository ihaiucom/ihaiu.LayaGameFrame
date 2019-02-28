(
	IObitUnlocker.exe /None "%cd:~0,-11%Config-Release\Client","%cd:~0,-11%Config-Release\Common","%cd:~0,-11%Config-Release\Server","%cd:~0,-11%Config-Release"
	rem svn update ../Config-Release
	dotnet ./Remove/Remove.dll --path=../../_gen/ConfigOut-Release/
	dotnet ./ExportXlsx/ExportXlsx.dll --optionSetting=./Release-ExportXlsxSetting.json
	dotnet ./Copy/Copy.dll --setting=./Release-CopyClientSetting.json
)