// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Movie
{
    [RequestMsg(URL = "movie/MakeFilm")]
    public class MakeFilmRequest
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class MakeFilmResponse 
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/SetMovieName")]
    public class SetMovieNameRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  选择的电影下标, 从0开始
        /// </summary>
        public int index = default(int); 
        /// <summary>
        ///  名字
        /// </summary>
        public string name = default(string); 
    } 

    public class SetMovieNameResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/SetActor")]
    public class SetActorRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  选择的电影下标, 从0开始
        /// </summary>
        public int index = default(int); 
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int); 
    } 

    public class SetActorResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/ConfirmSetActor")]
    public class ConfirmSetActorRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class ConfirmSetActorResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/ChoseType")]
    public class ChoseTypeRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  电影类型
        /// </summary>
        public EMovieType type = 0; 
    } 

    public class ChoseTypeResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  类型契合度
        /// </summary>
        public int storyShootType = default(int);
    } 

    [RequestMsg(URL = "movie/AcceptMediaVisit")]
    public class AcceptMediaVisitRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  媒体id
        /// </summary>
        public int mediaId = default(int); 
    } 

    public class AcceptMediaVisitResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        public int addExpection = default(int);
    } 

    [RequestMsg(URL = "movie/PublishMovie")]
    public class PublishMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  院线id
        /// </summary>
        public int theaterId = default(int); 
    } 

    public class PublishMovieResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/BattleOver")]
    public class BattleOverRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class BattleOverResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "movie/SpreadMovie")]
    public class SpreadMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class SpreadMovieResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/GetRewardMovie")]
    public class GetRewardMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class GetRewardMovieResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "movie/SwitchCity")]
    public class SwitchCityRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  城市ID
        /// </summary>
        public int cityId = default(int); 
    } 

    public class SwitchCityResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/UpdateMovieState")]
    public class UpdateMovieStateRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  当前电影状态
        /// </summary>
        public EMovieState state = 0; 
    } 

    public class UpdateMovieStateResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/GetStoryGoals")]
    public class GetStoryGoalsRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class GetStoryGoalsResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "movie/DeleteMovie")]
    public class DeleteMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class DeleteMovieResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "movie/RefreshMovieStory")]
    public class RefreshMovieStoryRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class RefreshMovieStoryResponse 
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

}
