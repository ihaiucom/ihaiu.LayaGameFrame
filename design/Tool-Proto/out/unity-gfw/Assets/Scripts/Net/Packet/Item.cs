// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Item
{
    [RequestMsg(URL = "item/SellOut")]
    public class SellOutRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class SellOutResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "item/Compound")]
    public class CompoundRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class CompoundResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "item/Split")]
    public class SplitRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class SplitResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "item/Use")]
    public class UseRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class UseResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "item/UsePiecesGiftBag")]
    public class UsePiecesGiftBagRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int); 
        /// <summary>
        ///  选择的物品ID
        /// </summary>
        public int selItemId = default(int); 
    } 

    public class UsePiecesGiftBagResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "item/CompoundActor")]
    public class CompoundActorRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
    } 

    public class CompoundActorResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int);
        /// <summary>
        ///  获得的物品列表
        /// </summary>
        public List<ItemDesc> items = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "item/UseActorSkillWater")]
    public class UseActorSkillWaterRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int); 
        /// <summary>
        ///  数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class UseActorSkillWaterResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

}
