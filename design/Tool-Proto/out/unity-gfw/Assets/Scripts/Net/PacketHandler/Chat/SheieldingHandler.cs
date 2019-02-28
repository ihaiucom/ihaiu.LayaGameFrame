// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  屏蔽玩家
    /// </summary>
    [MessageHandler(URL = "chat/Sheielding")]
    public class SheieldingHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SheieldingResponse>>>();
            var arg = new CommonEventArgs<SheieldingResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SheieldingResponse>.EventId, arg);
        }   
    }
}