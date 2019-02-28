// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageOrder
{
    /// <summary>
    ///  订单过期处理
    /// </summary>
    [MessageHandler(URL = "manageOrder/DealOrder")]
    public class DealOrderHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<DealOrderResponse>>>();
            var arg = new CommonEventArgs<DealOrderResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<DealOrderResponse>.EventId, arg);
        }   
    }
}