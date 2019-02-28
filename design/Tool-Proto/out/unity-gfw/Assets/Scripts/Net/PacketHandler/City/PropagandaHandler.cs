// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.City
{
    /// <summary>
    ///  宣传
    /// </summary>
    [MessageHandler(URL = "city/Propaganda")]
    public class PropagandaHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<PropagandaResponse>>>();
            var arg = new CommonEventArgs<PropagandaResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<PropagandaResponse>.EventId, arg);
        }   
    }
}