/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuideWindowUIStruct from "../../Generates/SystemModuleGuide/GuideWindowUIStruct";
import GuideWindow from "../../../GameModule/ViewWindows/GuideWindow";
import GuideStepAction from "../../../SystemGuide/Actions/GuideStepAction";
import { GuideViewType } from "../../../SystemGuide/Views/GuideMenuConfig";
import GuideViewManager from "../../../SystemGuide/Views/GuideViewManager";
import Game from "../../../Game";

export default class GuideWindowUI extends GuideWindowUIStruct
{
    moduleWindow: GuideWindow;
    guideNode: Array<any>;
    step: GuideStepAction;

    onWindowInited(): void{
        
    }

    onWindowShow(): void{
        this.updateView( Game.guide.view.step );
    }

    onWindowHide(): void{

    }

    close(): void{
        this.moduleWindow.menuClose();
    }

    updateView( step: GuideStepAction ): void{
        this.step = step;
        let highlight_type = step.guideStepConfig.data.highlight_type;
        this.m_showView.selectedIndex = highlight_type;
        
        switch (highlight_type){
            case GuideViewType.Plot: // 剧情对话
                this.m_plotView.updateView( step );
                break;
            case GuideViewType.Guide_buide:
                break;
            case GuideViewType.Guide_UI:
                break;
            case GuideViewType.Guide_popUp:
                break;
            case GuideViewType.Wait: // 等待处理, 不可操作
                break;
        }
    }

    removeAllGuideNode( step: GuideStepAction ): void{
        for ( let node of this.guideNode ){
            node.removeFromParent();
        }
        this.guideNode = null;
        this.guideNode = [];
    }
}