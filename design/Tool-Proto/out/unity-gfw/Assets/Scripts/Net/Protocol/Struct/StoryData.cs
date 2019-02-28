/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class StoryData  : ShardDBObject
    {
        /// <summary>
        ///  剧本id
        /// </summary>
        public int storyId = default(int);
        /// <summary>
        ///  每个剧本所要达成的目标列表
        /// </summary>
        public List<StoryProgress> storyProgressInfo = default(List<StoryProgress>);
        /// <summary>
        ///  状态
        /// </summary>
        public int status = default(int);
        /// <summary>
        ///  进度
        /// </summary>
        public int progress = default(int);
        /// <summary>
        ///  最高票房
        /// </summary>
        public long maxScore = default(long);
        /// <summary>
        ///  上次拍摄时间
        /// </summary>
        public long shootLastTime = default(long);
    }
    

}

