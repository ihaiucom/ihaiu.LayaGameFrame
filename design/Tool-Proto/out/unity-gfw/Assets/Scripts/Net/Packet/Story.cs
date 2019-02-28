// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Story
{
    [RequestMsg(URL = "story/findStory")]
    public class FindStoryRequest
    {
    } 

    public class FindStoryResponse 
    {
        /// <summary>
        ///  搜罗类型 1剧本 2物品
        /// </summary>
        public int type = default(int);
        /// <summary>
        ///  物品ID 剧本ID
        /// </summary>
        public int id = default(int);
        /// <summary>
        ///  数量
        /// </summary>
        public int num = default(int);
        /// <summary>
        ///  已经搜罗次数
        /// </summary>
        public int time = default(int);
        /// <summary>
        ///  上次免费搜罗时间
        /// </summary>
        public int refreshTime = default(int);
    } 

    [RequestMsg(URL = "story/cleanFindStory")]
    public class CleanFindStoryRequest
    {
    } 

    public class CleanFindStoryResponse 
    {
        /// <summary>
        ///  0 成功 1 失败 
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  上次免费搜罗时间
        /// </summary>
        public int refreshTime = default(int);
    } 

    [RequestMsg(URL = "story/getReward")]
    public class GetRewardRequest
    {
        /// <summary>
        ///  剧本组ID
        /// </summary>
        public int storySuitId = default(int); 
    } 

    public class GetRewardResponse 
    {
        /// <summary>
        ///  剧本组ID
        /// </summary>
        public int storySuitId = default(int);
        /// <summary>
        ///  0 成功 1 失败
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "story/GetMessage")]
    public class GetMessageRequest
    {
        /// <summary>
        ///  剧本ID
        /// </summary>
        public int stroyId = default(int); 
    } 

    public class GetMessageResponse 
    {
        /// <summary>
        ///  剧本ID
        /// </summary>
        public int stroyId = default(int);
        public List<StoryMessageDesc> message = default(List<StoryMessageDesc>);
    } 

    [RequestMsg(URL = "story/SetMessage")]
    public class SetMessageRequest
    {
        /// <summary>
        ///  剧本ID
        /// </summary>
        public int stroyId = default(int); 
        /// <summary>
        ///  内容
        /// </summary>
        public string content = default(string); 
    } 

    public class SetMessageResponse 
    {
        /// <summary>
        ///  0 成功 1 失败
        /// </summary>
        public int stroyId = default(int);
    } 

}
