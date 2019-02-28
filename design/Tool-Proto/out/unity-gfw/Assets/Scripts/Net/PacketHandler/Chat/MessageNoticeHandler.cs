// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  新消息通知
    /// </summary>
    [MessageHandler(URL = "chat/MessageNotice")]
    public class MessageNoticeHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<MessageNoticeResponse>>>();
            var arg = new CommonEventArgs<MessageNoticeResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<MessageNoticeResponse>.EventId, arg);
        }   
    }
}