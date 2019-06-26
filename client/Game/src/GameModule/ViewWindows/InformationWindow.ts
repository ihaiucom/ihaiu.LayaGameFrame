import MWindow from '../../GameFrame/Module/MWindow';
import Game from '../../Game';
import { MenuId } from '../MenuId';
import InformationUI from '../../FGUI/Extends/ModuleInformation/InformationUI';
export default class InformationWindow extends MWindow {
    window: InformationUI;

     /** 异步检查该模块是否可以打开 */
     static async AsyncEnableOpen(): Promise<boolean>
     {
         let result = await Game.sender.infoSender.myInformationList();
         return Promise.resolve(result);
     }

    constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiComponent(InformationUI);
    }

    protected onMenuCreate(): void {
        let windowUI = InformationUI.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;
        this.setCloseBtnEvent();
        super.onMenuCreate();
    }

    //=========================
    // 显示完成(初始化完成)
    // 可以在这里添加协议消息监听(网络、事件)
    //-------------------------
    protected onShowComplete()  {


        super.onShowComplete();
    }

    //=========================
    // 隐藏完成(销毁完成)
    // 可以在这里移除协议消息监听
    //-------------------------
    protected onHideComplete()  {


        super.onHideComplete();
    }
}