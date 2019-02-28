// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageProduce
{
    /// <summary>
    ///  解锁
    /// </summary>
    [MessageHandler(URL = "manageProduce/Deblocking")]
    public class DeblockingHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<DeblockingResponse>>>();
            var arg = new CommonEventArgs<DeblockingResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<DeblockingResponse>.EventId, arg);
        }   
    }
}