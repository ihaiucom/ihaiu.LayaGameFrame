/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  小秘书功能
    /// </summary>
    public class SecretaryData  : ShardDBObject
    {
        /// <summary>
        ///  秘书存在类型 0 未获取 1终身拥有 2暂时拥有
        /// </summary>
        public ESecretaryType secretaryType = 0;
        /// <summary>
        ///  每个操作对应的次数列表
        /// </summary>
        public List<SecretaryKeyValue> timeList = default(List<SecretaryKeyValue>);
        /// <summary>
        ///  上次更新数据时间
        /// </summary>
        public long lastTime = default(long);
        /// <summary>
        ///  申请次数 
        /// </summary>
        public int applyFrequency = default(int);
        /// <summary>
        ///  上次申请时间
        /// </summary>
        public long applyLastTime = default(long);
        /// <summary>
        ///  是否申请
        /// </summary>
        public bool isApply = default(bool);
    }
    

}

