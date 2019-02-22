import LocalStorage from "./LocalStorage";
import UserAccountInfo from "./UserAccountInfo";
import Game from "../../Game";

//======================
// 游戏本地数据缓存
//----------------------
export default class GameLocalStorage extends LocalStorage
{
    private static _Instance: GameLocalStorage;
    static get Instance(): GameLocalStorage
    {
        if (!GameLocalStorage._Instance)
        {
            GameLocalStorage._Instance = new GameLocalStorage();
        }
        return GameLocalStorage._Instance;
    }


    //======================
    // GM按钮坐标
    //----------------------
    private _gmX: number;

    get gmX(): number
    {
        if (this._gmX === undefined)
        {
            this._gmX = this.getFloat("gmX", true);
        }


        return this._gmX;
    }


    set gmX(value: number)
    {
        this._gmX = value;
        this.setFloat("gmX", value, true);
    }


    private _gmY: number;

    get gmY(): number
    {
        if (this._gmY === undefined)
        {
            if (this.hasItem("gmY", true))
            {
                this._gmY = this.getFloat("gmY", true);
            }
            else
            {
                this._gmY = 100;
            }
        }


        return this._gmY;
    }


    set gmY(value: number)
    {
        this._gmY = value;
        this.setFloat("gmY", value, true);
    }


    //======================
    // 当前字体设置
    //----------------------
    private _fontSetting: string;
    get fontSetting(): string
    {

        if (!this._fontSetting)
        {
            this._fontSetting = this.getItem("fontSetting", true);
        }
        return this._fontSetting;
    }


    set fontSetting(value: string)
    {
        this._fontSetting = value;
        this.setItem("fontSetting", value, true);
    }



    //======================
    // 服务器名称
    //----------------------
    private _serverName: string;

    get serverName(): string
    {
        if (!this._serverName)
        {
            this._serverName = this.getItem("serverName", true);
        }
        return this._serverName;
    }


    set serverName(value: string)
    {
        this._serverName = value;
        this.setItem("serverName", value, true);
    }


    //======================
    // 账号列表
    //----------------------
    private _useraccountList: UserAccountInfo[];
    get useraccountList(): UserAccountInfo[]
    {
        if (!this._useraccountList)
        {
            this._useraccountList = this.getJSON("_useraccountList", true);
        }

        if (!this._useraccountList)
        {
            this._useraccountList = [];
        }
        return this._useraccountList;
    }

    set useraccountList(value: UserAccountInfo[])
    {
        this._useraccountList = value;
        this.setJSON("_useraccountList", value, true);
    }

    addUseraccount(username: string, password: string)
    {
        let has = false;
        let list = this.useraccountList ? this.useraccountList : [];
        for (let i = 0; i < list.length; i++)
        {
            if (list[i].username == username)
            {
                list[i].password = password;
                list[i].lasttime = Game.time.localTime;
                has = true;
            }
        }

        if (!has)
        {
            list.push({ username: username, password: password, lasttime: Game.time.localTime });
        }

        list.sort((a, b) => { return b.lasttime - a.lasttime; });

        this.useraccountList = list;

    }



    //======================
    // 密码
    //----------------------
    private _password: string;

    get password(): string
    {
        if (!this._password)
        {
            this._password = this.getItem("password");
            if (this._password == null)
                this._password = "";
        }
        return this._password;
    }


    set password(value: string)
    {
        this._password = value;
        this.setItem("password", value);
    }


    //======================
    // 是否是游客账号
    //----------------------


    private _deviceId: string;

    get deviceId(): string
    {
        if (!this._deviceId)
        {
            if (window["conch"])
            {
                var deviceInfo = JSON.parse(window["conch"].config.getDeviceInfo());
                this._deviceId = deviceInfo["guid"];
                if (this._deviceId == "08:00:27:1d:38:2c")
                {
                    this._deviceId = Game.application.IDFA;
                }
            }

            if (!this._deviceId || this._deviceId == "undefined" || this._deviceId == undefined)
            {
                this._deviceId = this.getString("_deviceId", true);
                if (!this._deviceId)
                {
                    let timestamp = new Date().getTime();
                    let random = Math.random();
                    this._deviceId = timestamp.toString() + "." + random.toString();
                }
            }

        }
        return this._deviceId;
    }

    set deviceId(value: string)
    {
        this._deviceId = value;
        this.setString("_deviceId", value, true);
    }


    private _guestusername: string;

    get guestusername(): string
    {
        if (!this._guestusername)
        {
            this._guestusername = this.getString("guest", true);
        }
        return this._guestusername;
    }

    set guestusername(value: string)
    {
        this._guestusername = value;
        this.setString("guest", value, true);
        Game.sound.onLogin();
    }


    // 是否是游客账号        
    private _isGuest: boolean;

    get isGuest()
    {
        if (this._isGuest === undefined)
        {
            this._isGuest = this.getBoolean("isGuest", true);
        }
        return this._isGuest;
    }


    set isGuest(value: boolean)
    {
        this._isGuest = value;
        this.setBoolean("isGuest", value, true);
    }

    // 是否是有效的游客账号
    private _isGameGuest: boolean;
    get isGameGuest()
    {
        if (this._isGameGuest === undefined)
        {
            this._isGameGuest = this.getBoolean("isGameGuest", true);
        }
        return this._isGameGuest;
    }


    set isGameGuest(value: boolean)
    {
        this._isGameGuest = value;
        this.setBoolean("isGameGuest", value, true);
    }



    //======================
    // 是否是 通知今天不再打开
    //----------------------
    private _isNoticTodayNoOpen: boolean;

    get isNoticTodayNoOpen()
    {
        if (this._isNoticTodayNoOpen === undefined)
        {
            this._isNoticTodayNoOpen = this.getBoolean("isNoticTodayNoOpen", true);
        }
        return this._isNoticTodayNoOpen;
    }


    set isNoticTodayNoOpen(value: boolean)
    {
        this._isNoticTodayNoOpen = value;
        this.setBoolean("isNoticTodayNoOpen", value, true);
    }

    // 上次打开商店的时间
    private _lastOpenShopSpecialTime: number;
    get lastOpenShopSpecialTime()
    {
        if (this._lastOpenShopSpecialTime === undefined)
        {
            this._lastOpenShopSpecialTime = this.getFloat("lastOpenShopSpecialTime", true);
        }
        return this._lastOpenShopSpecialTime;
    }

    set lastOpenShopSpecialTime(value: number)
    {
        this._lastOpenShopSpecialTime = value;
        this.setFloat("lastOpenShopSpecialTime", value, true);
    }
    // 上次打开商店的时间
    private _lastOpenShopSingleTime: number;
    get lastOpenShopSingleTime()
    {
        if (this._lastOpenShopSingleTime === undefined)
        {
            this._lastOpenShopSingleTime = this.getFloat("lastOpenShopSingleTime", true);
        }
        return this._lastOpenShopSingleTime;
    }

    set lastOpenShopSingleTime(value: number)
    {
        this._lastOpenShopSingleTime = value;
        this.setFloat("lastOpenShopSingleTime", value, true);
    }
}