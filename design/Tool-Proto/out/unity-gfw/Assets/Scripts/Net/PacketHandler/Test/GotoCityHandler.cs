// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///   一键占领城市
    /// </summary>
    [MessageHandler(URL = "test/GotoCity")]
    public class GotoCityHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GotoCityResponse>>>();
            var arg = new CommonEventArgs<GotoCityResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GotoCityResponse>.EventId, arg);
        }   
    }
}