import Skeleton = Laya.Skeleton;
import Dictionary from "../../Libs/Helpers/Dictionary";
import SkeletonPool from "./SkeletonPool";

export default class SkeletonCache
{
    /** 最多缓存数量 */
    get maxNum(): number
    {
        // 默认20
        return 20;
    }
        
    private poolDict: Dictionary<string, SkeletonPool> = new Dictionary<string, SkeletonPool>();

    /** 获取对象池 */
    private getPool(texturePath: string): SkeletonPool
    {
        return this.poolDict.getValue(texturePath);
    }
        
    /** 请求骨骼动画 */
    async requrestItemAsync(texturePath: string, skPath: string):  Promise<Skeleton>
    {
        let pool = this.getPool(texturePath);
        if (!pool)
        {
            pool = new SkeletonPool();
            pool.texturePath = texturePath;
            pool.skPath = skPath;
            this.poolDict.add(texturePath, pool);
        }

        return await pool.requrestItemAsync();
    }

    
    /** 返回骨骼动画 */
    recoverItem(texturePath: string, skeleton: Skeleton)
    {
        skeleton.stop();
        skeleton.removeSelf();
        let pool = this.getPool(texturePath);
        if (pool)
        {
            pool.recover(skeleton);
            this.tickClear();
        }
        else
        {
            skeleton.destroy();
        }
    }

    
    /**
     * 清理缓存
     */
    tickClear(isPringLog: boolean = true)
    {
        let poolCount = 0;
        let skeletonTotal = 0;
        let skeletonNoUse = 0;
        let skeletonUse = 0;

        let dict = this.poolDict.__getDict();
        for (let key in dict)
        {
            let pool = dict[key];
            skeletonTotal += pool.totalNum;
            skeletonNoUse += pool.poolNum;
            skeletonUse += pool.useNum;
            poolCount++;
        }

        let clearNum = 0;

        if (skeletonTotal > this.maxNum)
        {
            for (let key in dict)
            {
                let pool = dict[key];
                pool.clearNoUse();
                clearNum += 1;

                // if (clearNum >= 2)
                // 	break;
            }
        }


        // 打印日志	
        if (isPringLog)
        {

            console.log("===============");
            console.log(`poolCount:${poolCount}, skeletonTotal:${skeletonTotal}, skeletonNoUse:${skeletonNoUse}, skeletonUse:${skeletonUse}`);

            for (let key in dict)
            {
                let pool = dict[key];
                console.log(pool.toString());
            }
        }



    }
}