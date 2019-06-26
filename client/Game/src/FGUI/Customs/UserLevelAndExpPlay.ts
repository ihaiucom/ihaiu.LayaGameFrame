import Game from '../../Game';
import Signal from '../../Libs/signals/Signal';
import Typed2Signal from '../../Libs/signals/Typed2Signal';
import SyncHellper from '../../Libs/Helpers/SyncHelper';
import TEXT from '../../Config/Keys/TEXT';


export default class UserLevelAndExpPlay
{
    // arg(expValue, expMaxValue)
    sExp = new Typed2Signal<number, number>();
    // arg(level, isMaxLevel)
    sLevel = new Typed2Signal<number, boolean>();

    
    private _exp: number = 0;
    get exp(): number
    {
        return this._exp;
    }

    set exp(val: number)
    {
        this._exp = val;
        this.sExp.dispatch(val, this.levelExpMax);
    }
    levelExpMax: number = 0;

    lastLevel: number = 0;

    // 启动监听
    startSystemListen()
    {
        if(this.lastLevel <= 0)
            this.lastLevel = Game.user.level;

        if(this.lastLevel != Game.user.level)
        {
            this.systemPlay();
        }
        Game.net.gamerNotifyExpLevelS2C.on(this.systemPlay, this);
    }

    // 停止监听
    stopSystemListen()
    {
        Game.net.gamerNotifyExpLevelS2C.off(this.systemPlay, this);
    }

    // 延时调用
    systemPlay()
    {
        Laya.timer.once(500, this, this.playTo);
    }


    async playTo(targetLevel?: number, targetExp?: number, fromLevel?: number, fromExp?: number)
    {
        Laya.Tween.clearAll(this);
        
        (targetLevel == void 0) && (targetLevel = Game.user.level);
        (targetExp == void 0) && (targetExp = Game.user.exp);
        (fromLevel == void 0) && (fromLevel = Game.user.levelSnapshotData.level);
        (fromExp == void 0) && (fromExp = Game.user.levelSnapshotData.exp);

        this.lastLevel = targetLevel;
        this.exp = fromExp;
        this.levelExpMax = Game.user.getMaxExpByLevel(fromLevel);
        


        let duration = 1000;
        for(let level = fromLevel; level <= targetLevel; level++) 
        {
            let levelMaxExp = Game.user.getMaxExpByLevel(level);
            let expMax = level == targetLevel ? targetExp : levelMaxExp;
            this.levelExpMax = levelMaxExp;

            if(level != fromLevel)
            {
                let isLevelMax: boolean  = Game.user.getIsMaxLevel(level);
                this.sLevel.dispatch(level, isLevelMax);
                
                if(isLevelMax)
                {
                    Game.system.toastText(TEXT.LvUpMax);
                }
                else
                {
                    Game.system.toastText(TEXT.LvUpTo.format(level-1,level));
                }

                this.exp = 0;
            }

            Laya.Tween.to(this, {exp: expMax}, duration, Laya.Ease.linearNone);
            await SyncHellper.waitTime(duration);
            
        }
    }
}