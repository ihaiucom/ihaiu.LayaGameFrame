/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class ActorData  : ShardDBObject
    {
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int);
        /// <summary>
        ///  艺人名字
        /// </summary>
        public string name = default(string);
        /// <summary>
        ///  是否雪藏
        /// </summary>
        public bool hide = default(bool);
        /// <summary>
        ///  等级
        /// </summary>
        public int level = default(int);
        /// <summary>
        ///  等级进度
        /// </summary>
        public long levelExp = default(long);
        /// <summary>
        ///  片酬
        /// </summary>
        public long payCheck = default(long);
        /// <summary>
        ///  体力
        /// </summary>
        public int stamina = default(int);
        /// <summary>
        ///  体力上限
        /// </summary>
        public int staminaLimit = default(int);
        /// <summary>
        ///  忠诚度经验
        /// </summary>
        public int LoyaltyExp = default(int);
        /// <summary>
        ///  忠诚度等级
        /// </summary>
        public int LoyaltyLevel = default(int);
        /// <summary>
        ///  培养次数
        /// </summary>
        public int cultivateCount = default(int);
        /// <summary>
        ///  培养次数上限
        /// </summary>
        public int cultivateCountLimit = default(int);
        /// <summary>
        ///  赠送资产次数
        /// </summary>
        public int giveAssetsCount = default(int);
        /// <summary>
        ///  赠送资产次数上限
        /// </summary>
        public int giveAssetsCountLimit = default(int);
        /// <summary>
        ///  赠送资产列表
        /// </summary>
        public List<Assets> giveAssetsList = default(List<Assets>);
        /// <summary>
        ///  技能经验
        /// </summary>
        public int skillExp = default(int);
        /// <summary>
        ///  技能信息列表
        /// </summary>
        public List<skillInfo> skillList = default(List<skillInfo>);
        /// <summary>
        ///  拍摄类型熟练度
        /// </summary>
        public List<shootInfo> shootTypeList = default(List<shootInfo>);
        /// <summary>
        ///  场面属性
        /// </summary>
        public int spectacle = default(int);
        /// <summary>
        ///  表演属性
        /// </summary>
        public int perform = default(int);
        /// <summary>
        ///  剧情属性
        /// </summary>
        public int plot = default(int);
        /// <summary>
        ///  艺术属性
        /// </summary>
        public int art = default(int);
        /// <summary>
        ///  参与拍摄票房影响力总和
        /// </summary>
        public long boxOfficeCount = default(long);
        /// <summary>
        ///  获取奖杯数量
        /// </summary>
        public int cupCount = default(int);
        /// <summary>
        ///  拍摄电影次数
        /// </summary>
        public int movieCount = default(int);
        /// <summary>
        ///  娱乐属性
        /// </summary>
        public int entertainment = default(int);
        /// <summary>
        ///  生产线id
        /// </summary>
        public int produceId = default(int);
        /// <summary>
        ///  助理信息
        /// </summary>
        public List<AssistantInfo> assistantInfos = default(List<AssistantInfo>);
    }
    

}

