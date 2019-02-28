// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageProduce
{
    /// <summary>
    ///  一键生产
    /// </summary>
    [MessageHandler(URL = "manageProduce/QuickProduce")]
    public class QuickProduceHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<QuickProduceResponse>>>();
            var arg = new CommonEventArgs<QuickProduceResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<QuickProduceResponse>.EventId, arg);
        }   
    }
}