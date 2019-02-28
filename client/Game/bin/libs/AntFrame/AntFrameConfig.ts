declare var net;
export default class AntFrameConfig
{

    public static FIRST_SCENE: string = "test"; //第一个场景

    // Game
    public static GAME_WIDTH: number = 1334;         // 客户端宽度
    public static GAME_HEIGHT: number = 750;   // 客户端高度
    public static GROUP_ID: number = 0;

  
    public static readonly WXAppID: string = "wxedab64fed19eb5b4"; //微信的小程序ID
    //public static SHARE_IMG_URL: string = "https://thkdev.123u.com/game/wechatgame/"; //分享图片的url
    public static SHARE_IMG_URL: string = "https://thkdev.123u.com/game/makemore/"; //分享图片的url

    //public static GO_URL: string = "https://h5-makemore2-ready.123u.com";
    //public static GO_URL:string = "http://192.168.1.3:5000";
    //public static GO_URL:string = "https://www.magiclvzs.club:5000";
    public static GO_URL:string = "http://192.168.2.80:5000";

 
    public static shouldShowGuide: boolean = true;

    public static get json(): any
    {
        return this._netConfig;
    }

    private static _netConfig: any;
    public static async GetNetConfig(): Promise<any>
    {
        if(AntFrameConfig._netConfig && AntFrameConfig._netConfig.error == 0){
            return new Promise<any>(resolve=>{
                resolve(AntFrameConfig._netConfig);
            });
        }
        return new Promise<any>(resolve=>{
            net.auth.config((ok,j)=>{
                AntFrameConfig._netConfig = j;
                resolve(AntFrameConfig._netConfig);
            })
        });
    }

    public static async GetErrorStr(code: number | string): Promise<string>
    {
        if(AntFrameConfig._netConfig)
        {
            return new Promise<string>(resolve =>
            {
                resolve(AntFrameConfig._netConfig.errstr[code.toString()]);
            });
        }

        await AntFrameConfig.GetNetConfig();
        return new Promise<string>(resolve =>
        {
            resolve(AntFrameConfig._netConfig.errstr[code.toString()]);
        });
    }
}