/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorRenameDialogStruct from "../../Generates/SystemModuleDialog/ActorRenameDialogStruct";
import DialogCtrl from '../../../GameFrame/Module/DialogCtrl';
import ActorData from '../../../GameModule/DataStructs/ActorData';
import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import GlobalKey from '../../../Config/Keys/GlobalKey';

export default class ActorRenameDialog extends ActorRenameDialogStruct
{
    private dialogCtrl: DialogCtrl;
    private actorData: ActorData;
    private randomNames: string[] = [];
    
    protected constructFromXML(xml: any): void{
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_okBtn.onClick(this,this.RenameBtnOnClick);
        this.m_noCostBtn.onClick(this, this.RenameBtnOnClick);
        this.m_randomBtn.onClick(this, this.RandomNameOnClick);
        this.m_background.onClick(this, this.close);
        this.m_title.text = TEXT.RenameTitle;
        let max = Game.config.global.getConfig(GlobalKey.rename_prompt_max).value;
        let min = Game.config.global.getConfig(GlobalKey.rename_prompt_min).value;
        
        this.m_renameInput.m_title.promptText = TEXT.RenameInputPlaceholder.format(min,max);
    }

    //弹窗显示
    open(actorData: ActorData): void {
        this.m_renameInput.text = "";
        this.m_renameInput.m_title.input.focus = true;
        this.actorData = actorData;
        this.randomNames = Game.config.gameRandomName.getConfig(this.actorData.config.randomNameId).names;
        this.m_icon.icon = actorData.bodyIcon;
        this.dialogCtrl.open();
    }
    
    close(): void  {
        this.dialogCtrl.close();
    }

    RandomNameOnClick() {
        this.m_renameInput.text = this.GetRandomName();
    }

    private GetRandomName(): string {
        let name = this.randomNames[Math.floor(Math.random()*this.randomNames.length)];
        if(this.m_renameInput.text == name) 
            name = this.GetRandomName();
        return name;
    }

    async RenameBtnOnClick() {
        let name = this.m_renameInput.text;
        if(!name || name == "") {
            Game.system.toastText(TEXT.ErrorNameEmpty);
            return;
        }
        let success = await Game.sender.actor.rename(this.actorData.id, name);
        if(true == success) {
            let actor = Game.moduleModel.actor.dict.getValue(this.actorData.id);
            console.log("----------acotr name: ",actor.name,Game.moduleModel.actor.dict.getValue(this.actorData.id).name);
            this.actorData.name = name;
            console.log("----------acotr name: ",actor.name,Game.moduleModel.actor.dict.getValue(this.actorData.id).name);            
        }
        this.close();
    }
}