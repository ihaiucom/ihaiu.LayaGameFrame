(
	IObitUnlocker.exe /None "%cd:~0,-11%Config\Lang","%cd:~0,-11%Config\Client","%cd:~0,-11%Config\Common","%cd:~0,-11%Config\Server","%cd:~0,-11%Config"
	svn update ../Config/Lang
	dotnet ./Language/Language.dll --optionSetting=./LanguageSetting.json --cmd=generatefgui
)