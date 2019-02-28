// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  主页面新消息通知
    /// </summary>
    [MessageHandler(URL = "chat/NewMessage")]
    public class NewMessageHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<NewMessageResponse>>>();
            var arg = new CommonEventArgs<NewMessageResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<NewMessageResponse>.EventId, arg);
        }   
    }
}