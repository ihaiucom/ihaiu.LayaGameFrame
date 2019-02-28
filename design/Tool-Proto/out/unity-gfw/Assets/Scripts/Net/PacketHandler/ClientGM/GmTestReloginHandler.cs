// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  重新登录
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTestRelogin")]
    public class GmTestReloginHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestReloginResponse>>>();
            var arg = new CommonEventArgs<GmTestReloginResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestReloginResponse>.EventId, arg);
        }   
    }
}