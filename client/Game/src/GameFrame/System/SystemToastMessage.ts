import Handler = laya.utils.Handler;
import SystemToastMessage from "../../FGUI/Extends/GameLaunch/SystemToastMessage";

//======================
// 浮动消息管理
//----------------------
export default class SystemToastMessag
{
    // 所有的
    private list:SystemToastMessage[] = []; 

    // 可以使用的池
    private pools:SystemToastMessage[] = []; 

    //==============================
    // 添加一个相同文本出现的时间间隔
    //------------------------------
    private lastTxt: string;
    private lastTime: number;
    private timeSpacing:number = 1;

    play(txt: string)
    {
        if(txt != this.lastTxt)
        {
            this.show(txt);
        }
        else if(getTime() - this.lastTime >= this.timeSpacing)
        {
            this.show(txt);
        }
    }

    private show(txt)
    {
        this.lastTxt = txt;
        this.lastTime = getTime();

        let item: SystemToastMessage;
        if(this.pools.length > 0)
        {
            item = this.pools.pop();
        }
        else
        {
            item = SystemToastMessage.createInstance();
            this.list.push(item);
        }

        item.play(txt, Handler.create(this, this.onItemComplete));
    }

    private onItemComplete(item: SystemToastMessage)
    {
        this.pools.push(item);
    }
}