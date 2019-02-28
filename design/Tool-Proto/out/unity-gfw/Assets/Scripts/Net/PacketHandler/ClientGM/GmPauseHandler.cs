// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-15 19:19:36,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  暂停游戏
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmPause")]
    public class GmPauseHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmPauseResponse>>>();
            var arg = new CommonEventArgs<GmPauseResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmPauseResponse>.EventId, arg);
        }   
    }
}