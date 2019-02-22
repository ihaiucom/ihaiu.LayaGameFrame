import TypedSignal from "./TypedSignal";

export default class Bindable<T> {

    private _changeWatcher: TypedSignal<T> = new TypedSignal<T>();

    private _value: T;

    constructor(value: T = null)
    {
        this._value = value;
    }

    get value(): T
    {
        return this._value;
    }

    set value(value: T)
    {
        this.setValue(value);
    }

    add(listener: (T) => void, self: any)
    {
        this._changeWatcher.add(listener, self);
    }

    remove(listener: (T) => void, self: any)
    {
        this._changeWatcher.remove(listener, self);
    }

    removeAll()
    {
        this._changeWatcher.removeAll();
    }

    bindTo(target: Bindable<T>)
    {
        this.value = target.value;
        target.add(t => this.setValue(t), this);
    }

    unbind(target: Bindable<T>)
    {
        target.remove(t => this.setValue(t), this);
    }

    private setValue(value: T)
    {
        if (value != this._value)
        {
            this._value = value;
            this._changeWatcher.dispatch(value);
        }
    }
}
