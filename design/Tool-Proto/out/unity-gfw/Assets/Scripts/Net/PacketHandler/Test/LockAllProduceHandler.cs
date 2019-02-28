// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  一键解锁所有生产线 未加解锁限制判断 并且加了10000钻石以及 10000 生产图纸
    /// </summary>
    [MessageHandler(URL = "test/LockAllProduce")]
    public class LockAllProduceHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<LockAllProduceResponse>>>();
            var arg = new CommonEventArgs<LockAllProduceResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<LockAllProduceResponse>.EventId, arg);
        }   
    }
}