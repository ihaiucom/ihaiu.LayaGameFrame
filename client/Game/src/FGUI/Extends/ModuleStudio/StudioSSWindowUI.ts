/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioSSWindowUIStruct from "../../Generates/ModuleStudio/StudioSSWindowUIStruct";
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';
import Game from '../../../Game';
import StudioSSItem from './StudioSSItem';
import TEXT from '../../../Config/Keys/TEXT';
import Res from "../../../Config/Keys/Res";
import R from "../../../Config/Keys/R";
import FguiHelper from '../../../Libs/Helpers/FguiHelper';
import MouseClickLimit from '../../../Libs/Helpers/MouseClickLimit';
import GameSkeleton from "../../../Home/SkeletonCaches/GameSkeleton";

export default class StudioSSWindowUI extends StudioSSWindowUIStruct {

    npcSkeleton: Laya.Skeleton;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
        // this.m_frame.m_icon.url = Res.getBgUrl(R.bg.Studio);
        // this.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        // this.m_list.itemProvider = Laya.Handler.create(this, this.itemProvider, null, false);

        this.installAsync();
    }

    async installAsync()
    {
        // 获取UI骨骼动画
        this.npcSkeleton = await Game.asset.uiSkeletonRequrestItemAsynByName(R.spineUI.StudioNpc);
        if(this.npcSkeleton)
        {
            this.npcSkeleton.x = 180;
            this.npcSkeleton.y = 480;
            this.displayListContainer.addChildAt(this.npcSkeleton, 2);
            this.npcSkeleton.play(0, true);
        }
    }



    // 窗口销毁
    onWindowDestory(): boolean  {
        // let handlers =
        //     [
        //         this.m_list.itemRenderer,
        //         this.m_list.itemProvider

        //     ];

        // for (let handler of handlers)  {
        //     if (handler)  {
        //         handler.clear();
        //         handler.recover();
        //     }
        // }
        // handlers.length = 0;

        // 返回UI骨骼动画
        if(this.npcSkeleton)
            Game.asset.uiSkeletonRecoverItem(this.npcSkeleton);

        return false;
    }



    // 窗口显示
    onWindowShow(): void  {
        this.m_closeBtn.onClick(this, this.closeModuleWindow);
        // this.m_nextBtn.onClick(this, this.nextBtnOnClick);
        MouseClickLimit.onClick(this.m_nextBtn, this, this.nextBtnOnClick);
        this.updateView();

        if(this.npcSkeleton)
        {
            this.npcSkeleton.play(0, true);
        }
    }

    // 窗口隐藏
    onWindowHide(): void  {
        this.m_closeBtn.offClick(this, this.closeModuleWindow);
        // this.m_nextBtn.offClick(this, this.nextBtnOnClick);
        MouseClickLimit.offClick(this.m_nextBtn, this, this.nextBtnOnClick);
        
        if(this.npcSkeleton)
        {
            this.npcSkeleton.stop();
        }
    }

    


    public get selectedIndex(): number {
        return this.m_list.selectedIndex;
    }

    public get dataList(): StudioStoryData[] {
        return Game.moduleModel.studio.storys;
    }

    updateView() {
        this.m_info.updateView();
        let len = this.dataList.length;
        // this.m_list.scrollPane.touchEffect = len > 3;
        this.m_list.updateView(this.dataList);
    }

    /** 选择剧本 */
    async nextBtnOnClick() {
        if (-1 == this.selectedIndex) {
            Game.system.toastText(TEXT.StudioSelectStoryTip);
            return;
        }
        //改名
        let story = this.dataList[this.selectedIndex];
        let storyName = story.name;
        if (!(story.episode > 1 || story.season > 1)) {
            storyName = await Game.system.selectStoryRenameDialog(story);
        }
        /** 选择剧本 */
        let success = await Game.sender.studio.storySelect(story.storyId, storyName);

    }

    closeModuleWindow() {
        this["moduleWindow"].window.menuClose();
    }

}