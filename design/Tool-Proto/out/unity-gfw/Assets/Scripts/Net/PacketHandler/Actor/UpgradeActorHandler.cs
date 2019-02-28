// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  艺人升级
    /// </summary>
    [MessageHandler(URL = "Actor/UpgradeActor")]
    public class UpgradeActorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UpgradeActorResponse>>>();
            var arg = new CommonEventArgs<UpgradeActorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UpgradeActorResponse>.EventId, arg);
        }   
    }
}