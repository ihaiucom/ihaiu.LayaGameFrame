(
	IObitUnlocker.exe /None "%cd:~0,-11%Config\Common"
	REM svn lock %cd:~0,-11%Config\Common\Msg.xlsx
	dotnet ./ExportKey/ExportKey.dll --setting=./ExportKeysetting_Plan_Msg.json
)