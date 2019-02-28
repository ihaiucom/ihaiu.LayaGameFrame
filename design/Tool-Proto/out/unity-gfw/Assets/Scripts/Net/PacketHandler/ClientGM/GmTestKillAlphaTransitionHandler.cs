// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-13 19:56:07,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  停止透明的fgui动效
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTestKillAlphaTransition")]
    public class GmTestKillAlphaTransitionHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestKillAlphaTransitionResponse>>>();
            var arg = new CommonEventArgs<GmTestKillAlphaTransitionResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestKillAlphaTransitionResponse>.EventId, arg);
        }   
    }
}