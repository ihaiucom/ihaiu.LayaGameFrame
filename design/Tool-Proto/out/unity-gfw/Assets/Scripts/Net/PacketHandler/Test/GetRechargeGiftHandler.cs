// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  领取充值礼包
    /// </summary>
    [MessageHandler(URL = "test/GetRechargeGift")]
    public class GetRechargeGiftHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetRechargeGiftResponse>>>();
            var arg = new CommonEventArgs<GetRechargeGiftResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetRechargeGiftResponse>.EventId, arg);
        }   
    }
}