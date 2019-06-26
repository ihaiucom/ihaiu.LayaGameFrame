(
	svn update ../../arts/SpineWorkspace/Sk
	svn update ../../arts/SpineWorkspace/ExportSK
	svn update ../../arts/SpineWorkspace/ExportSKRes
	dotnet ./Copy/Copy.dll --setting=./CopySpine_ZhangRuoAn.json
)