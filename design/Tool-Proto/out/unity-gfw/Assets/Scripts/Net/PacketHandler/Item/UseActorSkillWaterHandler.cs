// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Item
{
    /// <summary>
    ///  使用艺人技能经验药水
    /// </summary>
    [MessageHandler(URL = "item/UseActorSkillWater")]
    public class UseActorSkillWaterHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UseActorSkillWaterResponse>>>();
            var arg = new CommonEventArgs<UseActorSkillWaterResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UseActorSkillWaterResponse>.EventId, arg);
        }   
    }
}