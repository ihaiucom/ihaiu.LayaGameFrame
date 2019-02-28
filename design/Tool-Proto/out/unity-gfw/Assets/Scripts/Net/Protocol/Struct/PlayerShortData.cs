/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class PlayerShortData 
    {
        /// <summary>
        ///  id
        /// </summary>
        public int userId = default(int);
        /// <summary>
        ///  头像id
        /// </summary>
        public int portrait = default(int);
        /// <summary>
        ///  性别
        /// </summary>
        public EUserSex sex = 0;
        /// <summary>
        ///  名字
        /// </summary>
        public string name = default(string);
        /// <summary>
        ///  等级
        /// </summary>
        public int level = default(int);
        /// <summary>
        ///  街区等级
        /// </summary>
        public int blockLevel = default(int);
        /// <summary>
        ///  个性签名
        /// </summary>
        public string perSignature = default(string);
        /// <summary>
        ///  时长占领
        /// </summary>
        public int city = default(int);
        /// <summary>
        ///  艺人数量
        /// </summary>
        public int numActor = default(int);
        /// <summary>
        ///  建筑层数
        /// </summary>
        public int numBuilding = default(int);
        /// <summary>
        ///  票房评价对应次数
        /// </summary>
        public List<int> boxOfficeEvaluation = default(List<int>);
        /// <summary>
        ///  每日票房最佳 uuid
        /// </summary>
        public string dailyBestMovie = default(string);
        /// <summary>
        ///  票房前三
        /// </summary>
        public List<BestMovieDesc> bestMovie = default(List<BestMovieDesc>);
    }
    

}

