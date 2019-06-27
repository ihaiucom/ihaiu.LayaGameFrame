# Laya游戏框架模板
运行环境： Laya2.0.0

可以下载该模板后,可以修改文件夹名"LayaGameTemplate"为自己的"GameXXX"
=======


## 目录
### GameXXX                       ---- 游戏工作空间目录
    |__ client                    ---- 客户端目录 （权限: 客户端 ）
    |__ proto                     ---- 协议目录（权限: 客户端和服务器 ）
    |__ design                    ---- 策划文档目录，包含配置（权限: 所有 ）
    |__ arts_project              ---- 美术项目目录,包含FGUI项目（权限: 客户端和美术 ）
    |__ arts_res              	  ---- 美术资源、素材录（权限: 所有 ）
    |__ client_ver_res            ---- 客户端资源版本库
    |__ _gen              	  	  ---- 自动生成代码时的临时缓存文件，可以忽略




## client目录
### GameXXX/client                ---- 游戏工作空间目录
    |__ Game                      ---- Laya工程目录
    |__ GameWX                    ---- 发布微信小游戏后的，微信小游戏工程目录
    |__ doc                    	  ---- 客户端文档



## arts_project目录
### GameXXX/arts_project          ---- 美术项目目录
    |__ Game-FGUI                 ---- FGUI工程目录

目前只有FGUI项目，以后可以根据自己需求加Unity等美术项目




## arts_res目录
### GameXXX/arts_res          		---- 美术资源、素材录
    |__ _素材                 		---- 美术参考等，随意放
    |__ 1.UI                 		---- UI原始资源
    |__ 2.Effect                 	---- 特效原始资源
    |__ 3.角色原画
    |__ 4.场景原画
    |__ fspriteassets               ---- 游戏动态美术资源， 对应游戏里的 bin/res/fspriteassets
    |__ SpineWorkspace              ---- 角色Spine骨骼动画工作空间
    	|__ ExportSK                	---- 导出的sk资源，对应游戏里的 /bin/res/spine
    |__ SpineWorkspaceUI            ---- UI Spine骨骼动画工作空间, 对应游戏里的 /bin/res/spineUI



=======


## 工具

运行环境请查看文档: design/9.客户端文档/


### 导出FGUI代码工具

arts_project\Game-FGUI\Tool-ExportCode\生成FGUI代码.bat

arts_project\Game-FGUI\Tool-ExportCode\生成FGUI代码--清理版.bat



可以到这来修改相应的配置

arts_project\Game-FGUI\Tool-ExportCode\CopyClientSetting.json



参考说明：https://blog.ihaiu.com/tool-ExportFairyGUICode/#content

这个是上一版的工具说明。


### 导出Config代码工具

design\Tool-Config\生成配置--客户端.bat

design\Tool-Config\生成配置--客户端--清理版.bat



可以到这来修改相应的配置

design\Tool-Config\ExportKeysetting.json



参考说明：https://blog.ihaiu.com/tool-ExportXlsx/#content
这个是上一版的工具说明。


### 多语言配置相关工具
design\Tool-Language\



### 拷贝协议到项目工具

proto\proto\Tool-Copy\拷贝协议.bat



### FGUI资源冗余查找工具, Unity项目

arts_project\Game-FGUI\Tool-FguiAsset



### 各种拷贝

<pre>
design\Tool-Copy\拷贝骨骼动画.bat
{
  	"src":"../../arts_res/SpineWorkspace/ExportSK", 
  	"dst":"../../client/Game/bin/res/spine"
}
</pre>


<pre>
design\Tool-Copy\拷贝骨骼动画UI.bat
{
	"src":"../../arts_res/SpineWorkspaceUI/ExportSK", 
	"dst":"../../client/Game/bin/res/spineUI"
}
</pre>



<pre>
design\Tool-Copy\拷贝fspriteasset.bat
{
	"src":"../../arts_res/fspriteassets", 
	"dst":"../../client/Game/bin/res/fspriteassets"
}
</pre>


<pre>
client\GameWX\Tool-Copy\拷贝微信发布.bat
{
      "src":"client/Game/release/wxgame/", 
      "dst":"client/wxgame/"
}
</pre>




### 生成微信版本资源

client_ver_res\Tool\wxgame\pulish-res-wx.bat

client_ver_res\Tool\wxgame\pulish-res-wx--git.bat 会自动提交到git资源库


### 客户端框架说明

<a href="./client/README.md">./client/README.md</a>
