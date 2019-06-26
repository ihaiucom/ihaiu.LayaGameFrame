import AntFrame from '../AntFrame';
import AntFrameConfig from '../AntFrameConfig';
import { GamerLoginS2C } from '../Net/proto';
import { Md5 } from "../Util/md5";
import AntPlatformBase from './AntPlatformBase';
import { SdkUserInfo, SdkLoginInfo, SystemInfo } from './AntPlatformBase';
declare var wx;
declare var net;
declare var window;

export class AntPlatformWX extends AntPlatformBase
{
    public m_fnErrorCallback: any;
    constructor() {
        super(); 
        this.GetSystemInfo();
        wx.setKeepScreenOn && wx.setKeepScreenOn({
            keepScreenOn: true,
            success: function() {
                console.log("常亮设置成功！");
            }
        });
    }
 
    private async WXGetSdkAuthSetting():Promise<boolean>
    {
        return new Promise<boolean>(resolve=>{
            wx.getSetting({
                success: function(res) {
                    resolve(res.authSetting['scope.userInfo']);
                },
                fail: function() {
                    resolve(false);
                },
            })
        });
    }

    public async UserCheck(): Promise<boolean> {
        return await this.WXGetSdkAuthSetting();
    }

    private async WXGetSdkUserInfo():Promise<any>
    {
        return new Promise<any>(resolve=>{
            wx.getUserInfo({
                success:res=> {
                    resolve(res.userInfo);
                },
                fail: res=>{
                    console.log(res.errMsg);
                    resolve(null);
                }
            });
        });
    }

    public async Login(server:number = 1, roletype:number = 1): Promise<GamerLoginS2C> {
        let sdkInfo = await this.GameDoSdkAuthAsync();
        while(!sdkInfo) {
            sdkInfo = await this.GameDoSdkAuthAsync();
        }
        let loginInfo = await this.GameDoSdkLoginAsync();
        while(!loginInfo) {
            loginInfo = await this.GameDoSdkLoginAsync();
        }
        let code = this.m_stSdkLoginInfo.code;
        net.config.channel = "wechat";
        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.sdkLogin(code, "", this.m_stSdkUserInfo.nickName, roletype, server, sdkInfo.avatarUrl, function(ok, json){
                if(!ok){
                    resolve({error:45} as GamerLoginS2C);
                } else {
                    net.logic.connect()
                    let callback = function(e:GamerLoginS2C){
                        net.logic.gamerLoginS2C.off(callback);
                        resolve(e);
                    };
                    net.logic.gamerLoginS2C.on(callback);
                }
            });
        });
    }

    public async GameDoSdkAuthAsync() : Promise<SdkUserInfo> {
        let flag:boolean = await this.WXGetSdkAuthSetting();
        let info = flag ? await this.WXGetSdkUserInfo() : await this.WXCreateWXUserButton();
        if(info) {
            this.SetUserInfo(info);
            return new Promise<SdkUserInfo>(resolve=>{
                resolve(this.m_stSdkUserInfo);
            });
        } else {
            return new Promise<SdkUserInfo>(resolve=>{
                resolve(null);
            });
        }
    }

    public async GameDoSdkLoginAsync() : Promise<SdkLoginInfo>
    {
        //console.log("AntPlatform WX Game Do Sdk Login Async");
        return new Promise<SdkLoginInfo>(resolve=>{
            wx.login({
                success: res=>{
                    console.log(res);
                    this.m_stSdkLoginInfo.code = res.code;
                    resolve(this.m_stSdkLoginInfo);
                },
                fail: res=>{
                    console.log(res);
                    resolve(null);
                },
            });
        });
    }
 
    private async WXCreateWXUserButton() : Promise<any>
    {
        let button = wx.createUserInfoButton({
            type: 'text',
            lang:"zh_CN",
            text: '',
            style: {
                left: 0,
                top: 0,
                width: 2000,
                height: 2000,
                lineHeight: 40,
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        });
        button.show();
        return new Promise<any>(resolve=>{
            button.onTap(function (res) {
                    if (res.userInfo) {
                        console.log("wxLogin auth success");
                        button.hide();
                        resolve(res.userInfo);
                    } else {
                        console.error("获取用户信息失败");
                        resolve(null);
                    }
                }
            );
        });
    }

    protected SetUserInfo(info: any): any
    {
        console.error(info);
        this.m_stSdkUserInfo.language = info.language;
        this.m_stSdkUserInfo.nickName = info.nickName;
        this.m_stSdkUserInfo.avatarUrl = info.avatarUrl;
        this.m_stSdkUserInfo.gender = info.gender;
        this.m_stSdkUserInfo.country = info.country;
        this.m_stSdkUserInfo.province = info.province;
        this.m_stSdkUserInfo.city = info.city;
    }

    public GetSystemInfo(): SystemInfo
    {
        let info = wx.getSystemInfoSync();
        this.m_stSystemInfo.benchmarkLevel = info.benchmarkLevel;
        this.m_stSystemInfo.model = info.model;
        this.m_stSystemInfo.pixelRatio = info.pixelRatio;
        this.m_stSystemInfo.platform = info.platform;
        this.m_stSystemInfo.screenHeight = info.screenHeight;
        this.m_stSystemInfo.screenWidth = info.screenWidth;
        this.m_stSystemInfo.system = info.system;
        this.m_stSystemInfo.version = info.version;
        this.m_stSystemInfo.windowHeight = info.windowHeight;
        this.m_stSystemInfo.windowWidth = info.windowWidth;
        this.m_stSystemInfo.SDKVersion = info.SDKVersion;
        return this.m_stSystemInfo;
    }

    public Share(title:string, imgUrl:string, query:string): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            wx.shareAppMessage({
                title: title,
                imageUrl: imgUrl,
                query: query,
                success: function()
                {
                    console.error("share success!");
                    resolve(true);
                },
                fail: function()
                {
                    console.error("share fail!");
                    resolve(false);
                }
            });
        });
    }
 
    public GetLaunchOptions():any {
        return wx.getLaunchOptionsSync().query;
    } 
}
