/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class ActorSkillEffect  : ShardDBObject
    {
        /// <summary>
        ///  获得金币速度
        /// </summary>
        public float getGoldSpeed = default(float);
        /// <summary>
        ///  生产线收益
        /// </summary>
        public float productionEarnings = default(float);
        /// <summary>
        ///  演员片酬
        /// </summary>
        public List<skillEffectInfo> actorPaycheck = default(List<skillEffectInfo>);
        /// <summary>
        ///  收益票房
        /// </summary>
        public List<skillEffectInfo> boxOfficeEarnings = default(List<skillEffectInfo>);
        /// <summary>
        ///  城市获取金币时间
        /// </summary>
        public float cityGetGoldTime = default(float);
        /// <summary>
        ///  升级金币消耗
        /// </summary>
        public List<skillEffectInfo> upgradeGoldCost = default(List<skillEffectInfo>);
        /// <summary>
        ///  拍摄时全属性增加
        /// </summary>
        public List<skillEffectInfo> shootTotalAttrIncrease = default(List<skillEffectInfo>);
    }
    

}

