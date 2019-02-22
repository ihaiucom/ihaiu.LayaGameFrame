
export default class TypedSignal<T>
{

    private _listeners: Array<TypedSignalHandler<T>> = [];

    add(listener: (T) => void, self: any)
    {
        if (!this.hasListener(listener, self))
        {
            this._listeners.push(new TypedSignalHandler(listener, self));
        }
    }

    addOnce(listener: (T) => void, self: any)
    {
        if (!this.hasListener(listener, self))
        {
            this._listeners.push(new TypedSignalHandler(listener, self, true));
        }
    }

    private hasListener(listener: (T) => void, self: any): boolean
    {
        for (var i = 0; i < this._listeners.length; i++)
        {
            if (this._listeners[i].equals(listener, self))
            {
                return true;
            }
        }
        return false;
    }

    remove(listener: (T) => void, self: any)
    {
        for (var i = 0; i < this._listeners.length; i++)
        {
            if (this._listeners[i].equals(listener, self))
            {
                this._listeners.splice(i, 1);
                break;
            }
        }
    }

    removeAll()
    {
        this._listeners.length = 0;
    }

    dispatch(value: T)
    {
        this._listeners.forEach(handler => handler.apply(value));

        this._listeners = this._listeners.filter(
            (handler, i, arr) => { return !handler.once() });
    }
}

class TypedSignalHandler<T> {

    private _handler: (T) => void;
    private _self: any;
    private _once: boolean;

    constructor(handler: (T) => void, self: any, once = false)
    {
        this._handler = handler;
        this._self = self;
        this._once = once;
    }

    apply(arg: T)
    {
        this._handler.apply(this._self, [arg]);
    }

    equals(handler: (T) => void, self: any): boolean
    {
        return this._handler == handler && this._self == self;
    }

    once(): boolean
    {
        return this._once;
    }
}
