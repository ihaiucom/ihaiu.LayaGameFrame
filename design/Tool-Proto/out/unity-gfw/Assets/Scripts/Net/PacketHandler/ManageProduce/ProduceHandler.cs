// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageProduce
{
    /// <summary>
    ///  生产
    /// </summary>
    [MessageHandler(URL = "manageProduce/Produce")]
    public class ProduceHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ProduceResponse>>>();
            var arg = new CommonEventArgs<ProduceResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ProduceResponse>.EventId, arg);
        }   
    }
}