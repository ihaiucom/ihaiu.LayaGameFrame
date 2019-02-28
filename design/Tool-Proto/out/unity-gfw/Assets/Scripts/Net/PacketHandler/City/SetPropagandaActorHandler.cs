// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.City
{
    /// <summary>
    ///  设置宣传大使
    /// </summary>
    [MessageHandler(URL = "city/SetPropagandaActor")]
    public class SetPropagandaActorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetPropagandaActorResponse>>>();
            var arg = new CommonEventArgs<SetPropagandaActorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetPropagandaActorResponse>.EventId, arg);
        }   
    }
}