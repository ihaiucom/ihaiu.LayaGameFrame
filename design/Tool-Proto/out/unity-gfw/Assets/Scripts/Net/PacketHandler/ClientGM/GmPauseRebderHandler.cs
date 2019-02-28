// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-15 19:19:36,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  暂停游戏渲染
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmPauseRebder")]
    public class GmPauseRebderHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmPauseRebderResponse>>>();
            var arg = new CommonEventArgs<GmPauseRebderResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmPauseRebderResponse>.EventId, arg);
        }   
    }
}