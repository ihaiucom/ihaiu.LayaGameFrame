// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Item
{
    /// <summary>
    ///  合成艺人
    /// </summary>
    [MessageHandler(URL = "item/CompoundActor")]
    public class CompoundActorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CompoundActorResponse>>>();
            var arg = new CommonEventArgs<CompoundActorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CompoundActorResponse>.EventId, arg);
        }   
    }
}