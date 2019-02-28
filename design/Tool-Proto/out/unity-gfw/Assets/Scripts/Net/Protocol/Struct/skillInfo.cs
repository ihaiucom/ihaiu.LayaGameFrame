/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class skillInfo 
    {
        /// <summary>
        ///  技能ID
        /// </summary>
        public int skillId = default(int);
        /// <summary>
        ///  是否生效
        /// </summary>
        public bool isEffect = default(bool);
        /// <summary>
        ///  触发技能的条件,多个条件，有一个满足就生效
        /// </summary>
        public List<skillTriggerCondition> triggerCondition = default(List<skillTriggerCondition>);
    }
    

}

