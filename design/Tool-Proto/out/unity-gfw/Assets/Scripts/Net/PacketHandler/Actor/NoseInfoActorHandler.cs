// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  查探艺人
    /// </summary>
    [MessageHandler(URL = "Actor/NoseInfoActor")]
    public class NoseInfoActorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<NoseInfoActorResponse>>>();
            var arg = new CommonEventArgs<NoseInfoActorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<NoseInfoActorResponse>.EventId, arg);
        }   
    }
}