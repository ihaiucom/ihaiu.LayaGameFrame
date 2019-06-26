import TypedSignal from '../signals/TypedSignal';
export interface UIVirtualListItem
{
    sClick: TypedSignal<UIVirtualListItem>;
    setSelect(isSelected: boolean);
    addOnClickEvent();
    removeOnClickEvent();
}

export default class UIVirtualList<T extends UIVirtualListItem>
{
    
    sSelected= new TypedSignal<T>();
    list: T[] = [];
    private _selectedItem: T;

    get selectedItem()
    {
        return this._selectedItem;
    }

    set selectedItem(val: T)
    {
        if(this._selectedItem == val)
            return;

        if(this._selectedItem)
        {
            this._selectedItem.setSelect(false);
        }
        this._selectedItem = val;
        
        if(this._selectedItem)
        {
            this._selectedItem.setSelect(true);
            this.sSelected.dispatch(this._selectedItem);
        }
    }

    setList(list: T[])
    {
        this.clear();

        for(let item of list)
        {
            this.add(item);
        }
    }

    add(item: T)
    {
        item.addOnClickEvent();
        this.list.push(item);
        item.sClick.add(this.onClickItem, this);
    }

    remove(item: T)
    {
        item.removeOnClickEvent();
        item.sClick.remove(this.onClickItem, this);
        arrayRemoveItem(this.list, item);
    }

    clear()
    {
        while(this.list.length > 0)
        {
            this.remove(this.list[0]);
        }

        this.selectedItem = null;
    }

    onClickItem(item: T)
    {
        this.selectedItem = item;
    }
}