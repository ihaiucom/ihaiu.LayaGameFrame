// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  完成订单 
    /// </summary>
    [MessageHandler(URL = "test/PutOrderItems")]
    public class PutOrderItemsHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<PutOrderItemsResponse>>>();
            var arg = new CommonEventArgs<PutOrderItemsResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<PutOrderItemsResponse>.EventId, arg);
        }   
    }
}