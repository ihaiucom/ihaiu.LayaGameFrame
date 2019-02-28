// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Item
{
    /// <summary>
    ///  道具拆分
    /// </summary>
    [MessageHandler(URL = "item/Split")]
    public class SplitHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SplitResponse>>>();
            var arg = new CommonEventArgs<SplitResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SplitResponse>.EventId, arg);
        }   
    }
}