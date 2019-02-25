export default class AppSetting
{
    // 应用宝www目录大小
    static wwwSize				= 146169628;
    // 平台名称
    static platform: string 	= "android";
    // 访问本地网页入口网址
    static url: string 			= "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/android/web/index.html";
    // 应用包名
    static appId: string 		= "com.shinezone.movie.test";
    // 是否可以版本检查
    static enableVersion: boolean 	= false;
    // 是否Debug模式
    static isDebug: boolean 		= false;
    // 机器码
	static IDFA: string;
    static IDFV: string;
    // 本地应用版本号
    static AppVersionName: string 	= "1.0.0";
    // 本地目录--文件
    static FileDir: string 			= "/data/data/com.shinezone.movie.test/files";
    // 本地目录--缓存
    static CacheDir: string 		= "/data/data/com.shinezone.movie.test/cache";
    // 本地目录--SD卡--缓存
    static ExternalCacheDir: string = "/storage/emulated/0/Android/data/com.shinezone.movie.test/cache";
    // 本地目录--SD卡--文件
    static ExternalFilesDir: string = "/storage/emulated/0/Android/data/com.shinezone.movie.test/files";
    // 本地目录--Android Obb分包目录
	static ObbDir: string 			= "/storage/emulated/0/Android/obb/com.shinezone.movie.test";
	
	// 本地网站目录
	static get wwwFileDir(): string
	{
		return AppSetting.FileDir + "/www";
	}
}