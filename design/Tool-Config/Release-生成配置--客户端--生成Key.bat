(
	IObitUnlocker.exe /None "%cd:~0,-11%Config-Release\Client","%cd:~0,-11%Config-Release\Common","%cd:~0,-11%Config-Release\Server","%cd:~0,-11%Config-Release"
	svn update ../Config-Release
	dotnet ./ExportKey/ExportKey.dll --setting=./Release-ExportKeysetting.json
)