// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  拉取消息
    /// </summary>
    [MessageHandler(URL = "chat/PullMessage")]
    public class PullMessageHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<PullMessageResponse>>>();
            var arg = new CommonEventArgs<PullMessageResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<PullMessageResponse>.EventId, arg);
        }   
    }
}