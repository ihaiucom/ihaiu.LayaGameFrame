/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationUIStruct from "../../Generates/ModuleInformation/InformationUIStruct";
import Game from '../../../Game';
import { MenuId } from "../../../GameModule/MenuId";
import InformationModel from "../../../GameModule/DataModels/InformationModel";
import MouseClickLimit from '../../../Libs/Helpers/MouseClickLimit';
import IntelligencePaseType = proto.IntelligencePaseType;
import InformationParseData from "../../../GameModule/DataStructs/InformationParseData";

export default class InformationUI extends InformationUIStruct
{

    /**情报model */
    get informationModel(): InformationModel
    {
        return Game.moduleModel.information;
    }
    
     // 窗口初始化完毕
     onWindowInited(): void
     {
     }

    // 窗口显示
    onWindowShow(): void
    {
        this.informationModel.sCellChange.add(this.onCellChange, this);
        this.m_closeBtn.onClick(this, this.onClose);
        MouseClickLimit.onClick(this.m_nextBtn, this,this.analyzeBtnOnClick);
        MouseClickLimit.onClick(this.m_myInfoBtn,this, this.showMyInfoView);
        this.m_myInfoView.m_bg.onClick(this, this.showMainView);
        this.m_tabbarCtrl.on(fairygui.Events.STATE_CHANGED, this, this.onTabBarClick);

        this.m_parse.m_nextBtn.onClick(this, this.clearParseView);
        this.updateView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.informationModel.sCellChange.remove(this.onCellChange, this);
        this.m_closeBtn.offClick(this, this.onClose);
        MouseClickLimit.offClick(this.m_nextBtn, this,this.analyzeBtnOnClick);
        MouseClickLimit.offClick(this.m_myInfoBtn,this, this.showMyInfoView);
        this.m_myInfoView.m_bg.offClick(this, this.showMainView);
        this.m_tabbarCtrl.off(fairygui.Events.STATE_CHANGED, this, this.onTabBarClick);

        this.m_parse.m_nextBtn.offClick(this, this.clearParseView);
    }

    showMainView()
    {
        this.m_showView.setSelectedPage("main");
        this.m_normalPanel.refreshSelectPanel();
        this.m_specialPanel.refreshSelectPanel();
    }
    
    showMyInfoView()
    {
        this.m_showView.setSelectedPage("myinfo");
        this.m_myInfoView.onShow();
    }

    updateView()
    {
        this.clear();
        this.m_tabbarCtrl.setSelectedIndex(0);
        this.m_normalPanel.updateView();
        this.m_specialPanel.updateView();
    }

    onTabBarClick()
    {
        console.log("onTabBarClick");
        let page = this.m_tabbarCtrl.selectedPage;
        if("special" == page)
        {
            this.m_isEnough.setSelectedPage("no");
            this.m_nextBtn.grayed = true;
        }
        else
        {
            if(!this.informationModel.canAnalyze())
            {
                this.m_isEnough.setSelectedPage("no");
                this.m_nextBtn.grayed = true;
            }
            else
            {
                this.m_isEnough.setSelectedPage("yes");
                this.m_nextBtn.grayed = false;
                this.m_chanceLb.text = this.informationModel.getChanceTxt();
            }
        }
    }

    onCellChange(type: IntelligencePaseType, chance: number)
    {
        if(this.informationModel.canAnalyze(type))
        {
            this.m_isEnough.setSelectedPage("yes");
            this.m_chanceLb.text = this.informationModel.getChanceTxt(type);
            this.m_nextBtn.grayed = false;
        }
        else
        {
            this.m_isEnough.setSelectedPage("no");
            this.m_nextBtn.grayed = true;
    }
    }
    /** 解析情报 */
    async analyzeBtnOnClick()
    {
        if(Game.moduleModel.information.isTest)
        {
            this.m_showView.setSelectedPage("parse");
            let parseData = new InformationParseData([],0);
            this.m_parse.setData(parseData);
            return;
        }
        let page = this.m_tabbarCtrl.selectedPage;
        let type = IntelligencePaseType.IntelligencePaseType_Normal;
        let analyseIds = [];
        if("special" == page)
        {
            type = IntelligencePaseType.IntelligencePaseType_Special;
            analyseIds = this.informationModel.selectedSpecialId;
        }
        else
        {
            analyseIds = this.informationModel.selectedNormalIds;
        }
        let canAnalyze = this.informationModel.canAnalyze(type);
        if(!canAnalyze)
            {
                Game.system.toastText(this.informationModel.notEnoughToast(type));
                return;
            }
            else
            {
                this.informationModel.parseData = new InformationParseData(analyseIds, type);
                let result = await Game.sender.infoSender.analyzeInformation(analyseIds, type);
                if(result)
                {
                    this.m_showView.setSelectedPage("parse");
                    this.m_parse.setData(this.informationModel.parseData);
                }
            }
    }

    clearParseView()
    {
        this.m_parse.clear();
        this.clear();
        this.m_showView.setSelectedPage("main");
    }

    onClose()
    {
        Game.menu.close(MenuId.Information);
    }

    clear()
    {
        this.m_isEnough.setSelectedPage("no");
        this.m_nextBtn.grayed = true;
        this.m_tabbarCtrl.setSelectedIndex(0);
        this.m_normalPanel.clear();
        this.m_specialPanel.clear();
    }
}