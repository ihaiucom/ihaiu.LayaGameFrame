// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  测试
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTest")]
    public class GmTestHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestResponse>>>();
            var arg = new CommonEventArgs<GmTestResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestResponse>.EventId, arg);
        }   
    }
}