// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  各个频道消息
    /// </summary>
    [MessageHandler(URL = "chat/AllMessage")]
    public class AllMessageHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AllMessageResponse>>>();
            var arg = new CommonEventArgs<AllMessageResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AllMessageResponse>.EventId, arg);
        }   
    }
}