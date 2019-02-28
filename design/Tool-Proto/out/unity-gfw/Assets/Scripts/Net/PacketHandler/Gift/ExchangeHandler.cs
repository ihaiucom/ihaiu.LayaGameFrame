// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Gift
{
    /// <summary>
    ///  礼包兑换
    /// </summary>
    [MessageHandler(URL = "Gift/Exchange")]
    public class ExchangeHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ExchangeResponse>>>();
            var arg = new CommonEventArgs<ExchangeResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ExchangeResponse>.EventId, arg);
        }   
    }
}