import GuideStepAction from "../Actions/GuideStepAction";
import { MenuId } from "../../GameModule/MenuId";
import GuideWindow from "../../GameModule/ViewWindows/GuideWindow";
import Game from "../../Game";
import MenuWindows from "../../GameModule/MenuWindows";
import { GuideViewType } from "./GuideMenuConfig";
import GuideWindowUI from "../../FGUI/Extends/SystemModuleGuide/GuideWindowUI";
import GuideGroupAction from "../Actions/GuideGroupAction";
import GuideUIHelper from "./GuideUIHelper";
import GuideAperture from "../../FGUI/Extends/SystemModuleGuide/GuideAperture";
import GuideFinger from "../../FGUI/Extends/SystemModuleGuide/GuideFinger";
import GuideMask from "../../FGUI/Extends/SystemModuleGuide/GuideMask";

export default class GuideViewManager
{
    /**单条引导 */
    step: GuideStepAction;

    /**引导界面 */
    guideWindowUI: GuideWindowUI;

    /**引导界面开启标记 */
    viewIsOpen: boolean = false;

    /** 引导光圈 */
    guideAperture:GuideAperture;

    /**引导手指 */
    guideFinger: GuideFinger;

    /** 引导遮罩 */
    guideMask: GuideMask;

    /**
     * 初始化
     */
    install()
    {
        this.guideAperture = GuideAperture.createInstance();
        this.guideFinger = GuideFinger.createInstance();
        this.guideMask = GuideMask.createInstance();
    }

    // 设置引导界面
    public onStepEnter(step: GuideStepAction)
    {
        this.step = step;
        if ( step.guideStepConfig.isPlot ) // 剧情对话
        {
            // 隐藏引导相关的
            this.guideAperture.visible = false;
            this.guideFinger.visible = false;
            this.guideMask.visible = false;

            if (!this.viewIsOpen){
                Game.menu.open( MenuId.Guide );
                this.viewIsOpen = true
            }else{
                if ( !this.guideWindowUI )
                {
                    let window = GuideUIHelper.getWindow( MenuId.Guide );
                    if(!window) return null;
                    let contentPane = window.contentPane;
                    if(!contentPane) return null;
                    if(contentPane instanceof GuideWindowUI) this.guideWindowUI = contentPane;
                }
                this.guideWindowUI.updateView( step );
            }
        }
        else
        {
            // 引导
            // 关闭剧情相关
            this.onCloseGuideWindowUI();
            // 显示引导相关的
            this.guideAperture.visible = true;
            this.guideFinger.visible = true;
            this.guideMask.visible = true;


        }
    }

    // 一步引导结束
    public onStepEnd(step: GuideStepAction)
    {
        // 一步引导结束，删除上一步添加的节点
        if ( this.guideWindowUI ){
            this.guideWindowUI.removeAllGuideNode( step );
        }
    }

    public onGroupEnd( group: GuideGroupAction ){
        this.onCloseGuideWindowUI()
    }

    public onCloseGuideWindowUI(){
        this.viewIsOpen = false;
        if ( this.guideWindowUI ){
            this.guideWindowUI.close();
            this.guideWindowUI = null;
        }
    }

    // 回收引导相关duixiang
    public onRemoveGuideUI(){

    }

    public onStepBreakoff(step: GuideStepAction)
    {

    }
}