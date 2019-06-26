
/**
 * 版本配置
 */
export default interface VersionConfig
{
	// 
	id: number;
	// 平台类型: (Android、iOs、WX)
	Platform: string;
	// 应用报名: blog.ihaiu.com
	ApplicationId: string;
	// 远程资源URL根目录： http://res.ihaiu.com/game/
	ResWeb: string;
	// 应用版本： 1.0.0.0
	AppVersion: string;
	// 资源版本： 1.0.0.0
	ResVersion: string;
	// 分包资源版本:  1.0.0.0
	PartialVersion: string;
	// 分包资源目录: partial_v1_00_00_00
	PartialFolder: string;
	// 补丁版本: 1.0.0.1
	PatchVersion: string;
	// 补丁资源目录: patch_v1_00_00_01
	PatchFolder: string;
	// 是否弹对话框--下载分包资源时
	IsPartialAlert: boolean;
	// 是否弹对话框--下载补丁资源时
	IsPatchAlert: boolean;
	// 是否弹对话框--错误
	IsErrorAlert?: boolean;
	// 应用更新--下载网址
	AppDownloadWeb: string;
	// 应用更新--名称
	AppDownloadName: string;
	// 应用更新--下载方式
	AppDownloadType: number;
	// 是否显示GM按钮
	VisiableGM: boolean;


}