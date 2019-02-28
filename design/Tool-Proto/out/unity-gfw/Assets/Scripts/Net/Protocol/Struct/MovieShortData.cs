/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class MovieShortData 
    {
        /// <summary>
        ///  id
        /// </summary>
        public int userId = default(int);
        /// <summary>
        ///  电影唯一id(MovieData.uuid)
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  电影id
        /// </summary>
        public int movieId = default(int);
        /// <summary>
        ///  电影名字
        /// </summary>
        public string name = default(string);
        /// <summary>
        ///  艺人选择 / 剧本选择
        /// </summary>
        public List<ActorShortDesc> data = default(List<ActorShortDesc>);
        /// <summary>
        ///  拍摄类型
        /// </summary>
        public int type = default(int);
        /// <summary>
        ///  票房
        /// </summary>
        public long totalBoxOffice = default(long);
        /// <summary>
        ///  票房等级评价
        /// </summary>
        public int boxOfficeEvaluation = default(int);
        /// <summary>
        ///  平均媒体评价
        /// </summary>
        public int mediaCommend = default(int);
        /// <summary>
        ///  观众口碑
        /// </summary>
        public int publicPraise = default(int);
    }
    

}

