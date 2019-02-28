// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  将所有剧本设置为金本
    /// </summary>
    [MessageHandler(URL = "test/setAllStoryGold")]
    public class SetAllStoryGoldHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetAllStoryGoldResponse>>>();
            var arg = new CommonEventArgs<SetAllStoryGoldResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetAllStoryGoldResponse>.EventId, arg);
        }   
    }
}