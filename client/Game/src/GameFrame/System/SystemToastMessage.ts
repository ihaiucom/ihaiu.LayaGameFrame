import Handler = laya.utils.Handler;

//======================
// 浮动消息管理
//----------------------
export default class SystemToastMessag
{
    // 所有的
    private list:fgui.System.SystemToastMessage[] = []; 

    // 可以使用的池
    private pools:fgui.System.SystemToastMessage[] = []; 

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

        let item: fgui.System.SystemToastMessage;
        if(this.pools.length > 0)
        {
            item = this.pools.pop();
        }
        else
        {
            item = fgui.System.SystemToastMessage.createInstance();
            this.list.push(item);
        }

        item.play(txt, Handler.create(this, this.onItemComplete));
    }

    private onItemComplete(item: fgui.System.SystemToastMessage)
    {
        this.pools.push(item);
    }
}