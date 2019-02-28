// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  发送信息
    /// </summary>
    [MessageHandler(URL = "chat/SendMessage")]
    public class SendMessageHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SendMessageResponse>>>();
            var arg = new CommonEventArgs<SendMessageResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SendMessageResponse>.EventId, arg);
        }   
    }
}