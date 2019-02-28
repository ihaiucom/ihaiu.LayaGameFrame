(
	IObitUnlocker.exe /None "%cd:~0,-11%Config\Common"
	REM svn lock %cd:~0,-11%Config\Common\Global.xlsx
	dotnet ./ExportKey/ExportKey.dll --setting=./ExportKeysetting_Plan_Global.json
)