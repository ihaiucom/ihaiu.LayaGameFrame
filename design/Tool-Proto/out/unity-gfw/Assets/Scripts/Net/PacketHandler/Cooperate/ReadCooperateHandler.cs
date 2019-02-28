// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Cooperate
{
    /// <summary>
    ///  查看合作信息
    /// </summary>
    [MessageHandler(URL = "cooperate/ReadCooperate")]
    public class ReadCooperateHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ReadCooperateResponse>>>();
            var arg = new CommonEventArgs<ReadCooperateResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ReadCooperateResponse>.EventId, arg);
        }   
    }
}