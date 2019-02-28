/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  经营生产
    /// </summary>
    public class ManageProduceData  : ShardDBObject
    {
        /// <summary>
        ///  生产ID
        /// </summary>
        public int produceId = default(int);
        /// <summary>
        ///  已经生产了多少个
        /// </summary>
        public int hadNum = default(int);
        /// <summary>
        ///  派遣的艺人ID
        /// </summary>
        public int actId = default(int);
        /// <summary>
        ///  生产线等级
        /// </summary>
        public int level = default(int);
        /// <summary>
        ///  生产技能列表
        /// </summary>
        public List<SkillLevel> skills = default(List<SkillLevel>);
        /// <summary>
        ///  生产倍数
        /// </summary>
        public List<int> randomNums = default(List<int>);
        /// <summary>
        ///  排队生产多少个
        /// </summary>
        public int produceNum = default(int);
        /// <summary>
        ///  开始生产时间
        /// </summary>
        public long lastTime = default(long);
        /// <summary>
        ///  领取的时候清零，方便合作任务计算生产次数
        /// </summary>
        public long hadProduceTimes = default(long);
    }
    

}

