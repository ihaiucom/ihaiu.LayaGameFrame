import { CursorType } from "./CursorType";
import Event = Laya.Event;
import MenuLayer from "../Menu/MenuLayer";
import Res from "../../Config/Keys/Res";
import R from "../../Config/Keys/R";
export default class CursorManager
{
    icon: fairygui.GLoader = new fairygui.GLoader();
    offsetX: number = 0;
    offsetY: number = 0;

    show(type: CursorType = CursorType.Handler, x: number= 0, y: number = 0, offsetX: number = 0, offsetY: number = 0)
    {
        this.offsetX = offsetX;
        this.offsetY  = offsetY;
        this.icon.x = x + this.offsetX;
        this.icon.y = y + this.offsetY;

        switch(type)
        {
            case CursorType.Handler:
                this.icon.url = Res.getSpritePathHasExt(R.cursor.CursorHandler);

                break;
        }


        Laya.stage.on(Event.MOUSE_DOWN, this, this.onMouse);
        Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouse);

        MenuLayer.root.addChild(this.icon);
    }

    hide()
    {
        this.icon.removeFromParent();

        Laya.stage.off(Event.MOUSE_DOWN, this, this.onMouse);
        Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouse);
    }

    onMouse(e: Event)
    {
        this.icon.x = e.stageX + this.offsetX;
        this.icon.y = e.stageY + this.offsetY;
    }
}