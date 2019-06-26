

export default class ImageNumText<T>
{
    list:fairygui.GList;
    itemClass: any;
    init(list: fairygui.GList,itemClass:any = null)
    {

        this.list = list;
        this.itemClass = itemClass;
        if(itemClass)
        {
            list.itemProvider = Laya.Handler.create(this, this.GetListItemResource, null, false);
        }
        
		list.setVirtual();
        list.setVirtualAndLoop();
        
		list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
    }

    private _text: string;
    set text(val: string)
    {
        if(this._text == val)
            return;

        if(!val)
            val = "";

        this._text = val;
        this.refresh();
    }

    get text():string
    {
        return this._text;
    }

    private _num: number = 0;

    get num(): number
    {
        return this._num;
    }

    set num(val: number)
    {
        this._num = val;
        this.text = val.toString();
    }

    refresh()
    {
        this.list.numItems = this._text.length;
    }

    
	renderListItem(index: number, item: any)
	{
        let char: string = this.text[index];
        let i = item.m_num.getPageIndexById(char);
        item.m_num.selectedIndex = i;
    }
    
    GetListItemResource()
    {
        return this.itemClass.URL;
    }
}