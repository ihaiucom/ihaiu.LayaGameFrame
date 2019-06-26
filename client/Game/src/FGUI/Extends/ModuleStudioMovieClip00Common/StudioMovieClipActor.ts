/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClipActorStruct from "../../Generates/ModuleStudioMovieClip00Common/StudioMovieClipActorStruct";
import StudioMovieClip01Normal from "../ModuleStudioMovieClip01Normal/StudioMovieClip01Normal";
import StudioActorData from "../../../GameModule/DataStructs/StudioActorData";
import PlayProgressData from "../../Customs/StudioMovieClipCtrlV2/PlayProgressData";
import { ActorShowDirection } from "../../Customs/StudioMovieClipCtrlV2/ActorShowDirection";
import Random from "../../../Libs/Helpers/Random";
import SyncHellper from "../../../Libs/Helpers/SyncHelper";

export default class StudioMovieClipActor extends StudioMovieClipActorStruct
{
    private _sourceDirection: ActorShowDirection = -1;
    get sourceDirection(): ActorShowDirection
    {
        if(this._sourceDirection == -1)
        {
            if (!isNullOrEmpty(<string>this.data))
            {
                let json = JSON.parse(<string>this.data);
                if(json)
                    this._sourceDirection = json.direction;
            }
            else
            {
                this._sourceDirection = ActorShowDirection.Random;
            }
        }
        return this._sourceDirection;
    }

    private _direction: ActorShowDirection = -1;
    get direction(): ActorShowDirection
    {
        if(this._direction == -1)
        {
            this._direction = this.sourceDirection;
            if(this._direction == ActorShowDirection.Random)
            {
                this._direction = Random.rangeBoth(ActorShowDirection.Left, ActorShowDirection.Right)
            }
        }
        return this._direction;
    }

    set direction(val: ActorShowDirection )
    {
        this._direction = val;
    }




    // 拍摄动画
    studioMovieClip: StudioMovieClip01Normal;
    // 拍摄数据
    actorData: StudioActorData;

    posFrom = new Laya.Point();
    posTo = new Laya.Point();
    posToTween = new Laya.Point();

    scaleFrom = 1;
    scaleTo = 1;

    // 是否读取了原始数据
    private isReadSourceDataed: boolean = false;
    /** 读取原始数据 */
    readSourceData()
    {
        if(this.isReadSourceDataed)
            return;
        this.isReadSourceDataed = true;

        this.scaleTo = this.scaleX;
        this.scaleFrom = this.scaleX + 0.01;
        
        this.posTo.x = this.x;
        this.posTo.y = this.y;

        this.posToTween.x = this.x;
        this.posToTween.y = this.y;

        this.posFrom.y = this.posTo.y;
        switch(this.direction)
        {
            case ActorShowDirection.Left:
                this.posFrom.x -= Laya.stage.width * 1.5;
                this.posToTween.x -= 20;
                break;
            case ActorShowDirection.Right:
                this.posFrom.x += Laya.stage.width * 1.5;
                this.posToTween.x += 20;
                break;
        }
    }

    private colorFilter = new Laya.ColorFilter();
    private _colorFilters = [];
    get colorFilters()
    {
        if(this._colorFilters.length == 0)
            this._colorFilters.push(this.colorFilter);
        return this._colorFilters;
    }

    private _colorBrightness: number = 0;
    get colorBrightness()
    {
        return this._colorBrightness;
    }

    set colorBrightness(val)
    {
        this._colorBrightness = val;
        this.colorFilter.reset();
        this.colorFilter.adjustColor(val, val, 0, 0);
        this.m_icon.filters = this.colorFilters;
        window['aa'] = this;
    }





    
    

    /** 初始化 */
    init(studioMovieClip: StudioMovieClip01Normal, actorData: StudioActorData)
    {
        this.studioMovieClip = studioMovieClip;
        this.actorData = actorData;
        this.m_icon.url = actorData.bodyIconUrl;

        console.log(actorData.name ,  actorData.bodyIconUrl);


    }

    /** 播放 */
    async playIn(progressData?: PlayProgressData, isEndTween: boolean = true): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);

        Laya.Tween.clearAll(this);
        
        if(!isEndTween)
        {
            this.scaleFrom = this.scaleTo;
            this.posToTween.x = this.posTo.x;
            this.posToTween.y = this.posTo.y;
        }
        
        this.scaleX = this.scaleY = this.scaleFrom;
        this.x = this.posFrom.x;
        this.y = this.posFrom.y;
        this.colorBrightness = 0;
        this.alpha = 1;

        
        let duration: number;
        let delay: number;

        // 出现
        duration = 200;
        delay = 0;
        Laya.Tween.to(this, {x: this.posToTween.x, y: this.posToTween.y}, duration, Laya.Ease.quadOut, null, delay);

        // 闪白
        // delay += duration;
        // duration = 1;
        // Laya.Tween.to(this, {colorBrightness: 100}, 1, Laya.Ease.linearNone, null, 150);

        await SyncHellper.waitTime(200);
        this.colorBrightness = 100;

        delay = 0;
        duration = 1500;
        Laya.Tween.to(this, {colorBrightness: 0}, 1000, Laya.Ease.quadOut, null, delay);
        
        // 缓动移动
        if(isEndTween)
        {
            Laya.Tween.to(this, {   x: this.posTo.x,
                                    y: this.posTo.y,
                                    scaleX: this.scaleTo,
                                    scaleY: this.scaleTo}, 1500, Laya.Ease.quadOut, null, delay);
        }
        
        return Promise.resolve(true);
    }

    
    /** 播放 */
    async playOut(progressData?: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);

        Laya.Tween.clearAll(this);

        
        
        let duration: number = 200;
        let delay: number = 0;
        
        Laya.Tween.to(this, {  alpha: 0,
            scaleX: this.scaleTo * 1.3,
            scaleY: this.scaleTo * 1.3,
            y: this.posTo.y * 1.3,
        }, duration, Laya.Ease.quadOut, null, delay);
        
        return Promise.resolve(true);
    }

    clear()
    {
        this.m_icon.url = "";
    }


}