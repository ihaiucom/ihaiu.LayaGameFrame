// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.SevenAddUp
{
    /// <summary>
    ///  跨天触发
    /// </summary>
    [MessageHandler(URL = "sevenAddUp/Touch")]
    public class TouchHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<TouchResponse>>>();
            var arg = new CommonEventArgs<TouchResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<TouchResponse>.EventId, arg);
        }   
    }
}