// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  刷新时间
    /// </summary>
    [MessageHandler(URL = "test/RefreshTime")]
    public class RefreshTimeHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RefreshTimeResponse>>>();
            var arg = new CommonEventArgs<RefreshTimeResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RefreshTimeResponse>.EventId, arg);
        }   
    }
}