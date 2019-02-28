// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  解除屏蔽
    /// </summary>
    [MessageHandler(URL = "chat/ReleaseShield")]
    public class ReleaseShieldHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ReleaseShieldResponse>>>();
            var arg = new CommonEventArgs<ReleaseShieldResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ReleaseShieldResponse>.EventId, arg);
        }   
    }
}