// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Story
{
    /// <summary>
    ///  获取剧本留言信息
    /// </summary>
    [MessageHandler(URL = "story/GetMessage")]
    public class GetMessageHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetMessageResponse>>>();
            var arg = new CommonEventArgs<GetMessageResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetMessageResponse>.EventId, arg);
        }   
    }
}