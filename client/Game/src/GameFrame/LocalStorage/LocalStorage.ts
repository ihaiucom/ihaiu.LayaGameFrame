import Game from "../../Game";

//======================
// 游戏本地数据缓存
//----------------------
export default class LocalStorage
{


    private _username: string;

    get username(): string
    {
        if (!this._username)
        {
            this._username = this.getString("username", true);
        }
        return this._username;
    }

    set username(value: string)
    {
        this._username = value;
        this.setString("username", value, true);
        Game.sound.onLogin();
    }

    private getKey(key: string, isGobal: boolean = false)
    {
        if (isGobal)
        {
            return key;
        }
        else
        {
            return this.username + "_" + key;
        }
    }

    // string
    setItem(key: string, value: string, isGobal: boolean = false): void
    {
        Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
    }

    getItem(key: string, isGobal: boolean = false): string
    {
        return Laya.LocalStorage.getItem(this.getKey(key, isGobal));
    }


    // string
    setString(key: string, value: string, isGobal: boolean = false): void
    {
        Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
    }

    getString(key: string, isGobal: boolean = false): string
    {
        let val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
        if (val === undefined || val === null)
        {
            val = "";
        }
        return val;
    }


    // boolean
    setBoolean(key: string, value: boolean, isGobal: boolean = false): void
    {
        Laya.LocalStorage.setItem(this.getKey(key, isGobal), value ? "true" : "false");
    }

    getBoolean(key: string, isGobal: boolean = false): boolean
    {
        return Laya.LocalStorage.getItem(this.getKey(key, isGobal)) == "true";
    }


    // int
    setInt(key: string, value: number, isGobal: boolean = false): void
    {
        Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
    }

    getInt(key: string, isGobal: boolean = false): number
    {
        let val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
        if (val)
        {
            return parseInt(val);
        }
        return 0;
    }


    // float
    setFloat(key: string, value: number, isGobal: boolean = false): void
    {
        Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
    }

    getFloat(key: string, isGobal: boolean = false): number
    {
        let val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
        if (val)
        {
            return parseFloat(val);
        }
        return 0;
    }




    setJSON(key: string, value: any, isGobal: boolean = false): void
    {
        Laya.LocalStorage.setJSON(this.getKey(key, isGobal), value);
    }

    getJSON(key: string, isGobal: boolean = false): any
    {
        return Laya.LocalStorage.getJSON(this.getKey(key, isGobal));
    }


    removeItem(key: string, isGobal: boolean = false): void
    {
        return Laya.LocalStorage.removeItem(this.getKey(key, isGobal));
    }


    hasItem(key: string, isGobal: boolean = false): boolean
    {
        return !isNullOrEmpty(Laya.LocalStorage.getItem(this.getKey(key, isGobal)));
    }


    clear()
    {
        return Laya.LocalStorage.clear();
    }


}