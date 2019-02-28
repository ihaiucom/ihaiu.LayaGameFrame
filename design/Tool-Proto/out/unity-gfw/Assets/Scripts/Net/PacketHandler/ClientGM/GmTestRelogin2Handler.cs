// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  重新登录2
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTestRelogin2")]
    public class GmTestRelogin2Handler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestRelogin2Response>>>();
            var arg = new CommonEventArgs<GmTestRelogin2Response>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestRelogin2Response>.EventId, arg);
        }   
    }
}