/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class CityData  : ShardDBObject
    {
        /// <summary>
        ///  最后一个城市
        /// </summary>
        public int lastCity = default(int);
        /// <summary>
        ///  总部城市
        /// </summary>
        public int headquarters = default(int);
        /// <summary>
        ///  形象大使
        /// </summary>
        public List<int> ambassador = default(List<int>);
        /// <summary>
        ///  金币上限
        /// </summary>
        public long maxGold = default(long);
        /// <summary>
        ///  粉丝上限
        /// </summary>
        public long maxFans = default(long);
        /// <summary>
        ///  金币掉落速度
        /// </summary>
        public long speedGold = default(long);
        /// <summary>
        ///  粉丝掉落速度
        /// </summary>
        public long speedFans = default(long);
        /// <summary>
        ///  上次更新掉落的金币
        /// </summary>
        public long lastGold = default(long);
        /// <summary>
        ///  上次更新掉落的粉丝
        /// </summary>
        public long lastFans = default(long);
        /// <summary>
        ///  上次更新掉落的时间戳
        /// </summary>
        public long lastDropTimestamp = default(long);
        /// <summary>
        ///  上次结算时间
        /// </summary>
        public long lastTime = default(long);
        /// <summary>
        ///  掉落列表
        /// </summary>
        public List<ItemDesc> dropList = default(List<ItemDesc>);
        /// <summary>
        ///  当前宣传的地区
        /// </summary>
        public int lastArea = default(int);
        /// <summary>
        ///  当前宣传进度
        /// </summary>
        public int lastAreaProgress = default(int);
        /// <summary>
        ///  宣传大使
        /// </summary>
        public int propagandaActor = default(int);
        /// <summary>
        ///  路演成功标记
        /// </summary>
        public bool roadShowFlag = default(bool);
    }
    

}

