/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMButtonStruct from "../../Generates/GameLaunch/GMButtonStruct";
import Game from "../../../Game";
import GM from "../../../GM/GM";

export default class GMButton extends GMButtonStruct
{
    private isDraging = false;
    protected constructFromXML(xml: any): void 
    {
        super.constructFromXML(xml);
        this.onClick(this, this.onClickButton);
        this.on(fairygui.Events.DRAG_MOVE, this, this.onDragMove);
        this.on(fairygui.Events.DRAG_END, this, this.onDragEnd);

        this.x = Game.localStorage.gmX;
        this.y = Game.localStorage.gmY;
    }



    onDragMove()
    {
        this.isDraging = true;
    }

    onDragEnd()
    {
        setTimeout(() =>
        {
            this.isDraging = false;
        }, 100);

        Game.localStorage.gmX = this.x;
        Game.localStorage.gmY = this.y;

    }

    onClickButton()
    {
        if (!this.isDraging)
        {
            GM.visiable = !GM.visiable;
        }
    }
}