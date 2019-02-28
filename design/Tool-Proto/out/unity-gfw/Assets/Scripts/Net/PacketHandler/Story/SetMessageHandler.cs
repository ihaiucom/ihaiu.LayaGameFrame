// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Story
{
    /// <summary>
    ///  剧本留言
    /// </summary>
    [MessageHandler(URL = "story/SetMessage")]
    public class SetMessageHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetMessageResponse>>>();
            var arg = new CommonEventArgs<SetMessageResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetMessageResponse>.EventId, arg);
        }   
    }
}