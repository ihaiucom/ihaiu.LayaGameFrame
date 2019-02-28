// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Actor
{
    /// <summary>
    ///  请求
    /// </summary>
    [RequestMsg(URL = "Actor/NoseInfoActor")]
    public class NoseInfoActorRequest
    {
        /// <summary>
        ///  是否使用星探卡，强制查探
        /// </summary>
        public bool isUseCard = default(bool); 
    } 

    public class NoseInfoActorResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "Actor/RecruitActor")]
    public class RecruitActorRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public int actorId = default(int); 
    } 

    public class RecruitActorResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  艺人ID
        /// </summary>
        public int actorId = default(int);
        /// <summary>
        ///  是否新加艺人
        /// </summary>
        public bool isNewActor = default(bool);
    } 

    [RequestMsg(URL = "Actor/HideActor")]
    public class HideActorRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  是否雪藏艺人，true雪藏，false取消雪藏
        /// </summary>
        public bool isHide = default(bool); 
    } 

    public class HideActorResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "Actor/AddActorSlot")]
    public class AddActorSlotRequest
    {
    } 

    public class AddActorSlotResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "Actor/UpgradeActor")]
    public class UpgradeActorRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string); 
    } 

    public class UpgradeActorResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "Actor/GiveActorAssets")]
    public class GiveActorAssetsRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  赠送类型
        /// </summary>
        public int giveType = default(int); 
        /// <summary>
        ///  赠送等级
        /// </summary>
        public int giveLevel = default(int); 
        /// <summary>
        ///  赠送数量
        /// </summary>
        public int giveNum = default(int); 
    } 

    public class GiveActorAssetsResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "Actor/UpgradeActorSkill")]
    public class UpgradeActorSkillRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  技能ID
        /// </summary>
        public int skillId = default(int); 
    } 

    public class UpgradeActorSkillResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "Actor/ActorTrain")]
    public class ActorTrainRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  培养类型
        /// </summary>
        public int trainType = default(int); 
        /// <summary>
        ///  使用钻石
        /// </summary>
        public bool useDiamond = default(bool); 
    } 

    public class ActorTrainResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  培养类型
        /// </summary>
        public int trainType = default(int);
        /// <summary>
        ///  属性改变列表
        /// </summary>
        public List<AttrChangeInfo> attrChangeList = default(List<AttrChangeInfo>);
    } 

    [RequestMsg(URL = "Actor/ActorChangeName")]
    public class ActorChangeNameRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  艺人名字
        /// </summary>
        public string name = default(string); 
    } 

    public class ActorChangeNameResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "Actor/ActorExerciseStart")]
    public class ActorExerciseStartRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string aId = default(string); 
        /// <summary>
        ///  训练队列id
        /// </summary>
        public string eId = default(string); 
    } 

    public class ActorExerciseStartResponse 
    {
        /// <summary>
        ///  艺人 id
        /// </summary>
        public string aId = default(string);
    } 

    [RequestMsg(URL = "Actor/ActorExerciseReward")]
    public class ActorExerciseRewardRequest
    {
        /// <summary>
        ///  训练队列id
        /// </summary>
        public string eId = default(string); 
        /// <summary>
        ///  是否使用钻石
        /// </summary>
        public bool useMoney = default(bool); 
    } 

    public class ActorExerciseRewardResponse 
    {
        /// <summary>
        ///  艺人 id
        /// </summary>
        public string aId = default(string);
        /// <summary>
        ///  队列 id
        /// </summary>
        public string eId = default(string);
    } 

    [RequestMsg(URL = "Actor/ActorExerciseAdd")]
    public class ActorExerciseAddRequest
    {
    } 

    public class ActorExerciseAddResponse 
    {
        /// <summary>
        ///  训练队列 
        /// </summary>
        public string eId = default(string);
    } 

    [RequestMsg(URL = "Actor/GiveLoyaltyCard")]
    public class GiveLoyaltyCardRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  赠送类型
        /// </summary>
        public int giveType = default(int); 
        /// <summary>
        ///  赠送忠诚卡数量
        /// </summary>
        public int num = default(int); 
    } 

    public class GiveLoyaltyCardResponse 
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  赠送类型
        /// </summary>
        public int giveType = default(int);
    } 

    [RequestMsg(URL = "Actor/AssistantUpLv")]
    public class AssistantUpLvRequest
    {
        /// <summary>
        ///  艺人uuid
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  助理id
        /// </summary>
        public int id = default(int); 
    } 

    public class AssistantUpLvResponse 
    {
        /// <summary>
        ///  艺人uuid
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  助理id
        /// </summary>
        public int id = default(int);
    } 

}
