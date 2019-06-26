import TookHandler from "./TookHandler";
import Dictionary from "../Libs/Helpers/Dictionary";
import Assembly from "../Libs/Assembly";
import { AssemblyNamespace } from "../Libs/AssemblyNamespace";
import { ClassType } from "../Libs/ECS/Interfaces";
import Game from "../Game";
import MenuValidateOpening from "../GameModule/MenuValidateOpening";
import MenuValidateUnlock from "../GameModule/MenuValidateUnlock";
import TookIncludes from "./TookIncludes";
import FixedTimeTookHandler from "./FixedTimeTookHandler";

//====================
// 订阅管理器
//--------------------
export default class TookManager
{
    private static TookClassUid = 1;
    dict: Dictionary<string, TookHandler> = new Dictionary<string, TookHandler>();

    list: TookHandler[] = [];
    private count = 0;

    private isInsalled = false;
    /**
     * 初始化
     */
    install()
    {
        if(this.isInsalled)
            return;

        this.isInsalled = true;

        TookIncludes.install();

        let clasList = Assembly.get(AssemblyNamespace.TookHandlers);
        if(clasList)
        {
            for(let classType of clasList)
            {
                this.registerSystem(classType);
            }
        }
    }

    /** 注册任务 */
    registerSystem(classType: ClassType)
    {
        
        let tag = classType.tag || classType.name || classType["__tookClassUid"];
        if(!tag || !this.dict.hasKey(tag))
        {
            tag = classType["__tookClassUid"] = TookManager.TookClassUid ++;
        }

        let handler = new classType();

        if(handler instanceof TookHandler)
        {
            handler.init();
            this.dict.add(tag, handler);
            this.list.push(handler);
			this.count = this.list.length;
        }
    }

    fixedReseTimestamp()
    {
        for(let hander of this.list)
        {
            if(hander instanceof FixedTimeTookHandler)
            {
                for(let item of hander.fixedTimeList)
                {
                    item.reseTimestamp();
                }
            }
        }
        
    }






    /**
     * 启动
     */
    start()
    {
        this.install();
        this.stop();
        Laya.timer.loop(1000, this, this.onTick);
    }

    /**
     * 停止
     */
    stop()
    {
        Laya.timer.clear(this, this.onTick)
    }

    /**
     * 刷新
     */
    private onTick()
    {
        this.serverMilliseconds = Game.time.serverMilliseconds;
        for (let i = 0; i < this.count; i++)
        {
            let took = this.list[i];
            if (this.validate(took))
            {
                took.exe();
                took.__onExe();
            }
        }
    }

    
    private serverMilliseconds: number = 0;
    // 验证是否可以发送
    validate(took: TookHandler): boolean
    {
        if (!Game.user.isLoginAndGetUserData)
        {
            return false;
        }

        let result = true;


        // 验证功能是否开发
        if (result && took.menuId > 0)
            result = <boolean>MenuValidateOpening.getInstance().validate(took.menuId);

        // 验证功能是否解锁
        if (result && took.menuId > 0)
            result = <boolean>MenuValidateUnlock.getInstance().validate(took.menuId);


        // 验证是否在条件面板
        if (result && took.preconditionMenuIds && took.preconditionMenuIds.length > 0)
        {
            result = false;
            for (let itemId of took.preconditionMenuIds)
            {
                if (Game.menu.isOpened(itemId))
                {
                    result = true;
                    break;
                }
            }
        }

        if (result)
            result = took.validate(this.serverMilliseconds);

        return result;
    }
}