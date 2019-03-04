客户端GIT
=======



## 客户端目录
### Game                        ---- 目录
    |__ bin                       ---- 编译js和资源目录
    |__ src                       ---- TS 源码目录
    	|__ Config                ---- 配置文件目录
    		|__ ConfigExtends                ---- 配置文件数据结构(扩展逻辑)目录
    		|__ ConfigStructs                ---- 配置文件数据结构(根据配置表生成)目录
    		|__ ReaderExtends                ---- 配置读取器(扩展逻辑)目录
    		|__ ReaderStructs                ----  配置读取器(根据配置表生成)目录
    	|__ FGUI                ---- ui目录
    		|__ Extends                ---- 扩展逻辑目录
    		|__ Genderates             ---- 生成代码目录
    	|__ GameFrame           ---- 框架基础目录
    	|__ GameModule          ---- 游戏模块目录
    		|__ DataEnums             ---- 数据的枚举
    		|__ DataStructs           ---- 数据结构
    		|__ DataModels            ---- 模块数据Model
    		|__ ViewWindows           ---- 模块主窗口
    		|__ ViewPanel             ---- 模块子视图
    		|__ TickHandler           ---- 定时处理器
        |__ GameVersion         ---- 游戏版本管理目录
    	|__ GameHelpers         ---- 游戏帮助工具类目录
        |__ GameSetting         ---- 游戏设置（环境参数配置）目录
        |__ Libs                ---- 第三方或者扩展js代码库目录
        |__ GM                  ---- GM代码目录
        |__ SDK                 ---- 接第三方SDK代码目录
        |__ Birdge              ---- 桥接目录，比如发布Android(Java和JS桥接)
        |__ Birdge              ---- 桥接目录，比如发布Android(Java和JS桥接)
        |__ GameMain.ts         ---- 游戏入口类
        |__ GameLaunch.ts       ---- 游戏启动管理流程类



### 添加一个模块的流程
* 添加MenuId
* 添加MenuId配置Menu.xlsx
* 添加XXXWindow.ts, 在src/GameModule/ViewWindows/目录
* 注册XXXWindow，在MenuWindow.ts里
* 测试打开该模块Game.menu.open(MenuId.XXX);

### 添加数据模型
* 添加XXXModel.ts, 在src/GameModule/DataModels/目录
* 注册XXXModel, 在ModelManagerList.ts里
* 访问Game.model.xxx



