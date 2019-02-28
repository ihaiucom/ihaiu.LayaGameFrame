// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Account
{
    [MessageHandler(URL = "account/refreshToken")]
    public class RefreshTokenHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RefreshTokenResponse>>>();
            var arg = new CommonEventArgs<RefreshTokenResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RefreshTokenResponse>.EventId, arg);
        }   
    }
}