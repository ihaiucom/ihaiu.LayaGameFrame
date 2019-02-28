// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.CinemaBuild
{
    /// <summary>
    ///  金币兑换
    /// </summary>
    [MessageHandler(URL = "CinemaBuild/goldExchange")]
    public class GoldExchangeHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GoldExchangeResponse>>>();
            var arg = new CommonEventArgs<GoldExchangeResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GoldExchangeResponse>.EventId, arg);
        }   
    }
}