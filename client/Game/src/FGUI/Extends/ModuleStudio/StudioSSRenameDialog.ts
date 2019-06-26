/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioSSRenameDialogStruct from "../../Generates/ModuleStudio/StudioSSRenameDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import StudioStoryData from "../../../GameModule/DataStructs/StudioStoryData";
import Game from '../../../Game';
import TEXT from '../../../Config/Keys/TEXT';

export default class StudioSSRenameDialog extends StudioSSRenameDialogStruct
{
    private dialogCtrl: DialogCtrl;
    private actorData: StudioStoryData;
    private randomNames: string[] = [];

    protected constructFromXML(xml: any): void{
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_panel.m_renameInput.m_randomBtn.onClick(this, this.randomBtnOnClick);
        this.m_frame.m_closeBtn.onClick(this, this.close);
    }
    
    open(actorData: StudioStoryData): Promise<string> {
        let that = this;
        this.actorData = actorData;
        this.m_panel.m_renameInput.text = this.actorData.storyConfig.storyName;
        this.m_panel.m_renameInput.m_title.input.focus = true;
        this.m_panel.m_icon.updateView(actorData);
        this.m_panel.m_title.text = actorData.storySeasonEpisode;
        this.dialogCtrl.open();
        return new Promise<string>(resolve => {
            let onclick = () => {
                let text = that.m_panel.m_renameInput.text.trim();
                if(text && text.length > 0) {
                    that.m_panel.m_confirmBtn.offClick(that, onclick);
                    resolve(text);
                    that.close();
                }else {
                    Game.system.toastText(TEXT.StudioStoryNoEmpty);
                }
            }
            that.m_panel.m_confirmBtn.onClick(that, onclick);
        });
    }


    randomBtnOnClick() {
        let name = this.m_panel.m_renameInput.text;
        name = name.length > 0 ? name : null;
        this.m_panel.m_renameInput.text = this.actorData.randomName(name);
    }

    close(): void  {
        this.dialogCtrl.close();
    }
}