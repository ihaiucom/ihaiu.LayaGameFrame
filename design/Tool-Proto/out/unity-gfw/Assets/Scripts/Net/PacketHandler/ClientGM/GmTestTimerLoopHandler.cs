// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  检测TimerLoop
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTestTimerLoop")]
    public class GmTestTimerLoopHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestTimerLoopResponse>>>();
            var arg = new CommonEventArgs<GmTestTimerLoopResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestTimerLoopResponse>.EventId, arg);
        }   
    }
}