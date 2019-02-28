// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Danmu
{
    /// <summary>
    ///  设置弹幕
    /// </summary>
    [MessageHandler(URL = "Danmu/set")]
    public class SetHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetResponse>>>();
            var arg = new CommonEventArgs<SetResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetResponse>.EventId, arg);
        }   
    }
}