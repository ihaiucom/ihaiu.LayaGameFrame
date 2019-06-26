#_*_coding:utf-8_*_

import os
import os.path
import sys
#import re
#import getopt
import ConfigParser
import platform


#配置数据
configParse =ConfigParser.ConfigParser()
configParse.read("gitCiProto.txt")

gitBranch = configParse.get("gitCiProtoConfig","gitBranch")

antFramePath = configParse.get("gitCiProtoConfig","antFramePath")
pbPath = configParse.get("gitCiProtoConfig","pbPath")

gitProtoPath = configParse.get("gitCiProtoConfig","gitProtoPath")
gitAntFrame = configParse.get("gitCiProtoConfig","gitAntFrame")
gitPb = configParse.get("gitCiProtoConfig","gitPb")
gitLog = configParse.get("gitCiProtoConfig","gitLog")

def CopyDir(sourceDir, targetDir):
	if not os.path.exists(targetDir):
		os.makedirs(targetDir)
	for f in os.listdir(sourceDir):
		sourceF = os.path.join(sourceDir, f)
		targetF = os.path.join(targetDir, f)
		if os.path.isfile(sourceF):
			open(targetF, "wb+").write(open(sourceF, "rb").read())
		if os.path.isdir(sourceF):
			CopyDir(sourceF, targetF)
		
def ListDirFile(rootdir):
	files = []
	list = os.listdir(rootdir) #列出文件夹下所有的目录与文件
	for i in range(0,len(list)):
		path = os.path.join(rootdir,list[i])
		if os.path.isfile(path):
			files.append(path)
	return files

def DelDir(dd):
	for parent, dirs, files in os.walk(dd):
		for name in files:
			os.remove(os.path.join(parent, name))
	for parent, dirs, files in os.walk(dd):
		for name in dirs:
			DelDir(os.path.join(parent, name))
			os.rmdir(os.path.join(parent, name))


def IsWindows():
	sysType = platform.system()
	if sysType == "Windows":
		return True
	return False

#git更新
def gitPull():
	gitPullCmd = "git pull"
	os.system(gitPullCmd)

def gitPush():
	gitPushCmd = "git push "
	os.system(gitPushCmd)
	

#git切换分支
def gitCheckOut(branch):
	gitCheckOutCmd = "git checkout "+branch
	os.system(gitCheckOutCmd)

def gitAdd(path):
	gitAddCmd = "git add "+path
	os.system(gitAddCmd)
	
def gitCi(path,log):
	gitCiCmd = "git commit -m "+ log +" "+path
	os.system(gitCiCmd)
	
def gitStage(path):
	gitStashCmd = "git stage "+path
	os.system(gitStashCmd)
	
#切换目录
def CdPath(path):
	os.chdir(path)
	
#判断路径是否有效
def isDir(path):
	if os.path.isdir(path):
		return True
	else:
		return False

#删除目录
def removeDir(path):
	rdCmd = ""
	if IsWindows() == False:
		rdCmd = "rm -rf "+path
	else:
		rdCmd = "rd /s/q " +path
	os.system(rdCmd)



def main():
	gitCheckOut(gitBranch)
	netDir = gitAntFrame+"\Net"
	handleDir = gitAntFrame+"\Handlers"
	removeDir(netDir)
	removeDir(handleDir)
	removeDir(gitPb)
	CopyDir(antFramePath,gitAntFrame)
	CopyDir(pbPath,gitPb)
	gitStage(gitAntFrame)
	gitStage(gitPb)
	gitCi(gitProtoPath,gitLog)
	gitPush()
	os.system("pause")

if __name__ == "__main__":
	main()
	sys.exit(0)

	 