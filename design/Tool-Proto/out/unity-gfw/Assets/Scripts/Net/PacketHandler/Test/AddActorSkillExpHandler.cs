// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  添加艺人技能经验
    /// </summary>
    [MessageHandler(URL = "test/AddActorSkillExp")]
    public class AddActorSkillExpHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AddActorSkillExpResponse>>>();
            var arg = new CommonEventArgs<AddActorSkillExpResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AddActorSkillExpResponse>.EventId, arg);
        }   
    }
}