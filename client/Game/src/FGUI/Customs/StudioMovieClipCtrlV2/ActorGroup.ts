import StudioMovieClip01Normal from "../../Extends/ModuleStudioMovieClip01Normal/StudioMovieClip01Normal";
import StudioActorData from "../../../GameModule/DataStructs/StudioActorData";
import PlayProgressData from "./PlayProgressData";
import ActorGroup6 from "../../Extends/ModuleStudioMovieClip01Normal/ActorGroup6";
import UnOrderMultiMap from "../../../Libs/Helpers/UnOrderMultiMap";
import ActorGroup5 from "../../Extends/ModuleStudioMovieClip01Normal/ActorGroup5";
import ActorGroup1 from "../../Extends/ModuleStudioMovieClip01Normal/ActorGroup1";
import ActorGroup2 from "../../Extends/ModuleStudioMovieClip01Normal/ActorGroup2";
import ActorGroup3 from "../../Extends/ModuleStudioMovieClip01Normal/ActorGroup3";
import ActorGroup4 from "../../Extends/ModuleStudioMovieClip01Normal/ActorGroup4";
import StudioMovieClipActor from "../../Extends/ModuleStudioMovieClip00Common/StudioMovieClipActor";
import { ActorShowDirection } from "./ActorShowDirection";

export default class ActorGroup
{
    private static poolViewDict = new UnOrderMultiMap<int, ActorGroup5>();
    static poolGetView(actorCount: int)
    {
        let list = this.poolViewDict.get(actorCount);
        let item: ActorGroup5;
        if(list && list.length > 0)
        {
            item = list.shift();
            return item;
        }

        
        switch(actorCount)
        {
            case 1:
                item = <any>ActorGroup1.createInstance();
                break;
            case 2:
                item = <any>ActorGroup2.createInstance();
                break;
            case 3:
                item = <any>ActorGroup3.createInstance();
                break;
            case 4:
                item = <any>ActorGroup4.createInstance();
                break;
            case 5:
                item = <any>ActorGroup5.createInstance();
                break;
        }
        item.__poolId = actorCount;
        return item;
    }

    
    /** 丢回对象池 */
    public static poolRecoverView(item: ActorGroup5)
    {
        item.removeFromParent();
        this.poolViewDict.addItem(item.__poolId, item);
    }



    // 拍摄动画
    studioMovieClip: StudioMovieClip01Normal;
    

    // 艺人数据列表
    actors: StudioActorData[];
    // 艺人数量
    count:int = 0;

    // 组视图
    groupView:ActorGroup5;
    actorIcons: StudioMovieClipActor[] = [];

    

    
    /** 设置 艺人数据列表 */
    setActors(actors: StudioActorData[])
    {
        this.actors = actors;
        this.count =actors.length;
    }

    /** 生成艺人展示和技能展示 */
    generate()
    {
        this.clear();

        this.groupView = ActorGroup.poolGetView(this.count);
        if(this.groupView)
        {
            for(let i = 0; i < this.count; i ++)
            {
                let actorView: StudioMovieClipActor =  <any> this.groupView.getChild("actor_" + i);
                if(actorView)
                {
                    actorView.readSourceData();

                   
                    actorView.init(this.studioMovieClip, this.actors[i]);
                    this.actorIcons.push(actorView);
                }
            }
        }
    }

    
    /** 清理 */
    clear()
    {
        if(this.groupView)
        {
            ActorGroup.poolRecoverView(this.groupView);
            this.groupView = null;
        }

        for(let icon of this.actorIcons)
        {
            icon.clear();
        }

        this.actorIcons.length = 0;
    }

    
    /** 播放 */
    async playIn(progressData?: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
        
        this.studioMovieClip.addViewBottom(this.groupView);
        this.groupView.setScale(0.9, 0.9);
        this.groupView.x = (this.groupView.parent.width - this.groupView.width * this.groupView.scaleX) * 0.5;
        this.groupView.y = (this.groupView.parent.height - this.groupView.height * this.groupView.scaleY) * 0.5 + 50;

        for(let i = 0; i < this.actorIcons.length; i ++)
        {  
            let item = this.actorIcons[i];
            item.playIn(progressData);
        }
        
        return new Promise<boolean>((resolve)=>
        {
            Laya.timer.once(1000, this, ()=>
            {
                return resolve(true);
            });
        });
    }

    
    /** 播放 */
    async playOut(progressData?: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);

        
        for(let i = 0; i < this.actorIcons.length; i ++)
        {  
            let item = this.actorIcons[i];
            item.playOut(progressData);
        }

        
        return new Promise<boolean>((resolve)=>
        {
            Laya.timer.once(200, this, ()=>
            {
                return resolve(true);
            });
        });
    }



}