// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  设置占领城市前状态
    /// </summary>
    [MessageHandler(URL = "test/GotoCityBefore")]
    public class GotoCityBeforeHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GotoCityBeforeResponse>>>();
            var arg = new CommonEventArgs<GotoCityBeforeResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GotoCityBeforeResponse>.EventId, arg);
        }   
    }
}