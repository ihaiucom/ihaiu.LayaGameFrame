// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  雪藏艺人
    /// </summary>
    [MessageHandler(URL = "Actor/HideActor")]
    public class HideActorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<HideActorResponse>>>();
            var arg = new CommonEventArgs<HideActorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<HideActorResponse>.EventId, arg);
        }   
    }
}