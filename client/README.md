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
        |__ Game.ts             ---- 游戏API门面类



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


### 全局游戏事件
* 定义游戏事件KEY，在GameEventKey.ts文件中
* 监听

```
Game.event.add(GameEventKey.XXXX, this.onXXX, this);

void onXXX(arg1, arg2)
{

}
```

* 移除监听

```
Game.event.remove(GameEventKey.XXXX, this.onXXX, this);

void onXXX(arg1, arg2)
{
    
}
```

* 派发消息

```
Game.event.dispatch(GameEventKey.XXXX, [参数]);
```


### 打开关闭模块

```
// 打开模块
Game.menu.open(menuId: MenuId, ...args: any[]);

// 打开模块的某个Tab面板
Game.menu.openTab(menuId: MenuId, tabIndex: number | string, ...args: any[])


// 关闭模块； 在MWindow里封装好了，不用调用这里的API
Game.menu.close(menuId: MenuId);

// 返回打开该模块之前的模块; 在MWindow里封装好了，不用调用这里的API
Game.menu.back(menuId: MenuId);
```

### MWindow 主要API

```
// 模块ID
menuId: MenuId;

// 关闭当前模块
menuClose();

// 返回, 到之前打开该模块的面板
 menuBack();

// 模块创建时，会调用该方法
onMenuCreate(): void
{
    // 你需要在这里实例话你的FGUI视图
    this.contentPane =  LoginWindowUI.createInstance();
    super.onMenuCreate();
}

// 模块打开时，在显示前会被调用， 一般不需要写该方法，只有特殊处理逻辑时再到该地方扩展
onMenuOpen(parameter: MenuOpenParameter): void


// 打开Tab面板，一般不需要在这里写该方法，只有你需要时再写
openTab(tabIndex: number | string)：void
{

}


//=========================
// 显示完成
//-------------------------
protected onShowComplete()
{
    super.onShowComplete();
}

//=========================
// 隐藏完成
//-------------------------
protected onHideComplete()
{
    super.onHideComplete();
}

```


### MWindow 代码注册Tab面板实例

```
// 菜单创建
protected onMenuCreate():void
{
    // 实例化Fgui视图
    this.conent = LoginWindowUI.createInstance();
    this.contentPane = this.conent;

    // 注册Tab
    this.registerTab(LoginTabType.Login, this.conent.m_login);
    this.registerTab(LoginTabType.Register, this.conent.m_register);
    this.registerTab(LoginTabType.LoginGuest, this.conent.m_login_guest);
    this.registerTab(LoginTabType.Agreement, this.conent.m_agreement);



    super.onMenuCreate();
    // 打开某个Tab面板
    this.openTab(LoginTabType.Login);
}

```



### MWindow 调用Fgui里控制器实现切换Tab 实例
重写该方法

```
    // 打开Tab面板
    openTab(tabIndex: number | string)
    {
        if(this.conent)
        {
            this.conent.m_TabCtrl.setSelectedIndex(<number>tabIndex);
        }
        super.openTab(tabIndex);
    }
```


### Fgui 代码 API

```
// 组件代码模版, 没有用到的方法尽量删掉
export class FguiComponentTemplete extends fairygui.GComponent
{
    // 窗口
    moduleWindow: MWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {

    }

    // 窗口销毁
    onWindowDestory(): boolean
    {
        return false;
    }

    // 窗口显示
    onWindowShow(): void
    {

    }

    // 窗口隐藏
    onWindowHide(): void
    {

    }


    // 该组件所在Tab 显示
    onTabShow(): void
    {

    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }
}

```



### 获取配置

```
let menu: XXXConfig = Game.config.xxx.getConfig(id);
```

实例

```
// 获取登录界面配置
let menuConfig: MenuConfig = Game.config.menu.getConfig(MenuId.Login);
```


### 播放声音

