/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MainTaskWindowUIStruct from "../../Generates/SystemModuleTask/MainTaskWindowUIStruct";
import MainTaskWindow from "../../../GameModule/ViewWindows/MainTaskWindow";
import GameEventKey from "../../../GameEventKey";
import Game from "../../../Game";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import TEXT from "../../../Config/Keys/TEXT";
import TaskState = proto.TaskState;

export default class MainTaskWindowUI extends MainTaskWindowUIStruct
{
    moduleWindow: MainTaskWindow;
    private dialogCtrl: DialogCtrl;

    onWindowInited(): void{
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_taskView.m_btnOK.onClick( this, this.onClickButton )
        this.m_frame.m_closeBtn.onClick(this, this.back);
    }

    onWindowShow(): void{
        this.updateView();
        this.dialogCtrl.open();
        Game.event.add(GameEventKey.MainTask_state, this.updateView, this)
        Game.event.add(GameEventKey.MainTask_award, this.showToast, this)
    }

    onWindowHide(): void{

    }

    back(): void{
        this.dialogCtrl.close();
        this.moduleWindow.menuClose();
    }

    updateView(): void{
        this.m_taskView.updateView()
    }

    onClickButton(): void{
        var data = Game.moduleModel.mainTask.getData()
        if ( data.finishValue >= data.finishParam1 ){
            // 领奖
            Game.sender.mainTaskSender.getAward( data.type, data.ID );
        }else{
            // 前往
            if ( data.state == TaskState.CanAccept )
            {
                // 可接受状态需要告诉服务器开始做任务
                Game.sender.mainTaskSender.senderMainTaskState( data.type,  data.ID );
            }

            this.back();
            Game.system.toastText( "前往任务!!!" ) // todo  新手引导入口
        }
    } 

    // 领奖成功
    showToast(): void{
        Game.system.toastText( TEXT.MainTaskAward );
    }
}