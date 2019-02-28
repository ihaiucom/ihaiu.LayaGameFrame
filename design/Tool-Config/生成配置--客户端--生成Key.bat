(
	IObitUnlocker.exe /None "%cd:~0,-11%Config\Client","%cd:~0,-11%Config\Common","%cd:~0,-11%Config\Server","%cd:~0,-11%Config"
	rem svn update ../Config
	dotnet ./ExportKey/ExportKey.dll --setting=./ExportKeysetting.json
)