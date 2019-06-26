/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemToastMessageStruct from "../../Generates/GameLaunch/SystemToastMessageStruct";

import Ease = Laya.Ease;
import Tween = Laya.Tween;
import Handler = Laya.Handler;
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";


export default class SystemToastMessage extends SystemToastMessageStruct
{
    private _onCompleteHandler: Handler;

    play(txt: string, onComplete?: Handler)
    {
        if (this._onCompleteHandler)
        {
            this._onCompleteHandler.recover();
        }
        this._onCompleteHandler = onComplete;
        // if(this.m_title.div) this.m_title.div.style.lineHeight = this.height;
        this.m_title.text = txt;
        Tween.clearAll(this);
        MenuLayer.floatMsg.addChild(this);
        FguiHelper.centerScreen(this);
        this.alpha = 0;
        
        Tween.to(this, {y: this.y - 100, alpha: 1}, 500, Ease.quadInOut);
        Tween.to(this, {y: this.y - 200, alpha: 0}, 500, Ease.quadInOut, Handler.create(this, this.onComplete), 1000);
    }

    private onComplete()
    {
        this.removeFromParent();

        if (this._onCompleteHandler)
        {
            this._onCompleteHandler.runWith(this);
            this._onCompleteHandler.recover();
            this._onCompleteHandler = null;
        }
    }
}