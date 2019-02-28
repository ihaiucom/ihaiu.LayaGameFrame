// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Rank
{
    [RequestMsg(URL = "rank/GetSelfList")]
    public class GetSelfListRequest
    {
    } 

    public class GetSelfListResponse 
    {
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public SelfRankListDesc data = default(SelfRankListDesc);
    } 

    [RequestMsg(URL = "rank/GetServerRankList")]
    public class GetServerRankListRequest
    {
    } 

    public class GetServerRankListResponse 
    {
        /// <summary>
        ///  全服排名
        /// </summary>
        public int selfRank = default(int);
        /// <summary>
        ///  自己的排行榜数据
        /// </summary>
        public ServerListDesc selfData = default(ServerListDesc);
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public List<ServerListDesc> data = default(List<ServerListDesc>);
    } 

    [RequestMsg(URL = "rank/GetGroupRankList")]
    public class GetGroupRankListRequest
    {
    } 

    public class GetGroupRankListResponse 
    {
        /// <summary>
        ///  全服排名
        /// </summary>
        public int selfRank = default(int);
        /// <summary>
        ///  自己的排行榜数据
        /// </summary>
        public GroupListDesc selfData = default(GroupListDesc);
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public List<GroupListDesc> data = default(List<GroupListDesc>);
    } 

    [RequestMsg(URL = "rank/GetGroupMovieRankList")]
    public class GetGroupMovieRankListRequest
    {
    } 

    public class GetGroupMovieRankListResponse 
    {
        /// <summary>
        ///  全服排名
        /// </summary>
        public int selfRank = default(int);
        /// <summary>
        ///  自己的排行榜数据
        /// </summary>
        public GroupMovieListDesc selfData = default(GroupMovieListDesc);
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public List<GroupMovieListDesc> data = default(List<GroupMovieListDesc>);
    } 

    [RequestMsg(URL = "rank/GetMovieShortData")]
    public class GetMovieShortDataRequest
    {
        /// <summary>
        ///  电影唯一id
        /// </summary>
        public string uuid = default(string); 
    } 

    public class GetMovieShortDataResponse 
    {
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public MovieShortData data = default(MovieShortData);
    } 

    [RequestMsg(URL = "rank/GetPlayerShortData")]
    public class GetPlayerShortDataRequest
    {
        /// <summary>
        ///  id
        /// </summary>
        public int userId = default(int); 
    } 

    public class GetPlayerShortDataResponse 
    {
        /// <summary>
        ///  玩家信息
        /// </summary>
        public PlayerShortData data = default(PlayerShortData);
    } 

    [RequestMsg(URL = "rank/GetServerListReward")]
    public class GetServerListRewardRequest
    {
        /// <summary>
        ///  排行榜唯一id
        /// </summary>
        public string uuid = default(string); 
    } 

    public class GetServerListRewardResponse 
    {
        /// <summary>
        ///  奖励物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "rank/ChangeServerName")]
    public class ChangeServerNameRequest
    {
        /// <summary>
        ///  排行榜唯一id
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  服务器名称
        /// </summary>
        public string name = default(string); 
    } 

    public class ChangeServerNameResponse 
    {
    } 

    [RequestMsg(URL = "rank/GetOscarData")]
    public class GetOscarDataRequest
    {
    } 

    public class GetOscarDataResponse 
    {
    } 

    [RequestMsg(URL = "rank/GetOscarReward")]
    public class GetOscarRewardRequest
    {
        public EOscarType type = 0; 
    } 

    public class GetOscarRewardResponse 
    {
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "rank/ChoseTheater")]
    public class ChoseTheaterRequest
    {
        public int theaterId = default(int); 
    } 

    public class ChoseTheaterResponse 
    {
    } 

    [RequestMsg(URL = "rank/GetStreetReward")]
    public class GetStreetRewardRequest
    {
        /// <summary>
        ///  0 街区奖励 1 排行榜祝贺, 2 总票房排行榜祝贺
        /// </summary>
        public int type = default(int); 
    } 

    public class GetStreetRewardResponse 
    {
        public int type = default(int);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

}
