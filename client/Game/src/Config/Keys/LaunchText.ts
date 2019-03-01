// ===========================
// 代码文本--启动游戏加载界面时用，这时还没有加载配置代码。
// 处理框架可以使用
// 其他模块不准在这里添加，可以到TEXT.TS里添加
// ---------------------------
export default class LaunchText
{
    // 进度条提示
    tips = 
    [
		"正在炸爆米花...",
		"正在驱赶放映泥棒...",
		"正在张贴海报...",
		"正在DIY特制3D眼镜...",
		"影院的负责人是个天才!"
    ];

    btnYes = "确定";

    LoadedConfig = "加载配置文件";
    LoadedUI = "加载UI";
    LoadedEnd = "加载完成";



    //==============================================
    // 英文
    //----------------------------------------------
    
    public setLangForEn()
    {
        this.tips = 
        [
            "Hiring actors...",
            "Filming movies...",
            "Popping popcorn...",
            "Selling tickets...",
            "Owner of this cinema is a genius!"
        ];
        
        this.btnYes = "Ok";
        
        this.LoadedConfig = "Loading Config...";
        this.LoadedUI = "Loading UI...";
        this.LoadedEnd = "Loading Complete";
    }
}