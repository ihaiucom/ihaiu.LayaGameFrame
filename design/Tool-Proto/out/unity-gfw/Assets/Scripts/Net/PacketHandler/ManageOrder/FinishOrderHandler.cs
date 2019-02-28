// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageOrder
{
    /// <summary>
    ///  完成订单
    /// </summary>
    [MessageHandler(URL = "manageOrder/FinishOrder")]
    public class FinishOrderHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<FinishOrderResponse>>>();
            var arg = new CommonEventArgs<FinishOrderResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<FinishOrderResponse>.EventId, arg);
        }   
    }
}