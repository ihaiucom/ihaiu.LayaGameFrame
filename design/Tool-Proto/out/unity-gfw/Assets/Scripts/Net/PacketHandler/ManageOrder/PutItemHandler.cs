// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageOrder
{
    /// <summary>
    ///  放入物品
    /// </summary>
    [MessageHandler(URL = "manageOrder/PutItem")]
    public class PutItemHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<PutItemResponse>>>();
            var arg = new CommonEventArgs<PutItemResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<PutItemResponse>.EventId, arg);
        }   
    }
}