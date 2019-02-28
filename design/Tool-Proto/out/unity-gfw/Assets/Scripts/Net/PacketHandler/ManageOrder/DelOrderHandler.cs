// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageOrder
{
    /// <summary>
    ///  销毁订单
    /// </summary>
    [MessageHandler(URL = "manageOrder/DelOrder")]
    public class DelOrderHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<DelOrderResponse>>>();
            var arg = new CommonEventArgs<DelOrderResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<DelOrderResponse>.EventId, arg);
        }   
    }
}