```
// 播放背景音乐
Game.sound.playMusic(SoundKey.MM_BGM_Cinema);

// 播放音效
Game.sound.playSound(SoundKey.MM02_Popup);

// 停止背景音乐
Game.sound.stopMusic();


// 停止所有音效
Game.sound.stopAllSound();
```


### 消息对话框

```
// 浮动消息,代码里的文本
Game.system.toastText(TEXT.Hello);

// 浮动消息，MSG配置表
Game.system.toastMsg(MsgKey.xxxx);

// 浮动消息，格式化的, 格式化方式和C#一样
Game.system.toastFormatText("My Name Is {0}, age: {1}", "张三", 12);

```

其他的还有，1个按钮的对话框，2个按钮的对话框， 可以传入MsgConfig的Key或者是文本，代码中的文本必须都定义在TEXT.TS里

```
// 对话框消息,一个按钮, 简洁方法
alertText(txt: string, yesObj?: any, yesFun?: Function)
alertMsg(msgKey: TKey, yesObj?: any, yesFun?: Function)

alertMsgFormat(msgKey: TKey, msgargs: any[], yesObj?: any, yesFun?: Function)

alrtTMsgFull(msgkey: TKey,
        msgargs: any[],
        title: string = "",
        yesObj: any = null,
        yesFun: Function = null,
        yesTxt: string = null,
        buttonEnable: boolean = true,
        isClickButtonAutoClose: boolean = true)

/**
 * 对话框消息,一个按钮
 * @param txt 消息内容
 * @param title 标题
 * @param yesObj 点击yes按钮回调对象
 * @param yesFun 点击yes按钮回调函数
 * @param yesTxt yes按钮 文本
 * @param closeButtonVisiable 是否显示关闭按钮
 * @param buttonEnable 按钮是否可以点击
 * @param isClickButtonAutoClose 点击按钮后是否自动关闭
 */
alrtTextFull(txt: string,
    title: string = "",
    yesObj: any = null,
    yesFun: Function = null,
    yesTxt: string = null,
    closeButtonVisiable: boolean = true,
    buttonEnable: boolean = true,
    isClickButtonAutoClose: boolean = true)   

```


```
/**
 * 对话框消息,两个按钮
 * @param msgkey MsgConfig key
 * @param msgargs 消息参数
 * @param title 标题
 * @param caller 点击按钮回调对象
 * @param yesFun 点击yes按钮回调函数
 * @param noFun 点击no按钮回调函数
 * @param yesTxt yes按钮 文本
 * @param noTxt no按钮 文本
 * @param closeButtonVisiable 是否显示关闭按钮
 * @param isClickButtonAutoClose 点击按钮后是否自动关闭
 */
confirmMsg(msgkey: TKey,
    msgargs: any[],
    title: string = "",
    caller: any = null,
    yesFun: Function = null,
    noFun: Function = null,
    yesTxt: string = null,
    noTxt: string = null,
    closeButtonVisiable: boolean = true,
    isClickButtonAutoClose: boolean = true) 

       
/**
     * 对话框消息,两个按钮
     * @param txt 消息内容
     * @param title 标题
     * @param caller 点击按钮回调对象
     * @param yesFun 点击yes按钮回调函数
     * @param noFun 点击no按钮回调函数
     * @param yesTxt yes按钮 文本
     * @param noTxt no按钮 文本
     * @param closeButtonVisiable 是否显示关闭按钮
     * @param isClickButtonAutoClose 点击按钮后是否自动关闭
     */
    confirmText(txt: string,
        title: string = "",
        caller: any = null,
        yesFun: Function = null,
        noFun: Function = null,
        yesTxt: string = null,
        noTxt: string = null,
        closeButtonVisiable: boolean = true,
        isClickButtonAutoClose: boolean = true) 
```



### 游戏中的文本约定
* 来自配置表
* 来自UI界面
* 来自TEXT.ts

以上3中方式，可以生产多语言配置，给策划做多语言。

注意： 代码里的文本都需要定义在TEXT.ts里，不允许写在代码其他地方。