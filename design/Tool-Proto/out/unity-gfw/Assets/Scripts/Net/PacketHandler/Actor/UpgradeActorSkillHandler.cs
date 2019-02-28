// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  艺人技能升级
    /// </summary>
    [MessageHandler(URL = "Actor/UpgradeActorSkill")]
    public class UpgradeActorSkillHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UpgradeActorSkillResponse>>>();
            var arg = new CommonEventArgs<UpgradeActorSkillResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UpgradeActorSkillResponse>.EventId, arg);
        }   
    }
}